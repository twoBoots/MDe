"use strict";

var MDe = require('./mde.js')

module.exports = function(options){

  var renderHeading = function(text, level){
    var heading;

    var mde = /\{(.+)\}/.exec(text);
    mde = mde ? MDe(mde['1']) : null;

    text = mde ? text.replace(/\{(.+)\}/,'').trim() : text;

    heading  = '<h' + level;
    heading += mde ? mde : '';
    heading += '>' + text + '</h' + level + '>';

    return heading;
  };

  return renderHeading;
}