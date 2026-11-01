export type LedgerRow = {
  name: string;
  role: string;
  year: string;
  details: string[];
};

export type LedgerGroup = {
  label: string;
  rows: LedgerRow[];
};

export const ledger: LedgerGroup[] = [
  {
    label: "Work",
    rows: [
      {
        name: "Okapi GmbH",
        role: "IT support & sysadmin",
        year: "2022–now",
        details: [
          "Sole IT contact for 25 people: laptops, printers, phones, the office network.",
          "Windows, macOS and Linux endpoints: diagnosis, repair, component replacement.",
          "Around 25 tickets a week, plus webmaster work on top: front-end changes, SEO, maintenance.",
          "Internal tools nobody assigned me: scripts that removed repeat tickets.",
        ],
      },
      {
        name: "Okapi GmbH",
        role: "Warehouse",
        year: "2021–2022",
        details: [
          "My first year in Berlin, before the IT role opened.",
          "Inventory control and equipment maintenance. The reason I know the machines in the building.",
        ],
      },
      {
        name: "Compañía Urbana",
        role: "IT support, level 1",
        year: "2019–2020",
        details: [
          "Level 1 queue in ServiceDesk Plus: intake, triage, resolution, escalation.",
          "Component-level hardware repair: RAM, disks, power supplies.",
          "Remote support over TeamViewer and AnyDesk; Office, Teams and Outlook day to day.",
          "Active Directory: accounts, resets, group membership.",
        ],
      },
      {
        name: "Cencosud",
        role: "Admin & help desk",
        year: "2016–2018",
        details: [
          "Help desk intake and data entry, before the job had a title.",
          "Trained new staff on the tools they would be supported on.",
        ],
      },
      {
        name: "TEDxSanIsidro",
        role: "Volunteer, event ops",
        year: "2015–2019",
        details: [
          "Built and struck the stage infrastructure for five annual events.",
          "Speaker support, live, with a schedule that did not move.",
        ],
      },
    ],
  },
  {
    label: "Built",
    rows: [
      {
        name: "Homelab",
        role: "Ubuntu · Docker · Pi-hole · PocketBase · Grafana · Cloudflare Tunnel",
        year: "ongoing",
        details: [
          "One old laptop, Ubuntu Server, four containers and no monthly bill.",
          "Blocking DNS for the whole flat; hosting every project's database.",
          "Published through Cloudflare Tunnels. Not one port forwarded.",
        ],
      },
      {
        name: "Job-Hub",
        role: "Search automation",
        year: "2025",
        details: [
          "Playwright scrapers pull from eight job portals every day on a GitHub Action.",
          "Claude scores each posting against my own criteria; PocketBase keeps the board.",
          "Built because applying by hand is a data problem pretending to be a chore.",
        ],
      },
      {
        // TODO: confirm stack and repo with Marco.
        name: "REPS",
        role: "Training tracker",
        year: "2025",
        details: [
          "Sessions, exercises and progress. The only app I open every day.",
          "Runs on the same PocketBase instance as everything else.",
        ],
      },
      {
        // TODO: confirm stack and repo with Marco.
        name: "Faceless video pipeline",
        role: "Scripts + AI",
        year: "2025",
        details: [
          "Script, voice, render and publish as separate steps, each with a human checkpoint before it runs.",
          "Semi-automated on purpose: the part that needs judgement stays manual.",
        ],
      },
    ],
  },
];
