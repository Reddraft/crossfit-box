$(document).ready(function() {

/* SAMPLE
// $('.js-section-benefits').waypoint(function(direction) {
//   if (direction === 'down') {
//     $('nav').addClass('sticky');
//   } else {
//     $('nav').removeClass('sticky');
//   }
// }, {
//   offset: '100px';
// });

*/
  /***********************
  *** STICKY NAVIGATION **
  ************************/

  $('.js-section-benefits').waypoint(function(direction) {
    if (direction === 'down') {
      //fadeout hide the nav
      // nav must be fadeOut first in order to fadeIn
      $('nav').fadeOut(400, function() {
        // then add the sticky class to the nav while is hidden
        $(this).addClass('sticky');
      });
      //show the nav again with the class sticky already added
      $('nav').fadeIn(400)

    } else {
      //fadeout the nav again
      $('nav').fadeOut(400,function() {
        //remove the sticky class
        $(this).removeClass('sticky');
      });
    }
  }, {
    offset: '100px;'
  });


});
