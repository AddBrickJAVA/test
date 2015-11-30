var myModule = angular.module('MyModule',[]);
myModule.controller('MyController',function($scope){
    $scope.userWrite = function(text){
        $scope.userRead = text;
    };
});


//一个控制器 对应一个视图。   如果控制器1 和 控制器2 之间有交互。 把通用的部分抽成一个 服务 来完成。


//在使用Controller的过程中，需要注意以下几点：
// 不要视图是去复用Controller，一个控制器 一般只负责一小块视图
// 不要在Controller中操作DOM，这不是控制器的职责   应该封装在 指令 中。否则会导致浏览器重绘，这个操作很昂贵
// 不要在Controller里面做数据库格式化操作，ng有很好用的表单控件
// 不要在Controller里面做数据库过滤操作，ng有$filter服务
// 一般来说，Controller是不会互相调用的，控制器之间的交互，会通过scope事件进行。


