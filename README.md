# Nasa Image Search

Searche images with NASA API

- Bundled with Vite. Yarn as a package manager.
- Uses CSS modules.
- TypeScript.
- ESlint for linting and formatting.

Tested/Created with Node v20.3.0

## How to run

`cd nasa-image-search`

`yarn`

`yarn run dev`

## Would TODO

- CSS theming
- Add basic snapshot tests for pages; i.e. hitting Search renders images, clicking on image redirects to new route; test show page render, etc...
- Mock api calls with Jest
  I tried to add Jest to Vite but doesn't seem to be working as expected and at this point I have no time to try other
  testing lib or move to CRA/Webpack.
- Lazy load images, eg 20 by 20
