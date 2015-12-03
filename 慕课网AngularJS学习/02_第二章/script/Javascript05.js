var myModule = angular.module('UserInforModule',[]);

myModule.controller('UserInforCtrl',['$scope',function($scope){
    $scope.userInfo={
        email:'525448067@qq.com',
        password:'1234567',
        autoLogin:true
    };
    $scope.getFormData=function(){
        alert($scope.userInfo.email + " || " + $scope.userInfo.password +" || "+$scope.userInfo.autoLogin );
        console.log($scope.userInfo);
    }
    $scope.style="01";
    $scope.setStyle=function(){
        $scope.style="02";
    }

    $scope.isStyle01=false;
    $scope.isStyle02=false;
    $scope.setStyle01=function(){
        $scope.isStyle01=true;
        $scope.isStyle02=false;
    };
    $scope.setStyle02=function(){
        $scope.isStyle01=false;
        $scope.isStyle02=true;
    }

    $scope.isShow = false;
    $scope.setPanelShow=function(){
        $scope.isShow = !$scope.isShow;
    }
}]);


//angularJS中最吸引人的就是双向数据绑定、指令

//内容简介：
//1.最简单的例子
//2.取值表达式｛｛｝｝和 ng-bind指令   -- 什么时候使用 {{}} 什么时候使用 ng-bind呢？  在index首页加载angularJS库，使用ng-bind。 之后因为JS库已经加载完，其他页面再使用{{}}就没有问题了
//3.双向数据绑定的典型场景 - 表单
//4.动态切换标签样式
//5.ng-show和 ng-hide
//6.ng-class
//7.ngAnimate

//bootStrap  css库。地址：www.bootcss.com

