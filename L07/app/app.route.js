(function() {
    var app = angular.module('pizzaStore');

    app.config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider
            .when('/', '/store')
            .otherwise('/');
    }]);
})();