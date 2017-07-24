/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.event')
        .factory('EventService', EventService);

    function EventService($timeout) {
        var service = {
            getEventsData: getEventsData,
            getEvent: getEvent
        };
        return service;

        function getEventsData() {
            return $timeout(_returnEventData, 1000);
        }

        function getEvent(id) {
            return $timeout(_picEventData, 1000);
            function _picEventData() {
                var eventArray = _returnEventData();
                for (var i = 0; i < eventArray.length; i++) {
                    if (eventArray[i].id === parseInt(id)) {
                        return eventArray[i];
                    }
                }
                return {};
            }
        }



        function _returnEventData() {
            return [
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 1399,
                    name: "Event One",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06,
                    banner : 'img/abc.jpg',
                    pictures: [{
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }],
                    members: [{
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }]
                },
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 199,
                    name: "Game of Thrones",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06,
                    banner : 'img/abc.jpg',
                    pictures: [{
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }],
                    members: [{
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }]
                },
                {
                    date: "13-04-2017",
                    tags: ['Learning', 'Phase1'],
                    main_img: 'img/abc.jpg',
                    id: 13,
                    name: "Game of Thrones",
                    location: 'Punjab',
                    overview: "Seven noble families fight for control of the mythical land of Westeros." +
                    " Friction between the houses leads to full-scale war. All while a very ancient evil" +
                    " awakens in the farthest north. Amidst the war, a neglected military order of misfits, " +
                    "the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
                    vote: 8.06,
                    banner : 'img/abc.jpg',
                    pictures: [{
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }, {
                        url: 'img/abc.jpg',
                        name: 'dummy',
                        heart: 5
                    }],
                    members: [{
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }, {
                        url: 'img/abc.jpg',
                        name: 'Raja Ji Pandey',
                        position: 'Team'
                    }]
                }
            ];
        }
    }
})();
