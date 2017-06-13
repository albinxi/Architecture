define(['backbone'], function() {

    var APP = 'app/';

    var routesMap = {
        //'': APP + 'controller.js',
        'model1': APP + 'app1/controller.js',
        'model2(/:param)': APP + 'app2/controller.js'
    };

    var Router = Backbone.Router.extend({
        routes: routesMap
    });

    var router = new Router();
    router.on('route', function(route, params) {
        require([route], function(controller) {
            if(router.currentController && router.currentController !== controller){
                router.currentController.onRouteChange && router.currentController.onRouteChange();
            }
            router.currentController = controller;
            controller.apply(null, params);
        });
    });
    return router;
});