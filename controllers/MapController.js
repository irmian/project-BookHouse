//Контроллер для подгрузки Гугл карты на странице "О нас"

bookStoreApp.controller('MapCtrl', function ($scope, $http, $location, $rootScope) {

    //Функция создания и настройки параметов карты
    $scope.map = function () {

        //Создание карты, задание начальных координат, настройка зума
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 48.425705, lng: 35.063858 },
            scrollwheel: true,
            zoom: 14
        });

        var massXY = {
            lat: 48.425705,
            lng: 35.063858,
            title: "Дом Книги"
        };

        var myLatLng = { lat: massXY.lat, lng: massXY.lng };

        //Создание маркера на карте
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: massXY.title,
            animation: google.maps.Animation.BOUNCE,
            icon: "img/marker.png"
        });
    };
});