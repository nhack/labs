(function() {
    var app = angular.module('pizzaStore.utils.image', []);

    app.provider('Image', function ImageProvider() {
        var preamble;

        this.setPreamble = function(newPreamble) {
            preamble = newPreamble;
        };

        this.$get = function() {
            return {
                decode: function(encodedImage) {
                    return preamble + encodedImage;
                }
            }
        };
    });
})();