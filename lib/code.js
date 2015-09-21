"use strict";

var MDe = require('./mde.js')

module.exports = function(code, language){
  var pre;

  var mde = /\{(.+)\}/.exec(language);
  mde = mde ? MDe(mde['1']) : null;

  language = mde ? language.replace(/\{(.+)\}/,'').trim() : language;

  pre  = '<pre><code';
  pre += mde ? mde : '';
  pre += '>' + code + '</code></pre>';

  return pre;
}