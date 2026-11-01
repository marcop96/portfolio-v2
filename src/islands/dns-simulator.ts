import {
  resolve,
  defaultOptions,
  listLabels,
  type BlockingMode,
  type ListId,
  type Options,
} from "../lib/dns";

const root = document.querySelector<HTMLElement>("[data-dns-instrument]");
const readout = root?.querySelector<HTMLInputElement>("[data-dns-input]");
const input = root?.querySelector<HTMLInputElement>("#dns-host");
const verdict = root?.querySelector<HTMLElement>("[data-dns-verdict]");
const ruleOut = root?.querySelector<HTMLElement>("[data-dns-rule]");
const listOut = root?.querySelector<HTMLElement>("[data-dns-list]");
const answerOut = root?.querySelector<HTMLElement>("[data-dns-answer]");
const modeSelect = root?.querySelector<HTMLSelectElement>("[data-dns-mode]");
const upstreamSelect =
  root?.querySelector<HTMLSelectElement>("[data-dns-upstream]");
const listSwitches = root?.querySelectorAll<HTMLInputElement>("[data-dns-list]");
const subdomainSwitch = root?.querySelector<HTMLInputElement>(
  "[data-dns-subdomains]",
);

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (
  root &&
  input &&
  verdict &&
  ruleOut &&
  listOut &&
  answerOut &&
  modeSelect &&
  upstreamSelect &&
  listSwitches &&
  subdomainSwitch
) {
  const options: Options = {
    ...defaultOptions,
    lists: { ...defaultOptions.lists },
  };
  void readout;

  const readOptions = () => {
    listSwitches.forEach((sw) => {
      const id = sw.dataset.dnsList as ListId;
      options.lists[id] = sw.checked;
    });
    options.subdomains = subdomainSwitch.checked;
    options.mode = modeSelect.value as BlockingMode;
    options.upstream = upstreamSelect.value;
  };

  let swapTimer: number | undefined;

  const render = () => {
    readOptions();
    const result = resolve(input.value, options);

    ruleOut.textContent = result.rule?.regex ?? "–";
    listOut.textContent = result.rule ? listLabels[result.rule.list] : "–";
    answerOut.textContent = result.answer;

    verdict.dataset.state = result.blocked ? "blocked" : "allowed";
    const label = result.blocked ? "Blocked" : "Allowed";

    if (verdict.textContent === label) return;

    window.clearTimeout(swapTimer);
    if (reduceMotion()) {
      verdict.textContent = label;
      return;
    }

    verdict.classList.add("is-swapping");
    swapTimer = window.setTimeout(() => {
      verdict.textContent = label;
      verdict.classList.remove("is-swapping");
    }, 140);
  };

  input.addEventListener("input", render);
  listSwitches.forEach((sw) => sw.addEventListener("change", render));
  subdomainSwitch.addEventListener("change", render);
  modeSelect.addEventListener("change", render);
  upstreamSelect.addEventListener("change", render);

  render();
}
