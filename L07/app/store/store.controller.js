(function() {
    var app = angular.module('pizzaStore.store', []);

    app.controller('StoreController', ['$http', function($http) {    	
        var store = this;
        store.products = [];
        $http.get('res/store-products.json').success(function(data) {
            store.products = data;
        });
    }]);
})();