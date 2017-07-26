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
            return $timeout(_returnSlideData, 5);
        }

        function getMissionData() {
            return $timeout(_returnMissionData, 5);
        }

        function _returnSlideData() {
            return [{
                image: 'img/slide/slide1.jpg',
                text: 'Let our future be full of joy, educate every girl and boy',
                id: 0
            },{
                image: 'img/slide/slide2.jpg',
                text: 'For both female and male, education shouldn’t fail',
                id: 1
            },{
                image: 'img/slide/slide3.jpg',
                text: 'Our daughters: prepared for school today, prepared for society tomorrow',
                id: 1
            },{
                image: 'img/slide/slide4.jpg',
                text: 'Children are the future, teach them well and let them lead the way',
                id: 1
            }, {
                image: 'img/slide/slide5.jpg',
                text: 'Each one teach one',
                id: 1
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
