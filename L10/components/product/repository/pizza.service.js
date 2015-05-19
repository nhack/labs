(function() {
    var app = angular.module('pizzaStore.products.repository', []);
    app.factory("Pizza", ['$http', 'SERVER', function($http, SERVER) {
        return {
            all: function() {
                return $http.get(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas');
            },
            get: function(pizzaId) {
                return $http.get(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/' + pizzaId);
            },
            addReview: function(pizzaId, review) {
                return $http.put(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/addReview/' + pizzaId, review);
            }
        }
    }]);
})();