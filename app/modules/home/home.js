// Home Controller

if (Meteor.isClient) {
    var home = angular.module('Home');

    home.controller('HomeController', ['$rootScope', function($rootScope) {
        $rootScope.title = 'Hello World!';
    }]);
}

// TODO Put any server side code here for home controller
