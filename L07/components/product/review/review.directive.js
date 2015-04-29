(function() {
    var app = angular.module('pizzaStore.products.review', []);

    app.directive('productReview', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/product/review/review.htm',
            controller: function() {
                this.review = {};
                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs: 'reviewCtrl'
        }
    });
})();