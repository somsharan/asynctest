define(['./app'], function (app) {
    'use strict';
     app.constant('BASEURL','').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
    return app;
});