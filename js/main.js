$(document).ready(function () {
    $('.genomed-team__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev-custom"></button>',
        nextArrow: '<button type="button" class="slick-next-custom"></button>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

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

window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
        $('.your-slider').slick('unslick');
        sliderIsLive = false;
    }
    else {
        if (sliderIsLive) {
            $('.your-slider').slick();
            sliderIsLive = true;
        }
    }
});