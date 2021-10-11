# JavaScript / TypeScript

## Developer Setup

1. Fetch the dependencies:

```console
$ yarn install
```

## Project Setup History

These steps were followed to set up this project.

1. Add a `.gitignore` file.
2. Initialize a Lerna repo following Lerna's [Getting Started instructions](https://lerna.js.org/#getting-started):

```console
$ lerna init
lerna notice cli v4.0.0
lerna info Updating package.json
lerna info Updating lerna.json
lerna info Creating packages directory
lerna success Initialized Lerna files
```

3. Rename the project in `package.json` to `js`.
4. Add example NextJs project with [Tailwind CSS](https://tailwindcss.com/)
   [JIT](https://tailwindcss.com/docs/just-in-time-mode), [Jest](https://jestjs.io/), and
   [Cypress](https://www.cypress.io/) support based on example files from
   [antoniolofiego/Batteries-Included-Next.js](https://github.com/antoniolofiego/Batteries-Included-Next.js)
   and the [NextJS Testing instructions](https://nextjs.org/docs/testing).
