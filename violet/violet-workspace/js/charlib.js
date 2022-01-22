var CharLib = {};

const char_map = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";

CharLib.char_map = char_map;

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
    let ch = char_map.charAt(arr[i] % arr.length);//String.fromCharCode(arr[i]);
    tmp_s += ch;
  }

  return tmp_s;
}
