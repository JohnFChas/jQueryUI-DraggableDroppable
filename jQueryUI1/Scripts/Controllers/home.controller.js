/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.count = 0;

            $scope.test = function (value) {
                //$scope.count = value;
                return value;
            }

            $scope.callbacks = {
                setCount: function (value) {
                    $scope.$apply(function () {
                        $scope.count = value;
                    })
                }
            };
        }
    ]);