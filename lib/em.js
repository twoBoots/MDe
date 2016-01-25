"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderEm = function(text){
    var em;

    var mde = /[\\]?\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/(?:[^\\][\{])(.+)\}/,'').trim() : text;

    em  = '<em';
    em += mde ? mde : '';
    em += '>' + text + '</em>';

    return em;
  };

  return renderEm;
}