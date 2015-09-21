"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderStrong = function(text){
    var strong;

    var mde = /\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

    strong  = '<strong';
    strong += mde ? mde : '';
    strong += '>' + text + '</strong>';

    return strong;
  }

  return renderStrong;
}