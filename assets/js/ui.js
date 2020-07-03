/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // Sticky header
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var stickyHeader = function() {
      if(height  > 0) {
        $(".header").addClass("sticky");
      } else{
        $(".header").removeClass("sticky");
      }
    };
    // console.log(height)

    stickyHeader();
  })
});
