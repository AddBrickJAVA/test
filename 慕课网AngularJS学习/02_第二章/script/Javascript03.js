var myModule = angular.module("MyModule",[]);
//myModule.controller("EventController",['$scope',
//    function MyEvent($scope){
//        $scope.count = 0,
//            $scope.count++;
//    }
//]);

myModule.controller("EventController",function($scope){
        $scope.count = 0;
        $scope.$on('MyEvent',function(){
            $scope.count++;
        })
    }
);


//作用域scope有一个竖型结构，如果在内层scope找不到相关的值，会返回上层查找，一直到 rootScope

//$emit 向上传播
//$broadcast 向下传播


//$scope是一个 POJO（Plain Old JavaScript Object）
//$scope提供了一些工具方法 $watch() / $apply()  监视属性的变化
//$scope是表达式的执行环境（或者叫 作用域）
//$scope是一个树型结构，与DOM标签平行
//子$scope对象会继承父$scope上的 属性和方法
//每一个Angular应用，只有一个根$scope对象（一般位于ng-app上）
//$scope可以传播事件，类似DOM事件。可以向上，也可以向下
//$scope不仅是MVC的基础，也是后面实现双向数据绑定的基础
//可以用angular.element($0).scope()进行调试  获得当前元素上的scope是什么样的


//$scope生命周期
    //1 Creation  创建
    //2 Watcher registration  注册监控
    //3 Model mutation  检测模型变化
    //4 Mutation observation  观察模型有没有脏
    //5 Scope destruction  销毁   分两种，一种是自动销毁，一种手动销毁（一般不会）