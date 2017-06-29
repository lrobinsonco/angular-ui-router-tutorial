(function() {
    angular.module('app')
        .component('child', {
            controller: console.log('child controller is working'),
            templateUrl: '/child/child.html'
        })
})()