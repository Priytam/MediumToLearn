/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    angular
        .module('app.contact')
        .controller('ContactController', ContactController);

    function ContactController(contactApi) {
        var vm = this;
        vm.query = {};
        vm.sending = false;
        vm.sendMail = sendMail;

        function sendMail() {
            vm.sending = true;
            contactApi.sendMail(vm.query).then(_success, _error)
        }

        function _success(res) {
            vm.sending = false;
            vm.sucess = res;
        }

        function _error(error) {
            vm.sending = false;
            vm.error = error;
        }
    }
})();
