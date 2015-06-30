(function() {
    var app = angular.module('pizzaStore.categories.item', []);

    app.directive('categoryItem', function() {
        return {
            restrict: 'EA',
            templateUrl: 'components/category/item/item.htm',
            scope: {
                category: '='
            },
            require: '^categorySelect',
            controller: ['$scope', 'Category', function($scope, Category) {
                this.products = Category.itemsCount({
                    id: $scope.category._id
                });
            }],
            controllerAs: 'item',
            link: function(scope, element, attrs, categorySelect) {
                scope.item.makeActive = function() {
                    categorySelect.setActiveCategory(scope.category);
                };
                scope.item.isActive = function() {
                    return scope.category === categorySelect.getActiveCategory();
                }
            },
        }
    });
})();