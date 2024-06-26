# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
npm dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm dev
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Design

### Components
https://www.shadcn-svelte.com/docs/components-json

### Icons
https://lucide.dev/guide/packages/lucide-svelte

## Data
You can generate a migration with
`supabase migration new the_migration_name`

After you have updated your migration with the SQL you can apply your migration with
`supabase migration up`

Finally you update you generated TS model with
`supabase gen types typescript --local > "src/lib/database/schema.gen.ts"`

or with PNPM
`pnpm gen-db`