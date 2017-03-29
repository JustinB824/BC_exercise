'use strict';
      
$(function(){

	$('#logo').on('click', function() {
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	$('#button-demo').on('click', function() {
		$("html, body").animate({ scrollTop: $('#demo').offset().top }, 1000);
		return false;
	});

	$('#request-form').submit(function() {
		alert('Show me a DEMO!!');
		return false;
	});
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('header').addClass('small');
	} else {
		$('header').removeClass('small');
	}
});