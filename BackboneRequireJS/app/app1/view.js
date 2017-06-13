define([
    'text!app/app1/app.html',
], function(html) {
    var View = Backbone.View.extend({
        // @target: Append to 
        el: '.content',
        /*  INITIALIZE  */
        initialize: function() {

        },
        /* RENDER */
        render: function() {
            this.$el.html(_.template(html));
        }
    });
    return View;
});