(function() {
    var app = angular.module('pizzaStore.products.review', []);

    app.directive('productReview', ['$sce', 'Pizza', function($sce, Pizza) {
        return {
            restrict: 'E',
            templateUrl: 'components/product/review/review.htm',
            scope: {
                product: '='
            },
            controller: function() {
                this.review = {};

                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    this.saveReview(product, this.review);
                    this.review = {};
                };

                this.saveReview = function(product, review) {
                    Pizza.addReview({
                            id: product._id
                        }, review).$promise
                        .then(function() {
                            product.reviews.push(review);
                            console.info('Added review: ' + review);
                        })
                        .catch(function() {
                            console.error('Error while saving: ' + product);
                        });
                };

                this.toHtml = function(text) {
                    if (text) {
                        return $sce.trustAsHtml(markdown.toHTML(text));
                    }
                    return "";
                };
            },
            link: function(scope, element) {
                element.find('.expandable').on('click', function(event) {
                    var siblings = $(event.target).siblings('li');
                    $.each(siblings, function(index, li) {
                        $(li).toggleClass('hidden');
                    });
                });
            },
            controllerAs: 'reviewCtrl'
        }
    }]);
})();