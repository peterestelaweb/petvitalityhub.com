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

Final publication note:

- The branch `codex/clubmimascota-landing` was created for isolation and pushed to GitHub.
- Its first commit was later fast-forwarded into `main`.
- The final production correction was committed directly on `main` as `fa32c13`.
- Therefore the current source of truth for the working published version is `origin/main`, not the old branch pointer.
- If the branch is kept, update it from `main` before using it again; otherwise delete/archive it after confirming production.

The existing Pet Vitality Hub home page must not be changed for this task. The partner page should duplicate the front/home page experience under `/clubmimascota/`, not replace or edit the root page. The scope is limited to:

- `/clubmimascota/index.html`
- `/clubmimascota/banners.html`
- this OpenSpec context note
- `.github/workflows/deploy-banahosting.yml`, only to add `/clubmimascota/**` to the existing deployment

The currently working public site is backed up in GitHub on `origin/main`. On 2026-05-31, local `main` and `origin/main` both pointed to:

```text
ec023e7634a36ea55c7c6472b11f186c486d949f
```

That commit includes the existing working site, including the current root `index.html`. Treat `origin/main` as the rollback reference for the already-working page.

After publication, the working Club Mi Mascota version is backed up in GitHub on:

```text
origin/main @ fa32c13
```

This commit includes:

- the full `/clubmimascota/` page based on the existing front/home page,
- direct LifePlus product links with `SH31S3`,
- the reusable banner file,
- the deploy workflow change needed to publish `/clubmimascota/`,
- this OpenSpec documentation.

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

Important implementation correction:

- `/clubmimascota/index.html` should reuse the full front-page structure from the existing Pet Vitality Hub home page.
- Product CTAs must not point only to the generic shop root.
- Product CTAs must point to direct LifePlus product pages using the Club Mi Mascota shop route `SH31S3/S/es/es/product-details/...`.
- The generic shop root `https://ww1.lifeplus.com/SH31S3/S/` is acceptable for broad “Tienda oficial” navigation only, not for product-specific purchase buttons.

Error log / lesson learned:

1. The first implementation was too small: it created a reduced product landing instead of duplicating the existing front/home page experience. Correct behavior: preserve the original front-page structure and adapt the messaging/shop attribution for Club Mi Mascota.
2. The first product CTAs pointed to the generic shop root. Correct behavior: product-specific buttons must go to product-specific LifePlus detail URLs using `SH31S3`.
3. The first GitHub deploy still returned 404 because `.github/workflows/deploy-banahosting.yml` did not include `clubmimascota/**` in path filters or copy the directory to `public/`. Correct behavior: route folders need both workflow path triggers and explicit copy into `public/`.
4. When checking publication, verify both the HTTP status and the rendered/source content from production. A `200` alone is not enough; verify expected title/copy and the product URLs.
5. Do not treat a feature branch as final after a production hotfix on `main`. The final source of truth must be stated explicitly.

Production verification checklist:

- `https://petvitalityhub.com/` returns `200` and remains the existing main page.
- `https://petvitalityhub.com/clubmimascota/` returns `200`.
- The Club Mi Mascota page title is `LifePlus Pets para Club Mi Mascota | Pet Vitality Hub`.
- The H1 communicates `LifePlus Pets para Club Mi Mascota`.
- No `SHVCB5` appears in `/clubmimascota/`.
- Product CTAs include the shop route `SH31S3/S/es/es/product-details`.
- Broad shop links such as “Comprar” / “Tienda oficial” may use the generic shop root `https://ww1.lifeplus.com/SH31S3/S/`.

Direct product links currently required:

- Digest: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/3536/lifeplus-pets%AE-digest`
- Calm: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/3534/lifeplus-pets%AE-calm`
- Care & Comfort: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/3540/lifeplus-pets%AE-care-%26-comfort`
- Move: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/3535/lifeplus-pets%AE-move`
- Peanut Butter Biscuits: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/5390/lifeplus-pets%AE-peanut-butter-biscuits`
- Ahiflower Oil: `https://ww1.lifeplus.com/SH31S3/S/es/es/product-details/3545/lifeplus-pets%AE-ahiflower%AE-oil`

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
