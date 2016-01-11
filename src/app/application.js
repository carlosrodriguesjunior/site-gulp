var app = angular.module('appGulp', [
    'ui.router',
    'ngMaterial'
]);


app.config([
    '$urlRouterProvider',
    '$mdThemingProvider',
    '$stateProvider',
    function ($urlRouterProvider, $mdThemingProvider, $stateProvider) {

      $stateProvider
        .state(app.name, {
        url: "",
        abstract: true,
        templateUrl: "app/modules/layout/layoutView.html",
        controller:"layoutController as vm"
      });

      $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('grey');
}]);
