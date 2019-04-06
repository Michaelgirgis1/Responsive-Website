/*global $, document, window*/
$(document).ready(function () {
	'use strict';
	$('.carousel').carousel({
        interval: 2000
    });
	
	//show the tool box when click on the gear
	
	$('.gear-check').click(function () {
		
		$('.color-option').fadeToggle(500);
	});
	
	// Change Theme Color on Click
	
	var colotLi = $('.color-option ul li'),
		scrollButton = $("#scroll-top");
	
	colotLi
		.eq(0).css('backgroundColor', '#E41B17').end()
		.eq(1).css('backgroundColor', '#E426D5').end()
		.eq(2).css('backgroundColor', '#009AFF').end()
		.eq(3).css('backgroundColor', '#FFD500').end()
		.eq(4).css('backgroundColor', '#0cd3a7');
	
	colotLi.click(function () {
		
		/* search for link include attribute href and search in it word 'theme'
		and rechange href to attribute data value 
		*/
		$('link[href*="theme"]').attr('href', $(this).attr('data-value'));
		
		//console.log($(this).attr('data-value'));
	});
	// trigger nice scroll
	
	$("html").niceScroll({
		cursorcolor: '#E41B17',
		cursorwidth: '10px',
		cursorborder: '1px solid #E41B17'
	});
	
	// scroll button
	
   
	
	$(window).scroll(function () {
		
		if ($(this).scrollTop() >= 700) {
			scrollButton.show();
		} else {
			scrollButton.hide();
		}
	});
	
	scrollButton.click(function () {
		$("html, body").animate({scrollTop: 0}, 600);
	});
	
});


// Loading Screen 

$(window).on('load', function () {
	
	'use strict';
	
	//loading Elemants
	
	$('.loading-overlay .spinner').fadeOut(200, function () {
		
		$(this).parent().fadeOut(200, function () {
			
			//Show the scroll
			
			$("body").css("overflow", "auto");
			
		});
		
	});
	
	
});

/* or $(window).on('load', function () {
	
	'use strict';
	//loading Elemants
	
	$('.loading-overlay, .loading-overlay .spinner').fadeOut(1000, function () {
		
			//Show the scroll
			
		$("body").css("overflow", "auto");
	});
});*/



