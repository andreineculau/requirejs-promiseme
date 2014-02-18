define(['promiseme'], function(q) {
//define(['promiseme'], function(Deferred) {
    'use strict';
    q = q.defer();
    //var defer = new Deferred();

    document.body.innerHTML = 'Loading module...';

    setTimeout(function() {
        q.resolve({test:'successful'});
    }, 3000);

    return q.promise;
    //return q.promise();
});
