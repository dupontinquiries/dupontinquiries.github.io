$(function() {
	// var passcode = "______";
	const kd = $('#keyfile_display');
	const kt = $('#keyfile_text');
	const kw = $('.keypad_wrapper');
	const pa = $('#passcode_area');
	const appear_elements = $('.appear');

	const key_string = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
	var page_key = "";

	function showKeypad() {
		kw.toggleClass('vis pop');
		appear_elements.toggleClass('appear');
	}

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
		// var tmp = getRandomDigit();
		// var cryptoRandom1 = window.crypto.getRandomValues(new Uint32Array(1))[0];
		// var cryptoRandom2 = window.crypto.getRandomValues(new Uint32Array(1))[0];
		// var cryptoRandom3 = window.crypto.getRandomValues(new Uint32Array(1))[0];
		// console.log(cryptoRandom1 * cryptoRandom2);
		// console.log(getRandomDigit());
	}

	function getRandomKey(l) {
		var tmp_key = "";
		for (var i = 0; i < l; ++i) {
			tmp_key += key_string[getRandomNumber(3) % key_string.length];
			// secureNumber += Math.pow(10, i) * getRandomDigit();
		}
		return tmp_key;
	}

	function updateKeyText(l, ww, hh) {
		// const ww = 3;
		// const hh = 3;
		var tmp_keyfile = "";
		kt.html("");
		for (var i = 0; i < hh; ++i) {
			for (var j = 0; j < ww; ++j) {
				var tmp_key_block = getRandomKey(5);
				tmp_keyfile += tmp_key_block;
				kt.html(kt.html() + tmp_key_block + "&nbsp;");
			}
			kt.html(kt.html() + "<br>");
		}
		for (var k = 0; k < l - (ww * hh * 5); ++k) {
			var tmp_key_block = getRandomKey(1);
			tmp_keyfile += tmp_key_block;
		}
		return tmp_keyfile;
	}

	function getCharCodes(s){
  	let charCodeArr = [];

		// for (var i = 0; i < s.length; ++i) {
		// 	let code = key_string.indexOf(s[i]);
	  //   charCodeArr.push(code);
		// }

   	for(let i = 0; i < s.length; i++){
    	let code = s.charCodeAt(i);
      charCodeArr.push(code);
    }

    return charCodeArr;
	}

	function getCharsFromCodes(arr){
		var tmp_s = "";

		// for (var i = 0; i < arr.length; ++i) {
		// 	let ch = key_string[arr[i]];
	  //   tmp_s += ch;
		// }

   	for(let i = 0; i < arr.length; ++i){
    	let ch = String.fromCharCode(arr[i]);
			// console.log(arr[i] + ' -> ' + ch); // works
      tmp_s += ch;
    }

    return tmp_s;
	}

	function encrypt(kk, pp) {
		return TEA.TEAencrypt(getCharCodes(kk),getCharCodes(pp));
		// ciphertext = CryptoJS.AES.encrypt(kk, pp).toString();
		// return Tea.encrypt(kk, pp);
		// return "encrypted";
	}

	function decrypt(kk, pp) {
		return TEA.TEAdecrypt(kk,pp);
	}

	page_key = updateKeyText(512, 3, 3);
	console.log(page_key);
	// console.log(updateKeyText(512, 3, 3));



	// console.log(getRandomKey(5));
	// console.log(getRandomNumber(5));
	// console.log(getRandomNumber(5));

	// $('body').on('click', function() {
	// 	console.log(pa.text());
	// });

	kd.on('click', function() {
		pa.text("");
		showKeypad();
	});

	// Function to download data to a file
	function download(data, filename, type) {
  	var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
      var a = document.createElement("a"),
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
		console.log(passcode);
		console.log(passcode.length);

		if (passcode.length === 6) {
			showKeypad()
			console.log('passcode is: ' + passcode);
			console.log('key starts as: ' + page_key.slice(0,5));
			// encrypt file (working)
			tmp_enc_arr = encrypt(page_key, pa.text());
			download(JSON.stringify(tmp_enc_arr), 'keyfile.json', 'json');

			// test decrypt // works
			test = JSON.parse(JSON.stringify(tmp_enc_arr));
			tmp1 = decrypt(test, getCharCodes(pa.text()));
			// console.log(tmp1);
			// console.log(getCharsFromCodes(tmp1));

		}
	});

})
