(function() {
    var app = angular.module('pizzaStore', ['pizzaStore-products']);

    app.controller('StoreController', function() {
        var store = this;
        store.products = [];
    });

    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();