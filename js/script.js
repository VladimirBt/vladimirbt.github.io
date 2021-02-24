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


/* $(document).on('click', 'ul li a', function() {
    $(this).addClass('active').siblings().removeClass('active')
});
 */

$(document).ready(function(){
    $(".menu__list").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
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