require.config({

  // alias libraries paths
    paths: {
        'domReady': '../domReady/domReady',
        'angular': '../angular/angular',
        'angularRoute': '../angular-route/angular-route.min'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute':{
            deps: ['angular'],
            exports:'ngRoute'
        }
    },

    // kick start application
    deps: ['./bootstrap']
});