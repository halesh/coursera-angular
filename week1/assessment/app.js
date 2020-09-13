(function () {
"use strict";

angular.module('AssmtOneApp', [])

.controller('AssessmentOneController', AssessmentOneController);

AssessmentOneController.$inject = ['$scope', '$filter'];

function AssessmentOneController($scope, $filter){
    $scope.items = '';

    $scope.findLunchItems = function(){
        $scope.msgState = '';
        var items = $scope.items.split(',');

        if ($scope.items === "" || items.length === 0){
            alert('Please enter data first');
        }
        else if (items.length <= 3){
            $scope.msgState = 'Enjoy... !';
        }
        else if (items.length > 3){
            $scope.msgState = 'Too much... !';
        }
        };

    }
})();
