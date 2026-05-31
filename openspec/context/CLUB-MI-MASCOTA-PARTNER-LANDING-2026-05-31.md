# Club Mi Mascota Partner Landing - 2026-05-31

## Decision

Create a Club Mi Mascota-specific LifePlus Pets path as the first integration step:

```text
https://petvitalityhub.com/clubmimascota/
```

This is preferred over a first-step subdomain because it is faster to deploy, easier to maintain, and does not require extra DNS/SSL work.

## Git Safety and Scope

Work for this collaboration should stay isolated on a dedicated branch:

```text
codex/clubmimascota-landing
```

The existing Pet Vitality Hub home page must not be changed for this task. The scope is limited to:

- `/clubmimascota/index.html`
- `/clubmimascota/banners.html`
- this OpenSpec context note
- `.github/workflows/deploy-banahosting.yml`, only to add `/clubmimascota/**` to the existing deployment

The currently working public site is backed up in GitHub on `origin/main`. On 2026-05-31, local `main` and `origin/main` both pointed to:

```text
ec023e7634a36ea55c7c6472b11f186c486d949f
```

That commit includes the existing working site, including the current root `index.html`. Treat `origin/main` as the rollback reference for the already-working page.

## Deployment Requirement

The live domain is deployed by `.github/workflows/deploy-banahosting.yml` from `main` to the active FTP root.

For `/clubmimascota/` to appear publicly, two conditions must be true:

1. The `clubmimascota/` folder must be committed and pushed to the deployment branch (`main` for the current workflow).
2. The deploy workflow must copy `clubmimascota/` into `public/` before FTP upload and include `clubmimascota/**` in the push path filters.

If either condition is missing, `https://petvitalityhub.com/clubmimascota/` will return 404 even if the files exist locally or in a non-deployed branch.

## Critical Shop-Link Rule

Do not use `SHVCB5` as the shop ID for the Club Mi Mascota partner flow.

The Club Mi Mascota owner shop is now:

```text
https://ww1.lifeplus.com/SH31S3/S/
```

`SH31S3` is a shop route, not a member route. All Club Mi Mascota LifePlus Pets purchase CTAs, including footer links, must use the `SH31S3` shop URL or shop-scoped product URLs if those are later confirmed. The first published landing uses the shop URL directly for every product CTA to avoid accidental attribution to `SHVCB5`.

## Intended Flow

```text
clubmimascota.com
  -> partner card/banner in Elementor
  -> petvitalityhub.com/clubmimascota/
  -> LifePlus product CTAs
  -> Club Mi Mascota owner's official LifePlus shop SH31S3
```

## Published Landing

The partner landing is published as a static page at:

```text
/clubmimascota/index.html
```

Public URL:

```text
https://petvitalityhub.com/clubmimascota/
```

The page is intentionally limited to the main collaboration landing plus the six core LifePlus Pets products:

- Digest
- Calm
- Care & Comfort
- Move
- Peanut Butter Biscuits
- Ahiflower Oil

Copy must avoid medical promises and curing language. Prefer: `bienestar`, `soporte`, `cuidado diario`, `ayuda a mantener`, and `acompana`.

## Placement on Club Mi Mascota

- Primary placement: `https://www.clubmimascota.com/ventajas-del-club-3/`, as a partner/service card alongside existing partners.
- Secondary placement: restrained home page banner.
- Avoid pop-ups.

## Banner Versions

Two banner versions exist for Club Mi Mascota:

```text
/clubmimascota/banners.html
```

1. Visual banner, recommended by default.
   - Use on `Ventajas del Club`, preferably before the collaborator list or as the first highlighted block.
   - Shows real LifePlus Pets product images.
   - Premium Club Mi Mascota-compatible style: light background, navy, gold, soft borders.
   - CTA: `Ver productos`.
   - Link: `https://petvitalityhub.com/clubmimascota/`.
   - Rationale: the large visual option is preferred because it shows real product and increases click probability.

2. Compact banner, secondary alternative.
   - Use in a footer or lower-page placement.
   - More discreet and less visually prominent.
   - CTA: `Ver productos`.
   - Link: `https://petvitalityhub.com/clubmimascota/`.
   - Rationale: the compact option remains a discreet alternative for less prominent page areas.

Neither banner should be implemented as a pop-up or made to feel like aggressive advertising.

Spanish implementation note:

```text
La opción visual grande es la preferida porque enseña producto real y aumenta la probabilidad de clic. La compacta queda como alternativa discreta para zonas menos protagonistas.
```

## Elementor Recreation Brief

The banners are delivered as reusable HTML/CSS in `/clubmimascota/banners.html`, but they can also be recreated manually in Elementor with the following structure.

### Visual Banner

- Placement: `Ventajas del Club`, before the collaborator list or as the first highlighted block.
- Layout: two columns; left content column approximately 65%, right product visual column approximately 35%.
- Background: left side light cream/white, right side navy.
- Border radius: soft rounded container.
- Main colors:
  - Navy: `#172a4d`
  - Gold: `#caa24a`
  - Cream: `#f6f4ef`
  - Border: `#e8e1d2`
  - Text: `#333842`
- Eyebrow: `Selección Club Mi Mascota`
- Title: `LifePlus Pets para Club Mi Mascota`
- Body: `Una selección de suplementos naturales para acompañar el bienestar diario de tu mascota: digestión, calma, movilidad, piel, pelaje y cuidado cotidiano.`
- CTA text: `Ver productos`
- CTA link: `https://petvitalityhub.com/clubmimascota/`
- Note: `Compra en la tienda oficial LifePlus de Club Mi Mascota.`
- Product images:
  - `https://ww1.lifeplus.com/images/products/prodpic_3534_1.jpg`
  - `https://ww1.lifeplus.com/images/products/prodpic_3536_1.jpg`
  - `https://ww1.lifeplus.com/images/products/prodpic_3545_1.jpg`
- Visual card title: `Cuidado diario, selección premium`
- Visual card text: `Productos oficiales LifePlus Pets`
- Block order: eyebrow, title, body, CTA + note, product image card.

### Compact Banner

- Placement: footer or lower-page section.
- Layout: horizontal strip with text left and CTA right; stack on mobile.
- Background: navy `#172a4d`.
- CTA background: gold `#caa24a`.
- Title: `LifePlus Pets x Club Mi Mascota`
- Body: `Suplementos naturales para acompañar el bienestar diario de perros y gatos.`
- CTA text: `Ver productos`
- CTA link: `https://petvitalityhub.com/clubmimascota/`
- Block order: title, body, CTA.

## Suggested Copy

Title:

```text
LifePlus Pets para Club Mi Mascota
```

Short card body:

```text
Suplementos naturales para acompañar el bienestar diario de perros y gatos: digestión, calma, movilidad, piel, pelaje y cuidado diario.
```

Button:

```text
VER PRODUCTOS
```

## Tracking

Use URL-level tracking first:

```text
https://petvitalityhub.com/clubmimascota/?utm_source=clubmimascota&utm_medium=partner&utm_campaign=lifeplus_pets
```

Do not add extra tracking scripts to Club Mi Mascota before its cookie consent issue is corrected.

## Related Project Note

The Club Mi Mascota project has a fuller investigation note at:

```text
/Users/maykacenteno/Development/CLUB MI MASCOTA/openspec/context/CLUB-MI-MASCOTA-LIFEPLUS-PETS-COLLABORATION-2026-05-31.md
```
