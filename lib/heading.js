"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderHeading = function(text, level){
    var heading;

    var mde = MDe.parse(text)

    heading  = '<h' + level;

    if(mde.attrs && (mde.attrs.indexOf(' id="')<0)) {
      // add id if not present
      heading += ' id="' + mde.text.toLowerCase().trim().replace(/\<[^\>]*\>/g,'').replace(/[^a-zA-Z\d\s:\_\.]*/g,'').replace(/[^a-zA-Z\d]|[\ +]/g,'-') + '"';
    }

    heading += mde.attrs ? mde.attrs : ' id="' + mde.text.toLowerCase().trim().replace(/\<[^\>]*\>/g,'').replace(/[^a-zA-Z\d\s:\_\.]*/g,'').replace(/[^a-zA-Z\d]|[\ +]/g,'-') + '"';

    heading += '>' + mde.text + '</h' + level + '>';

    return heading;
  };

  return renderHeading;
}