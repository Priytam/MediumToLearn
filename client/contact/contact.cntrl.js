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
            vm.sucess = undefined;
            vm.error = undefined;
            contactApi.sendMail(vm.query).then(_success, _error)
        }

        function _success(res) {
            vm.query = {};
            vm.sending = false;
            vm.sucess = res;
            vm.error = undefined;
        }

        function _error(error) {
            vm.query = {};
            vm.sending = false;
            vm.error = error;
            vm.sucess = undefined;
        }
    }
})();
