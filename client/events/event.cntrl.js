/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.event')
        .controller('EventController', EventsController);

    function EventsController(PageValues, EventService) {
        var vm = this;

        PageValues.title = "EVENTS";
        PageValues.description = "List of events Maadhyam initiated";

        activate();

        function activate() {
            EventService.getEventsData().then(_gotEventData);
        }

        function _gotEventData(res) {
            vm.events = res
        }
    }
})();
