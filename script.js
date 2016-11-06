$(document).ready(function() {

    

    $('a.page-scroll').on('click', function() {

	    var scrollAnchor = $(this).attr('href'),
	        scrollPoint = $(scrollAnchor).offset().top - 50;

	    $('body,html').animate({
	        scrollTop: scrollPoint
	    }, 1250, 'easeInOutExpo');

	    return false;

	});

	$(window).scroll(function() {

		// Get the current coordinate of the scroll
	    var windscroll = $(window).scrollTop();

	    if (windscroll >= 150) {
	        
	    	var currentSection = '';

	        //$('nav').addClass('fixed');

	        // We select all the sections of the website with jQuery
	        var listSection = $('section')

	        // We run this list by starting by the last section
	        // We leave the loop when we found the first section where
	        // the condition is true
	        for (var i = listSection.length - 1; i >= 0; i--) {

	        	if ($(listSection[i]).position().top - 150 <= windscroll ){

	        		currentSection = $(listSection[i]).attr('id');
	        		break;

	        	}

	        }

	        if (currentSection !== '') {

	        	// We remove the class active to all list a
	        	$('.main-nav .page-scroll').removeClass('active');

	        	// We add the class active to the link which has href attribute of the Section
	        	$('.main-nav .page-scroll[href="#' + currentSection +'"]').addClass('active')

	        }

	    } else {

	        //$('nav').removeClass('fixed');
	        //$('nav a.active').removeClass('active');
	        //$('nav a:first').addClass('active');
	    }

	}).scroll();


	$('.waypoint-js').waypoint(function(direction) {
        //$('.js--wp-1').addClass('animated fadeIn');
        $('#' + this.element.id).addClass('animated fadeIn');
        //console.log(this.element.id)
    }, {
        offset: '59%'
    })

});