"use strict";

var MDe = require('./mde.js')

module.exports = function(options){
  var renderBlockquote = function(text){
    var text;

    var mde = MDe.parse(text);

    text  = '<blockquote';
    text += mde.attrs ? mde.attrs : '';
    text += '>' + mde.text + '</blockquote>';

    return text;
  };

  return renderBlockquote;
}