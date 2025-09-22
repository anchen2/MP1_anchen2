/* Your JS here. */
console.log('Hello World!')

// ScrollFunction : NavBar
window.onscroll = function() {scrollFunction()};

const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const navText = document.getElementById("nav-text");

function scrollFunction() {
    if (window.scrollY > 80) {
        navText.style.fontSize = "1em";
        logo.style.fontSize = "1em";
    } else {
        navText.style.fontSize = "1.2em";
        logo.style.fontSize = "1.5em";
    }
}
////

// SlideFunction : Carousel

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
});

rightArrow.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

const dots = document.getElementById('dot1');
dots.addEventListener('click', () => {
    showSlides(slideIndex = 0);
});

const dots2 = document.getElementById('dot2');
dots2.addEventListener('click', () => {
    showSlides(slideIndex = 1);
});

const dots3 = document.getElementById('dot3');
dots3.addEventListener('click', () => {
    showSlides(slideIndex = 2);
});

// Mini Carousels

const carousels = document.querySelectorAll(".mini-carousel");

carousels.forEach(carousel => {
  const track = carousel.querySelector(".track");
  const leftArrow = carousel.querySelector(".mini-left");
  const rightArrow = carousel.querySelector(".mini-right");

  const scrollAmount = 300;

  rightArrow.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftArrow.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});

// Modal Pop-up

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var close = document.getElementsByClassName("close")[0];

var images = document.querySelectorAll(".popup-img");

images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";    
    modalImg.src = this.src;          
    captionText.innerHTML = this.alt; 
  }
});

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



