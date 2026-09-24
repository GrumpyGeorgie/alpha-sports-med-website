# Booking page

Local preview: `/book`. Feature branch: `feat/booking-flow`.

Uses the existing Alpha Roboto / Source Sans Pro fonts, navy/orange colours and logo. The booking page has its own navigation-free shell. It does not modify the homepage or other website pages. Search is a shortcut alongside guided new/return appointment and practitioner paths. Cliniko remains responsible for location, time, availability, fees and completing the booking.

## Booking data

`src/data/bookings.json` contains all 42 appointment links and 15 practitioner links supplied in William's [ONLINE BOOKINGS spreadsheet](https://docs.google.com/spreadsheets/d/1dnWaKnxeFewdszJTl3ixnidkNAENUKEcUeUIJSVrop8/edit). IDs are strings to preserve their precision. Display labels and aliases are separate from the source names. No Cliniko API credentials or patient information are used or stored. Search text stays in the browser and is not sent to analytics or Cliniko.

The two initial running assessments are distinguished using Michael's confirmation: practitioner team $210 (Newport / Ascot Vale), William $250 (Ascot Vale / Hawthorn). The wider team has no inferred seniority label. Other practitioner levels come from the appointment names. Prices should be reconfirmed before launch.

New and return paths filter explicitly named first/initial/new and return/follow-up appointments. Appointments without an explicit new/return designation remain visible to both paths with a neutral label; confirm these eligibility mappings during client review. The generic Ashton follow-up is grouped with hypermobility based on its placement in the source sheet; confirm this mapping. Staff cards intentionally do not infer services, seniority or locations. They use the supplied practitioner links directly.

## Verification

`npm run build` runs Astro diagnostics and builds all pages.

`node --experimental-strip-types --test tests/booking.test.mjs` checks URL/ID integrity, patient filtering, running distinctions, practitioner levels and search aliases.

## Review and launch

The page is a review prototype, marked noindex. It is not launched at `book.alphasportsmed.com.au`. Before launch: review patient eligibility and grouping, reconfirm pricing and Cliniko routing, configure the booking subdomain so it serves `/book` without exposing unfinished site navigation, and decide the production canonical/indexing policy. No DNS, API access or production deployment is included in this change.

For future dynamic data, replace the booking dataset through a separately authorised server-side Cliniko integration. Never expose an API key in client-side code.
