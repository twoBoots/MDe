"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderDel = function(text){
    var del;

    var mde = MDe.parse(text);

    del  = '<del';
    del += mde.attrs ? mde.attrs : '';
    del += '>' + mde.text + '</del>';

    return del;
  };

  return renderDel;
}