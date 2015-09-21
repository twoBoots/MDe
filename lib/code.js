"use strict";

var MDe = require('./mde.js');

module.exports = function(options){
  var link = require('./link.js')(options);

  var linkRE = /(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g;
  var linkReplacer = function(){
    // argv = [match, m[0..n], offset, originalstring]
    // [text](link "optionaltitle")
    // m[1] = 'text'
    // m[3] = 'link'
    // m[6] = 'title'

    return link(arguments[4], arguments[7], arguments[2]);
  };

  var renderCode = function(code, language){
    var pre;

    var mde = /\{(.+)\}/.exec(language);
    mde = mde ? MDe(mde['1']) : null;

    language = mde ? language.replace(/\{(.+)\}/,'').trim() : language;

    pre  = '<pre><code';
    pre += mde ? mde : '';
    pre += '>';
    pre += options.linksInCode ? code.replace(linkRE, linkReplacer) : code;
    pre += '</code></pre>';

    return pre;
  };

  return renderCode;
};