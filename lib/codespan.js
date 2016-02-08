"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderCodespan = function(code){
    var codespan;

    var mde = MDe.parse(code);

    codespan  = '<code';
    codespan += mde.attrs ? mde.attrs : '';
    codespan += '>' + mde.text + '</code>';

    return codespan;
  };

  return renderCodespan;
}