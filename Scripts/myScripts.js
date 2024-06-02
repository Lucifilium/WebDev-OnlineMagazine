// -------------------- Automatic Slideshow -------------------- //
// CODE ADAPTED FROM W3-SCHOOLS SLIDESHOW
var slideIndex = 1;
var t;

showSlides();

function plusSlides(n) {    
slideIndex = slideIndex + n;
clearTimeout(t);
showSlides(slideIndex);
console.log(slideIndex);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {

var i;
var slides = document.getElementsByClassName("mySlides");

if (n == undefined) {
    n = ++slideIndex;
}

if (n > slides.length) {
    slideIndex = 1;
}

if (n < 1) {
    slideIndex = slides.length
}

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}


if(slides[slideIndex - 1]){
slides[slideIndex - 1].style.display = "block";
t = setTimeout(showSlides, 5000);
  }
}

// -------------------- Open Confirmation Popup -------------------- //
function warning() {
  if(confirm("This will open Youtube, are you sure?")) {
    window.open(href="https://youtu.be/4i86Ckj8xKk");
  } else {
    return;
  }
}

function warning2() {
  if(confirm("This will open Youtube, are you sure?")) {
    window.open(href="https://youtu.be/Rhu12WRkNGA");
  } else {
    return;
  }
}

function social() {
  alert("This will lead to a social media page but it is not implemented.\n\nThank you for your patience!")
}

function alertPop() {
  alert("Thank you for subscribing!\nWe will send you an email shortly for confirmation!")
}

// -------------------- Read More/Less Button -------------------- //
// CODE FROM W3-SCHOOLS
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// -------------------- Popup -------------------- //
function newVideo() {
  window.open(src="Videos/Halo Infinite Story Trailer.mp4");
}
function newVideo2() {
  window.open(src="Videos/Battlefield 2042 Official Gameplay Trailer.mp4");
}

// -------------------- Back to Top -------------------- //
var topbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topPage() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
