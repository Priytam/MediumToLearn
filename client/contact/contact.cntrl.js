/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.contact')
        .controller('ContactController', ContactController);

    function ContactController(PageValues) {
        PageValues.title = "CONTACT";
        PageValues.description = "Fill the form and send us your query";

    }
})();
