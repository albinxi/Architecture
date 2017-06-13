define([
	'app/app1/model',
	'app/app1/view'
], function(Model, View) {
	'use strict';
    var controller = function() {
        // @set: Model
        var model = new Model();
        // @set: View
        var view = new View({
            model: model
        });
        // @init: View Render
        view.render();
        // @init: Model Initial
        //model.init();
        // @controller: Route Change
        controller.onRouteChange = function () {
            model.destroy();
            view.undelegateEvents();
        };
    };
    return controller;
});