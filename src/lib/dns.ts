/**
 * A small, honest sample of the regex rules Marco's Pi-hole actually runs.
 * A subset, cut down so the page stays light.
 */

export type ListId = "ads" | "malware" | "social";

export type Rule = { list: ListId; regex: string };

export const listLabels: Record<ListId, string> = {
  ads: "Ads & tracking",
  malware: "Malware & phishing",
  social: "Social & telemetry",
};

// Each entry is a Pi-hole regex: (\.|^)  matches a dot or the start of the name.
export const rules: Rule[] = [
  { list: "ads", regex: "(\\.|^)doubleclick\\.net$" },
  { list: "ads", regex: "(\\.|^)googlesyndication\\.com$" },
  { list: "ads", regex: "(\\.|^)googleadservices\\.com$" },
  { list: "ads", regex: "(\\.|^)adnxs\\.com$" },
  { list: "ads", regex: "(\\.|^)scorecardresearch\\.com$" },
  { list: "malware", regex: "(\\.|^)coinhive\\.com$" },
  { list: "malware", regex: "(\\.|^)coin-hive\\.com$" },
  { list: "malware", regex: "(\\.|^)cryptoloot\\.pro$" },
  { list: "social", regex: "(\\.|^)connect\\.facebook\\.net$" },
  { list: "social", regex: "(\\.|^)graph\\.facebook\\.com$" },
  { list: "social", regex: "(\\.|^)analytics\\.tiktok\\.com$" },
  { list: "social", regex: "(\\.|^)mc\\.yandex\\.ru$" },
  { list: "social", regex: "(\\.|^)app-measurement\\.com$" },
];

export const sampleHosts = [
  "cdn.doubleclick.net",
  "googlesyndication.com",
  "connect.facebook.net",
  "analytics.tiktok.com",
  "mc.yandex.ru",
  "coin-hive.com",
  "fonts.gstatic.com",
  "registry.npmjs.org",
  "time.cloudflare.com",
  "pocketbase.io",
  "api.github.com",
];

export type BlockingMode = "null" | "nxdomain" | "ip";

export type Options = {
  lists: Record<ListId, boolean>;
  subdomains: boolean;
  mode: BlockingMode;
  upstream: string;
};

export type Verdict = {
  host: string;
  blocked: boolean;
  rule: Rule | null;
  action: string;
  answer: string;
};

const ACTIONS: Record<BlockingMode, string> = {
  null: "0.0.0.0",
  nxdomain: "NXDOMAIN",
  ip: "192.0.2.1",
};

/** Normalise whatever the visitor typed into a bare hostname. */
export function normaliseHost(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^[a-z]+:\/\//, "")
    .replace(/[/?#].*$/, "")
    .replace(/\.$/, "")
    .slice(0, 253);
}

/** `(\.|^)doubleclick\.net$` becomes `doubleclick.net`. */
export function baseDomain(regex: string): string {
  return regex
    .replace(/^\(\\\.\|\^\)/, "")
    .replace(/\$$/, "")
    .replace(/\\\./g, ".")
    .replace(/\\(.)/g, "$1");
}

export function resolve(input: string, options: Options): Verdict {
  const host = normaliseHost(input);
  const action = ACTIONS[options.mode];

  if (!host || !host.includes(".")) {
    return {
      host,
      blocked: false,
      rule: null,
      action: "–",
      answer: "not a hostname",
    };
  }

  for (const rule of rules) {
    if (!options.lists[rule.list]) continue;

    const hit = options.subdomains
      ? new RegExp(rule.regex).test(host)
      : host === baseDomain(rule.regex);

    if (hit) {
      return {
        host,
        blocked: true,
        rule,
        action,
        answer: `sinkholed to ${action}`,
      };
    }
  }

  return {
    host,
    blocked: false,
    rule: null,
    action: "–",
    answer: `resolved through ${options.upstream}`,
  };
}

export const defaultOptions: Options = {
  lists: { ads: true, malware: true, social: true },
  subdomains: true,
  mode: "null",
  upstream: "Cloudflare 1.1.1.1",
};
