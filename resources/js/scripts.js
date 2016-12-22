$(document).ready(function(){

  /* for sticky navigation */
  $('.js--section-about').waypoint(function(direction){
    if (direction == "down"){
      $('nav').addClass('sticky');
    }
    else {
      $('nav').removeClass('sticky');
    }
  },{
    offset: '60px;'
  });

/* SKILLS ANIMATION */

  $('.lang-c-1').circleProgress({
    value: 0.75,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });

  $('.lang-c-2').circleProgress({
    value: 0.60,
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
    value: 0.80,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });

  $('.fram-c-1').circleProgress({
    value: 0.70,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });
  $('.fram-c-2').circleProgress({
    value: 0.65,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });
  $('.lib-c-1').circleProgress({
    value: 0.55,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });
  $('.lib-c-2').circleProgress({
    value: 0.70,
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
    value: 0.55,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });
  $('.plat-c-1').circleProgress({
    value: 0.65,
    size: 100,
    fill: {
      gradient: ["#3498db", "#3498db"]
    }
  });

	/*	Modal Popup */
    $('.item-wrap a').magnificPopup({
       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'
      });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });

    /* for smooth scrolling */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


});
