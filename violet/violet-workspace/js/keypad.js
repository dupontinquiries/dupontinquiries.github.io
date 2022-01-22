var Keypad = {};

const kd = $('#keyfile_display');
const kt = $('#keyfile_text');
const kw = $('.keypad_wrapper');
const pa = $('#passcode_area');
const appear_elements = $('.appear');

Keypad.showKeypad = function() {
  // const pa = $('#passcode_area');
  pa.text("");
  // const kw = $('.keypad_wrapper');
  kw.toggleClass('vis pop');
  appear_elements.toggleClass('appear');
}


const key_string = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
var page_key = "";
Keypad.page_key = "";
Keypad.page_passcode = "";

$('.dial').on('click', function(e) {
  if (!$(this).hasClass('dial_clickable'))
    return;

  let passcode = $('#passcode_area').text();
  if ($(this).text() == '-') {
    if (passcode != "______" && passcode.length > 0)
      passcode = passcode.slice(0,-1);
  } else {
    if (passcode == "______")
      passcode = $(this).text();
    // else if (passcode.lenght < 6)
    else
      passcode += $(this).text();
  }

  pa.text(passcode);

  if (passcode.length == 6) { // close keypad
    Keypad.showKeypad();
    Keypad.page_passcode = passcode;
    // Keypad.page_key = passcode;
    // console.log('passcode is: ' + passcode);
    // console.log('key starts as: ' + page_key.slice(0,5));
    // encrypt file (working)
    // tmp_enc_arr = encrypt(page_key, pa.text());
    // download(JSON.stringify(tmp_enc_arr), 'keyfile.json', 'json');
    //
    // // test decrypt // works
    // test = JSON.parse(JSON.stringify(tmp_enc_arr));
    // tmp1 = decrypt(test, getCharCodes(pa.text()));
    // console.log(tmp1);
    // console.log(getCharsFromCodes(tmp1));

  }
});

// $(function() {
// })
