(function(factory) {
    // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
    // We use `self` instead of `window` for `WebWorker` support.
    var root = (typeof self == 'object' && self.self === self && self) ||
            (typeof global == 'object' && global.global === global && global);

    // Set up fn appropriately for the environment. Start with AMD.
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'exports'], function($, exports) {
          // Export global even in AMD case in case this script is loaded with
          // others that may still expect a global fn.
          root.fn = factory(root, exports, $);
        });
        // Next for Node.js or CommonJS. jQuery may not be needed as a module.
    } else if (typeof exports !== 'undefined') {
        var $;
        try { $ = require('jquery'); } catch (e) {}
        factory(root, exports, $);
        // Finally, as a browser global.
    } else {
        root.fn = factory(root, {}, (root.jQuery || root.$));
    }
})(function(root, fn, $) {
// Initial Setup
    // the `$` variable.
    fn.$ = $;
    /*
        @function:
            Format < to &t;, > to &gt;
    */
    fn.html = function(s) {
        return s.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\t/g, " ");
    };
    /*
        @function:
            Return type
            @param: Object
    */
    fn.type = function(o) {
        return Object.prototype.toString.call(o).replace(/\[object +(.*?)\]+/g, function(s0, s1) {
            return s1;
        });
    };
    /*
        @function:
            Return 16 digital UUID
     */
    fn.uuid = function() {
        return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    };

    fn.log = {
        /*
            Console Log Color Settings
            eg:
                console.log("%c" + msg, FN.log.color.gray);
         */
        color: {
            "gray": "font-weight: 500; color: #1B2B34;",
            "red": "font-weight: 500; color: #EC5f67;",
            "orange": "font-weight: 500; color: #F99157;",
            "yellow": "font-weight: 500; color: #FAC863;",
            "green": "font-weight: 500; color: #99C794;",
            "teal": "font-weight: 500; color: #5FB3B3;",
            "blue": "font-weight: 500; color: #6699CC;",
            "purple": "font-weight: 500; color: #C594C5;",
            "brown": "font-weight: 500; color: #AB7967;"
        },
        /*
            Infomation Log
         */
        set ilog(s) {
            this.info[this.info.length] = s;
            console.log("%c Info: " + s, FN.log.color.blue);
        },
        info: [],
        /*
            Success Log
         */
        set slog(s) {
            this.success[this.success.length] = s;
            console.log("%c Success: " + s, FN.log.color.green);
        },
        success: [],
        /*
            Error Log
         */
        set elog(s) {
            this.error[this.error.length] = s;
            console.log("%c Error: " + s, FN.log.color.red);
        },
        error: []
    }

    // Check for Local Storage Support
    function supportLocalStorage() {
      try {
        return 'localStorage' in window && window['localStorage'] != null;
      } catch (e) {
        return false;
      }
    }
    // Memoization function.
    Function.prototype.memoized = function() {
      // Values object for caching results.
      this._values = this._values || {};
      // Stringify function arguments to make key.
      var key = JSON.stringify(Array.prototype.slice.call(arguments));

      // Check if result is cached
      if (this._values[key] !== undefined) {
        console.log('Loaded from cache: %s => %s', key, this._values[key]);
        return this._values[key]

      // Check if result is in local storage.
      } else if (supportLocalStorage && localStorage[this.name+':'+key]) {
        console.log('Loaded from local storage: %s => %s', key, localStorage[this.name+':'+key]);
        return localStorage[this.name+':'+key];

        // Call the original function if result not found and store result.
      } else {
        var value = JSON.stringify(this.apply(this, arguments));
        // Store in local storage.
        if (supportLocalStorage) {
          localStorage[this.name+':'+key] = value;
        }
        console.log('New result: %s => %s', key, value);
        return this._values[key] = value;
      }
    };
    // Call the memoization function with the original function arguments.
    Function.prototype.memoize = function() {
      var fn = this;
      return function() {
        return fn.memoized.apply(fn, arguments);
      };
    };

    return fn;
});