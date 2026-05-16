# Domain Routing Operative (2026-05-06)

## Source of truth

This note defines the canonical domain routing to avoid confusion during deployment and campaign operations.

## Active domains

- Main owner domain (primary copy): `http://petvitalityhub.com/`
- Neutral domain: `http://www.lifepluspets.vitallinkplus.com/`

## FTP document roots

- `petvitalityhub.com` is served from the FTP root shown in the hosting panel, where `index.html`, `guia.html`, `ventas/`, `crm/`, `crm-care-comfort/`, `assets/`, and `videos/` live.
- The nested FTP folder named `petvitalityhub.com/` is not the active document root for the public site. It was created by an earlier GitHub Actions deploy target and can be deleted after confirming it only contains duplicated deployment output.
- `lifepluspets.vitallinkplus.com/` remains a separate folder for the neutral version.

## Deployment rule

- GitHub Actions must deploy the main site to FTP `server-dir: /`, not `server-dir: /petvitalityhub.com/`.
- Do not use `dangerous-clean-slate` on the FTP root, because sibling domain folders also live there.
- Publish the video catalogue in both forms:
  - `videos.html` at the root for menu links.
  - `videos/index.html` plus `videos/media/` for `/videos/`.
- Publish the neutral catalogue in the same two forms under its own deploy target:
  - `videos.html`
  - `videos/index.html` plus `videos/media/`
- Keep `ventas/` reserved for the CRM / sales console. Do not embed the video catalogue inside `ventas/`.

## 2026-05-16 incident note

- Symptom: `https://petvitalityhub.com/videos.html` and `https://petvitalityhub.com/videos/` returned `404` even though GitHub Actions succeeded.
- Cause: the workflow uploaded the current site to a nested folder named `petvitalityhub.com/`, while the live domain was serving the parent FTP root.
- Fix applied: changed the main deploy target to `/`, removed destructive cleanup from the root deploy, added the workflow file to the `paths` trigger, and copied `videos/index.html` into the deployed `videos/` folder.
- Verified after deployment: `https://petvitalityhub.com/videos.html` returns `200`; `https://petvitalityhub.com/videos/` returns `200`.

## Legacy domain

- `lifepluspetspain.com` is considered legacy and is scheduled to be disconnected.
- Do not use `lifepluspetspain.com` as target for new production updates.
