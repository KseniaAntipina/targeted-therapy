/*слайдер врачей геномеда */

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

    $('.all-products-slider, .stomach-slider, .lungs-slider, .breast-slider').slick({
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
    jQuery('.scrollbar-inner').scrollbar();

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

/*скрипт закрывающий меню при клике на якорную ссылку (когда меню на весь экран) */

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

$('.selectCity, .selectDisease , .selectDisease2').each(function (index, element) {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 250; // длительность анимации 
    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }
    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                var chooseItem = $(this).data('value');
                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());
                selectList.slideUp(duration);
                selectHead.removeClass('on');

                /*код отвечающий за показ слайдера */
                if ($(element).hasClass('selectDisease')) {
                    let slidersProduct = document.querySelectorAll('.slider-block')
                    for (let i = 0; i < slidersProduct.length; i++) {
                        if (slidersProduct[i].classList.contains(chooseItem)) {
                            slidersProduct[i].classList.add('show');
                            slidersProduct[i].classList.remove('hide');
                            /*след 4 строки нужны для того чтобы слик слайдер не съезжал при смене блоков. Новые слайдеры добавлять сюда.*/
                            $('.all-products-slider').slick('setPosition');
                            $('.stomach-slider').slick('setPosition');
                            $('.lungs-slider').slick('setPosition');
                            $('.breast-slider').slick('setPosition');
                        }
                        else {
                            slidersProduct[i].classList.remove('show');
                            slidersProduct[i].classList.add('hide');
                        }
                    }
                    /*конец*/
                }

            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });

});

/* форма 5 вопросов */

let closeForm = document.querySelector('.closeBtn');
let closeModal = document.querySelector('.closeBtn2');
let surveyFormOpen = document.getElementById('surveyFormOpen');
let headerBanner = document.querySelector('.header-banner-block1');
let surveyForm = document.querySelector('.header-banner-block2');

closeForm.onclick = () => {
    surveyForm.style.display = 'none';
    headerBanner.style.display = 'block';
}
closeModal.onclick = () => {
    surveyForm.style.display = 'none';
    headerBanner.style.display = 'block';
}
surveyFormOpen.onclick = () => {
    surveyForm.style.display = 'block';
    headerBanner.style.display = 'none';
}


var currentTab = 0; // текущая вкладка
showTab(currentTab);

function showTab(n) {
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.querySelector(".prevBtn").style.display = "none";
    } else {
        document.querySelector(".prevBtn").style.display = "block";
    }
    //закрывает большой таб, когда открыто последнее окно с предложением о скидке
    if (n == 5) {
        closeForm.style.display = 'none';
        document.querySelector('.form__nav').style.display = 'none';
    }
    let indicator = document.querySelector('.indicator-nav-blue')
    let indicatorWidth = 20;
    for (i = 0; i <= n; i++) {
        indicatorWidth = indicatorWidth + 20;
        indicator.style.width = indicatorWidth + '%';
    }
    for (i = n; i >= n; i--) {
        indicatorWidth = indicatorWidth - 20;
        indicator.style.width = indicatorWidth + '%';
    }
}

function nextPrev(n) {

    let x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("formSurvey").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    return true; // return the valid status
}

/*маска телефона */

document.querySelectorAll('.phone-mask').forEach((e) => {
    const phoneMask = IMask(e, { mask: '+{7}(000)000-00-00' })
})




