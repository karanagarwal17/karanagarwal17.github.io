$(document).ready(function() {

	$('.lang-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.lang-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.web-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.web-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.fram-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.fram-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.fram-c-3').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.lib-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.lib-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.lib-c-3').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.data-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.data-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.othr-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.othr-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	/* for sticky navigation */
	$('.js--section-about').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	/* Animations on scroll */

	$('.js--wp-1').waypoint(function() {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js--wp-2').waypoint(function() {

		/* SKILLS ANIMATION */

		$('.lang-c-1').circleProgress({
			value: 0.85,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.lang-c-2').circleProgress({
			value: 0.75,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.web-c-1').circleProgress({
			value: 0.90,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.web-c-2').circleProgress({
			value: 0.85,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.fram-c-1').circleProgress({
			value: 0.75,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.fram-c-2').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.fram-c-3').circleProgress({
			value: 0.60,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-1').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-2').circleProgress({
			value: 0.55,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-3').circleProgress({
			value: 0.65,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.data-c-1').circleProgress({
			value: 0.85,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.data-c-2').circleProgress({
			value: 0.60,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.othr-c-1').circleProgress({
			value: 0.75,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.othr-c-2').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
	}, {
		offset: '50%'
	});

	$('.js--wp-3').waypoint(function() {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/*	Modal Popup */
	$('.item-wrap a').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade'
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/* for smooth scrolling */
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	/*----------------------------------------------------*/
	/*	Interests
	------------------------------------------------------*/

		var owl = $(".owl-carousel");
		owl.owlCarousel({
      dotsContainer: '#custom-dots',
      autoHeight: true,
      dots: true,
			autoplay: true,
			autoplayTimeout: 1000,
      items: 1,
      margin: 0,
      loop: true
    });
		
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

	$('form#contact-form input.submit').on('click', function() {
		$('#image-loader').fadeIn();
		var contactname = $('#contact-form #name').val();
		var contactEmail = $('#contact-form #email').val();
		var contactSubject = $('#contact-form #subject').val();
		var contactMessage = $('#contact-form #message').val();
		var data = 'contactname=' + contactname +
			'&contactEmail=' + contactEmail + '&contactSubject=' + contactSubject +
			'&contactMessage=' + contactMessage;
		$.ajax({
			type: "POST",
			url: "../form/sendEmail.php",
			data: data,
			success: function(msg) {
				// Message was sent
				if (msg == 'OK') {
					$('#image-loader').fadeOut();
					$('#message-warning').hide();
					$('#contactForm').fadeOut();
					$('#message-success').fadeIn();
				}
				// There was an error
				else {
					$('#image-loader').fadeOut();
					$('#message-warning').html(msg);
					$('#message-warning').fadeIn();
				}
			}
		});
		return false;
	});
});
