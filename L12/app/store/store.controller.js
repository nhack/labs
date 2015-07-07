(function() {
    var app = angular.module('pizzaStore.store', []);

    app.controller('StoreController', ['Pizza', function(Pizza) {
        this.search = {};
        this.products = Pizza.query();
    }]);
})();