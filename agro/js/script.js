$('.wrapper').addClass('loaded');

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


new WOW().init();

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
    adaptiveHeight: false,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {}  
      }]
  });
}

$(function () { 
    let target_block = $(".count"); // Ищем блок 
    let blockStatus = true;  
    $(window).scroll(function() { 
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height() / 1.1)); 
        if(scrollEvent && blockStatus) {  
            blockStatus = false; 
            $('.count').each(function() {
                $(this).prop('Counter',0).animate({
                    Counter:$(this).text()
                
                },{
                    duration: 4000,
                    easing: 'swing',
                    step:function(now){
                        $(this).text(Math.ceil(now));
                    }    
                })
            })
    } 
    }); 
}); 


});

$(document).ready(function(){

    let header = $('.header'),
		scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
        scrollPrev = scrolled;
    });

    // scroll menu
    let sections = $('.anchor'),
        nav = $('.menu__list'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        let cur_pos = $(this).scrollTop();

        sections.each(function () {
            let top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        let $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 900);

        return false;
    });
});