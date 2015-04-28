if (Meteor.isClient) {
    var common = angular.module('common', ['ui.router']);

    common.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
}
