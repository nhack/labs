(function() {
    var app = angular.module('pizzaStore.store', []);

    app.controller('StoreController', ['Pizza', function(Pizza) {
        this.activeCategory = null;
        this.products = Pizza.query();
    }]);
})();