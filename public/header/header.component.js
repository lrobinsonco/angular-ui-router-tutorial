(function() {
    angular.module('app')
        .component('header', {
            controller: console.log('child controller is working'),
            template: `<h1>This is the header</h1>`
        })
})()
