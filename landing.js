//begin tags
(function($) {
	'use strict';
//vars below [begin tags]

//load
$(window).on( "load", function(){
//processes below [load]
	$('#lego').on('click', function(){
		$('body').animate({
		scrollTop: '' + 195 + 'px'
		},
		{
		easing: 'swing',
		duration: 500,
		complete: function(){
		}
		});
	});
//jquery end tags
});
})(jQuery); //end of load reqs
//functions below [end tags]
