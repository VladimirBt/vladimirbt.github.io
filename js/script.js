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


//Menu Burger
/* let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        if (!body.classList.contains('_wait')) {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
}; */


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

    /* $(window).on('scroll', function () {
            let scroll_top = $(this).scrollTop(),
            nav = $('.header__row');

            if (scroll_top > 10) {
                nav.removeClass('active')
            }
            else {
                nav.addClass('active');
            }
            if (scroll_top > $(window).scrollTop()) {
                nav.addClass('active');
            }

            
    }); */


    /* $(".menu__list").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    }); */

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



/* console.log($('#blog').position().top);

let positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку 
    links = $('.menu__link'); //сохраним массив всех a.scroll-to

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).offset().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

$(".anchor2").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top - 400,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse(); 
console.log(positions);
$(window).on('scroll',function() {
    let winTop = $(window).scrollTop();
    console.log(winTop);
    for(let i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){ //если прокрутка страницы ниже нашего блока
            if(currentActive !== i){ //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.filter('.active').removeClass('active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
}); */









