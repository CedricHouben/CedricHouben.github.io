(function ($) {
  $(function () {

    $('.button-collapse').sideNav({closeOnClick: true,});
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel();
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 25) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
      $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
      }, 500);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space