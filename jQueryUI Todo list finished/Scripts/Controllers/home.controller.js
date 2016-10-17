/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.count = 0;
            $scope.notes = [
                {
                    id: 1,
                    body: "Note 1 body"
                }, {
                    id: 2,
                    body: "Note 2 body"
                }, {
                    id: 3,
                    body: "Note 3 body"
                }
            ];

            $scope.addNote = function () {
                var id = $scope.notes[$scope.notes.length - 1].id + 1;
                $scope.notes.push({
                    id: id,
                    body: "Note " + id + " body"
                });
            };

            $scope.callbacks = {
                setCount: function (value) {
                    $scope.$apply(function () {
                        $scope.count = value;
                    });
                },
                deleteNote: function (id) {
                    var index = $scope.notes.map(function (note) {
                        return note.id;
                    }).indexOf(parseInt(id));

                    $scope.notes.splice(index, 1);
                }
            };
        }
    ]);