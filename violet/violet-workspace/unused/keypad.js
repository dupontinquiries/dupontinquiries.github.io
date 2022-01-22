$(function() {

	// var passcode = "______";
	const kd = $('#keyfile_display');
	const kw = $('.keypad_wrapper');
	const pa = $('#passcode_area');
	const appear_elements = $('.appear');
	function showKeypad() {
		kw.toggleClass('vis pop');
		appear_elements.toggleClass('appear');
	}

	kd.on('click', function() {
		pa.text("");
		showKeypad();
	});

	$('.dial').on('click', function(e) {
		if (!$(this).hasClass('dial_clickable'))
			return;

		let passcode = $('#passcode_area').text();
		if ($(this).text() == '-') {
			if (passcode.length > 0)
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
		}
		// encrypt file

	});

})
