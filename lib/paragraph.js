"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderParagraph = function(text){
    var p;

    var mde = MDe.parse(text);

    p  = '<p';
    p += mde.attrs ? mde.attrs : '';
    p += '>' + mde.text + '</p>';

    return p;
  }

  return renderParagraph;
}