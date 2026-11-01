export type ToolGroup = {
  label: string;
  rows: { name: string; where: string }[];
};

export const tools: ToolGroup[] = [
  {
    label: "Systems",
    rows: [
      { name: "Windows", where: "every desk at Okapi" },
      { name: "Linux (Ubuntu, Debian)", where: "the homelab server" },
      { name: "macOS", where: "the office endpoints that have it" },
      { name: "Microsoft 365", where: "Teams, Outlook, Exchange" },
      { name: "Entra ID", where: "device onboarding and access" },
      { name: "Active Directory", where: "accounts, groups, permissions" },
      { name: "Hardware repair and build", where: "component level, in house" },
    ],
  },
  {
    label: "Network",
    rows: [
      { name: "DNS and DHCP", where: "the thing I am called about most" },
      { name: "Pi-hole", where: "this homelab, 214 days up" },
      { name: "Cloudflare Tunnel", where: "instead of port forwarding" },
      { name: "LAN diagnostics", where: "office and flat" },
    ],
  },
  {
    label: "Containers",
    rows: [
      { name: "Docker", where: "every service on this page" },
      { name: "Docker Compose", where: "one file per stack" },
      { name: "Volumes and restart policies", where: "so it survives a reboot" },
      { name: "Ubuntu Server", where: "the retired laptop" },
    ],
  },
  {
    label: "Support",
    rows: [
      { name: "ServiceDesk Plus", where: "Compañía Urbana, 2019" },
      { name: "TeamViewer", where: "remote support" },
      { name: "AnyDesk", where: "the times TeamViewer would not start" },
      { name: "Remote triage", where: "mostly over the phone" },
      { name: "User onboarding", where: "25 people, and everyone since" },
    ],
  },
  {
    label: "Build",
    rows: [
      { name: "Bash", where: "the glue" },
      { name: "Python", where: "scrapers and one-off scripts" },
      { name: "TypeScript", where: "Job-Hub, REPS" },
      { name: "Vue", where: "the front ends" },
      { name: "Git", where: "everything, this page included" },
      { name: "Grafana metrics", where: "server and desktop" },
    ],
  },
];
