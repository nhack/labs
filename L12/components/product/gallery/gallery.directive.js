(function() {
    var app = angular.module('pizzaStore.products.gallery', []);

    app.directive('productGallery', ['Image', function(Image) {
        return {
            restrict: 'E',
            templateUrl: 'components/product/gallery/gallery.htm',
            scope: {
                product: '='
            },
            controller: function() {
                this.current = 0;
                this.setCurrent = function(current) {
                    this.current = current ? current : 0;
                };
                this.decode = function(encodedImage) {
                    return Image.decode(encodedImage);
                }
            },
            controllerAs: 'gallery'
        }
    }]);
})();