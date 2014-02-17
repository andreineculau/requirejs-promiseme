define([], function() {
    'use strict';

    // This is more complicated than it has to be
    // because it tries to support 1+ APIs
    var Deferred = function() {
        if (!(this instanceof Deferred)) {
            return new Deferred();
        }
        var callback = function() {},
            then = function(fun) {
                callback = fun;
            };

        this.resolve = function(value) {
            setTimeout(function() {
                callback(value);
            }, 0);
        };
        this.promise = function() {
            return {
                then: then
            };
        };
        this.promise.then = then;
    };
    Deferred.defer = Deferred;

    return {
        load: function(name, req, onload, config) {
            if (name === 'me') {
                onload(Deferred);
            } else {
                req([name], function (value) {
                    value.then(function(actualValue) {
                        onload(actualValue);
                    });
                });
            }
        }
    };
});
