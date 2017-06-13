'use strict';
define([
	'app/app2/model',
	'app/app2/view'
], function(Model, View) {
    var controller = function(param) {
        // @set: Model
        var model = new Model();
        param && model.set({
            value: param
        });
        // @set: View
        var view = new View({
            model: model
        });
        // @init: View Render
        view.render();
        // @init: Model Initial
        model.init();
        // @controller: Route Change
        controller.onRouteChange = function () {
            model.destroy();
            view.undelegateEvents();
        };
    };
    return controller;
});