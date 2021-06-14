
$(document).ready(function() {

$('#spinner').show().delay(900).fadeOut();

$('#about').hide().delay(1100).fadeIn();

$('#main').hide().delay(1100).fadeIn();

$('#contact').hide().delay(1100).fadeIn();

document.body.style.overflow = "visible";


  var img = $("#golden"),
      delay = img.delay(1100),
      width = img.get(0).width,
      screenWidth = $(window).width(),
      duration = 9000;

  function animateGolden() {
      img.css("left", -width).animate({
          "left": screenWidth
      }, duration, animateGolden);
  }

  animateGolden();


});
