"use strict";

var MDeRE = /[\\]?\{(.+)\}/;

module.exports = {
  parse: parseMDe
};

function clearMDe(str) {
  var MDeReplacer = function (){
    return arguments[0][0] === '\\' ? arguments[0].substring(1, arguments[0].length) : '';
  }

  return str.replace(MDeRE, MDeReplacer);
}

function parseMDe(str) {
  var mde = MDeRE.exec(str);

  return {
    attrs: (mde ? MDe(mde['1']) : null),
    text: (mde ? clearMDe(str).trim() : str)
  }
}

function MDe(str){
  if(str.length === 0){
    return null;
  }

  if(str[0] === '\\') {
    return null;
  }

  var attrs, mde = '';

  //string could be mdeshorthand or json
  var isJSON = (str[0] === '&'); //if json it's been escaped " => &quot;

  if(isJSON){
    // do longhand

    str = '{' + str.replace(/\&quot\;/gi,'"') + '}';

    try{
      attrs = JSON.parse(str);
      Object.keys(attrs).forEach(function(k){
        mde += ' ' + k + '="' + attrs[k] + '"';
      });
      return mde;
    }catch(e){
      return null;
    }
  }

  //do shorthand

  attrs = str.split('.');

  if(attrs[0][0] === '#'){
    mde = ' id="' + attrs[0].slice(1) + '" name="' + attrs[0].slice(1) + '"';
    attrs = attrs.slice(1);
  }

  if(attrs.length > 0){
    mde += ' class="' + attrs.join(' ').trim() + '"';
  }

  return mde;
}