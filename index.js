// Cool kids love katex
// Let's use it to render TeX formulas
//
// 🌟 all you need is single line. 
// 🌟 Uncomment it and refresh the demo page!
// require('hypermd/powerpack/fold-math-with-katex')

// more info about the `powerpack` can be found here:
// https://laobubu.net/HyperMD/#./docs/powerpacks.md

var HyperMD = require('hypermd')
var myTextarea = document.getElementById('input-area')
var editor = HyperMD.fromTextArea(myTextarea)
editor.setSize(null, '600px')
