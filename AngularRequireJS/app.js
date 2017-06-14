'use strict';
(function (win) {

    var config = {
        baseUrl: './',
        map: {
            '*': {
                // 'router': '../router'
            }
        },
        paths: {
            // @requirejs
            underscore: 'libs/requirejs/underscore',
            text: 'libs/requirejs/text',
            // @angular
            angular: 'libs/angular/angular',
            'angular-route': 'libs/angular/angular-route',
        },
        shim: {
            underscore: {
                exports: '_'
            },
            angular: {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],
                exports: 'ngRouteModule'
            }
        },
        deps: [
            
        ]
    };

    require.config(config);

    require(['angular', 'router'], function(angular){
        angular.bootstrap(document, ['webapp']);
    });

})(window);