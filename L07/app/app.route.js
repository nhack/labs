(function() {
    var app = angular.module('pizzaStore');

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/store'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();