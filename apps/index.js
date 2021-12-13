window.onscroll = function() {myFunction()};

var header = document.getElementById("nav-desk");
var sticky = header.offsetTop;
var dropdown = document.getElementById("hamburger");
var mobilenav = document.getElementById("mobile-nav");
var navarrow = document.getElementById("nav-arrow");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

dropdown.addEventListener("click",function(){
  if (mobilenav.style.display == "flex") {
    mobilenav.style.display = "none"
    navarrow.style.display = "none"
  }
  else {
    mobilenav.style.display = "flex"
    navarrow.style.display = "block"
  }
})