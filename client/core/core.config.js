/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    'use strict';

    angular.module('app.core')
        .config(config);

    function config ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
            when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm'
            }).
            when('/events', {
                templateUrl: 'events/event.html',
                controller: 'EventController as vm'
            }).
            when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'ContactController as vm'
            }).
            when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutController as vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
