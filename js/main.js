$(document).ready(function () {
    $('.genomed-team__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev-custom"></button>',
        nextArrow: '<button type="button" class="slick-next-custom"></button>',
        responsive: [
            {
                breakpoint: 1100.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});

/*скрипт бургер меню */

let burger = document.getElementById('dropdownMenu');
dropdownMenu.onclick = function myFunction() {

    let x = document.getElementById('myTopnav');
    if (x.className === "header__menu-top") {
        x.className += " responsive";
        burger.classList.toggle('burger_active');
    } else {
        x.className = "header__menu-top";
        burger.classList.toggle('burger_active');
    }
}


if (window.innerWidth < 992) {
    $(".header__menu-top-wrap li a").click(function () {
        let x = document.getElementById('myTopnav');
        if (x.className === "header__menu-top") {
            x.className += " responsive";
            burger.classList.toggle('burger_active');
        } else {
            x.className = "header__menu-top";
            burger.classList.toggle('burger_active');
        }
    });
}






/*скрипт скролла шапки*/

$(".header__menu-top-wrap li a").click(function () {
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({ scrollTop: $(anchor).offset().top - 164 }, 700);
    e.preventDefault();
    return false;
});


/*кастомный select*/

$('.select').on('click', '.placeholder', function () {
    var parent = $(this).closest('.select');
    if (!parent.hasClass('is-open')) {
        parent.addClass('is-open');
        $('.select.is-open').not(parent).removeClass('is-open');
    } else {
        parent.removeClass('is-open');
    }
}).on('click', 'ul>li', function () {
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text($(this).text());
});


/*скрипт для слайдера*/

$(document).ready(function () {
    $('.products-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev-custom" id="product-prev"></button>',
        nextArrow: '<button type="button" class="slick-next-custom" id="product-next"></button>',
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.stages-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});