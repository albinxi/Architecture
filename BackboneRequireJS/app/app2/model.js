'use strict';
define([

], function() {
    var Model = Backbone.Model.extend({
        // @defaults:
        defaults: function() {
            return {
                value: "app2"
            };
        },
        // @fetch:
        fetch: function() {

        },
        // @init: 
        init: function() {
            var self = this;
            setTimeout(function(){
                self.set({value:'app2-changed'});
                self.trigger('bindEvent');
            }, 2000);
        },
        // @destroy:
        destroy: function() {
            
        }
    });
    return Model;
});