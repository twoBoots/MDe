"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderEm = function(text){
    var em;

    var mde = MDe.parse(text);

    em  = '<em';
    em += mde.attrs ? mde.attrs : '';
    em += '>' + mde.text + '</em>';

    return em;
  };

  return renderEm;
}