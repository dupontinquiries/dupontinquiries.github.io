$(function() {
	// var passcode = "______";
	// need keypad
	// need file upload, salt (hidden away on the side), passphrase box, & result box

	const password_lenght = 30;

	const key_string = CharLib.char_map; //"abcdefghijklmnopqrstuvwxyz1234567890!?@&^*-_YFGCRLAOEUIDHTNSQJKXBMWVZ";
	// move key_string into separate js file if it is used in both make & use, but unlikely since key is supposed to be from file (maybe make this the default key???)
	var page_key = "";
	// var page_key_arr = [];
	// var page_key_enc;
	var json_data = {};

	// steps:
	// need to show keypad when user clicks file upload
	// -check if key is correct and show error if not until they get right code
	// collapse keypad
	//
	// check for updates to phrasebox and run sha3 mapping

	$('#file_input').on('click', function() {
		Keypad.showKeypad();
	});

	// can put click events here

	function handleUpload (event){
		// if (has_uploaded)
		// 	return
		var file = event.target.files[0];
		// var file = $('#file_input').files[0];
		var reader = new FileReader();
		reader.onload = (e) => {
			json_data = JSON.parse(e.target.result);
			Keypad.passcode_length = json_data.passcode_length;
			// console.log(json_data);
			// console.log(
			// 	CryptoJS.AES.decrypt(json_data.key.toString(), '111111' ).toString(CryptoJS.enc.Utf8)
			// );
		};
		reader.readAsText(file);
	}

	// var has_uploaded = false;
	// updates the page_key_arr to match the file contents
	document.getElementById('file_input').addEventListener('change', function(e) {
		// page_key = '';
		// page_key_arr = [];
		handleUpload(e);
		// $('#passphrase_box').text('');
	});

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

	$('#passphrase_box').on('change paste keyup', function() {
		// decrypt the arr
		if (!page_key && Keypad.ready) {
			// handleUpload(e);
			// arr is still encrypted; we need to decrypt it using aes
			page_key = decrypt(json_data.encKey, Keypad.page_passcode.toString() );
			Keypad.page_key = page_key;
			if ( $.isNumeric( $('#passphrase_box').val() ) )
				$('#passphrase_box').val(''); // clears the passphrase box for user
		}
		// use the key
		// cannot be Keypad.page_passcode or else it becomes static
		var p = $('#passphrase_box').val();
		var shout = sha3_512(p).toString();
		var output = '';
		for (var i = 0; i < password_lenght; ++i) {
			output += page_key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % page_key.length );
		}
		$('#password_box').val(output);
	});

	// var shout = sha3_512(p).toString();
	// var output = '';
	// for (i = 0; i < 48/* shout.length */; ++i) {
	// 	output += key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % key.length );
	// }

	$('.dial').on('click', function(e) {
		if (Keypad.ready) {
			$('#passphrase_box').select();
			return false;
		}
	});

	$('#copy_password').on('click', function() {
		$('#password_box').select();
		document.execCommand("copy");
	} );

	$(document).keypress(function(e) {
		if ($(e.target).closest('input')[0]) {
			if (e.which == 13) { // enter
				if (e.target.id == 'passphrase_box')
					$('#copy_password').click();
				else
					$('#goto_home').click();
				// document.execCommand('copy');
			}
			else {
				return;
			}
		}
		if (e.which == 104) { // h
			// go home
			// window.location.replace("index.html");
			$('#goto_home').click();
		}
		else if (e.which == 117) { // u
			$('#file_input').click();
		}
		else if (e.which == 112) { // p
			$('#passphrase_box').select();
			return false;
		}
		else if (e.which == 99) { // c
			$('#copy_password').click();
			return false;
		}
	});


})
