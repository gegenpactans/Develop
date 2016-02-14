 var myApp = angular.module('myApp', ['ngRoute', 'mainControllers']);

 myApp.config(['$routeProvider', function($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'partials/home.html',
             controller: 'mainCtrl'
         })
         .when('/MetricInfo', {
             templateUrl: 'partials/metric-info.html',
             controller: 'mainCtrl'
         })
         .when('/MyAlerts', {
             templateUrl: 'partials/my-alerts.html',
             controller: 'mainCtrl'
         })
         .otherwise({
             redirectTo: '/'
         });
 }]);
