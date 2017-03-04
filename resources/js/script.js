$(document).ready(function() {


  /***********************
  *** STICKY NAVIGATION **
  ************************/

  $('.js-section-benefits').waypoint(function(direction) {
    if (direction === 'down') {
      //fadeout hide the nav
      // nav must be fadeOut first in order to fadeIn
      $('nav').fadeOut(function() {
        // then add the sticky class to the nav while is hidden
        $(this).addClass('sticky');
      });
      //show the nav again with the class sticky already added
      $('nav').fadeIn(200);

    } else {
      //fadeout the nav again
      $('nav').fadeOut(200, function() {
        //remove the sticky class
        $(this).removeClass('sticky');
      });
      $('nav').fadeIn();
    }
  }, {
    offset: '100px;'
  });


  /******************************
  *** SCROLL ON HEADER BUTTONS **
  *******************************/

  //-- go to section plans when click on Start training now button
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js-section-plans').offset().top - 99
      },
      {
        duration: 1000,
        easing: 'linear'
      })
  });

  //-- go to section programs when click on Start training now button
  $('.js-scroll-to-register').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js-section-register').offset().top - 99
      },
      {
        duration: 1000,
        easing: 'linear'
      })
  });

  /**************************
  *** SCROLL ON NAVIGATION **
  **************************/
  /* https://css-tricks.com/snippets/jquery/smooth-scrolling */

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            //substract 100 to anchor 100px from the top
            scrollTop: target.offset().top - 99
          }, 1000);
          return false;
        }
      }
    });
  });


  /******************************
  *** ANIMATIONS ON SCROLLING **
  *******************************/

  // header animations
  $('.js-wp-animate-nav').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-text-box').addClass('animated fadeInUp');

  // benefits section animations
  $('.js-wp-animate-heading-benefits').waypoint(function(direction) {
      $('.js-wp-animate-heading-benefits').addClass('animated zoomIn');
      $('.js-wp-animate-parragraph-benefits').addClass('animated fadeInUp');
      $('.js-wp-animate-benefits-boxes').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });


  // programs section animations
  $('.js-wp-animate-heading-programs').waypoint(function(direction) {
      $('.js-wp-animate-heading-programs').addClass('animated zoomIn');
      $('.js-wp-animate-programs').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });

  // coach section animations
  $('.js-section-coach').waypoint(function(direction) {
      $('.js-wp-animate-coach-img').addClass('animated slideInLeft');
      $('.js-wp-animate-coach-heading').addClass('animated zoomIn');
      $('.js-wp-animate-coach-subtitle').addClass('animated fadeIn');
      $('.js-wp-animate-coach-parragraph').addClass('animated fadeIn');
      $('.js-wp-animate-coach-btn').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });

  // plans section animations
  $('.js-section-plans').waypoint(function(direction) {
      $('.js-wp-animate-plans-heading').addClass('animated zoomIn');
      $('.js-wp-animate-plans-box-1').addClass('animated fadeIn');
      $('.js-wp-animate-plans-box-2').addClass('animated fadeIn');
      $('.js-wp-animate-plans-box-3').addClass('animated fadeIn');
      $('.js-wp-animate-plans-box-special').addClass('animated shake');
  }, {
    offset: '200px;'
  });

  // testimonials section animations
  $('.js-section-testimonials').waypoint(function(direction) {
      $('.js-wp-animate-testimonial-heading').addClass('animated zoomIn');
      $('.js-wp-animate-testimonials-boxes').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });

  // registratiom section animations
  $('.js-section-register').waypoint(function(direction) {
      $('.js-wp-animate-register-heading').addClass('animated zoomIn');
      $('.js-wp-animate-register-parragraph').addClass('animated fadeIn');
      $('.js-wp-animate-register-form').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });


  /**************************
  **** MOBILE NAVIGATION ****
  **************************/

  $(window).resize(function(){
    var $nav = $('.js-main-nav');
    var $icon = $('.js-nav-icon i');

    if ($(window).width() > 767){
      $nav.css("display", "block");
      $icon.removeClass(' fa-bars');
      $icon.addClass('fa-times');
    } else {
      $nav.css("display", "none");
      $icon.removeClass(' fa-times');
      $icon.addClass('fa-bars');
    }

  });


  $('.js-nav-icon').click(function() {
      var $nav = $('.js-main-nav');
      var $icon = $('.js-nav-icon i');

      $nav.animate({width: 'toggle'});

      if ($icon.hasClass('fa-bars')) {
        $icon.removeClass('fa-bars');
        $icon.addClass('fa-times');

      } else  {
        $icon.removeClass('fa-times');
        $icon.addClass('fa-bars');
      }
  });

  $('.js-main-nav li a:link').click(function(){
    var $nav = $('.js-main-nav');
    var $icon = $('.js-nav-icon i');

    if ($(window).width() < 768){
      $nav.animate({width: 'toggle'});
    }

    if ($icon.hasClass('fa-bars')) {
      $icon.removeClass('fa-bars');
      $icon.addClass('fa-times');
    } else {
      $icon.removeClass('fa-times');
      $icon.addClass('fa-bars');
    }

  });

  /*********************************************************
   click instead of hover on program images on mobile device
  *********************************************************/

  [].slice.call( document.querySelectorAll('figure.program-photo figcaption a') ).forEach( function(el) {
    el.onclick = function() { return false; }
  } );

  /******************************
  *** GMAPS **
  *******************************/

  var map = new GMaps({
    div: '.map',
    lat: 32.873229,
    lng: -96.935465,
    zoom: 16,
    draggable: false,
    scrollwheel: false,
    resize: function() {
      this.setCenter({lat: 32.873229, lng: -96.935465 });
    },

    styles: [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#444444"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-65"
              },
              {
                  "lightness": "45"
              },
              {
                  "gamma": "1.78"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "-33"
              },
              {
                  "lightness": "22"
              },
              {
                  "gamma": "2.08"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "geometry",
          "stylers": [
              {
                  "gamma": "2.08"
              },
              {
                  "hue": "#ffa200"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.rail",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station.rail",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-55"
              },
              {
                  "lightness": "-2"
              },
              {
                  "gamma": "1.88"
              },
              {
                  "hue": "#ffab00"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#bbd9e5"
              },
              {
                  "visibility": "simplified"
              }
          ]
      }
    ]
  });

  map.addMarker({
    lat: 32.873229,
    lng: -96.935465,
    title: 'crossfitbox',
    click: function(e) {
      window.open('https://goo.gl/maps/rfWEk1G4yG62', '_blank');
    },
    icon: 'resources/img/marker.png',
    animation: google.maps.Animation.BOUNCE
  });

  var resizingTimeOut;
  $(window).resize(function() {
    clearTimeout(resizingTimeOut);
    resizingTimeOut = setTimeout(function() {
      map.refresh();
    }, 200);
  });


});
