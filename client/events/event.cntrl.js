/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.event')
        .controller('EventController', EventsController);

    function EventsController(EventService) {
        var vm = this;
        vm.addLike = addLike;

        activate();

        function activate() {
            EventService.getEventsData().then(_gotEventData);
            EventService.getLike().then(_gotLikes);
        }

        function addLike(name) {
            EventService.like(name).then(_gotLikes);
        }

        function _gotLikes(res) {
            vm.likes = _.groupBy(res.data, function (like) {
                return like.name;
            });
        }

        function _gotEventData(res) {
            vm.events = res
        }
    }
})();
