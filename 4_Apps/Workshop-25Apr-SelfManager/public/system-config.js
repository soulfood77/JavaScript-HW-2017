System.config({
    transpiler: 'plugin-babel',

    map: {
        // System js files
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'app': 'js/app.js',
        'myRouter': 'js/myRouter.js',
        'requester': 'js/requester.js',
        'data': 'js/data.js',
        'homeController': 'js/controllers/home.js',
        'todosController': 'js/controllers/todos.js',
        'eventsController': 'js/controllers/events.js',
        'userController': 'js/controllers/user.js',
        // 'templates': 'js/templates.js',

        // Library files
        'jquery': 'libs/jquery/dist/jquery.min.js',
        //'handlebars': 'libs/handlebars/dist/handlebars.min.js',
    }
});

System.import('app');