(function() {
    var app = angular.module('pizzaStore', ['ui.router', 'pizzaStore.store', 'pizzaStore.products']);
    
    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
})();