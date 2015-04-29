(function() {
    var app = angular.module('pizzaStore.store');

    app.config(function($stateProvider) {
        $stateProvider
            .state('store', {
                url: '/store',
                templateUrl: 'app/store/store.htm',
                controller: 'StoreController',
                controllerAs: 'store'
            });
    });
})();