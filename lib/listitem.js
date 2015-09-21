"use strict";

var MDe = require('./mde.js')

module.exports = function(text){
  var li;

  var mde = /\{(.+)\}/.exec(text);
  mde = mde ? MDe(mde['1']) : null;

  text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

  li  = '<li';
  li += mde ? mde : '';
  li += '>' + text + '</li>';

  return li;
}