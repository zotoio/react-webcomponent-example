# react-webcomponent-example

This repo demonstrates surfacing of react components within a W3C Web Component custom tag.  Please refer to `src/index.tsx` to see how this works.

## Install

1. clone repo
2. `yarn`
3. `yarn start`

## Rendering on another domain/port
You can use an html page on a different port/domain to source the component bundle and render the web component.  After runing `yarn start` you can copy the `public/webcomponentsjs dir to your static location as below.

The below example is assuming that you have executed `yarn start`, and also have a running http-server in the `build` dir on port 4000 in order to source the js bundle (update filename).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React WebComponent Example</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="webcomponentsjs/webcomponents-loader.js"></script>
    <script type="module" src="http://localhost:4000/static/js/main.[HASH].js"></script>
  </head>
<body>
  <div style="width: 30%;float: left">
      <react-webcomponent></react-webcomponent>
  </div>
</body>
</html>
```
