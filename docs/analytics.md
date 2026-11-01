# Analytics: Umami on the homelab

The site sends analytics to a self-hosted Umami instance on the same Ubuntu
Server as Pi-hole, PocketBase and Grafana, published through the Cloudflare
Tunnel that already fronts everything else.

Two consequences worth knowing:

1. **The page keeps its zero-third-party property.** The browser talks to
   `analytics.marcopianaroli.com`, which is our own subdomain, not to Google or
   Vercel.
2. **No cookies, so no consent banner.** Umami is cookieless by design, which is
   what makes this legal to run in Germany without wrecking the design.

Two events are wired, because only two mean anything:

| Event | Fires when |
|---|---|
| `cv-download` | someone clicks **Download CV (PDF)** |
| `email` | someone clicks an email link (with `place` = `hero` or `contact`) |
| `dns-lookup` | someone actually uses the Pi-hole simulator, once per visit |
| `linkedin`, `github` | outbound clicks |

Visits per month on a page like this will be in the tens. Ignore the page view
number. `cv-download` is the only figure that means a person is considering you.

---

## 1. Start it on the server

```sh
cd docker/umami
cp .env.example .env
# generate two secrets
openssl rand -base64 32   # POSTGRES_PASSWORD
openssl rand -base64 32   # APP_SECRET
# paste them into .env, then:
docker compose up -d
```

Wait ten seconds, then check it answers locally:

```sh
curl -s http://127.0.0.1:3001/api/heartbeat
```

The compose file binds Umami to `127.0.0.1:3001` on purpose: nothing on the LAN
can reach it and the tunnel is the only way in.

## 2. Publish it through the tunnel

### If `cloudflared` runs on the host (systemd service)

Add the hostname to `~/.cloudflared/config.yml`:

```yaml
  - hostname: analytics.marcopianaroli.com
    service: http://localhost:3001
```

Then create the DNS record and restart:

```sh
cloudflared tunnel route dns <tunnel-name> analytics.marcopianaroli.com
sudo systemctl restart cloudflared
```

### If `cloudflared` runs as a container

It needs to reach the Umami container by name, so put both on the same Docker
network. The compose file already declares an external network called
`cloudflared`; create it once if it does not exist:

```sh
docker network create cloudflared
```

Then use the container address in the ingress rule instead of localhost:

```yaml
  - hostname: analytics.marcopianaroli.com
    service: http://umami:3000
```

Either way, the rule order matters: this entry has to come **before** the
catch-all `http_status:404` that is already in your config.

## 3. Create the website in Umami

1. Open `https://analytics.marcopianaroli.com`.
2. The first login is `admin` / `umami`. **Change the password immediately.**
3. *Settings → Websites → Add website.*
   - Name: `marcopianaroli.com`
   - Domain: `marcopianaroli.com`
4. Copy the **website ID** (a UUID).

While you are there: *Settings → Profile → Enable two-factor authentication*.
This thing is reachable from the internet.

## 4. Tell the site about it

Both variables must be set, or nothing is emitted at all. That is deliberate:
the build has to stay clean if analytics ever goes away.

In Vercel: *Settings → Environment Variables*, add for **Production**:

```
PUBLIC_UMAMI_SRC          = https://analytics.marcopianaroli.com/script.js
PUBLIC_UMAMI_WEBSITE_ID   = <the UUID from step 3>
```

For local development, copy `.env.example` in the repo root to `.env` and fill it
in. Leave it empty locally and the script is never rendered.

Redeploy, then verify:

```sh
curl -s https://marcopianaroli.com/ | grep -o 'data-website-id="[^"]*"'
```

## 5. Confirm it actually records

Open the site, click **Download CV (PDF)**, then reload the Umami dashboard. The
event should appear under *Events* within a few seconds.

If nothing shows up:

- The tunnel is the usual suspect: `docker compose logs umami` on the server, and
  check that the ingress rule is above the catch-all.
- Browser ad blockers block lists that include analytics subdomains. Umami
  usually survives, but it is worth testing in a clean profile.
- `PUBLIC_UMAMI_ID` is read at **build time**, so changing it needs a redeploy,
  not just a save.
