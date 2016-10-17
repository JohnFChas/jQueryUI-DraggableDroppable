angular.module("mainModule")
    .component("note", {
        templateUrl: "Scripts/Components/Note/Note.html",
        controller: function () {
            var ctrl = this;
            var component = {};

            setTimeout(function () {
                component = $("#note-" + ctrl.id);
                component.draggable({
                    grid: [10, 10]
                });
            }, 100);
        },
        bindings: {
            id: "=",
            body: "="
        }
    });