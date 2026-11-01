/**
 * Section entrance. Deliberately narrow: only headings and the first line under
 * them move, never every block, and never content that depends on the script.
 */
const targets = Array.from(
  document.querySelectorAll<HTMLElement>("[data-reveal]"),
);

if (!targets.length) {
  // nothing to do
} else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  targets.forEach((el) => el.classList.add("is-in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );

  targets.forEach((el) => observer.observe(el));
}
