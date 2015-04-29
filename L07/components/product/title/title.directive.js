(function() {
    var app = angular.module('pizzaStore.products.title', []);

    app.directive('productTitle', function(){
        return{
            restrict: 'E',
            templateUrl: 'components/product/title/title.htm'
        }
    });
})();