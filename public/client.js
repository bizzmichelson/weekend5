var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
    }).when('/404', {
        templateUrl: 'views/404.html',
        }).when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController as rc'
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as sc'
    }).otherwise('/404');
    
    // this is only for removing #!
    $locationProvider.html5Mode(true);
  });