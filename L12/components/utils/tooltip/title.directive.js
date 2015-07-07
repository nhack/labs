(function() {
    var app = angular.module('pizzaStore.utils.tooltip', []);

    app.directive('title', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $timeout(function() {
                    element.tooltip({
                        container: "body"
                    });
                });
                scope.$on('destroy', function() {
                    element.tooltip('destroy');
                })
            }
        }
    }]);
})();