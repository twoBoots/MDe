"use strict";

var MDe = require('./mde.js')

module.exports = function(href, title, text){
  var img;

  var mde = /\{(.+)\}/.exec(text);
  mde = mde ? MDe(mde['1']) : null;

  text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

  img  = '<img href="' + href + '"';
  img += mde ? mde : '';
  img += title ? '" title="' + title + '"' : '';
  img += '>' + text + '</img>';

  return img;
}