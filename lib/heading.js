"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderHeading = function(text, level){
    var heading;

    var mde = /\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

    heading  = '<h' + level;

    if(mde && (mde.indexOf(' id="')<0)) {
      // add id if not present
      heading += ' id="' + text.toLowerCase().trim().replace(/\<[^\>]*\>/g,'').replace(/[^a-zA-Z\d\s:\_\.]*/g,'').replace(/[^a-zA-Z\d]|[\ +]/g,'-') + '"';
    }

    heading += mde ? mde : ' id="' + text.toLowerCase().trim().replace(/\<[^\>]*\>/g,'').replace(/[^a-zA-Z\d\s:\_\.]*/g,'').replace(/[^a-zA-Z\d]|[\ +]/g,'-') + '"';

    heading += '>' + text + '</h' + level + '>';

    return heading;
  };

  return renderHeading;
}