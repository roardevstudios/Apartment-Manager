# Bytový prehľad

A responsive Slovak property portfolio dashboard for tracking apartments, rent, monthly utility bills, and receipts.

## Run locally

```sh
npm install
npm run dev
```

Build static production files with `npm run build`. The generated site is in `dist/` and can be hosted on any static web host.

## Current scope

- Add and manage apartments and other property units
- Track monthly rental income, manually entered costs, and payment status
- Attach a bill or receipt filename to each bill record
- Add multiple local profiles and switch between them
- Configure a local passcode lock in Settings
- Export a JSON backup of properties and bills
- Slovak reference links for energy prices, rental income, and apartment building administration

## Data and privacy

This version stores properties, bills, and profiles in the browser's `localStorage`. Receipt files are not uploaded or stored; only the selected filename is recorded. The passcode is a convenience lock and is stored locally without encryption. Profiles share the same browser data and are not authenticated accounts. Do not store bank credentials, identity documents, or other highly sensitive information here. Use the JSON export for a manual backup. Clearing browser data removes this local workspace.

The included Bratislava map and portfolio figures are illustrative sample content. Replace them with verified property locations and actual bills. Map pins are not address geocoding.

## Slovak references

- [ÚRSO: Ceny energií na rok 2026](https://www.urso.gov.sk/ceny-energii-na-rok-2026/)
- [Finančná správa: Prenájom nehnuteľnosti](https://www.financnasprava.sk/sk/obcania/zivotn/prenajom-nehnutelnosti-situaci)
- [Slov-Lex: Zákon č. 182/1993 Z. z.](https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/?ucinnost=01.01.2025)

Reference figures and guidance are informational, not a property-specific bill estimate or tax/legal advice. Review current supplier bills and official rules directly.

## Stack

React, Vite, Recharts, and Lucide icons.
