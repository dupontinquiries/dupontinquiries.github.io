var PassLib = {};

const kd = $('#keyfile_display');
const kt = $('#keyfile_text');
const kw = $('.keypad_wrapper');
const pa = $('#passcode_area');
const appear_elements = $('.appear');

Keypad.showKeypad = function() {
  // const pa = $('#passcode_area');
  // pa.text("");
  // const kw = $('.keypad_wrapper');
  kw.toggleClass('vis pop');
  appear_elements.toggleClass('appear');
}

const key_string = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
var page_key = "";
Keypad.page_key = "";
Keypad.page_passcode = "";
Keypad.ready = false;
Keypad.passcode_length = 6; //change to 7 maybe
PassLib.password_length = 55;
// was 30 (69^30 approx. eq. 1.4e55 combos)
// this means that if you can try 1trillion ops per second, it would take 4e34 centuries to guess all of them
// at 55, this now takes 4.3e80 centuries
// will have to verify the above statement as it was just napkin math
