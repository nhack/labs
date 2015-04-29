(function() {
    var app = angular.module('pizzaStore.products.gallery', []);

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/product/gallery/gallery.htm',
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