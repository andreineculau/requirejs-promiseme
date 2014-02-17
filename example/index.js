require(['promise!test'], function(v) {
    'use strict';

    document.body.innerHTML = JSON.stringify(v, null, 2);
});
