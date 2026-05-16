# Worklog - LifePlus Pets - 2026-05-15

## What Was Added

- Dedicated `dog_influencer` segment for Instagram creators with dog-focused audiences.
- Short first-contact influencer email sequence in `outreach/campaigns/dog_influencer_email_sequence.md`.
- CRM template for dog influencers in `crm/contacts-dog-influencers-template.csv`.
- GoHighLevel mapping note for dog influencers in `openspec/context/DOG-INFLUENCER-GHL-MAPPING-2026-05-15.md`.
- CRM template note for dog influencers in `openspec/context/DOG-INFLUENCER-CRM-TEMPLATE-2026-05-15.md`.
- GoHighLevel import exporter for dog influencers in `outreach/scripts/export_gohighlevel_dog_influencers.py`.
- GoHighLevel import template for dog influencers in `outreach/exports/gohighlevel_dog_influencers_import_template.csv`.
- Generated GoHighLevel import CSV for dog influencers in `outreach/exports/gohighlevel_dog_influencers_import.csv`.
- Pilot GoHighLevel import CSV for dog influencers in `outreach/exports/gohighlevel_dog_influencers_import_pilot_2.csv`.
- Pilot report generator for dog influencers in `outreach/scripts/generate_gohighlevel_dog_influencers_report.py`.
- Pilot report template for dog influencers in `outreach/exports/gohighlevel_dog_influencers_pilot_report_template.json`.
- Generated pilot report for dog influencers in `outreach/exports/gohighlevel_dog_influencers_pilot_report.json`.
- Dog influencer scoring script in `outreach/scripts/score_dog_influencers.py`.
- Dog influencer prospecting template in `outreach/exports/dog_influencer_prospecting_template.csv`.

## Operational Rules Confirmed

- Cold discovery stays local.
- Warm, approved, or replied leads can move to GoHighLevel.
- Dog influencers stay separate from veterinary clinics and pet shops.
- The first influencer email must stay short and recommendation-based.
- The full PDF pack must not be attached on first touch.

## Coordination Rule

- Every important decision, template, or workflow change must be written to OpenSpec before it is treated as part of the project.
- Cross-project edits require an explicit boundary check.

## Deployment Note - 2026-05-16

- The video catalogue belongs outside `ventas/`; `ventas/` remains the CRM / sales console area.
- `petvitalityhub.com/videos.html` and `petvitalityhub.com/videos/` are the public video catalogue entry points.
- The hosting FTP root, not the nested `petvitalityhub.com/` folder, is the active document root for the main domain.
- The nested `petvitalityhub.com/` folder on the server is leftover deploy output and can be removed after confirming it contains only duplicate generated files.
