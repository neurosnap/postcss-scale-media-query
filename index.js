'use strict';

var postcss = require('postcss');

var paramValueRe = new RegExp(/width:\s?(\d+)/gi);

module.exports = postcss.plugin('scale-media-query', function scopeify(opts) {
  var scale = opts.scale || 1;

  return function postcssPlugin(css) {
    css.walkAtRules('media', function walkMedia(rule) {
      var params = rule.params;
      if (params.indexOf('width') === -1) return;

      var reValue;
      while ((reValue = paramValueRe.exec(params)) !== null) {
        if (!reValue || reValue.length === 1) continue;

        var value = parseInt(reValue[1], 10);
        params = params.replace(value, value * scale);
      }

      rule.params = params;
    });
  };
});
