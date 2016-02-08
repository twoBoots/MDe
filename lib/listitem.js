"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderListitem = function(text){
    var li;

    var mde = MDe.parse(text);

    li  = '<li';
    li += mde.attrs ? mde.attrs : '';
    li += '>' + mde.text + '</li>';

    return li;
  };

  return renderListitem;
}