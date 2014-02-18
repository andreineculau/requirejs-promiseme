define(['promiseme!this'], function(defer) {
//Or just get the Deferred "class"
//define(['promiseme!that'], function(Deferred) {
    'use strict';
    //var defer = new Deferred();
    //var defer = Deferred.defer();

    document.body.innerHTML = 'Loading module...';

    setTimeout(function() {
        defer.resolve({test:'successful'});
    }, 3000);

    return defer.promise;
    //return defer.promise();
});
