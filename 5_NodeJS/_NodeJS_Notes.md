# Node.js 
1. [Course Intro and Project Requirements](#intro) - _20.06.2017 - Doncho_
2. [Node.js Overview](#overview) - no video?
3. [Modules](#modules)
4. [Asynchronous Operations](#asynchronous-operations), [File Databases](#file-databases) - _22.06.2017 - Doncho live demo Web crawler_
5. [Unit Testing](#unit-testing) 
6. [Tooling](#tooling) - _27.06.2017 - Doncho_
7. [Express Pug & Passport](#express-pug-passport) - _29.06.2017 - Doncho_*

# Intro
_20.06.2017 - Doncho_

1.  **Topics**

    - File IO we'll use for practising **async calls** - 5 types (promises - most widely used, callbacks, observables, yield, async/await from ES2017).

    - Debuggers, tools task runners (gulp) - set-up. Task runners - **Gulp** - used for automation, we set-up operations, create requests and it runs them (eg. automate compile/build sass to css, ES2015 to ES5). 

    - Databases - MongoDB.

    - Web development - **Express** framework for Node.js (like ASP.NET for C#, Jango for Pyton, SpringMVS for Java, Laravel and CodeIgniter for PHP). Provides convenient way to create apps quickly. Will talk about MVC-like (pure MVC in javascript is a huge overhead and not worth it). MVC = architecture pattern for creating  multi-layered applications. Goal is to structure apps to be reusable, testable, and easy to extend and add new functionality.

    - **WebSockets** - AJAX = way for creating HTTP requests to web servers and receiving responses. WebSockets provide a way for the server to ping the client (eg. chat clients, notifications), so that the client doesn't have to explicitly requests to the server, two-way client-server communication.

    - **UT** in Node.js with javascript - **Mocha** framework with Chai syntax. Functional testing - also with Mocha & Chai - launches page and clicks around it checking for correct result. Have a browser object with which we manage the browser (something like jQuery).

    - **Containers** - isolated environment with automatic set-up of specific installed program versions and tools. Something like a virtual machine.

    - **Cloud** - Amazon Web Services (AWS) - launch instance, deploy. Has free trial.

2.  **Course project** - in intro and in separate video

    Standard web app not SPA and AJAX only, AWS hosting. Use Node.js, Express, MongoDB.

    !**ESLint - zero errors** - custom config rules.

    Additional tasks to solve during project presentation.
    
    Public and private parts.

    - BACK-END - 40%

        **Pug** == ex. Jade - rendering engine similar to Handlebars (also accepts a javascript object), no closing tags, significant whitespace (whitespace sensitive, tabs are important for nesting).  . (dot) is very important at the end of  line signifying that you can have text on the next line. Supports reusable components - extension/inheritance of templates and mix-ins (eg. navigation is in another file and called as function). HTML is cleaner and easier for navigation.

        Node.js & Express can work with other rendering engines (i.e. Handlebars).

        **REST** (get, post) routes to load components with AJAX (eg. creating new post can use AJAX to load the drop-down with categories). Also private (authenticated) route - **token**  authentication (web app auth).

        Authentication - must be both session and token

        **MongoDB** - fast search, slow insert, no relations

        **Data/service layer** to abstractly access the data storage. Needed for UT.

        **Passport** - for authentication and managing users. Hard to set up but documentation has good instructions.

        **WebSockets** - Socket.io (computer communications protocol, providing full-duplex communication channels over a single TCP connection).

    - FRONT-END - 25%

        !**Usability** over design. Any framework is allowed (KendoUI, AngularJS, Angular 2, Knockout, Bootstrap). Responsive design required.

        Communication - AJAX and/or WebSockets.

        Handle errors and validate data to avoid crashes. Use loaders and notifications.

        Security - Escape values coming from user input fields. 

    - TESTS - 25%

        A **sample application** with UT, integration and functional automation tests. **Doncho will provide link to it**!

        **Yarn** = alternative to npm, wraps npm and makes it faster. Builds a tree of dependencies, installs them in parallel. Npm is linear which makes it slower.        

        Test **database needs to be cloud hosted** but run tests *locally*! In real-life projects this would be part of continuous integration which runs tests on every commit. The code which launches the app and creates a database should not be in the UT file. At this stage can't talk about *CircleCI*, **Jenkins** and other tools which automate this process. Maybe in the ASP.NET maybe. The solution we use works with **Selenium** which uses the browser to conduct tests -> uses the DOM tree. For mobile devices there is no DOM tree and other tools are used.

        **Test back-end** (UT - Mocha, Chai), not frontend (which is not expected to have very thick logic) - 50% code coverage - **Istanbul.js** tool for code coverage.
        
        **Integration/Functional** automation tests required too (Not continuous integration - which tests on every commit). Use web driver for FireFox or Chrome in **Selenium**. Browser *phantomjs* is headless Chrome, older, uses webkit, not blink, works in background. Test 50% of application routes for authenticated and non-authenticated users.

        Integration test for AJAX routes will be optional.

    - Deployment in Amazon Web Services (AWS) - 10%

    - BONUS - 10%
        
        - Continuous integration - Jenkins, CircleCI, etc. - can be set up at the end when we are  ready with the application.
        - UT client code
        - Containers
    .

3.  **Tools**

    - OS: Windows, Linux, Mac - Node.js is not perfect in Windows (launches slower), was designed for Linux initially.
    - Text editor: VS Code preferred 
    - Node.js version: v.8+
    - Server: MongoDB 
.

# Overview
_20.06.2017 - Doncho_

1. **Node.js Overview**
    - What

        Initially Node.js was V8 webkit Chrome engine mocked to work on server.

        Other platforms on which to write js to run on server:

        Rhino - similar to Node.js specialized for image processing

        React native & Native script are something similar, similar flow

        Node.js + Express = web development

    - How

        Event-driven - event loop distributes operations
        
        Single-threaded - libuv allows async operations

    - Event loop (*learn more)

        V8 = browser without UI

        Node.js bindings - javascript to C++, create events

        Libuv (= middle man to the OS) - Event queue - queues all async operations - event loop sends them to the OS. while the OS is completing this operation, the event loop does nothing, if all threads are busy. When a thread slot is freed, the event loop returns the execute callback to the event queue and takes the next operation in the queue.

2. **Setup**

    **Installation:**

    - Standard installation - install from website, check if added to $PATH. Not so flexible for development because only one version of Node.js is possible.

    - Using NVM (Node Version Manager) - should be installed to C:\nvm (no whitespace and special characters). Allows update of Node.js as often as needed, also allows testing on different versions of Node.js.

    Node.js v8+ supports keywords async and ??

    **IDEs:**

    - **VS Code** 
        - intellisense gives some information - uses TypeScript (by Microsoft = superset to JavaScript; Java compiled to JavaScript; strongly typed JavaScript). Comes from d.ts files with meta data about the code. Not all libraries have these typings.

        - !Plugins: 
        
        **Auto Import 1.2.2** - observable import, works with TS not always with JS.

        **CSSLint, ESLint** - file .eslitrc - *Doncho will add it to the demos

        **Path Autocomplete / Path Intellisense**
    
    - Atom
    .

    **Async vs. multi-thread programming:**

    - Async - don't care how the operation is completed, less control

    - Multi-thread - more control, threads are created by the developer and, when completed, must be taken care for something from the main thread to call them back and identify what kind of data main will have access to, otherwise data in the main thread could be modified by other threads.

    **Shortcuts**

    **Ctrl + Space** = possible options

.

# Modules
_20.06.2017 - Doncho_

1. **Modules in Node.js**

    - **Scope**

        Issues with global variables in JavaScript - solved with IIFEs which create function scope.

        In Node.js **global scope is explicit** - have to specially define it. Every file is a node.js module. Variables by default are accessible only in the file they are declared in. Solves issues with global variables.

        Modules in Node.js are different parts of an application (like classes in C#). Useful for splitting the code into smaller pieces.

    - **Loading** modules

        **Build-in modules** (ie. modules which come with Node.js) are loaded with their name.

        `require(path_to_module)` - (like `using` in C#) - global function Node.js, loads exports from the respective module (eg. 

        `/* globals globalVarName */` - to resolve ESLint underlining global variables coming from other modules.
        
        ```js
        /* globals __dirname */
        const fs = require("fs") //fs = file system 
        // read all files from directory
        fs.readdirSync(__dirname)
            foreach((file) => ){
                console.log(file);
            }
        ```

        **Third party modules** are loaded with `require("path/moduleId")`;

        Modules which we define - the id is the relative/absolute path to the file location. Always use `./` when referring to current directory.

    - **Exporting** 
        
        `module` - another global object (like `exports`, `require`) used to handle modules.

        ```js
        // file printer.js
        const print = (msg) => {
            console.log(msg);
        }
        module.exports = {
            /* list functions to export */
            print
        }
        const name = require('./utils/printer'); 
        //the name of the js file without the extension
        ```

    - **Other options** - not recommended:

        epxports.print = print // funciton name, include at top /* globals exports */

        Attach to global scope - not recommended:
        in module
        global.print = print; 

        to use in file
            const print2 = global.print;

        Not a good practice to use the global scope

        Using destructuring assignment to import (use new line for each property)

        ```js
        const {
        getPrinter,
        Printer 
        } = require('path to module');
        ```

        Index.js file/module - default module for the folder - can be imported with

        require('folder name');

2. **Loading modules**
3. **reating modules**
4. **Using third-party modules**

    Installed with npm

    **Fetch** - for http requests, comes from browser, not available in Node.js - install from npm node-fetch (browse npmjs.com )

    Using .js extension when requiring modules is optional

    ```npm init -y``` - creates package.json file -y = yes

    Node.js projects are folder-based 

    ```npm install``` 
    - recreates dependencies saved in package.json


    **Yarn** package - does topological sort of the dependencies = resolves dependencies and installs them in parallel instead of synchronously = faster than npm install. Must be installed globally.

    ```npm install -g http-server``` 
    `npm install --g yarn`
    goes in node/[version]/lib/node_modules

    if node.js version is updated, global modules need to be reinstalled in the new version folder

    `yarn global add http-server`
    `yarn global add http-server -dev`

    Dev dependencies
    `npm install --save-dev packageName`
    `npm uninstall --save-dev packageName`


.

# Asynchronous operations
_22.06.2017 - Doncho_

1. **Intro**

    Always initialise a project with npm init -y

    **Package.json**

    **index.js**


    "scripts": {
        "start": "node app.js" // defines what to do on cmd "npm start"
        // Accepts all valid power shell and bash scripts/commands
        // cygwin = bash for windows
        // power shell =  bash for windows; script language allowing automation of commands
    }

    Custom commands in "scripts" eg.

    "dev": nodemon app.js // restarts server?
    nodemon package - install global, screens changes to files
    Custom commands need "run" to work: npm run dev

    Main script
    Defines startup/entry point of the application with "node ."
    It's optional, mainly used for npm packages

    .eslintrc - dot signifies hidden files in Linux

2. **Overview**

    Various practices:

    - callbacks - most popular, because they come from javascript and have been around for years. The problem with them is that they cause the pyramid of death. Very difficult error handling.

    - promises - good option - provide easy way to avoid nesting of async operations. Easy error handling (.catch at the end)

    - observables - external library - RxJS library (reactive extensions). Introduce functional principles of programming, works better with javascript.

    - yield + generators = hack, can be used for handling async operations as a side effect.

    - async + await - work with/like promises but can be used easier


3. **Callbacks**

4. **Promises**

    Promises flatten callbacks = better chaining.
    resolve and reject are callbacks. Other callbacks - err, loading?

    ```js
    let pr = new Promise((resolveCb, rejectCb) => {
        //async operation
    });

    const waitSeconds = (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, seconds * 1000)
        });
    };
    ```

    ```js
    waitSeconds(2).then(() => {
        //success
    }, () =>{
        //error
    })
    .then(() => {
        console.log('1. It works');
        return waitSecodns(2); 
        // if return waitSeconds is missing, 
        // the following then-s will not wait 2 seconds more but just print right away
    })
    .then(() => {
        console.log('2. It works');
        return waitSeconds(2);
        //
    })
    .catch(() =>{
        // Doesn't have to be at the end of the block.
        // Every promise has then & catch functions
    };

    ```

    Promise all - takes an array of promises and runs after all of them are completed. Then also returns a promise.

    ```js
    Pormise.all([
        waitSeconds(1)
            .then(() => console log('1')),
        waitSeconds(2)
            .then(() => console log('2')),
        waitSeconds(3)
            .then(() => console log('3')),
    ])
        .then(() => {
            console.log('All are ready');
        });

    ```

    ```js
    //Creates an ok promise which can be chained
    Promise.resolve()
        .then((result) => {
            console.log(result);
            //prints undefined
            return 1;
        })
        .then((result) => {
            console.log(result);
            //prints 1
            return Promise.resolve(1);
        })
        .ten((result) =>{
            console.log(result);
            //prints 1 too
        })
    ```

    ```js
    Promise.all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve()
    ])
        .then((results) => {
            console.log(results);
            //logs in reverse order ?
        })
        .then(([r1, r2, r3]) =>{
            //destructuring assignment
            console.log(r1);
            console.log(r2);
            console.log(r3);
        })

    ```


5. **Async & await**

    Work with promises. Need to create an async function to use them. Similar to C# (...)

    Defining

    ```js
    const f = async() =>{

    }

    async function f1(){

    }

    let obj = {
        async f3(){

        }
    }

    class Person {
        async load(){

        }
    }
    ```

    Similar to the then-s but code is even more linear.

    ```js
    const f = async () =>{
        await waitSeconds(1); 
        // waits for this function to complete before moving to the next one
        console.log('1.');
        await waitSeconds(2);
        console.log('2.');
        const result = await waitSeconds(3);
        //to get  result just assign the await function to a var
        console.log('3.');

    }
    ```

    To be able to use await, we have to be in a method marked as async.

    ```js
    const asyncOperation = async (param) => {
        await waitSeconds(2);
        console.log ('Ready' + param);
        return param;

    };

    const main = async () =>{
        const result = await asyncOperation(5);
        console.log(result);
    }

    main();
    ```

    Await & async are syntax sugar to promises.

    ```js
    const f1 = async() =>{
        return await 5;
        return await Promise.resolve(5);
        //return the result wrapped in a promise
        //both are the same thing
    }
    ```

    Allow try-catch block similar to all other languages, instead of calling callbacks

    ```js
    const main = async () =>{
        try{
            const result = await asyncOperation(5);
            console.log(result);
        }
        catch (err){
            console.log(err);
        }
    };
    ```

6. **Observables**

    ```js
    const {Observable} = require('rxjs');
    ```

    Can continuously provide data. We attach a callback which fires every time...?

    Used similarly to promises.

    ```js
    const waitSeconds = (seconds) =>{
        return Observable.
            create((o) =>{
                o.next();
            })
            .delay(seconds * 1000);
    };

    waitSeconds(1)
        .do(()=>{
            console.log('1.');
        })
        .delay(1000)
        //same as subscribe
        .subscribe(()=>{
            //instead of then
            console.log('1.');
        });
    ```

    ```js
    const tick = (tickPeriod) =>{
        return Observable.create((o) => {
            setInterval(() => {
                o.next();
            }, tickPeriod * 1000)
        });
    };

    let index = 1;
    tick(1)
        .subscribe(() => {
            console.log(index);
            index += 1;
        })

    // prints out continuous numbers.
    ```

    Observables (for the moment) don't provide anything new compared to promises. Angular2 works with observables.

    Can't be used because not implemented everywhere yet?

7. **Yield & generators**

    Do something like async. Too complicated.
.

# File databases
_22.06.2017 - Doncho live demo_

**Web crawler**
0. Using:
    - Promises - Async
    - Http
    - Modules
    - IO
    - DSA - queue, DFS

    Source: Goodreads.com public data

1. Steps:
    1. Get data
        - Http -> html
        - HTML -> objects
    2. Save data

2. Libraries:
    - Fetch or 
    - isomorphic-fetch - better because can be required once, attaches to global scope; futuristic
    - jquery
    - jsdom

    Better always return promises even for synchronous operations = consistency.
.

# Unit Testing
_27.06.2017 - Doncho_

1. **UT Frameworks** - quick review

    - JSUnit - rarely used 
    - QUnit - created by John Resik (JQuery), mostly used for front end testing
    - Jasmine - largely used
    - Mocha - more powerful than Jasmine, largely used ; pluggable framework - accepts additions. Needs syntax for creating UT - assert, should, expect. Most popular syntax library - Chai. Should extends the object prototype and adds method should. Expect is mostly used because it's most expressive.

    1. Example:

    ```js
    assert.areEqual(expected, actual)
    expect(actual).to.be.eql(expected)
    actual.should().equal(expected)
    ```

    1. Installation: `yarn add mocha chai --dev`

    1. create test folder and file simple.test.js for the tests

    1. load expect: `const {expect} = require ('chai');`

        - 

        ```js
        it('should return 4', () => {
            // Arrange
            const x = 2;
            const y = 2;

            // Act
            const expected = x + y;

            // Assert
            expect(expected).to.eq(4);
        })
        ```

    1. Running: 

        - `mocha test/simple.test.js`

        In this case Mocha is installed globally

        - Another option - bin folder where shortcuts to the locally installed libraries

        `./node_modules/.bin/mocha test/simple.test.js`

        add to package.json

        ```js
        "scripts":{
            "test": "./node_modules/.bin/mocha test/simple.test.js"
        }
        ```

        run with npm test

        Tests can be grouped into files.

        Apart from `it` command, `describe` command to group other tests and add additional methods - before - runs before all tests in the current describe block, `after`, `beforeach`, `aftereach`. Can be more than one.

        ```js
        describe("Test sum", () =>{
            before(() =>{

            });

            it('should return 4')
        });
        ```

        Use describe.skip or it.skip to skip some group or test.

2. **Asynchronous tests**

    - Use `done` parameter.

    ```js
    describe('Async tests', () =>{
        it('with done()', (done) => {
            getValueAfter(5, 1)
                .then((value) => {
                    expect(value).to.equal(5);
                    done();
                });
        });
    });
    ```

    - With promise

    //check?
    ```js
    describe('Async tests', () =>{
        it('with return promise', (done) => {
            getValueAfter(5, 1)
                .then((value) => {
                    expect(value).to.equal(5);
                    done();
                });
        });
    });
    ```

    - Done and promise
    // ...

.

# Tooling
_27.06.2017 - Doncho_

0. **List**
    - IDEs - VSCode, WebStorm, Atom, ViM, etc.
    - Package managers - NPM, Yarn, (Bower)
    - App scaffolding - Yeoman
    - Task runners - Gulp, (Grunt, WebPack)
    - Debugging - Node
    - NodeMon - automatic app rerun

1. **Package managers** - Bower

    - Bower - used to be used for front end packages
    - NPM - used to be used for back-end packages

    There was a shift to uploading packages only to npm and now Bower is less used.

    Bower - similar API to npm. init comand - creates `bower.json`, only local installation. Creates `bower_components` folder.

    In package.json scripts add
    `"postinstall": "bower install" `
    to install all bower dependencies. Add bower to defDependencies.

2. **App scaffolding**

    - Yeoman

    Scaffolding tool for web apps. Like in Visual Studio creating a new project and selecting the type - Console Application, etc.

    `yarn global add yo`

    `yarn global add generator-express`

    `yo express` - starts scaffolding the project - select options. Starts downloading npm packages, creates file system.

    Used once when starting a project. Creates very basic projects which are not always the best and need to be changed later.

    `yo` command to look for other generators - eg: asp.net mvc
    
3. **Task runners**

    - Allow process automation

    Transpiling with Babel can be automated by creating a task runner command.

    Will run all future apps through Gulp.


    - Grunt - the old guy, works well, very stable, is being substituted with Gulp where writing is easier

    Hard to configure.

    // *  CoffeeScript - significant whitespace - resurrected by Grunt

    - Gulp

    Uses streams (=chaining) which makes configuration easier.

    yarn global add gulp // problem installing through yarn
    `npm install -g gulp`

    `yarn init -y`

    touch gulpfile.js // creates file

    ```js
    const gulp = require ('gulp'); 

    gulp.task('sample', () =>{
        // do stuff;
    })
    ```

    gulp sample

    Stylus, CoffeScript, TypeScript can be compiled with one command with Gulp. First add locally plugins for Gulp gulp-stylus gulp-typescript etc. as dev dependencies (--save-dev). Gulp works with streams. Automates build/compilation process. Can combine several tasks into one.

    `yarn add -dev gulp-clean`

    Possible issue when we want to use `clean` to delete everything (all old build files) in the dest folder. Tasks are async and while cleaning, the other tasks in the group could be running and writing. Use clean as a synchronous operation or use `gulp-sync` library.

    Default task can be run with `gulp` command.

    Will start UT through Gulp in the future, it makes sense for integration tests. 

    `yarn add gulp-mocha -dev`

    Create gulp task

    ```js
    gulp.task('test:unit', () =>{
        gulp.src('path to file ./test/unit/**/*.js')
            .pipe(mocha({
                reporter: 'nyan', // or another reporter dot
            }))
    });

    gulp.task('clean', ) // check
    ```

    nyan reporter
.

# Express Pug & Passport
_29.6.2017 Doncho_ *missed class

.