angular.module("mainModule")
    .component("trashcan", {
        templateUrl: "Scripts/Components/Trashcan/Trashcan.html",
        controller: function ($scope) {
            var scope = this;
            var component = $("#trashcan");

            component.droppable({
                drop: function (elem, ui) {
                    console.log(ui.draggable.attr("id"))
                    ui.draggable.effect("explode", {}, 200, function () {
                        scope.callbacks.deleteNote(ui.draggable.attr("deleteId"));
                        scope.callbacks.setCount($(".drag").length);
                    });
                }
            });
        },
        bindings: {
            callbacks: "="
        }
    });