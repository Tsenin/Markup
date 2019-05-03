var slideIndex = 1;
showDivs(slideIndex);
autoSlider();

function plusDivs(n) {
    showDivs(slideIndex += n);
    clearInterval(timer);
    autoSlider();
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    clearInterval(timer);
    autoSlider();
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("point");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" red", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " red";
    setTimeout(function() {x[slideIndex - 1].style.opacity ="1"},0);
}

var timer;

function autoSlider() {
    timer = setInterval(function () {
        plusDivs(1);
    }, 10000);
}

