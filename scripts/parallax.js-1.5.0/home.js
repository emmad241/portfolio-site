var hamburger = document.querySelector(".fa-bars");
var dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", function(){
  if(dropdown.style.display !== "none"){
    dropdown.style.display = "none";
  }else{
    dropdown.style.display = "block";
  }
});

$(".bio__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--bio").offset().top
    }, 1000);
    dropdown.style.display = "none";
});

$(".skills__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--skills").offset().top
    }, 1000);
    dropdown.style.display = "none";
});

$(".projects__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--projects").offset().top
    }, 1000);
    dropdown.style.display = "none";
});

$(".contact__link").click(function() {
    $([document.documentElement, document.body]).delay(150).animate({
      scrollTop: $("#invisible-link--contact").offset().top
    }, 1000);
    dropdown.style.display = "none";
});