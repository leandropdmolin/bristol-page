$(document).ready(function() {
  $(window).scroll(function() {
    var window_scrolltop = $(this).scrollTop();

    /****************************************
      SCROLL TOP
    *****************************************/
    if (window_scrolltop > 100) {
      $(".scrollTop").css("opacity", "1");
    } else {
      $(".scrollTop").css("opacity", "0");
    }

    /****************************************
      HIDEME
    *****************************************/

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = window_scrolltop + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });

    /****************************************
      PARALLAX
    *****************************************/

    // Go through each element .parallax
    $('.parallax').each(function() {
      var obj = $(this);
      // stop parallax in small devices
      if ($(window).width() >= 1024) {
        // we can work just with the visible element on screen
        if (window_scrolltop >= obj.position().top - obj.height() &&
          window_scrolltop <= obj.position().top + obj.height()) {

          // data-divisor defines the effect speed
          var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor');

          // fix the difference on first element
          if (obj[0].className == "parallax img1") {
            var bg_pos = (window_scrolltop - obj.position().top) / divisor;
          } else {
            var bg_pos = (window_scrolltop - obj.position().top + (obj.height() - 100)) / divisor;
          }

          //Changes background position
          obj.css({
            'background-position': '50% -' + bg_pos + 'px'
          });
        }
      } else {
        // reset background position
        obj.css({
          'background-position': '50% 0px'
        });
      }
    });
  });

  //Click event to scroll to top
  $(".scrollTop").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });
});