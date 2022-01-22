$(function() {
	const saltbox = $('#key-salt');
	const keybox = $('#key');
	const filebox = $('#key-file');
	const phrasebox = $('#phrase');
	const resultbox = $('#result-box');
	const convertbutton = $('#convert-password');
	const copybutton = $('#copy-password');
	const shbutton = $('#showhide');
	var key = "";
	var hidden = true;

	const fileInput2 = document.getElementById("key-file");
	function hideHints() {
		$('.hint').addClass('hint-hidden');
	}
	function toggleHidden() {
		if (hidden) {
			$('form input').attr('type', '');
			hidden = false;
		} else {
			$('form input').attr('type', 'password');
			hidden = true;
		}
	}
	function copyPass() {
		// var $temp = $("<input>");
		// $("body").append($temp);
		// $temp.val(resultbox.val()).select();
		// document.execCommand("copy");
		// $temp.remove();
		resultbox.select();
		document.execCommand("copy");
	}
	function handleUpload2 (event){
		// fetch the first file (the element could provide multiple files)
		var file = event.target.files[0];
		var reader = new FileReader();
		// use the textInput variable previously declared to update the text input
		reader.onload = (e) => { keybox.val(e.target.result); };
		// trigger the fileReader
		reader.readAsText(file);
	}
	function updateKey() {
    	key = $('#key-salt').val() + $('#key').val();
	}
    function updatePassword() {
    	var p = $('#phrase').val();
    	var shout = sha3_512(p).toString();
    	var output = '';
    	for (i = 0; i < 48/* shout.length */; ++i) {
    		output += key.charAt( ( (i ** 2) + parseInt(shout.charAt(i), 16) ) % key.length );
    	}
		$('#result-box').val(output);
    }
    convertbutton.on('click', updatePassword);
    phrasebox.on('change paste keyup', function() { updateKey(); updatePassword(); } );
    saltbox.on('change paste keyup', function() { updateKey(); updatePassword(); } );
    $('form').on('change paste keyup', hideHints);
    fileInput2.addEventListener('change', handleUpload2 );
    copybutton.on('click', copyPass );
    shbutton.on('click', toggleHidden );
})
