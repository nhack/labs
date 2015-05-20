(function() {
    var app = angular.module('pizzaStore.products.ingredients', []);

    app.directive('productIngredients', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/product/ingredients/ingredients.htm',
            scope:{
            	product: '='
            }
        };
    });
})();