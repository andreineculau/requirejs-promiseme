define([], function() {
    'use strict';

    return function() {
        var callback = function() {},
            rqsolve = function(value) {
            setTimeout(function() {callback(value);}, 0);
        };
        rqsolve.promise = {then: function(fun) {callback = fun;}};
        return rqsolve;
    };
});
