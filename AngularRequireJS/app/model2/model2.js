define([
    'angular',
    'text!app/model2/app.html'
], function (angular, html) {
    return {
        controller: function ($scope, $routeParams, $http, $interval) {
            console.log($routeParams);
            $scope.date = new Date();
        },
        tpl: html
    };

    controller.$inject = ['$scope'];

    // function controller(s){
    //     s.date = 'Albin';
    // }
    // return {controller:controller, tpl:html};
});