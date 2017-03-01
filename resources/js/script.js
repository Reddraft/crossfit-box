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
        scrollTop: $('.js-section-plans').offset().top - 100
      },
      {
        duration: 1000,
        easing: 'linear'
      })
  });

  //-- go to section programs when click on Start training now button
  $('.js-scroll-to-programs').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js-section-programs').offset().top - 100
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
            scrollTop: target.offset().top - 100
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
  }, {
    offset: '200px;'
  });

  $('.js-wp-animate-heading-benefits').waypoint(function(direction) {
      $('.js-wp-animate-parragraph-benefits').addClass('animated fadeInUp');
  }, {
    offset: '200px;'
  });

  $('.js-wp-animate-heading-benefits').waypoint(function(direction) {
      $('.js-wp-animate-benefits-boxes').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });


});
