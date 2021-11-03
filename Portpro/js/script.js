$('.wrapper').addClass('loaded');


//Menu Burger
$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});


$('.menu__link').click(function(event) {
    $('.icon-menu').removeClass('active');
    $('.menu__body').removeClass('active');
    $('body').removeClass('lock');
});



// ibg

function ibg() {
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();


// slick

$(document).ready(function(){
if($('.slider__body').length>0){
    $('.slider__body').slick({
    dots: true,
    arrows: false,
    autopaySpeed: 3000,
    accessibility: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {}  
      }]
  });
}
});



// timer

let deadLine = '2022-01-01';

function getTimerRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)) % 60),
    days = Math.floor((t/(1000*60*60*24)));

    return {
        'total' : t,
        'seconds' : seconds,
        'minutes' : minutes,
        'hours' : hours,
        'days' : days
    }
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
    seconds = timer.querySelector('.seconds'),
    minutes = timer.querySelector('.minutes'),
    hours = timer.querySelector('.hours'),
    days = timer.querySelector('.days');
    timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimerRemaining(endtime);
        seconds.textContent = t.seconds;
        minutes.textContent = t.minutes;
        hours.textContent = t.hours;
        days.textContent = t.days;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

}

setClock('timer', deadLine);


// Parallax


function goParallax () {
    if (innerWidth > 1800) {
        return
    } else if (innerWidth < 1800) {
        document.addEventListener('mousemove', parallax)
        const elem = document.querySelector('.main-screen')

        function parallax(e) {
            let w = window.innerWidth / 2
            let h = window.innerHeight / 2
            let mouseX = e.clientX
            let mouseY = e.clientY
            let x = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.03 }%`

            elem.style.backgroundPosition = x
        } 
    } 
}

goParallax()

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1800px)").matches) {
        goParallax()
    } else { 
        return
    }
});


