var modal = document.getElementById("myModal");

function slide_keys(event) {
  if (modal.style.display == "block"){
    console.log(event.key);
    var x = event.key;
    if (x === "ArrowLeft"){
        plusSlides(-1);
        return false;
    }
    if(x === "ArrowRight"){
        plusSlides(1);
        return false;
    }
  }
  
}

function plusSlides(n) {
  // console.log("next");
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesuu");
  var dots = document.getElementsByClassName("imguu");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  modal.style.display = "block";
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
    dots[i].style.border = "0px solid black";
    dots[i].style.opacity = 1;
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  dots[slideIndex-1].style.opacity = 1;
  dots[slideIndex-1].style.border = "1px solid black";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
