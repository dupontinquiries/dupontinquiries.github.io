$(function() {
	// var passcode = "______";
	// need keypad
	// need file upload, salt (hidden away on the side), passphrase box, & result box

	const key_string = CharLib.char_map; //"abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
	// move key_string into separate js file if it is used in both make & use, but unlikely since key is supposed to be from file (maybe make this the default key???)
	var page_key = "";
	var page_key_arr = [];

	// steps:
	// need to show keypad when user clicks file upload
	// -check if key is correct and show error if not until they get right code
	// collapse keypad
	//
	// check for updates to phrasebox and run sha3 mapping

	$('#file_input').on('click', function() {
		Keypad.showKeypad();
	});

	// needed for loading keyfile
	function decrypt(kk, pp) {
		return TEA.TEAdecrypt(kk,pp);
	}

	// can put click events here

	function handleUpload (event){
		// if (has_uploaded)
		// 	return
		var file = event.target.files[0];
		// var file = $('#file_input').files[0];
		var reader = new FileReader();
		reader.onload = (e) => {
			page_key_arr = JSON.parse(e.target.result);
		};
		reader.readAsText(file);
	}

	// var has_uploaded = false;
	// updates the page_key_arr to match the file contents
	document.getElementById('file_input').addEventListener('change', function(e) {
		page_key = '';
		page_key_arr = [];
		handleUpload(e);
		$('#passphrase_box').text('');
	});

	$('#passphrase_box').on('change paste keyup', function() {
		// decrypt the arr
		if (!page_key) {
			// handleUpload(e);
			// arr is still encrypted; we need to decrypt it using tea
			page_key = CharLib.getCharsFromCodes (decrypt(page_key_arr, CharLib.getCharCodes( Keypad.page_passcode )) );
		}
		// use the key
		var p = $('#passphrase_box').val();
		// console.log('key: ' + page_key);
		// console.log('p: ' + p);
		var shout = sha3_512(p).toString();
		var output = '';
		for (var i = 0; i < 32; ++i) {
			output += page_key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % page_key.length );
		}
		// console.log('result: ' + output);
		$('#password_box').val(output);
	});

	$('.dial').on('click', function() {
		console.log(Keypad.page_passcode);
		$('#passcode_area').text(Keypad.page_passcode);
	});

	// var shout = sha3_512(p).toString();
	// var output = '';
	// for (i = 0; i < 48/* shout.length */; ++i) {
	// 	output += key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % key.length );
	// }

})
