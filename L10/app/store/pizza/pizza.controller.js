(function() {
    var app = angular.module('pizzaStore.store.pizza', []);

    app.controller('PizzaController', ['$stateParams', 'Pizza', function($stateParams, Pizza) {
        this.product = Pizza.get({
            id: $stateParams.pizzaId
        });
    }]);
})();