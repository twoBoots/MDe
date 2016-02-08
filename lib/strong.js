"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderStrong = function(text){
    var strong;

    var mde = MDe.parse(text);

    strong  = '<strong';
    strong += mde.attrs ? mde.attrs : '';
    strong += '>' + mde.text + '</strong>';

    return strong;
  }

  return renderStrong;
}