(function() {
    var app = angular.module('pizzaStore.store.pizza', []);

    app.controller('PizzaController', ['$http', '$stateParams', 'SERVER', function($http, $stateParams, SERVER) {
        var pizza = this;
        pizza.product = {};
        $http.get(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/' + $stateParams.pizzaId)
            .success(function(data) {
                pizza.product = data;
            });
    }]);
})();