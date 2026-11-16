# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: choose a low-friction web stack suitable for a responsive property management dashboard and static deployment.

## Users

One property owner uses the app to manage their property portfolio. Multiple local profiles may be created, and the workspace can be locked behind a passcode set in Settings. A manager enters monthly bills on behalf of the owner.

## Product Purpose

Show the owner the location, income, costs, and operating status of apartments and properties in Slovakia. Make it easy to add and manage properties and keep monthly bills recorded.

## Capabilities and Constraints

- The owner can add and manage properties/apartments, review portfolio analytics, and see location and revenue/cost information.
- A manager records each month's utility and other property bills; bill records support an attachment such as an invoice or receipt.
- The workspace supports multiple profiles and a passcode lock configurable in Settings.
- Build a usable single-user browser app without assuming a hosted backend or account service. Clearly disclose where data is stored and the limits of client-side passcode protection.
- Slovak context: euro currency and Slovak property terminology. Electricity bills vary by supplier, tariff, consumption, and fees; display uploaded/entered bills as actual costs and any regulator benchmarks as dated references rather than promises.
- Demo portfolio information must be labeled as sample data and must not imply real properties or actual owner finances.

## Evidence on Hand

- The user supplied repository: https://github.com/roardevstudios/Apartment-Manager.git
- Official Slovakia reference sources checked 2026-11-16: ÚRSO 2026 household electricity price overview; Financial Administration of the Slovak Republic guidance on rental income; Slov-Lex Act 182/1993 Z. z. on apartment ownership and building management.
- No real owner portfolio, bills, or brand assets supplied.

## Product Principles

- Make each property's money and obligations easy to scan.
- Keep monthly costs tied to the bill that supports them.
- Treat each property as a managed place with an address and operating history.
- Keep private workspace controls explicit about their scope.
- Separate actual entered amounts from public estimates and guidance.
