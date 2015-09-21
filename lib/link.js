"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderLink = function(href, title, text){
    var link;

    var mde = /\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

    link  = '<a href="' + href + '"';
    link += mde ? mde : '';
    link += title ? '" title="' + title + '"' : '';
    link += '>' + text + '</a>';

    return link;
  };

  return renderLink;
}
