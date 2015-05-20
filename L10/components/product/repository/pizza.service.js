(function() {
    var app = angular.module('pizzaStore.products.repository', []);
    app.factory("Pizza", ['$resource', 'SERVER', function($resource, SERVER) {
        return $resource(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/:id', {}, {
            addReview: {
                method: 'PUT',
                url: SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/addReview/:id'
            }
        });
    }]);
})();