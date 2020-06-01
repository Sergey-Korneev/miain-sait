$(document).ready(function () {
    show();
    manu();
    $('.slider').slick({
        dots: true,
        slidesToShow:3,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    arrows: false,
                }
            },{
                breakpoint: 691,
                settings: {
                    arrows: false,
                    slidesToShow:1,
                }
            }
    ]
    });
});

function manu() {
    var manu = $('.menu-phone__menu-mobile');
    $(manu).click(function () { 
        $('.menu-phone__menu-slide').slideToggle();
    });     
}

function show() {
    $('.phone__button').click(function () {
        $('.form__phone').fadeIn();
        disableScrolling();
        $("body").css("overflow", "hidden");
        return false;
    })
    $('.form__phone').click(function (params) {
        if (params.target == this) {
            $(this).fadeOut(1000);
            enableScrolling();
            $("body").css("overflow", "auto");
        }
    });
    $('.button__qests').click(function () {
        $('.form__qests').fadeIn();
        disableScrolling();
        $("body").css("overflow", "hidden");
    })
    $('.form__qests').click(function (params) {
        if (params.target == this) {
            $(this).fadeOut(1000);
            enableScrolling();
            $("body").css("overflow", "auto");
        }
    });
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y)};
}

function enableScrolling(){
    window.onscroll=function(){};
}