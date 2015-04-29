(function() {
    var app = angular.module('pizzaStore.products.extras', []);

    app.directive('productExtras', function() {
        return {
            restrict: 'EA',
            templateUrl: 'components/product/extras/extras.htm'
        }
    });
})();