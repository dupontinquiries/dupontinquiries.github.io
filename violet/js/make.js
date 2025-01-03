$(function() {
	// var passcode = "______";
	const kd = $('#keyfile_display');
	const kt = $('#keyfile_text');
	const kw = $('.keypad_wrapper');
	const pa = $('#passcode_area');
	const appear_elements = $('.appear');

	const key_string = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
	var page_key = "";

	function getRandomDigit() {
		return Math.floor( 10 * (window.crypto.getRandomValues(new Uint32Array(1))[0]) / (Math.pow(2, 32) - 1) );
		// var cryptoRandom2 = window.crypto.getRandomValues(new Uint32Array(1))[0];
	}

	function getRandomNumber(l) {
		var secureNumber = 0;
		for (var i = 0; i < l; ++i) {
			secureNumber += Math.pow(10, i) * getRandomDigit();
		}
		return secureNumber;
	}

	function getRandomKey(l) {
		var tmp_key = '';
		for (var i = 0; i < l; ++i) {
			tmp_key += key_string[getRandomNumber(3) % key_string.length];
		}
		return tmp_key;
	}

	function updateKeyText(l, ww, hh) {
		var tmp_keyfile = "";
		kt.html("");
		for (var i = 0; i < hh; ++i) {
			for (var j = 0; j < ww; ++j) {
				var tmp_key_block = getRandomKey(5);
				tmp_keyfile += tmp_key_block;
				kt.html(kt.html() + tmp_key_block + '&nbsp;');
			}
			kt.html(kt.html().slice(0,-6) + '<br>');
		}
		for (var k = 0; k < l - (ww * hh * 5); ++k) {
			var tmp_key_block = getRandomKey(1);
			tmp_keyfile += tmp_key_block;
		}
		return tmp_keyfile;
	}

	function getRandomKeyBasic(l) {
		var tmp_key = '';
		for (var i = 0; i < l; ++i) {
			tmp_key += CharLib.char_map_basic[getRandomNumber(3) % CharLib.char_map_basic.length];
		}
		return tmp_key;
	}

	function updateKeyTextSimplified(l, ww, hh) {
		var tmp_keyfile = "";
		kt.html("");
		for (var i = 0; i < hh; ++i) {
			for (var j = 0; j < ww; ++j) {
				var tmp_key_block = getRandomKeyBasic(5);
				tmp_keyfile += tmp_key_block;
				kt.html(kt.html() + tmp_key_block + '&nbsp;');
			}
			kt.html(kt.html().slice(0,-6) + '<br>');
		}
		for (var k = 0; k < l - (ww * hh * 5); ++k) {
			var tmp_key_block = getRandomKeyBasic(1);
			tmp_keyfile += tmp_key_block;
		}
		return tmp_keyfile;
	}

	// take in strings
	function encrypt(kk, pp) {
		return CryptoJS.AES.encrypt(kk, pp);
		// return TEA.TEAencrypt(CharLib.getCharCodes(kk), CharLib.getCharCodes(pp));
	}

	// takes in arrays of numbers
	function decrypt(kk, pp) {
		return CryptoJS.AES.decrypt(kk, pp);
		// return TEA.TEAdecrypt(kk,pp);
	}

	page_key = updateKeyText(512, 3, 3);
	// console.log(page_key);
	// console.log(updateKeyText(512, 3, 3));

	kd.on('click', function() {
		Keypad.showKeypad();
	});

	// Function to download data to a file
	function download(data, filename, type) {
  	var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
      var a = document.createElement('a'),
      	url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
  	}
	}

	function encrypt(word, key) {
		let encJson = CryptoJS.AES.encrypt(JSON.stringify(word), key).toString();
		let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
		return encData;
	}

	function decrypt(word, key) {
		let decData = CryptoJS.enc.Base64.parse(word).toString(CryptoJS.enc.Utf8);
		let bytes = CryptoJS.AES.decrypt(decData, key).toString(CryptoJS.enc.Utf8);
		return JSON.parse(bytes);
	}

	$('.dial').on('click', function() {
		if (Keypad.ready) {
			let encJson = CryptoJS.AES.encrypt(JSON.stringify(page_key), pa.text()).toString();
			var json_data = { encKey: encrypt(page_key, Keypad.page_passcode), passcode_length: Keypad.page_passcode.length };
			console.log(json_data);
			download(JSON.stringify(json_data), 'keyfile.json', 'json');
		}
	});

	$(document).keypress(function(e) {
		if ($(e.target).closest('input')[0])
	    return;
		// console.log([e.which]);
		if (e.which == 104) { // h
			// go home
			// window.location.replace("index.html");
			$('#goto_home').click();
		}
		else if (e.which == 101) { // e
			$('#keyfile_text').click();
		}
		else if (e.which == 114) { // r
			page_key = updateKeyText(512, 3, 3);
		}
		else if (e.which == 115) {// s
			page_key = updateKeyTextSimplified(512, 3, 3);
		}
	});

	// // INIT
	// var myString   = "keyfile";
	// var myPassword = "aulbbcu!dbdbmcuajlgddbi";

	// // PROCESS
	// var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
	// var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);

	// console.table([myString, encrypted.toString(), decrypted.toString(CryptoJS.enc.Utf8)]);

})
