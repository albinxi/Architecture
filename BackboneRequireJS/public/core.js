define([
	'fn'
], function() {



	/*
		Include Backbone, Start Backbone
	 */
	require(['backbone', 'underscore', 'router'], function() {
        Backbone.history.start();
    });
});