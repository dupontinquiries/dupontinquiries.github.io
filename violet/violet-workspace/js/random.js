var CharLib = {};

const char_map = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";


CharLib.getCharCodes = function(s){
  let charCodeArr = [];

  for(let i = 0; i < s.length; i++){
    let code = char_map.indexOf(s[i]);
    charCodeArr.push(code);
  }

  return charCodeArr;
}

CharLib.getCharsFromCodes = function(arr){
  var tmp_s = "";

  for(let i = 0; i < arr.length; ++i){
    let ch = char_map.charAt(arr[i]);//String.fromCharCode(arr[i]);
    tmp_s += ch;
  }

  return tmp_s;
}


CharLib.getCharCodes1 = function(s){
  let charCodeArr = [];

  for(let i = 0; i < s.length; i++){
    let code = s.charCodeAt(i);
    charCodeArr.push(code);
  }

  return charCodeArr;
}

CharLib.getCharsFromCodes1 = function(arr){
  var tmp_s = "";

  for(let i = 0; i < arr.length; ++i){
    let ch = String.fromCharCode(arr[i]);
    tmp_s += ch;
  }

  return tmp_s;
}
