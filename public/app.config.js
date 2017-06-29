(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider){

        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode(true)

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        component: 'main'
                    },
                    'header': {
                        component: 'header'
                    },
                    'footer': {
                        template: `<h4>This is the footer</h4>`
                    }
                }
            })
            .state('home.child', {
                url: 'child/',
                component: 'child'
              })
            .state('grandchild', {
                url: 'grandchild/:id/',
                parent: 'home.child',
                component: 'grandchild'
            })
    }

}())