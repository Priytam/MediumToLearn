/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.home')
        .factory('HomeService', HomeService);

    function HomeService($timeout) {
        var service = {
            getSlideData : getSlideData,
            getMissionData : getMissionData
        };
        return service;

        function getSlideData() {
            return $timeout(_returnSlideData, 1000);
        }

        function getMissionData() {
            return $timeout(_returnMissionData, 1000);
        }

        function _returnSlideData() {
            return [{
                image: 'img/abc.jpg',
                text: 'Nice Image',
                id: 123
            },{
                image: 'img/abc.jpg',
                text: 'Nice Image1',
                id: 12
            }];
        }

        function _returnMissionData() {
            return [
                {
                    title: "HELP",
                    description: "An introduction to the AngularJS by example application and the tutorial series. All about why this project exists, what the tutorial series is likely to include and who the tutorials are for.",
                    banner: "img/444.png"
                },
                {
                    title: "SUPPORT",
                    description: "Looking at project structure in terms of AngularJS modularity and also how best to lay out your directories to make development a breeze.",
                    banner: "img/666.png"
                },
                {
                    title: "EDUCATE",
                    description: "Investigating the different ways you can write AngularJS controllers along with recommended best practices.",
                    banner: "img/555.png"
                }
            ];
        }
    }
})();
