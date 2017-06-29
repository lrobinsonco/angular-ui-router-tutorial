(function() {
    angular.module('app')
        .controller('grandchildController', grandchildController)

    function grandchildController($stateParams) {
        const vm = this

        console.log('grandchild controller is working')

        vm.id = $stateParams.id
    }

})()