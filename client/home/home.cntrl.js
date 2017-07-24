/**
 * Created by pjpandey on 7/24/2017.
 */
(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);
    function HomeController(PageValues, HomeService) {
        PageValues.title = "HOME";
        PageValues.description = "Maadhyam powered by medium to learn";
        var vm = this;

        activate();

        function activate() {
            HomeService.getMissionData().then(_gotMission);
            HomeService.getSlideData().then(_gotSlides);
        }

        function _gotMission(res) {
            vm.missions = res;
        }

        function _gotSlides(res) {
            vm.slides = res;
        }
    }
})();
