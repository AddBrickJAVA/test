var myModule = angular.module('MyModule',[]);
myModule.controller('MyController',function($scope){
    $scope.userWrite = function(text){
        $scope.userRead = text;
    };
});