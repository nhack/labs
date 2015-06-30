(function() {
    var app = angular.module('pizzaStore.categories.select', []);

    app.directive('categorySelect', function() {
        return {
            restrict: 'EA',
            templateUrl: 'components/category/select/select.htm',
            controller: ['Category', function(Category) {
                this.activeCategory = null;
                this.categories = Category.query();
                this.setActiveCategory = function(category) {
                    this.activeCategory = category;
                };
                this.getActiveCategory = function() {
                    return this.activeCategory;
                }
            }],
            controllerAs: 'select'
        }
    });
})();