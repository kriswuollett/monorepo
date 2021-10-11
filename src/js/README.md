# JavaScript / TypeScript

## Project Initialization

These steps were followed to set up this project.

1. Add a `.gitignore` file.
2. Initialize a Lerna repo following Lerna's [Getting Started instructions](https://lerna.js.org/#getting-started),
   and rename the project to `js`.

```console
$ lerna init \
    && jq '.name = "js"' package.json > package.json.new \
    && mv package.json.new package.json
lerna notice cli v4.0.0
lerna info Updating package.json
lerna info Updating lerna.json
lerna info Creating packages directory
lerna success Initialized Lerna files
```
