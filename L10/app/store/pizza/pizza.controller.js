(function() {
    var app = angular.module('pizzaStore.store.pizza', []);

    app.controller('PizzaController', ['$stateParams', 'Pizza', function($stateParams, Pizza) {
        var pizza = this;
        pizza.product = {};
        Pizza.get($stateParams.pizzaId).success(function(data) {
            pizza.product = data;
        });
    }]);
})();