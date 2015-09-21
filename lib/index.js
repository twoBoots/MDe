"use strict";

module.exports = function(renderer) {

  renderer.code = require('./code');
  renderer.blockquote = require('./blockquote');
  // renderer.html = require('./html');
  renderer.heading = require('./heading');
  // renderer.hr = require('./hr');
  // renderer.list = require('./list');
  renderer.listitem = require('./listitem');
  renderer.paragraph = require('./paragraph');
  // renderer.table = require('./table');
  // renderer.tablerow = require('./tablerow');
  // renderer.tablecell = require('./tablecell');

  renderer.strong = require('./strong');
  renderer.em = require('./em');
  renderer.codespan = require('./codespan');
  // renderer.br = require('./br');
  renderer.del = require('./del');
  renderer.link = require('./link');
  renderer.image = require('./image');

  return renderer;
}
