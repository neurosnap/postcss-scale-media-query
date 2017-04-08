Postcss Scale Media Query
=========================

The goal of this postcss plugin is to scale all media queries in CSS by some percentage.

Install
-------

```bash
npm install postcss-scale-media-query
```

Use
---

```js
const postcss = require('postcss');
const ScaleMediaQuery = require('postcss-scale-media-query');

const css = '@media (min-width:480px) { color: red; }';
const updatedCss = postcss([
  ScaleMediaQuery({ scale: 1.5 }),
]).process(css).css;

console.log(updatedCss);
// '@media (min-width:720px) { color: red; }'
```
