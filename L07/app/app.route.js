(function() {
    var app = angular.module('pizzaStore');

    app.config(function($urlRouterProvider) {
        $urlRouterProvider
            .when('/', '/store')
            .otherwise('/');
    });
})();