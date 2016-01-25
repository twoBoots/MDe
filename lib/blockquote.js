"use strict";

var MDe = require('./mde.js')

module.exports = function(options){
  var renderBlockquote = function(quote){
    var text;

    var mde = /(?:[^\\][\{])(.+)\}/.exec(quote);
    mde = mde ? MDe(mde['1']) : null;

    quote = mde ? quote.replace(/(?:[^\\][\{])(.+)\}/,'').trim() : quote;

    text  = '<blockquote';
    text += mde ? mde : '';
    text += '>' + quote + '</blockquote>';

    return text;
  };

  return renderBlockquote;
}