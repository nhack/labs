(function() {
    var app = angular.module('pizzaStore.categories.repository', []);
    app.factory("Category", ['$resource', 'SERVER', function($resource, SERVER) {
        return $resource(SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'categories/:id', {}, {
            itemsCount: {
                method: 'GET',
                url: SERVER.URL + ':' + SERVER.PORT + SERVER.PATH + 'categories/:id/count'
            }
        });
    }]);
})();