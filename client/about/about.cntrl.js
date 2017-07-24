/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.about')
        .controller('AboutController', AboutController);

    function AboutController(PageValues) {
        PageValues.title = "ABOUT";
        PageValues.description = "Know more about Maadhyam and team";
    }
})();