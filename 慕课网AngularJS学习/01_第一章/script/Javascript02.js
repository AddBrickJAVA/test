//模块
var myModule = angular.module("HelloAngular",[]);
//控制器
myModule.controller("myController",['$scope',
    function hello($scope){
        $scope.greeting = {
            text:'hello'
        }
    }
]);

//指令 -- 这里要注意一个坑，驼峰命名法，无法识别
myModule.directive("mydirective",function(){
   return{
       restrict:'E',
       template:'<div>Hi my name is lvwei</div>',
       replace:true
   }
});

//双向数据绑定
//见页面 ng-Model


//完结：
//思考三个问题：
// 1：为什么其他所有前端框架都 不实现 双向数据绑定？
// 2：如果让你来实现双向数据绑定，你会怎么去实现？
// 3：双向数据绑定机制，有什么潜在的缺点吗？




















