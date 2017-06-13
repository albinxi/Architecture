/*
	RequireJS Configuration
 */
'use strict';
(function(win) {

	var config = {
        baseUrl: './',
        map: {
            '*': {
                'css': 'css',
                //'router': '../router'
            }
        },
        paths: {
        	// @import: jQuery
        	jquery: 'libs/jquery/jquery-1.12.3',
        	// @import: Backbone, Underscore, Text
            underscore: 'libs/backbone/underscore',
            backbone: 'libs/backbone/backbone',
            text: 'libs/backbone/text',
            css: 'libs/requirejs/css',

            // @public:
            fn: 'public/fn'
        },
        shim: {
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            },
            'backbone': {
                deps: ['underscore', 'jquery', 'css'],
                exports: 'Backbone'
            }
        },
        // @dependency:
        deps: [
        	'public/core'
        ],
        //wiatSeconds: 0
    };
    // Initial config
    require.config(config);
})(window);