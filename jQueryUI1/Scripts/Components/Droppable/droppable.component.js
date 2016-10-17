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
                        ui.draggable.addClass("drag");
                        scope.callbacks.setCount($(".drag").length);

                        //ui.draggable.detach().appendTo($(this));
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