(function() {
    var app = angular.module('pizzaStore.products.review', []);

    app.directive('productReview', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/product/review/review.htm',
            scope: {
                product: '='
            },
            controller: function(SERVER, $http, $sce) {
                this.review = {};

                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    this.saveReview(product, this.review);
                    this.review = {};
                };

                this.saveReview = function(product, review) {
                    $http.put(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'pizzas/addReview/' + product._id, review)
                        .success(function() {
                            product.reviews.push(review);
                            console.info('Added review: ' + review);
                        })
                        .error(function() {
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
    });
})();