(function() {
    var app = angular.module('pizzaStore.store', []);

    app.controller('StoreController', ['$http', 'SERVER', function($http, SERVER) {
        var store = this;
        store.products = [];
        $http.get(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas').success(function(data) {
            store.products = data;
        });
    }]);
})();