var bookStoreApp = angular.module('bookStoreApp',['ngRoute','bookStoreDirectives','bookStoreCtrls','bookStoreFilters','bookStoreServices']);

bookStoreApp.config(function($routeProvider){
   $routeProvider.when('/hello',{
       templateUrl:'./tpls/hello.html',
       controller:'HelloCtrl'
   }).when('/list',{
       templateUrl:'tpls/bookList.html',
       controller:'BookListCtrl'
   }).otherwise({
       redirectTo:'/hello'
   })
});






