"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderImage = function(href, title, text){
    var img;

    var mde = MDe.parse(text);

    img  = '<img src="' + href + '"';
    img += mde.attrs ? mde.attrs : '';
    img += title ? '" title="' + title + '"' : '';
    img += '>' + mde.text + '</img>';

    return img;
  };

  return renderImage;
}