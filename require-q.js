/*global Q,requirejs*/
function requireQ(modules) {
    'use strict'

    var deferred = Q.defer();
    requirejs(modules, function(){
        deferred.resolve(arguments);
    });
    return deferred.promise;
}
// Use spread()
