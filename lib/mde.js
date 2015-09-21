"use strict";


module.exports = MDe;

function MDe(str){
  if(str.length === 0){
    return null;
  }

  var attrs, mde;

  //string could be mdeshorthand or json
  var isJSON = (str[0] === '"');

  if(isJSON){

    str = '{' + str + '}';

    try{
      attrs = JSON.parse(str);
      // do longhand
      return ' data-longhand="todo"';
    }catch(e){
      return null;
    }
  }

  //do shorthand

  attrs = str.split('.');
  mde = '';

  if(attrs[0][0] === '#'){
    mde = ' id="' + attrs[0].slice(1) + '" name="' + attrs[0].slice(1) + '"';
    attrs = attrs.slice(1);
  }

  mde += ' class="' + attrs.join(' ').trim() + '"';

  return mde;
}