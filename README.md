# theideaiq-monorepo

## ⚡ Overview
Welcome to the `theideaiq-monorepo`. This is the core architecture and monorepo containing all applications, packages, and shared utilities for the The IDEA IQ Inc..

## 🚀 Architecture
This repository is managed using Turborepo and pnpm workspaces. It enforces strict separation of concerns through specialized packages that encapsulate domain logic.

### Apps
- **`apps/web`**: The main public-facing website, utilizing Next.js and next-intl for localization.
- **`apps/nexus`**: The internal administrative and editorial dashboard. Enforces strict Server-Side Role-Based Access Control (RBAC).
- **`apps/workshop`**: Storybook/UI testing environment for our customized brutalist design system.

### Packages
- **`@theideaiq/auth`**: Centralized authentication, Supabase client initialization, and RBAC utilities.
- **`@theideaiq/database`**: Single source of truth for all Supabase generated types and schemas.
- **`@theideaiq/ui`**: Shared React components designed with a unique brutalist aesthetic.
- **`@theideaiq/i18n`**: Centralized translation dictionaries.
- **`@theideaiq/email`**: Transactional email templates and dispatching via Resend.
- **`@theideaiq/payments`**: Payment gateway integrations, primarily Wayl.
- **`@theideaiq/storage`**: Utilities for handling secure uploads to Supabase Storage.
- **`@theideaiq/seo`**: Shared SEO utilities and metadata generators.
- **`@theideaiq/analytics`**: Server-side tracking utilities.
- **`@theideaiq/utils`**: Shared helpers, validators, and formatters.
- **`@theideaiq/config`**: Shared ESLint, Biome, and TypeScript configurations.
- **`@theideaiq/testing`**: Testing setup and configurations using Vitest and Playwright.

## 🔒 Security & Guidelines
- **Zero Barrel Files**: Do not use `index.ts` to re-export modules. Always use explicit path-based exports (e.g., `@theideaiq/ui/button`).
- **Strict Typing**: No `any` or `@ts-expect-error`.
- **Formatting**: Biome is used for linting and formatting across the repo.

## ⚙️ Usage
To run the project locally:
```bash
pnpm install
pnpm build
pnpm dev
```
