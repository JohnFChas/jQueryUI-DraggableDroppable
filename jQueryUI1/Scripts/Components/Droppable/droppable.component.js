angular.module("mainModule")
    .component("droppable", {
        templateUrl: "Scripts/Components/Droppable/Droppable.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#droppable-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        //console.log("Dropped in " + scope.id);
                        //console.log(ui.draggable);
                        ui.draggable.addClass("drag");
                        scope.callbacks.setCount($(".drag").length);
                    }
                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "=",
            callbacks: "="
        }
    })