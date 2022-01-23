$(function() {

  $(document).keypress(function(e) {
    if ($(e.target).closest('input')[0])
      return;
    if (e.which == 109) { // m
      window.location.replace("make.html");
    }
    else if (e.which == 117) { // u
      window.location.replace("use.html");
    }
    else if (e.which == 104) { // h
			// go home
			window.location.replace("help.html");
		}
  });

})
