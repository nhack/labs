(function() {
    var app = angular.module('pizzaStore.store');

    app.config(function($routeProvider) {
        $routeProvider
            .when('/store', {
                templateUrl: 'app/store/store.htm',
                controller: 'StoreController',
                controllerAs: 'store'
            });
    });
})();