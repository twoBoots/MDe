"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderLink = function(href, title, text){
    var link;

    var mde = MDe.parse(text);

    link  = '<a';
    link += href.length > 0 ? ' href="' + href + '"' : '';
    link += mde.attrs ? mde.attrs : '';
    link += title ? '" title="' + title + '"' : '';
    link += '>' + mde.text + '</a>';

    return link;
  };

  return renderLink;
}
