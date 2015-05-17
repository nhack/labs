(function() {
    var app = angular.module('pizzaStore.store', []);

    app.controller('StoreController', ['Pizza', function(Pizza) {
        var store = this;
        store.products = [];
        Pizza.all().success(function(data) {
            store.products = data;
        });
    }]);
})();