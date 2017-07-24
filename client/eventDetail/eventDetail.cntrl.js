/**
 * Created by pjpandey on 7/25/2017.
 */
(function() {
    angular
        .module('app.eventDetail')
        .controller('EventDetailController', EventDetailController);

    function EventDetailController(PageValues, event) {
        var vm = this;
        PageValues.title = "Detail";
        PageValues.description = "Overview, participant & gallery for '" + event.name + "'.";
        vm.event = event;
    }
})();
