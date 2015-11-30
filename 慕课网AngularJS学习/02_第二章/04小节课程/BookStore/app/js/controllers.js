var bookStoreCtrls = angular.module('bookStoreCtrls',[]);
bookStoreCtrls.controller('HelloCtrl',['$scope',function($scope){
    $scope.greeting = {
        text:'hello'
    }
}]);

bookStoreCtrls.controller('BookListCtrl',['$scope',function($scope){
    $scope.books=[
        {title:'书籍1',author:'作者1'},
        {title:'书籍2',author:'作者2'},
        {title:'书籍3',author:'作者3'}
    ];
}]);