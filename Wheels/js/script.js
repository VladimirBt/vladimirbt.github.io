$('.wrapper').addClass('loaded');

$('.main-screen__menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

$('.menu__link').click(function(event) {
    $('.icon-menu').removeClass('active');
    $('.menu__body').removeClass('active');
    $('body').removeClass('lock');
});



$('.counter').countUp();

new WOW().init();

// ScrollTo

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//Menu Burger
let iconMenu = document.querySelector(".main-screen__menu");
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