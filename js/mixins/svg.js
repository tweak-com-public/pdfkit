// Generated by CoffeeScript 1.12.7
(function() {
  var SVGtoPDF;

  SVGtoPDF = require('svg-to-pdfkit');

  module.exports = {
    initSVG: function() {
      return void 0;
    },
    svg: function(svg, x, y, options) {
      SVGtoPDF(this, svg, x, y, options);
      return this;
    }
  };

}).call(this);