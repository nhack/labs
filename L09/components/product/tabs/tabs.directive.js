(function() {
    var app = angular.module('pizzaStore.products.tabs', []);

    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/product/tabs/tabs.htm',
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
})();