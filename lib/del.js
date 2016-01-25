"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderDel = function(text){
    var del;

    var mde = /(?:[^\\][\{])(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/(?:[^\\][\{])(.+)\}/,'').trim() : text;

    del  = '<del';
    del += mde ? mde : '';
    del += '>' + text + '</del>';

    return del;
  };

  return renderDel;
}