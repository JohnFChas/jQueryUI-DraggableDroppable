angular.module("mainModule")
    .component("board", {
        templateUrl: "Scripts/Components/Board/Board.html",
        controller: function () {
            var ctrl = this;
            var component = {};

            setTimeout(function () {
                component = $("#board-" + ctrl.id);
                component.droppable({
                    drop: function (elem, ui) {
                        ui.draggable.addClass("done");
                        ctrl.callbacks.setCount($(".done").length);
                    }
                })
            }, 100);
        },
        bindings: {
            id: "=",
            callbacks: "="
        }
    });