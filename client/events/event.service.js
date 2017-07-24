/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.event')
        .factory('EventService', EventService);

    function EventService($timeout) {
        var service = {
            getEventData : getEventData
        };
        return service;

        function getEventData() {
            return $timeout(_returnEventData, 1000);
        }

        function _returnEventData() {
            return [
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 1399,
                    name: "Game of Thrones",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06
                },
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 1399,
                    name: "Game of Thrones",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06
                },
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 1399,
                    name: "Game of Thrones",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06
                }
            ];
        }
    }
})();
