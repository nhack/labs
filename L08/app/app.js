(function() {
    var app = angular.module('pizzaStore', [
        'ui.router',
        'pizzaStore.store',
        'pizzaStore.store.pizza',
        'pizzaStore.products'
    ]);

    app.constant('SERVER', {
        URL: 'http://pizza-store.herokuapp.com',
        PORT: '80',
        PATH: '/api/'
    })
})();