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
  var $logo = $('.js-logo')
  var $nav = $('.js-main-nav');
  var $navLinks = $('.js-main-nav li a:link');
  var $icon = $('.js-nav-icon i');

  $($icon).click(function() {

    if($icon.hasClass('fa fa-bars')) {
      $(this).removeClass('fa fa-bars');
      $(this).addClass('fa fa-times');
    } else {
      $(this).removeClass('fa fa-times');
      $(this).addClass('fa fa-bars');
    }
    
    $nav.animate({width:'toggle'},350)

  });

  $($navLinks).click(function() {
    if($icon.hasClass('fa fa-times')) {
      $icon.removeClass('fa fa-times');
      $icon.addClass('fa fa-bars');
      $nav.animate({width:'toggle'},350);
    }
  });

  $($logo).click(function() {
    if($icon.hasClass('fa fa-times')) {
      $icon.removeClass('fa fa-times');
      $icon.addClass('fa fa-bars');
      $nav.slideUp();
    }
  });

  /**************************
   click instead of hover
  on program images on
  mobile device
  **************************/

  [].slice.call( document.querySelectorAll('figure.program-photo figcaption a') ).forEach( function(el) {
    el.onclick = function() { return false; }
  } );


});
