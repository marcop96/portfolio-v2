// Everything here is Marco's real homelab, read back off the machine.
// Numbers are current as of the build and are meant to be refreshed.

export const host = {
  machine: "retired laptop",
  os: "Ubuntu Server 24.04",
  uptimeDays: 214,
};

export const metrics = [
  { label: "Server up", value: "214", unit: "days" },
  { label: "Load, 1 min", value: "0.14", unit: "" },
  { label: "Memory", value: "3.1", unit: "of 7.7 GB" },
  { label: "Disk", value: "61", unit: "% of 465 GB" },
  { label: "Hosts watched", value: "2", unit: "server, desktop" },
];

// A day of CPU on the server, sampled every hour.
export const cpuSeries = [
  8, 6, 5, 4, 4, 6, 11, 19, 24, 18, 14, 22, 28, 21, 16, 19, 26, 31, 24, 17, 13,
  11, 9, 7,
];

export const containers = [
  {
    name: "cloudflared",
    image: "cloudflare/cloudflared",
    ports: "–",
    restart: "unless-stopped",
    up: "211 days",
  },
  {
    name: "pihole",
    image: "pihole/pihole",
    ports: "53 · 8053",
    restart: "unless-stopped",
    up: "214 days",
  },
  {
    name: "pocketbase",
    image: "ghcr.io/muchobien/pocketbase",
    ports: "8090",
    restart: "unless-stopped",
    up: "189 days",
  },
  {
    name: "grafana",
    image: "grafana/grafana",
    ports: "3000",
    restart: "unless-stopped",
    up: "189 days",
  },
];

export const ingress = [
  { host: "jobs.marcopianaroli.com", target: "localhost:8090" },
  { host: "reps.marcopianaroli.com", target: "localhost:8090" },
  { host: "videos.marcopianaroli.com", target: "localhost:8090" },
  { host: "grafana.marcopianaroli.com", target: "localhost:3000" },
  { host: "everything else", target: "http_status:404" },
];

export const collections = [
  { name: "jobs", records: "2 841", size: "4.2 MB" },
  { name: "applications", records: "318", size: "1.1 MB" },
  { name: "workouts", records: "1 204", size: "2.6 MB" },
  { name: "exercises", records: "86", size: "412 KB" },
  { name: "videos", records: "47", size: "880 KB" },
  { name: "pipeline_runs", records: "612", size: "1.9 MB" },
];
