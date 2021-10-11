# monorepo

## Developer Tasks

Perform all tests by running the VS Code task `batteries-included:test-all` or running the following shell command:

```console
$ (unset DISPLAY; cd src/js \
    && yarn install \
    && yarn workspace batteries-included run css:build \
    && yarn workspace batteries-included run build \
    && yarn workspace batteries-included run jest \
    && yarn workspace batteries-included run e2e:headless)
```

<details>
  <summary>Example Output</summary>

```console
yarn install v1.22.11
[1/4] Resolving packages...
[2/4] Fetching packages...
info @next/swc-darwin-arm64@11.1.2: The platform "linux" is incompatible with this module.
info "@next/swc-darwin-arm64@11.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info @next/swc-darwin-arm64@11.1.2: The CPU architecture "x64" is incompatible with this module.
info @next/swc-darwin-x64@11.1.2: The platform "linux" is incompatible with this module.
info "@next/swc-darwin-x64@11.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info @next/swc-win32-x64-msvc@11.1.2: The platform "linux" is incompatible with this module.
info "@next/swc-win32-x64-msvc@11.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest@27.2.5" has unmet peer dependency "@babel/core@^7.8.0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > ts-loader@9.2.6" has unmet peer dependency "webpack@^5.0.0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest@27.2.0" has unmet peer dependency "@babel/core@^7.0.0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > next > styled-jsx > @babel/plugin-syntax-jsx@7.14.5" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax@1.0.1" has unmet peer dependency "@babel/core@^7.0.0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-async-generators@7.8.4" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-bigint@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-class-properties@7.12.13" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-import-meta@7.10.4" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-json-strings@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-logical-assignment-operators@7.10.4" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-nullish-coalescing-operator@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-numeric-separator@7.10.4" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-object-rest-spread@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-optional-catch-binding@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-optional-chaining@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-c3ceaf1b-ee4f-4de5-9bd3-961f4a3f6b5b > batteries-included > babel-jest > babel-preset-jest > babel-preset-current-node-syntax > @babel/plugin-syntax-top-level-await@7.14.5" has unmet peer dependency "@babel/core@^7.0.0-0".
[4/4] Building fresh packages...
Done in 5.91s.
yarn workspace v1.22.11
yarn run v1.22.11
$ postcss ./styles/tailwind.css -o ./styles/globals.css

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.
Done in 0.74s.
Done in 0.98s.
yarn workspace v1.22.11
yarn run v1.22.11
$ next build
info - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
info - Checking validity of types
info - Using external babel configuration from /home/kris/workspace/github.com/kriswuollett/monorepo/src/js/packages/batteries-included/.babelrc

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.
info - Creating an optimized production build
info - Compiled successfully
info - Collecting page data
info - Generating static pages (3/3)
info - Finalizing page optimization

Page Size First Load JS
┌ ○ / 494 B 67.4 kB
├ /\_app 0 B 66.9 kB
├ ○ /404 193 B 67.1 kB
├ λ /api/hello 0 B 66.9 kB
└ λ /api/throw 0 B 66.9 kB

- First Load JS shared by all 66.9 kB
  ├ chunks/framework.e4a5a2.js 42 kB
  ├ chunks/main.d4b818.js 23.6 kB
  ├ chunks/pages/\_app.b03327.js 556 B
  ├ chunks/webpack.1a8a25.js 729 B
  └ css/8be1584f3847d6c14612.css 1.43 kB

λ (Server) server-side renders at runtime (uses getInitialProps or getServerSideProps)
○ (Static) automatically rendered as static HTML (uses no initial props)
● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)
(ISR) incremental static regeneration (uses revalidate in getStaticProps)

Done in 15.91s.
Done in 16.15s.
yarn workspace v1.22.11
yarn run v1.22.11
$ jest
PASS **tests**/index.test.jsx
Home
✓ renders a heading (73 ms)

PASS **tests**/snapshot.js
✓ renders homepage unchanged (7 ms)

Test Suites: 2 passed, 2 total
Tests: 2 passed, 2 total
Snapshots: 1 passed, 1 total
Time: 1.15 s
Ran all test suites.
Done in 1.78s.
Done in 2.04s.
yarn workspace v1.22.11
yarn run v1.22.11
$ start-server-and-test start http://localhost:3000 cypress:headless
1: starting server using command "npm run start"
and when url "[ 'http://localhost:3000' ]" is responding with HTTP status code 200
running tests using command "npm run cypress:headless"

> batteries-included@0.1.0 start
> next start

ready - started server on 0.0.0.0:3000, url: http://localhost:3000

> batteries-included@0.1.0 cypress:headless
> cypress run

====================================================================================================

(Run Starting)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Cypress: 8.5.0 │
│ Browser: Electron 91 (headless) │
│ Specs: 1 found (app.spec.js) │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────────────────────

Running: app.spec.js (1 of 1)

Navigation
✓ home should say (265ms)

1 passing (2s)

(Results)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Tests: 1 │
│ Passing: 1 │
│ Failing: 0 │
│ Pending: 0 │
│ Skipped: 0 │
│ Screenshots: 0 │
│ Video: true │
│ Duration: 1 second │
│ Spec Ran: app.spec.js │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

(Video)

- Started processing: Compressing to 32 CRF
- Finished processing: /home/kris/workspace/github.com/kriswuollett/monorepo/src/j (0 seconds)
  s/packages/batteries-included/cypress/videos/app.spec.js.mp
   4

====================================================================================================

(Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✔ app.spec.js 00:01 1 1 - - - │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
✔ All specs passed! 00:01 1 1 - - -

Done in 12.24s.
Done in 12.54s.

```

</details>

Try debugging `api/hello` by running the `batteries-included: debug server-side` launch config,
port fowarding 3000 if necessary, and then opening http://localhost:3000/api/hello on your machine
to initially compile and run that endpoint. Then try setting a breakpoint on
`src/js/packages/batteries-included/pages/api/hello.ts`. Note that the breakpoint is set on a processed
file instead. This does not work.

Next open `src/js/packages/batteries-included` folder with VS Code to change the workspace root. Try
running the launch config `batteries-included: debug server-side` that is also defined there to do
the steps again. This time the breakpoint works.

I think there just is some source mapping issue?
