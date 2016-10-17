angular.module("mainModule")
    .component("trashcan", {
        templateUrl: "Scripts/Components/Trashcan/Trashcan.html",
        controller: function () {
            var ctrl = this;
            var component = $("#trashcan");

            component.droppable({
                drop: function (elem, ui) {
                    ui.draggable.effect("explode", {}, 200, function () {
                        ctrl.callbacks.deleteNote(ui.draggable.attr("deleteId"));
                        ctrl.callbacks.setCount($(".done").length);
                    })
                }
            });
        },
        bindings: {
            callbacks: "="
        }
    });