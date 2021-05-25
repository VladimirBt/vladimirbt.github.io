$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

//Menu Burger
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let delay = 500;
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        if (!body.classList.contains('_wait')) {
            body_lock(delay);
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
};


function ibg() {
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

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

let deadLine = '2021-06-01';

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

setClock('timer', deadLine)









