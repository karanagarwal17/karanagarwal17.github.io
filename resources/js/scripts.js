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

	$('.des-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.des-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.front-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.front-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});

	$('.back-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.back-c-2').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.back-c-3').circleProgress({
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

	$('.tool-c-1').circleProgress({
		value: 0,
		size: 100,
		fill: {
			gradient: ["#3498db", "#3498db"]
		}
	});
	$('.tool-c-2').circleProgress({
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
			value: 0.9,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.lang-c-2').circleProgress({
			value: 0.85,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.des-c-1').circleProgress({
			value: 0.90,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.des-c-2').circleProgress({
			value: 0.90,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.front-c-1').circleProgress({
			value: 0.75,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.front-c-2').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.back-c-1').circleProgress({
			value: 0.80,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.back-c-2').circleProgress({
			value: 0.80,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.back-c-3').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-1').circleProgress({
			value: 0.60,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-2').circleProgress({
			value: 0.80,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.lib-c-3').circleProgress({
			value: 0.60,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});

		$('.tool-c-1').circleProgress({
			value: 0.70,
			size: 100,
			fill: {
				gradient: ["#3498db", "#3498db"]
			}
		});
		$('.tool-c-2').circleProgress({
			value: 0.80,
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
			//autoplay: true,
			//autoplayTimeout: 1000,
      items: 1,
      margin: 0,
      loop: true
    });
});
