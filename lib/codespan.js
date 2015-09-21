"use strict";

var MDe = require('./mde.js')

module.exports = function(code){
  var codespan;

  var mde = /\{(.+)\}/.exec(code);
  mde = mde ? MDe(mde['1']) : null;

  code = mde ? code.replace(/\{(.+)\}/,'').trim() : code;

  codespan  = '<code';
  codespan += mde ? mde : '';
  codespan += '>' + code + '</code>';

  return codespan;
}