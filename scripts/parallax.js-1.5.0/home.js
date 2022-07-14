$(".bio__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--bio").offset().top
    }, 1000);
});

$(".skills__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--skills").offset().top
    }, 1000);
});

$(".projects__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--projects").offset().top
    }, 1000);
});

$(".contact__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--contact").offset().top
    }, 1000);
});