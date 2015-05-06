(function() {
    var app = angular.module('pizzaStore.products.list', []);

    app.directive('productList', function(){
        return{
            restrict: 'E',
            templateUrl: 'components/product/list/list.htm',
            scope: {
            	product: '='
            }
        }
    });
})();