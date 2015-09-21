"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderParagraph = function(text){
    var p;

    var mde = /\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

    p  = '<p';
    p += mde ? mde : '';
    p += '>' + text + '</p>';

    return p;
  }

  return renderParagraph;
}