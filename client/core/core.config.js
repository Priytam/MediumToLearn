/**
 * Created by pjpandey on 7/24/2017.
 */
(function() {
    'use strict';

    angular.module('app.core')
        .config(config)
        .constant('_',  window._);

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
            }).
            when('/eventDetail/:id', {
                templateUrl: 'eventDetail/eventDetail.html',
                controller: 'EventDetailController as vm',
                resolve: {
                    event : function(EventService, $route) {
                        return EventService.getEvent($route.current.params.id);
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
