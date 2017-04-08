'use strict';

const postcss = require('postcss');
const test = require('tape');

const smq = require('./index');

test('should modify single media query min-width', (t) => {
  t.plan(1);

  const css = '@media (min-width:480px) { color: red; }';
  const expected = '@media (min-width:720px) { color: red; }';
  const actual = postcss([
    smq({ scale: 1.5 }),
  ]).process(css).css;

  t.equal(actual, expected);
});

test('should modify both widths in media query', (t) => {
  t.plan(1);

  const css = '@media only screen and (min-width: 769px) and (max-width: 1281px) { color: red; }';
  const expected = '@media only screen and (min-width: 1153.5px) and (max-width: 1921.5px) { color: red; }';
  const actual = postcss([
    smq({ scale: 1.5 }),
  ]).process(css).css;

  t.equal(actual, expected);
});

test('should modify min-device-width in media query', (t) => {
  t.plan(1);

  const css = '@media only screen and (min-device-width: 480px) { color: red; }';
  const expected = '@media only screen and (min-device-width: 240px) { color: red; }';
  const actual = postcss([
    smq({ scale: 0.5 }),
  ]).process(css).css;

  t.equal(actual, expected);
});
