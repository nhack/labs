(function() {
    var app = angular.module('pizzaStore-products', []);

    app.directive('productTitle', function(){
        return{
            restrict: 'E',
            templateUrl: 'app/product/product-title.htm'
        }
    });

    app.directive('productIngredients', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/product/product-ingredients.htm'
        };
    });

    app.directive('productExtras', function() {
        return {
            restrict: 'EA',
            templateUrl: 'app/product/product-extras.htm'
        }
    });

    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/product/product-tabs.htm',
            controller: function() {
                this.tab = 1;

                this.setTab = function(tab) {
                    this.tab = tab;
                };

                this.isSet = function(tab) {
                    return (this.tab === tab);
                };
            },
            controllerAs: 'tab'
        }
    });

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/product/product-gallery.htm',
            controller: function() {
                this.current = 0;
                this.setCurrent = function(current) {
                    this.current = current ? current : 0;
                };
            },
            controllerAs: 'gallery'
        }
    });
})();