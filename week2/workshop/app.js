(function () {
"use strict";

angular.module('MySecondApp', [])

.controller('MySecondController', MySecondController)
.filter('custom', customFilterFactory)
.filter('optCustom', optimalCustomFilterFactory);

MySecondController.$inject = ['$scope', '$filter', 'customFilter', 'optCustomFilter'];

function MySecondController($scope){
    $scope.msg = "I likes to play cricket";
    $scope.searchList = ['ACFC', 'CFHP', 'CHPW', 'BCBSFL', 'BCI', 'BCBSSC', 'BCBSAL', 'Comagen', 'Vergina Premier'];

    $scope.askStatus = function(){
        if ($scope.stateOfBeing === 'sad'){
            $scope.stateOfBeing = 'happy';
            $scope.msgState = "I am happy! I won: ";
            $scope.amount = 1000;
        }
        else{
            $scope.stateOfBeing = 'sad';
            $scope.msgState = "I am sad! I Lost: ";
            $scope.amount = 500;
        }

    };

}

function customFilterFactory (){
        return function(input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
}

function optimalCustomFilterFactory (){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
}
 
})();
