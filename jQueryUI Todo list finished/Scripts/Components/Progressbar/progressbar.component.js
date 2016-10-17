angular.module("mainModule")
    .component("progressbar", {
        templateUrl: "Scripts/Components/Progressbar/Progressbar.html",
        controller: function ($scope) {
            var scope = this;
            var progressbar = {};
            $scope.value = this.value;
            $scope.max = this.max;
            $scope.percentage = 0;

            setTimeout(function () {
                progressbar = $("#progressbar-" + scope.id);
                progressbar.progressbar({
                    value: scope.value,
                    max: scope.max
                });

                $scope.$watch("scope.value", function (newValue) {
                    progressbar.progressbar("option", "value", newValue);
                    $scope.percentage = Math.floor((scope.value / scope.max) * 100);
                });

                $scope.$watch("scope.max", function (newValue) {
                    progressbar.progressbar("option", "max", newValue);
                    $scope.percentage = Math.floor((scope.value / scope.max) * 100);
                });
            }, 100);

        },
        controllerAs: "scope",
        bindings: {
            id: "=",
            value: "<",
            max: "<"
        }
    });