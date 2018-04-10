SVGtoPDF = require 'svg-pdfkit'

module.exports =
  initSVG: ->
    undefined
  svg: (svg, x, y, options) ->
    SVGtoPDF(this, svg, x, y, options)
    return this