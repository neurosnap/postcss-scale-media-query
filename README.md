Postcss Scale Media Query [![Build Status](https://travis-ci.org/neurosnap/postcss-scale-media-query.svg?branch=master)](https://travis-ci.org/neurosnap/postcss-scale-media-query)
=========================

The goal of this postcss plugin is to scale all media query `-width` by some percentage.

This will only alter the values of the following media query features:

* min-width
* max-width
* min-device-width
* max-device-width

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
