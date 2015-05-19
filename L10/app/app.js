(function() {
    var app = angular.module('pizzaStore', [
        'ui.router',
        'pizzaStore.store',
        'pizzaStore.store.pizza',
        'pizzaStore.products',
        'pizzaStore.utils'
    ]);

    app.config(['ImageProvider', function(ImageProvider) {
        ImageProvider.setPreamble('data:image/jpeg;base64,');
    }]);

    app.constant('SERVER', {
        URL: 'http://pizza-store.herokuapp.com',
        PORT: '80',
        PATH: '/api/'
    });
})();