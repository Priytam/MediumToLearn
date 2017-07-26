/**
 * Created by pjpandey on 7/26/2017.
 */
(function() {
    angular
        .module('app.contact')
        .factory('contactApi', contactApi);

    function contactApi($http) {
        return {
            sendMail : sendMail
        };

        function sendMail(data) {
            return $http.post('/sendMail', data);
        }
    }
})();