$(document).ready(function () {

    //alert('1');

    var num = parseInt($.cookie("visit002") || 0) + 1;

    $.cookie("visit002", num); //записываем обновленную величину.

    if (num == 1) {

        $('.user-city').html('Москва');
        $(".cityIn").html('г. Москва');


        ymaps.ready()
            .then(() => ymaps.geolocation.get({ autoReverseGeocode: false })
                .then(res => res.geoObjects.get(0).geometry.getCoordinates()))
            .then(ll => (ymaps.geocode(ll, { kind: 'locality' })))
            .then(res => res.geoObjects.get(0).getLocalities())
            .then(city => $('.user-city').html(`${city}`))


        setTimeout(function () {
            var geoCity = $('.user-city').text();
            $.cookie('city_name', geoCity);
            $(".cityIn").html('г. ' + geoCity);
        }, 15000);

    }
    else {
        var city_name_block = $.cookie('city_name');
        $(".user-city").html(city_name_block);
        adsresscity();
    }





    $(".city-item").click(function () {
        var city = $(this).attr('data-town');
        $(".user-city").html(city);
        $.fancybox.close();
        $.cookie('city_name', city);

        adsresscity();


    });

    $(".city_block_button").click(function () {

        if ($(".city_block").val() != '') {
            // Если поле не пустое удаляем класс-указание
            $(".city_block").removeClass('empty_field');
            var city = $(".city_block").val();
            $(".user-city").html(city);
            $.fancybox.close();
            $.cookie('city_name', city);
        } else {
            // Если поле пустое добавляем класс-указание
            $(".city_block").addClass('empty_field');
        }

        adsresscity();

        var city_name_block = $.cookie('city_name');


        ymaps.geocode(city_name_block, {
            /**
             * Опции запроса
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
             */
            // Сортировка результатов от центра окна карты.
            // boundedBy: myMap.getBounds(),
            // strictBounds: true,
            // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
            // Если нужен только один результат, экономим трафик пользователей.
            results: 1
        }).then(function (res) {
            // Выбираем первый результат геокодирования.
            var firstGeoObject = res.geoObjects.get(0),
                // Координаты геообъекта.
                coords = firstGeoObject.geometry.getCoordinates(),
                // Область видимости геообъекта.
                bounds = firstGeoObject.properties.get('boundedBy');

            firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            // Получаем строку с адресом и выводим в иконке геообъекта.
            firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

            // Добавляем первый найденный геообъект на карту.
            myMap.geoObjects.add(firstGeoObject);
            // Масштабируем карту на область видимости геообъекта.
            myMap.setBounds(bounds, {
                // Проверяем наличие тайлов на данном масштабе.
                checkZoomRange: true
            });



            /**
             * Если нужно добавить по найденным геокодером координатам метку со своими стилями и контентом балуна, создаем новую метку по координатам найденной и добавляем ее на карту вместо найденной.
             */
            /**
             var myPlacemark = new ymaps.Placemark(coords, {
             iconContent: 'моя метка',
             balloonContent: 'Содержимое балуна <strong>моей метки</strong>'
             }, {
             preset: 'islands#violetStretchyIcon'
             });

             myMap.geoObjects.add(myPlacemark);
             */
        });

    });


    var city_name_block2 = $.cookie('city_name');

    if (city_name_block2 == "Москва") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.714460, 37.624310],
                zoom: 16
            });

            myPlacemark = new ymaps.Placemark([55.714460, 37.624310], {
                hintContent: 'Москва',
                balloonContent: 'Подольское шоссе, дом 8, корпус 5 (метро Тульская)'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark);
        }

    }
    else if (city_name_block2 == "Санкт-Петербург") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [59.918995, 30.353615],
                zoom: 16
            });

            myPlacemark2 = new ymaps.Placemark([59.918995, 30.353615], {
                hintContent: 'Санкт-Петербург',
                balloonContent: 'Лиговский проспект, 110'
            }, {
                preset: 'islands#redMedicalIcon'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark2);
        }

    }
    else if (city_name_block2 == "Ростов-на-Дону") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [47.235155, 39.697262],
                zoom: 16
            });

            myPlacemark3 = new ymaps.Placemark([47.235155, 39.697262], {
                hintContent: 'Ростов-на-Дону',
                balloonContent: 'ул. Козлова, 65е'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark3);
        }

    }
    else if (city_name_block2 == "Пермь") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [58.000331, 56.254282],
                zoom: 16
            });

            myPlacemark4 = new ymaps.Placemark([58.000331, 56.254282], {
                hintContent: 'Пермь',
                balloonContent: 'ул.Газеты Звезда, д.67. Отдельный вход'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark4);
        }

    }
    else if (city_name_block2 == "Екатеринбург") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [56.843412, 60.573723],
                zoom: 16
            });

            myPlacemark5 = new ymaps.Placemark([56.843412, 60.573723], {
                hintContent: 'Екатеринбург',
                balloonContent: 'ул. Юмашева, 10 '
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark5);
        }

    }
    else if (city_name_block2 == "Казань") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.747373, 49.222530],
                zoom: 16
            });

            myPlacemark6 = new ymaps.Placemark([55.747373, 49.222530], {
                hintContent: 'Казань',
                balloonContent: 'ул. Фучика д. 42'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark6);
        }

    }
    else if (city_name_block2 == "Волгоград") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [48.712138, 44.491670],
                zoom: 16
            });

            myPlacemark7 = new ymaps.Placemark([48.712138, 44.491670], {
                hintContent: 'Волгоград',
                balloonContent: 'ул. Ангарская, 13/24  '
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark7);
        }

    }
    else if (city_name_block2 == "Самара") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [53.186328, 50.083835],
                zoom: 16
            });

            myPlacemark8 = new ymaps.Placemark([53.186328, 50.083835], {
                hintContent: 'Самара',
                balloonContent: 'ул. Венцека, 21'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark8);
        }

    }
    else if (city_name_block2 == "Челябинск") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.156559, 61.404108],
                zoom: 16
            });

            myPlacemark9 = new ymaps.Placemark([55.156559, 61.404108], {
                hintContent: 'Челябинск',
                balloonContent: 'пл. Революции, 7'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark9);
        }

    }
    else if (city_name_block2 == "Новосибирск") {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.039316, 82.936491],
                zoom: 16
            });

            myPlacemark10 = new ymaps.Placemark([55.039316, 82.936491], {
                hintContent: 'Новосибирск',
                balloonContent: 'ул. Ломоносова, 55'
            }, {
                preset: 'islands#redMedicalIcon'
            });
            myMap.geoObjects.add(myPlacemark10);
        }

    }
    else {
        ymaps.ready(init);
        var myMap

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.039316, 82.936491],
                zoom: 16
            });

            ymaps.geocode(city_name_block, {

                results: 1
            }).then(function (res) {
                // Выбираем первый результат геокодирования.
                var firstGeoObject = res.geoObjects.get(0),
                    // Координаты геообъекта.
                    coords = firstGeoObject.geometry.getCoordinates(),
                    // Область видимости геообъекта.
                    bounds = firstGeoObject.properties.get('boundedBy');

                firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                // Получаем строку с адресом и выводим в иконке геообъекта.
                firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

                // Добавляем первый найденный геообъект на карту.
                myMap.geoObjects.add(firstGeoObject);
                // Масштабируем карту на область видимости геообъекта.
                myMap.setBounds(bounds, {
                    // Проверяем наличие тайлов на данном масштабе.
                    checkZoomRange: true
                });



                /**
                 * Если нужно добавить по найденным геокодером координатам метку со своими стилями и контентом балуна, создаем новую метку по координатам найденной и добавляем ее на карту вместо найденной.
                 */

                var myPlacemark11 = new ymaps.Placemark(coords, {
                    iconContent: 'моя метка',
                    balloonContent: city_name_block
                }, {
                    preset: 'islands#redMedicalIcon'
                });

                myMap.geoObjects.add(myPlacemark11);

            });
        }


    }

    function adsresscity() {

        var city_name_block = $.cookie('city_name');

        if (city_name_block == null || city_name_block == "") {
            var city_name_block = 'Москва';
            $('.user-city').html('Москва');
        } else {

        }



        $(".cityIn").html('г. ' + city_name_block);



        if (city_name_block == "Москва") {
            $('.operating_mode_block').html('ПН-ПТ 08:00-19:00<br/>Сб 08:00-19:00<br/>Вс 08:00-17:00');
            $('.town-block').html('г. Москва, Подольское шоссе, дом 8, корпус 5 (метро Тульская)');
            //$('.top-banner-price-big-price').html('4 490');
            //$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");
        }
        else if (city_name_block == "Санкт-Петербург") {
            $('.operating_mode_block').html('ПН-ПТ 10:00-18:00<br/>Сб 09:00-16:00<br/>Вс выходной');
            $('.town-block').html('г. Санкт-Петербург, Лиговский проспект д. 110 ');
            //$('.top-banner-price-big-price').html('4 490');
            //$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");
        }
        else if (city_name_block == "Ростов-на-Дону") {
            $('.operating_mode_block').html('ПН-ПТ 08:00-19:00<br/>Сб 09:00-17:00<br/>Вс 09:00-17:00');
            $('.town-block').html('г. Ростов-на-Дону, ул. Козлова, 65е ');
            //$('.top-banner-price-big-price').html('4 490');
            ///$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");


        }
        else if (city_name_block == "Пермь") {
            $('.operating_mode_block').html('ПН-ПТ 9.00 – 18.00<br/>Сб-Вс выходные');
            $('.town-block').html('г. Пермь, ул. Газеты Звезда, д.67. Отдельный вход ');
            //$('.top-banner-price-big-price').html('4 490');
            //$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");
        }
        else if (city_name_block == "Екатеринбург") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-18:00<br/>Сб 09:00-15:00<br/>Вс выходной');
            $('.town-block').html('г. Екатеринбург, ул. Юмашева, 10 ');
            //$('.top-banner-price-big-price').html('4 490');
            //$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");
        }
        else if (city_name_block == "Казань") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-18:00<br/>Сб 09:00-15:00<br/>Вс выходной');
            $('.town-block').html('г. Казань, ул. Фучика д. 42 ');
            //$('.top-banner-price-big-price').html('4 490');
            //$("#link-price").attr("href", "http://price.genomed.ru/?order_tests=1733");
        }
        else if (city_name_block == "Волгоград") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-18:00<br/>Сб-Вс выходные');
            $('.town-block').html('г. Волгоград, ул. Ангарская, 13/24 ');
        }
        else if (city_name_block == "Самара") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-18:00 <br/>Сб-Вс выходные');
            $('.town-block').html('г. Самара, ул. Венцека, 21');
        }
        else if (city_name_block == "Челябинск") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-18:00<br/>Сб-Вс выходные');
            $('.town-block').html('г. Челябинск, пл. Революции, 7 ');
        }
        else if (city_name_block == "Новосибирск") {
            $('.operating_mode_block').html('ПН-ПТ 09:00-19:00<br/>Сб 09:00-15:00<br/>Вс выходной');
            $('.town-block').html('г. Новосибирск, ул. Ватутина, 28 (KDL)');
        }
        else {
            $('.operating_mode_block').html('<p>К сожалению, в <span class="cityIn"></span> происходит замена партнера, для получения актуальной информации заполните форму ниже</p>')
        };



    }



    $("#city_list1").click(function () {


        myPlacemark = new ymaps.Placemark([55.714460, 37.624310], {
            hintContent: 'Москва',
            balloonContent: 'Подольское шоссе, дом 8, корпус 5 (метро Тульская)'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.panTo([55.714460, 37.624310], { flying: 1 });
    });

    $("#city_list2").click(function () {
        myPlacemark2 = new ymaps.Placemark([59.918995, 30.353615], {
            hintContent: 'Санкт-Петербург',
            balloonContent: 'Лиговский проспект, 110'
        }, {
            preset: 'islands#redMedicalIcon'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark2);
        myMap.panTo([59.918995, 30.353615], { flying: 1 });
    });

    $("#city_list3 ").click(function () {
        myPlacemark3 = new ymaps.Placemark([47.235155, 39.697262], {
            hintContent: 'Ростов-на-Дону',
            balloonContent: 'ул. Козлова, 65е'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark3);
        myMap.panTo([47.235155, 39.697262], { flying: 1 });



    });

    $("#city_list4 ").click(function () {
        myPlacemark4 = new ymaps.Placemark([58.000331, 56.254282], {
            hintContent: 'Пермь',
            balloonContent: 'ул.Газеты Звезда, д.67. Отдельный вход'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark4);
        myMap.panTo([58.000331, 56.254282], { flying: 1 });



    });

    $("#city_list5 ").click(function () {
        myPlacemark5 = new ymaps.Placemark([56.843412, 60.573723], {
            hintContent: 'Екатеринбург',
            balloonContent: 'ул. Юмашева, 10 '
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark5);
        myMap.panTo([56.843412, 60.573723], { flying: 1 });



    });

    $("#city_list6").click(function () {
        myPlacemark6 = new ymaps.Placemark([55.747373, 49.222530], {
            hintContent: 'Казань',
            balloonContent: 'ул. Фучика д. 42'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark6);
        myMap.panTo([55.747373, 49.222530], { flying: 1 });



    });

    $("#city_list7 ").click(function () {
        myPlacemark7 = new ymaps.Placemark([48.712138, 44.491670], {
            hintContent: 'Волгоград',
            balloonContent: 'ул. Ангарская, 13/24  '
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark7);
        myMap.panTo([48.712138, 44.491670], { flying: 1 });


    });

    $("#city_list8 ").click(function () {
        myPlacemark8 = new ymaps.Placemark([53.186328, 50.083835], {
            hintContent: 'Самара',
            balloonContent: 'ул. Венцека, 21'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark8);
        myMap.panTo([53.186328, 50.083835], { flying: 1 });



    });

    $("#city_list9").click(function () {
        myPlacemark9 = new ymaps.Placemark([55.156559, 61.404108], {
            hintContent: 'Челябинск',
            balloonContent: 'пл. Революции, 7'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark9);
        myMap.panTo([55.156559, 61.404108], { flying: 1 });


    });

    $("#city_list10").click(function () {
        myPlacemark10 = new ymaps.Placemark([55.039316, 82.936491], {
            hintContent: 'Новосибирск',
            balloonContent: 'ул. Ломоносова, 55'
        }, {
            preset: 'islands#redMedicalIcon'
        });
        myMap.geoObjects.add(myPlacemark10);
        myMap.panTo([55.039316, 82.936491], { flying: 1 });


    });


    $(".kdl_mo").click(function () {

        var city_name_block = $.cookie('city_name');




        ymaps.geocode(city_name_block, {
            /**
             * Опции запроса
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
             */
            // Сортировка результатов от центра окна карты.
            // boundedBy: myMap.getBounds(),
            // strictBounds: true,
            // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
            // Если нужен только один результат, экономим трафик пользователей.
            results: 1
        }).then(function (res) {
            // Выбираем первый результат геокодирования.
            var firstGeoObject = res.geoObjects.get(0),
                // Координаты геообъекта.
                coords = firstGeoObject.geometry.getCoordinates(),
                // Область видимости геообъекта.
                bounds = firstGeoObject.properties.get('boundedBy');

            firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            // Получаем строку с адресом и выводим в иконке геообъекта.
            firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

            // Добавляем первый найденный геообъект на карту.
            myMap.geoObjects.add(firstGeoObject);
            // Масштабируем карту на область видимости геообъекта.
            myMap.setBounds(bounds, {
                // Проверяем наличие тайлов на данном масштабе.
                checkZoomRange: true
            });



            /**
             * Если нужно добавить по найденным геокодером координатам метку со своими стилями и контентом балуна, создаем новую метку по координатам найденной и добавляем ее на карту вместо найденной.
             */
            /**
             var myPlacemark = new ymaps.Placemark(coords, {
             iconContent: 'моя метка',
             balloonContent: 'Содержимое балуна <strong>моей метки</strong>'
             }, {
             preset: 'islands#violetStretchyIcon'
             });

             myMap.geoObjects.add(myPlacemark);
             */
        });


    });





});


