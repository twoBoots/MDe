"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderCell = function(text, meta){
    var cell = '';

    var align = meta.align ? ' style="text-align:' + meta.align + '"': '';

    var mde = MDe.parse(text);

    cell = meta.header ? '<th ' : '<td ';
    cell += mde.attrs ? mde.attrs : align;
    cell += '>';

    cell += mde.text;

    cell += meta.header ? '</th>' : '</td>';

    return cell;
  };

  return renderCell;
}