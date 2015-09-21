"use strict";

module.exports = function(renderer, options) {

  options = options || {};

  renderer.code = require('./code')(options);
  renderer.blockquote = require('./blockquote')(options);
  // renderer.html = require('./html')(options);
  renderer.heading = require('./heading')(options);
  // renderer.hr = require('./hr')(options);
  // renderer.list = require('./list')(options);
  renderer.listitem = require('./listitem')(options);
  renderer.paragraph = require('./paragraph')(options);
  // renderer.table = require('./table')(options);
  // renderer.tablerow = require('./tablerow')(options);
  // renderer.tablecell = require('./tablecell')(options);

  renderer.strong = require('./strong')(options);
  renderer.em = require('./em')(options);
  renderer.codespan = require('./codespan')(options);
  // renderer.br = require('./br')(options);
  renderer.del = require('./del')(options);
  renderer.link = require('./link')(options);
  renderer.image = require('./image')(options);

  return renderer;
}
