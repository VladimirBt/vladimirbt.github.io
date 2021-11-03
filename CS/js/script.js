$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

$('.menu__link').click(function(event) {
    $(this).toggleClass('active');
    $('.icon-menu').toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
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
if($('.blog__row').length>0){
    $('.blog__row').slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    autopaySpeed: 3000,
    accessibility: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
  });
}


});


















/* 
$(document).ready(function(){
    $(".menu__list").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
});


$(document).ready(function(){
    $(".main__scrollBtn").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});


let positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку 
    links = $('.menu__link'); //сохраним массив всех a.scroll-to

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse(); 

$(window).on('scroll',function() {
    let winTop = $(window).scrollTop();
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
 */







$(document).ready(function(){



    // scroll menu
    let sections = $('.anchor'),
        nav = $('.menu__list, .main__scrollBtn ,.header__logo'),
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

   /*  $(document).ready(function(){
        $(".main__scrollBtn ,.header__logo").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 800);
        });
    }); */

    

});