'use strict';
define([
    'text!app/app2/app.html',
], function(html) {
    var View = Backbone.View.extend({
        // @element:
        el: '.content',
        // @initialize:
        initialize: function() {
            this.model.on('bindEvent', this.render, this);
        },
        // @events:
        events: {
            
        },
        // @render
        render: function() {
            this.$el.html(
                _.template(html, {
                    value: this.model.get('value')
                })
            );
        }
    });
    return View;
});