"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderCell = function(content, meta){
    var cell = '';

    var align = meta.align ? ' style="text-align:' + meta.align + '"': '';

    var mde = /(?:[^\\][\{])(.+)\}/.exec(content);
    mde = mde ? MDe(mde['1']) : null;

    content = mde ? content.replace(/(?:[^\\][\{])(.+)\}/,'').trim() : content;

    cell = meta.header ? '<th ' : '<td ';
    cell += mde ? mde : align;
    cell += '>';

    cell += content;

    cell += meta.header ? '</th>' : '</td>';

    return cell;
  };

  return renderCell;
}