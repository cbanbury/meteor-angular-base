// Configuration for home. Defines angular-ui-router states

if (Meteor.isClient) {
    var home = angular.module('Home', ['common']);

    home.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'home.html',
                controller: 'HomeController'
            });
    }]);
}

// TODO: Add any server side configuration here
