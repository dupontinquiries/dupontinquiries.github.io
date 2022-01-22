$(function() {
	// var passcode = "______";
	// need keypad
	// need file upload, salt (hidden away on the side), passphrase box, & result box

	const key_string = "abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
	// move key_string into separate js file if it is used in both make & use, but unlikely since key is supposed to be from file (maybe make this the default key???)
	var page_key = "";
	var page_key_arr = [];

	// steps:
	// need to show keypad when user clicks file upload
	// -check if key is correct and show error if not until they get right code
	// collapse keypad
	//
	// check for updates to phrasebox and run sha3 mapping

	// function showKeypad() {
	// 	kw.toggleClass('vis pop');
	// 	appear_elements.toggleClass('appear');
	// }

	$('#file_input').on('click', function() {
		Keypad.showKeypad();
	});

	// needed for keypad validation
	function getCharCodes(s){
  	let charCodeArr = [];

   	for(let i = 0; i < s.length; i++){
    	let code = s.charCodeAt(i);
      charCodeArr.push(code);
    }

    return charCodeArr;
	}

	function getCharsFromCodes(arr){
		var tmp_s = "";

   	for(let i = 0; i < arr.length; ++i){
    	let ch = String.fromCharCode(arr[i]);
			// console.log(arr[i] + ' -> ' + ch); // works
      tmp_s += ch;
    }

    return tmp_s;
	}

	// needed for loading keyfile
	function decrypt(kk, pp) {
		return TEA.TEAdecrypt(kk,pp);
	}

	// can put click events here

	// $('.dial').on('click', function(e) {
	// 	if (!$(this).hasClass('dial_clickable'))
	// 		return;
	//
	// 	let passcode = $('#passcode_area').text();
	// 	if ($(this).text() == '-') {
	// 		if (passcode != "______" && passcode.length > 0)
	// 			passcode = passcode.slice(0,-1);
	// 	} else {
	// 		if (passcode == "______")
	// 			passcode = $(this).text();
	// 		// else if (passcode.lenght < 6)
	// 		else
	// 			passcode += $(this).text();
	// 	}
	//
	// 	pa.text(passcode);
	// 	console.log(passcode);
	// 	console.log(passcode.length);
	//
	// 	if (passcode.length === 6) {
	// 		showKeypad()
	// 		console.log('passcode is: ' + passcode);
	// 		console.log('key starts as: ' + page_key.slice(0,5));
	// 		// encrypt file (working)
	// 		tmp_enc_arr = encrypt(page_key, pa.text());
	// 		download(JSON.stringify(tmp_enc_arr), 'keyfile.json', 'json');
	//
	// 		// test decrypt // works
	// 		test = JSON.parse(JSON.stringify(tmp_enc_arr));
	// 		tmp1 = decrypt(test, getCharCodes(pa.text()));
	// 		// console.log(tmp1);
	// 		// console.log(getCharsFromCodes(tmp1));
	//
	// 	}
	// });

	function handleUpload (event){
		// if (has_uploaded)
		// 	return
		var file = event.target.files[0];
		var reader = new FileReader();
		reader.onload = (e) => {
			// console.log(e.target.result); // works
			page_key_arr = JSON.parse(e.target.result);
			// console.log(page_key_arr); // works
			// var tmp1 = decrypt(page_key_arr, getCharCodes('000000'));
			// console.log(tmp1);
			// console.log(getCharsFromCodes(tmp1));
			// has_uploaded = true;
		};
		reader.readAsText(file);
	}

	// var has_uploaded = false;
	// updates the page_key_arr to match the file contents
	document.getElementById('file_input').addEventListener('change', handleUpload );

	$('#passphrase_box').on('change paste keyup', function() {
		// decrypt the arr
		if (!page_key) {
			// arr is still encrypted; we need to decrypt it using tea
			page_key = getCharsFromCodes (decrypt(page_key_arr, getCharCodes( Keypad.page_passcode )) );
		}
		// use the key
		var p = $('#passphrase_box').val();
		console.log('key: ' + page_key);
		console.log('p: ' + p);
		var shout = sha3_512(p).toString();
		var output = '';
		for (var i = 0; i < 32; ++i) {
			output += page_key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % page_key.length );
		}
		console.log('result: ' + output);
		$('#password_box').val(output);
	});

	// var shout = sha3_512(p).toString();
	// var output = '';
	// for (i = 0; i < 48/* shout.length */; ++i) {
	// 	output += key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % key.length );
	// }

})
