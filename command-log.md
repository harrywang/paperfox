```
% npx create-next-app@latest
Need to install the following packages:
create-next-app@15.2.4
Ok to proceed? (y) y

✔ What is your project named? … paperfox
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/harrywang/sandbox/paperfox/paperfox.
```

setup shadcn

```
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest init

Packages: +220
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 220, reused 127, downloaded 93, added 220, done
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
✔ Which color would you like to use as the base color? › Zinc
✔ Writing components.json.
✔ Checking registry.
✔ Updating src/app/globals.css
  Installing dependencies.

It looks like you are using React 19. 
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

✔ How would you like to proceed? › Use --force
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.

```

not using /src - AI often default to /app - creating problems.