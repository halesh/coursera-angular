(function () {
"use strict";

angular.module('MyFirstApp', [])

.controller('MyFirstController', MyFirstController);

MyFirstController.$inject = ['$scope', '$filter'];

function MyFirstController($scope, $filter){
    $scope.name = '';
    $scope.totalValue = 0;
    $scope.stateOfBeing = 'sad';
    $scope.msgState = "I am sad! I don't like to got to school";
    $scope.myFirstFunc = function(){
        return "This is the Function call!";
    };

    $scope.calculateName = function(){
        var totalNameValue = 0;
        for (var i=0; i<$scope.name.length; i++){
            totalNameValue += $scope.name.charCodeAt(i);
        }

        $scope.totalValue = totalNameValue;
    };

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

    $scope.feedHalesh = function(){
        $scope.stateOfBeing = 'happy';
        $scope.msgState = "I am happy!! I like to got to school";
    };
}
 
})();
