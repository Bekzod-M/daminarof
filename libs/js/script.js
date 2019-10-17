// search
var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null
var touchorclick = (ismobile)? 'touchstart' : 'click'
var searchcontainer = document.getElementById('searchcontainer')
var searchfield = document.getElementById('search-terms')
var searchlabel = document.getElementById('search-label')

searchlabel.addEventListener(touchorclick, function(e){ // when user clicks on search label
    searchcontainer.classList.toggle('opensearch') // add or remove 'opensearch' to searchcontainer
    if (!searchcontainer.classList.contains('opensearch')){ // if hiding searchcontainer
        searchfield.blur() // blur search field
        e.preventDefault() // prevent default label behavior of focusing on search field again
    }
    e.stopPropagation() // stop event from bubbling upwards
}, false)

searchfield.addEventListener(touchorclick, function(e){ // when user clicks on search field
    e.stopPropagation() // stop event from bubbling upwards
}, false)

document.addEventListener(touchorclick, function(e){ // when user clicks anywhere in document
	searchcontainer.classList.remove('opensearch')
	searchfield.blur()
}, false)

// navbar

jQuery(function($) {
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >= 50) {
			$('.header').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.header').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
		dropdown = $('.dropdown'),
		dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 991) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
				.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
				.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
}); 

// topcontrol

let $btn = $('#topcontrol .btn-special');

$btn.on('click', function(){
	$('html').animate({
		scrollTop: 0
	}, 1000);
});


$(window).on('scroll', function(){
	if(scrollY > 800){
		$btn.fadeIn();
	}else{
		$btn.fadeOut();
	}
})

// owl-carousel
$('.carousel-main .owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	smartSpeed: 500,
	autoplay: true,
	nav:true,
	animateOut: 'fadeOut',
	items: 1
})

$( ".carousel-main .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".carousel-main .owl-next").html('<i class="fa fa-chevron-right"></i>');

$('.carousel-products .owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
})

$( ".carousel-products .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".carousel-products .owl-next").html('<i class="fa fa-chevron-right"></i>');

$('.carousel-blog .owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
})

$( ".carousel-blog .owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".carousel-blog .owl-next").html('<i class="fa fa-chevron-right"></i>');

$('.carousel-partners .owl-carousel').owlCarousel({
	loop:true,
	nav:false,
	dots: true,
	smartSpeed: 500,
	autoplay: true,
	responsive: {
		0:{
			items:1,
		},
		600:{
			items:2,
		},
		1000:{
			items:3,
		},
		1180:{
			items:4,
		}
	},
})

// AOS-animate

AOS.init({
	easing: 'ease-in-out-sine'
});
