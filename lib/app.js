// main module
var bookStoreApp = angular.module('bookStoreApp', ['ngRoute']);

// routing config
bookStoreApp.config(function ($routeProvider) {

    $routeProvider.
        when('/main', {
            templateUrl: 'views/main.html',
            controller: 'BookCtrl'
        }).
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'MapCtrl'
        }).
        when('/basket', {
            templateUrl: 'views/basket.html',
            controller: 'BaskCtrl'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        }).
        otherwise({
            redirectTo: '/main'
        });

});