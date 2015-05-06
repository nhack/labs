(function() {
    var app = angular.module('pizzaStore.store.pizza');

    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('pizza', {
                url: '/store/pizza/:pizzaId',
                templateUrl: 'app/store/pizza/pizza.htm',
                controller: 'PizzaController',
                controllerAs: 'pizza'
            });
    }]);
})();