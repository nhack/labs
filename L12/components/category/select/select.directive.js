(function() {
    var app = angular.module('pizzaStore.categories.select', []);

    app.directive('categorySelect', function() {
        return {
            restrict: 'EA',
            templateUrl: 'components/category/select/select.htm',
            scope: {
                activeCategory: '='
            },
            controller: ['$scope', 'Category', function($scope, Category) {
                this.categories = Category.query();
                this.setActiveCategory = function(category) {
                    if ($scope.activeCategory === category._id) {
                        $scope.activeCategory = undefined;
                    } else {
                        $scope.activeCategory = category._id;
                    }
                };
                this.getActiveCategory = function() {
                    return $scope.activeCategory;
                }
            }],
            controllerAs: 'select'
        }
    });
})();