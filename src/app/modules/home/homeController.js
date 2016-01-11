var app = angular.module("appGulp");

function HomeController () {

}

HomeController.$inject = [];

app.controller('homeController', HomeController);

app.config([
    '$stateProvider',
function ($stateProvider) {

    $stateProvider.state(app.name+'.home', {
        url: '/',
        views: {
            'main': {
              templateUrl: 'app/modules/home/homeView.html',
              controller: 'homeController',
              controllerAs: 'vm'
            }

    }});

}]);
