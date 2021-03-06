/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.event')
        .factory('EventService', EventService);

    function EventService($timeout, $http) {
        var service = {
            getEventsData: getEventsData,
            getEvent: getEvent,
            getLike : getLike,
            like : like
        };
        return service;

        function getLike() {
            return $http.get('/like');
        }

        function like(name) {
            return $http.post('/like', {name : name});
        }

        function getEventsData() {
            return $timeout(_returnEventData, 5);
        }

        function getEvent(id) {
            return $timeout(_picEventData, 5);
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
                    pending : false,
                    date: "14-03-2017",
                    main_img: 'img/event/one/3.jpeg',
                    id: 0,
                    name: "Educating The Orphans",
                    location: 'Nari Niketan Jalandhar',
                    overview: "This was our first step towards executing the dream " +
                    "of making the poor and needy educated. We went to an orphanage called" +
                    " Nari Niketan. There we found many children spending their lives in the " +
                    "orphanage as they did not have opportunity . They really wanted to learn " +
                    "and achieve something big in their lives. So we started our journey from Nari Niketan educating the " +
                    "children there. This was our first step towards making the world better.",
                    banner : 'img/event/one/5.jpeg',
                    pictures: [{
                        url: 'img/event/one/1.jpeg',
                        name: 'Educating the orphans'
                    }, {
                        url: 'img/event/one/2.jpeg',
                        name: 'Educating the orphans'
                    }, {
                        url: 'img/event/one/3.jpeg',
                        name: 'Educating the orphans'
                    }, {
                        url: 'img/event/one/4.jpeg',
                        name: 'Educating the orphans'
                    }, {
                        url: 'img/event/one/5.jpeg',
                        name: 'Educating the orphans'
                    }],
                    members: [{
                        url: 'img/team/raja.jpeg',
                        name: 'Raja Ji Pandey',
                        position: 'CEO'
                    }, {
                        url: 'img/team/veena.jpeg',
                        name: 'Veena',
                        position: 'Students Affairs Head'
                    }, {
                        url: 'img/team/shivam.jpeg',
                        name: 'Shivam Verma',
                        position: 'Vice President'
                    }, {
                        url: 'img/team/shubham.jpeg',
                        name: 'Shubham Kumar',
                        position: 'Co-Ordinator'
                    }, {
                        url: 'img/team/bhoj.jpeg',
                        name: 'Bhojanala Manjunath',
                        position: 'Treasurer'
                    }, {
                        url: 'img/team/rinki.jpeg',
                        name: 'Rinki Shah',
                        position: 'President'
                    }, {
                        url: 'img/team/udayan.jpeg',
                        name: 'Udayan Karmakar',
                        position: 'Marketing Head'
                    }, {
                        url: 'img/team/uttam.jpeg',
                        name: 'Uttam Dutta',
                        position: 'Event Manager'
                    }, {
                        url: 'img/team/aman.jpeg',
                        name: 'Aman Padwar',
                        position: 'Accountant'
                    }, {
                        url: 'img/team/prem.jpeg',
                        name: 'Prem',
                        position: 'Outsourcing Head'
                    }]
                },
                {
                    date: "25-05-2017",
                    pending : false,
                    main_img: 'img/event/two/3.jpeg',
                    id: 1,
                    name: "Distributing Clothes",
                    location: 'Jalandhar City Railway Station',
                    overview: "Madhyam not only believes in educating the poor children but also helping the poor people." +
                    " Our team went to Jalandhar City Railway Station to donate clothes to the poor and needy people." +
                    " We found many people who were not having clothes to wear, food to eat. We wish to help them" +
                    " survive in this world. Our motto is not only to see the world educated but also to see the world developed.",
                    vote: 8.06,
                    banner : 'img/event/two/1.jpeg',
                    pictures: [{
                        url: 'img/event/two/1.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/2.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/3.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/4.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/5.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/6.jpeg',
                        name: 'Distributing clothes'
                    }, {
                        url: 'img/event/two/7.jpeg',
                        name: 'Distributing clothes'
                    },{
                        url: 'img/event/two/8.jpeg',
                        name: 'Distributing clothes'
                    }],
                    members: [{
                        url: 'img/team/raja.jpeg',
                        name: 'Raja Ji Pandey',
                        position: 'CEO'
                    }, {
                        url: 'img/team/veena.jpeg',
                        name: 'Veena',
                        position: 'Students Affairs Head'
                    }, {
                        url: 'img/team/shivam.jpeg',
                        name: 'Shivam Verma',
                        position: 'Vice President'
                    }, {
                        url: 'img/team/shubham.jpeg',
                        name: 'Shubham Kumar',
                        position: 'Co-Ordinator'
                    }, {
                        url: 'img/team/bhoj.jpeg',
                        name: 'Bhojanala Manjunath',
                        position: 'Treasurer'
                    }, {
                        url: 'img/team/rinki.jpeg',
                        name: 'Rinki Shah',
                        position: 'President'
                    }, {
                        url: 'img/team/udayan.jpeg',
                        name: 'Udayan Karmakar',
                        position: 'Marketing Head'
                    }, {
                        url: 'img/team/uttam.jpeg',
                        name: 'Uttam Dutta',
                        position: 'Event Manager'
                    }, {
                        url: 'img/team/aman.jpeg',
                        name: 'Aman Padwar',
                        position: 'Accountant'
                    }, {
                        url: 'img/team/prem.jpeg',
                        name: 'Prem',
                        position: 'Outsourcing Head'
                    }]
                },
                {
                    pending : true,
                    date: "25-8-2017",
                    main_img: 'img/event/three/1.jpeg',
                    id: 2,
                    name: "Super Six Cricket Match",
                    location: 'LPU',
                    overview: "Pending",
                    banner : 'img/event/three/1.jpeg',
                    pictures: [{
                        url: 'img/event/three/1.jpeg',
                        name: 'Super Six Cricket Match'
                    }],
                    members: [{
                        url: 'img/team/raja.jpeg',
                        name: 'Raja Ji Pandey',
                        position: 'CEO'
                    }, {
                        url: 'img/team/veena.jpeg',
                        name: 'Veena',
                        position: 'Students Affairs Head'
                    }, {
                        url: 'img/team/shivam.jpeg',
                        name: 'Shivam Verma',
                        position: 'Vice President'
                    }, {
                        url: 'img/team/shubham.jpeg',
                        name: 'Shubham Kumar',
                        position: 'Co-Ordinator'
                    }, {
                        url: 'img/team/bhoj.jpeg',
                        name: 'Bhojanala Manjunath',
                        position: 'Treasurer'
                    }, {
                        url: 'img/team/rinki.jpeg',
                        name: 'Rinki Shah',
                        position: 'President'
                    }, {
                        url: 'img/team/udayan.jpeg',
                        name: 'Udayan Karmakar',
                        position: 'Marketing Head'
                    }, {
                        url: 'img/team/uttam.jpeg',
                        name: 'Uttam Dutta',
                        position: 'Event Manager'
                    }, {
                        url: 'img/team/aman.jpeg',
                        name: 'Aman Padwar',
                        position: 'Accountant'
                    }, {
                        url: 'img/team/prem.jpeg',
                        name: 'Prem',
                        position: 'Outsourcing Head'
                    }]
                }
            ];
        }
    }
})();
