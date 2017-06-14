define([
    'angular',
    'text!app/model1/app.html'
], function(angular, html) {
    return {
        controller: function ($scope, $routeParams, $http, $interval) {
            console.log($routeParams);
            $scope.info = 'Type your name';
        },
        tpl: html
    };
});