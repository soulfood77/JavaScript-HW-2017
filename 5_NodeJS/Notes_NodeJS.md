# Node.js notes 
Telerik Academy course, July 2017

[videos playlist](https://www.youtube.com/playlist?list=PLF4lVL1sPDSknRqUjl1PpGbI9Izn9pBqf)

| Vid | Topic                                           | Date     | C   | V   |
| --- | ----------------------------------------------- | -------- | --- | --- |
| 1   | [Course Intro ](#intro)                         | 20.June  | +   | +   |
| 2   | [Course Project Requirements](#intro)           | 20.June  | +   | +   |
| 0   | [Node.js Overview](#overview)                   | 20.June  | +   | !   |
| 3   | [Modules](#modules)                             | 20.June  | +   | +   |
| .   | [Async Operations](#asynchronous-operations)    | 22.June  | +   | .   |
| --  | [File Databases](#file-databases)               | --       |     |     |
| 4   | Demo: [Web crawler](#web-crawler)               | 22.June  | +   | +   |
| 5   | [Unit Testing](#unit-testing)                   | 27.June  | +   | +   |
| 6   | [Tooling - Yeoman, Gulp](#tooling)              | 27.June  | +   | +   |
| 7   | [Express, Pug, Passport](#express-pug-passport) | 29.June  | *   | +   |
| 8   | Demo: [Project Structure](#project-structure)   | 6.July   | ^   | +   |
| 0   | [Testing a Web App](#testing-a-web-app)         | 6.July   | ^   | +   |
| .   | Workshop: [Data Mining](#workshop-1)            | 11.July  | ^   |     |
| 9   | [MongoDB](#mongodb)                             | 13.July  | ^   | !>  |
| .   | Workshop                                        | 18.July  | *   |     |
| --  | [RESTful APIs with Express](#restful-apis)      | March.17 | *   | +   |
| 10  | Workshop, [REST Best practices](#rest)          | 20.July  | *   | +   |
| 11  | [Containers](#containers)                       | 25.July  | +   | !   |
| --  | Project defense                                 | 1.Aug    |     |     |


- `*` - missed &emsp; `^` - present, didn't listen &ensp; 
- `0` - video yes, not in playlist &emsp; `.` - lecture yes, no video  &emsp; `--` - lecture no


## Shortcuts

| Shortcut             | Action           |
| -------------------- | ---------------- |
| **Ctrl + Space**     | possible options |
| **Ctrl + k + 0**     | fold all         |
| **Ctrl + k + j**     | unfold all       |
| **Ctrl + Shift + [** | fold             |
| **Ctrl + Shift + ]** | unfold           |
| **Ctrl + Shift + v** | preview md       |

## Resources
 - Web app with Node.js & TypeScript - School Academy - March 2017 [course](https://telerikacademy.com/Courses/Courses/Details/416) 
 - Web apps with Node.js - November 2016 [playlist](https://www.youtube.com/playlist?list=PLF4lVL1sPDSkGCPsLqgfGMavw-82_fWoF)  [course](https://telerikacademy.com/Courses/Courses/Details/400)
 - MEAN stack - April 2014 [playlist](https://www.youtube.com/playlist?list=PLF4lVL1sPDSkhK8mMtrUg1A4CHllt5jh_)

# Intro
 20.06.2017 - Doncho [video](https://youtu.be/ZkRrLhHItOI)
 1. ## Topics

    - File IO we'll use for practising **async calls** - 5 types (promises - most widely used, callbacks, observables, yield, async/await from ES2017).

    - Debuggers, tools task runners (gulp) - set-up. Task runners - **Gulp** - used for automation, we set-up operations, create requests and it runs them (eg. automate compile/build sass to css, ES2015 to ES5). 

    - Databases - MongoDB.

    - Web development - **Express** framework for Node.js (like ASP.NET for C#, Jango for Pyton, SpringMVS for Java, Laravel and CodeIgniter for PHP). Provides convenient way to create apps quickly. Will talk about MVC-like (pure MVC in javascript is a huge overhead and not worth it). MVC = architecture pattern for creating  multi-layered applications. Goal is to structure apps to be reusable, testable, and easy to extend and add new functionality.

    - **WebSockets** - AJAX = way for creating HTTP requests to web servers and receiving responses. WebSockets provide a way for the server to ping the client (eg. chat clients, notifications), so that the client doesn't have to explicitly requests to the server, two-way client-server communication.

    - **UT** in Node.js with javascript - **Mocha** framework with Chai syntax. Functional testing - also with Mocha & Chai - launches page and clicks around it checking for correct result. Have a browser object with which we manage the browser (something like jQuery).

    - **Containers** - isolated environment with automatic set-up of specific installed program versions and tools. Something like a virtual machine.

    - **Cloud** - Amazon Web Services (AWS) - launch instance, deploy. Has free trial.

 2. ## Course project
    
    (in intro and in separate video)

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

 3. ## Tools
    - OS: Windows, Linux, Mac - Node.js is not perfect in Windows (launches slower), was designed for Linux initially.
    - Text editor: VS Code preferred 
    - Node.js version: v.8+
    - Server: MongoDB 
 .

# Overview
 20.06.2017 Doncho > [video not in playlist](https://youtu.be/RU0-ZGJYgMs)

 1. ## Node.js Overview
    - What

        Initially Node.js was V8 webkit Chrome engine mocked to work on server.

        Other platforms on which to write js to run on server:

        Rhino - similar to Node.js specialized for image processing

        React native & Native script are something similar, similar flow

        Node.js + Express = web development

    - How

        Event-driven - event loop distributes operations
        
        Single-threaded - libuv allows async operations

    - **Event loop** (*learn more)

        V8 = browser without UI

        Node.js bindings - javascript to C++, create events

        Libuv (= middle man to the OS) - Event queue - queues all async operations - event loop sends them to the OS. while the OS is completing this operation, the event loop does nothing, if all threads are busy. When a thread slot is freed, the event loop returns the execute callback to the event queue and takes the next operation in the queue.

 2. ## Setup    
    
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

 .

# Modules
 20.06.2017 - Doncho > [video](https://youtu.be/9EA4_-czLLs)

 1. ## Modules in Node.js

    - **Scope**

        Issues with global variables in JavaScript - solved with IIFEs which create function scope.

        In Node.js **global scope is explicit** - have to specially define variables which belong to it. Every file is a node.js module. Variables by default are accessible only in the file they are declared in. Solves issues with global variables.

        Modules in Node.js are different parts of an application (like classes in C#). Useful for splitting the code into smaller pieces.

 2. ## Loading modules

    **Build-in modules** (ie. modules which come with Node.js) are loaded with their name.

    `require(path_to_module)` - (like `using` in C#) - global function Node.js, loads exports from the respective module (eg. 

    `/* globals globalVarName */` - to resolve ESLint underlining global variables coming from other modules. `/* eslint-disable */` to disable all eslint for a specific file or specify a specific rule to disable.
    
    - ### Dynamic module loading
     ```js
    /* globals __dirname */
    const fs = require("fs") /* fs = file system */
    /* read all files from directory */
    fs.readdirSync(__dirname)
        .foreach((file) => {
            console.log(file);
        )};
    ```

    **Third party modules** are loaded with `require("path/moduleId")`;

    Modules which we define - the id is the relative/absolute path to the file location. Always use `./` when referring to current directory.

 3. ## Exporting 

    `module` - another global object (like `exports`, `require`) used to handle modules.

     ```js
    /* file printer.js */
    const print = (msg) => {
        console.log(msg);
    }

    module.exports = {
        /* like IIFE, list functions to export */
        print
    }
    
    /* file app.js*/
    const printer = require('./utils/printer'); //printer, not printer.js
    ```
    
    - Using **exports** - not recommended: 
     ```js
    /* file printer.js*/
    /* globals exports / for option 2*/
    const print = (msg) => {
        console.log(msg);
    }

    exports print = print;
    
    /* file app.js */
    const printer = require('./utils/printer'); 
    ```
    
    - Using **global** scope (not a good practice) - not recommended:
     ```js
    /* file printer.js */ 
    /* globals global */ 
    const print = (msg) => {
        console.log(msg);
    }

    global.print = print;
    
    /* file app.js*/
    const printer = require('./utils/printer'); /*must it be assigned??*/
    
    const print3 = global.print;
    ```

    Global scope could be useful if using Node 4 where no promises exist, to attach an external library:

     ```js
    global.Promise = require('bluebird');
    ```

    - If using **classes**, the module could export the class itself or a function which creates an instance of the class (be consistent, use one of the two export options). JavaScript is more interested in the _properties_ of objects (duck typing). Classes in js are syntactic sugar for prototypal inheritance. Using `instanceof` is an anti-pattern because it breaks _duck typing_.

     ```js
    class Printer{
        print(msg){
            console.log(msg);
        }
    }

    module.exports{
        Printer,
        getPrinter(){
            return new Printer();
        }
    }
    ```

    `Export` and `import` from ES2015 are not supported in Node.js yet. 

 4. ## Importing functions (reading modules)
    
    Using .js extension when requiring modules is optional.
    
     ```js
    const printerModule = require('./utils/printer');
    let Printer = printerModule.Printer;
    let printer = printerModule.getPrinter;
    ```

    - Using **destructuring assignment** to import (use new line for each property for better readability)

     ```js
    /* file app.js */
    const { 
        getPrinter, 
        Printer 
    } = require('path to module');
    ```

    - **Index.js** file/module - default module for the folder - can be imported with only the folder name, without the file name. Useful for automatic loading of all the modules in the folder. 

    > In index.js only `require` files with the implementation logic, name them with the same name as the folder.

     ```js
    require('folder name');
    ```
    
    > If the result returned from require is a function with parameter, this parameter can be passed to it when requiring. See Express lecture. 

     ```js
    require('modulePath')(app);

    /* module file - attaches methods to app object*/

    const attach = (app) => {
        app.get();
        app.post();
    }

    module.exports = attach;
    ```


 5. ## Using third-party modules 
    (eg. Nuget, Bower, Fetch) - installed with NPM or Yarn also required only with the name of the module.

    > browse [npmjs.com](https://www.npmjs.com/)
    
    - **Fetch** - api from browser (from HTML5) which replaces the XHR object - makes HTTP requests easier, native to JavaScript, works with promises. Because it's not part of the JavaScript standard, it's not accessible in Node.js. But can be downloaded and installed with NPM.  
        
     ```js
    const fetch = require(node-fetch);

    fetch('http://localhost:3001/api/superheroes')
        .then((response) =>{
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });
    ```
    
    `npm node-fetch --save` - installs the module in the current directory. Must have package.json file to be saved as a dependency.

    `npm init -y` - creates package.json file -y = yes to skip questions. Node.js projects are folder-based - all subfolders are part of the project (not like in C# - solution, project, references, etc.). The package.json file stores meta data about the project, including dependencies which can be restored easily on other computers.

    `npm install` - recreates/restores dependencies saved in package.json

    `npm install -g http-server` - installs globally

    `npm install --save-dev packageName` - saves as development dependencies
    
    `npm uninstall --save-dev packageName`

    - **Yarn** (npm package) - makes npm work better. Does topological sort of the dependencies = resolves dependencies and installs them in parallel instead of synchronously = faster than npm install. Must be installed globally.

        `npm install -global yarn` - installs in node/[version]/lib/node_modules. Global packages can be used from any node project. If node.js version is updated (with NVM), global modules need to be reinstalled in the new version folder.

        `yarn add eslint` - automatically adds dependencies in package.json

        `yarn global add http-server`
        
        `yarn global add http-server -dev`

        `yarn global remove http-server`

        `yarn init -y` - initialise project with package.json

        `yarn` = npm install
 .

# Asynchronous Operations
 22.06.2017 - Doncho > no video

 1. ## Intro

    Always initialise a project with `npm init -y` (or `yarn init -y`?)

    **Package.json**

    **index.js**
    
    `"scripts": { "start": "node app.js" }` - Defines what to do on `> npm start`. Accepts all valid power shell and bash scripts/commands.

    `cygwin` = bash for windows

    `power shell` =  bash for windows; script language allowing automation of commands
    
    Custom commands:

    `"scripts" { "dev": "nodemon app.js" }` - restarts server? Nodemon package - screens changes to files (install global).

    `> npm run dev` - run custom commands  

    `"main": {"fileName.js"}` - main script - Defines startup/entry point of the application with `node .` (optional, mainly used for npm packages)

    .eslintrc - dot signifies hidden files in Linux

 2. ## Overview

    Node.js is single-threaded but the event loop is not. Operations can be run asynchronously - passed to the event queue of the event loop. When an async operation is ready, it fires an event handler.

    Various practices:

    - **callbacks** - most popular, because they come from javascript and have been around for years. The problem with them is that they cause long nesting chains ("the pyramid of death"). Very difficult error handling.

    - **promises** - good option - provide easy way to avoid nesting of async operations. Easy error handling (`.catch` at the end)

    - **observables** - external library - RxJS library (reactive extensions). Introduce functional principles of programming, works better with javascript.

    - **yield + function generators** = hack, can be used for handling async operations as a side effect. Overhead for small projects.

    - **async + await** - work with/like promises but can be used easier, ES2017?


 3. ## Callbacks
 4. ## Promises

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
        /*success*/
    }, () =>{
        /*error*/
    })
    .then(() => {
        console.log('1. It works');
        return waitSeconds(2); 
        /* if return waitSeconds is missing, 
        the following then-s will not wait 2 seconds more 
        but just print right away */
    })
    .then(() => {
        console.log('2. It works');
        return waitSeconds(2);
    })
    .catch(() =>{
        /* Doesn't have to be at the end of the block.
        Every promise has then & catch functions*/
    };
    ```

    Promise all - takes an array of promises and runs after all of them are completed. Then also returns a promise.

     ```js
    Promise.all([
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
    /*Creates a resolved promise which can be chained*/
    Promise.resolve()
        .then((result) => {
            console.log(result);
            /*prints undefined*/
            return 1;
        })
        .then((result) => {
            console.log(result);
            /*prints 1*/
            return Promise.resolve(1);
        })
        .ten((result) =>{
            console.log(result);
            /*prints 1 too*/
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
            /*logs in reverse order ??*/
        })
        .then(([r1, r2, r3]) =>{
            /*destructuring assignment*/
            console.log(r1);
            console.log(r2);
            console.log(r3);
        })

    ```

 5. ## Async & await

    Work with promises. Need to create an async function to use them. Similar to C# (...)

    Defining

     ```js
    const f = async() =>{

    }
    ```
     ```js
    async function f1(){

    }
    ```
     ```js
    let obj = {
        async f3(){

        }
    }
    ```
     ```js
    class Person {
        async load(){

        }
    }
    ```

    Similar to the then-s but code is even more linear.

     ```js
    const f = async () =>{
        await waitSeconds(1); 
        /* waits for this function to complete 
        before moving to the next one*/
        console.log('1.');
        await waitSeconds(2);
        console.log('2.');
        const result = await waitSeconds(3);
        /*to get  result just assign the await function to a var*/
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
    const f1 = async() => {
        return await 5;
        return await Promise.resolve(5);
        /* returns the result wrapped in a promise
        both are the same thing*/
    }
    ```

    Allow try-catch block similar to all other languages, instead of calling callbacks

     ```js
    const main = async () => {
        try{
            const result = await asyncOperation(5);
            console.log(result);
        }
        catch (err){
            console.log(err);
        }
    };
    ```

 6. ## Observables

     ```js
    const {Observable} = require('rxjs');
    ```

    Can continuously provide data. We attach a callback which fires every time...?

    Used similarly to promises.

     ```js
    const waitSeconds = (seconds) => {
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
        /*same as subscribe*/
        .subscribe(()=>{
            /*instead of then*/
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

 7. ## Yield & generators

    Do something like async. Too complicated.
 .

# File Databases
 _== The live demo?_

# Web Crawler
 22.06.2017 - Doncho [live demo video](https://youtu.be/STlU2zkjwwc)

 0. ## Using:
    - Promises - Async programming
    - Http
    - Modules
    - IO - LoweDB file database
    - DSA - queue, DFS

    Source: Goodreads.com public data, IMDB

 1. ## Steps:
    1. Get data
        - Http -> html
        - HTML -> objects
    2. Save data

 2. ## Libraries:
    - **isomorphic-fetch** - adds `fetch` as a global so that its API is consistent between client and server. Better than node-fetch because can be required once, attaches `fetch`, `Response`, `Headers`, `Request` to global scope, can be used everywhere; futuristic
    - **jquery**
    - **jsdom**

 3. ## History of Node.js
    - Node start (2009)
    - phantomjs - headless browser, old Chrome working with webkit (not with blink) used for image processing and automation of testing 
    - HTML5 (new HTML + extended JS and CSS)
    - Node 0.10
    - Split to Node 0.11,12,13,14 and IO.js = forked Node.js with added new features - lambda, classes - v.1,2,3
    - Merge two forks to Node.js 4.X

 4. ## Process:

    -  Set up **eslint**: `npm install -g eslint eslint-config-google babel-eslint`, add rule about line breaks `rules{"linebreak-style": ["error", "windows"]}`, configure VSCode to add empty line at the end of file (issue with JS-CSS-HTML Formatter extension - change to true "end_with_new_line")

    > Have only config files in the main directory and main.js- split js files to folders

    - `> npm init` -> package.json file
    - `> yarn add isomorphic-fetch` - create folder 'polyfills' with index.js `require('isomorphic-fetch')`, in app.js `require('./polyfills');`
    - define/import url to use - can hard code values of genres to crawl in an array (or program crawler to extract genres from genres list from the website)
    - `> node app.js > result.html` - output to file instead of the console
    - parse received html data to json
    - `yarn add jquery` jQuery is a JavaScript library for DOM manipulation but could be used on server side too, not only client side.
    - `yarn add jsdom` - simulates DOM tree - enables use of > in Node. Check instructions at npmjs.com jQuery and jsdom. Create folder 'dom-parser' with 
    index.js `module.exports = require('./dom-parser.js');` 
    file dom-parser.js `const jsdom = require('jsdom');` and implementation logic function exporting the '$'.
    - find selectors from the returned html result and parse title and poster img url of movie.

    > Better always return promises even for synchronous operations = consistency

    - Create folder 'models' with 
    movie.model.js defining class Movie with constructor
    movies.extensions.js - move parsing logic there dynamic add static method to the movie class
    `Movie.prototype.newMethod = () => {}` - instance method
    `Movie.newMethod` - static method;

    - Create folder 'parsers' and move getMovieData from app.js
    - Create genre parse logic
    - Make extensions load dynamically - now we don't need to add new extensions explicitly
    - Get list of movies ids from genres in an array
    - Create queue to replace the array - don't need classes for it - we need an object with the certain properties, but we don't always need to create a class for that. Classes in js are used only when inheritance is needed.

 .

# Unit Testing
 27.06.2017 - Doncho [video](https://youtu.be/uV0RltdjAzo)

 1. ## UT Frameworks - quick review

    UT = Test one module/one file.

    - JSUnit - rarely used, based on JUnit for Java
    - QUnit - created by John Resik (creator of JQuery), mostly used for front end testing
    - **Jasmine** - largely used
    - **Mocha** - more powerful than Jasmine, largely used; flexible, pluggable framework - accepts additions. Needs syntax for creating UT - assert, should, expect. Most popular syntax library - **Chai**. `Should` extends the object prototype and adds method should to all objects. `Expect` is mostly used because it's most expressive.

     ```js
    assert.areEqual(expected, actual);
    expect(actual).to.be.eql(expected); /* only value ==*/
    actual.should().equal(expected); /* absolute ===*/
    ```

 2. ## Demo

    - Initialise: `yarn init -y`

    - Install as dev dependency. Testing is not part of the development process but in dev should put everything we don't want to be in the production: `yarn add mocha chai --dev`

    - Create 'test' folder and file 'simple.test.js' for the tests

    - Load expect: `const { expect } = require ('chai');`

    - Create a simple test with `it('test name', () => {//AAA})`: 

     ```js
    it('should return 4', () => {
        /* Arrange*/
        const x = 2;
        const y = 2;

        /* Act*/
        const expected = x + y;

        /* Assert*/
        expect(expected).to.eq(4);
    });
    ```

    - Run tests through Mocha 

    `> mocha test/simple.test.js` if Mocha is installed globally. But that could be inconvenient for other users of the project who don't have global Mocha.
    

    `> ./node_modules/.bin/mocha test/simple.test.js` is another (also not very convenient) option is to reference bin folder where shortcuts to the locally installed libraries, which are accessible after `> npm install` (*works in Git bash, not in VS Code terminal): 

    **Best**: Add reference to package.json to be able to run with 
    `> npm test`

        ```js
    "scripts":{
        "test": "./node_modules/.bin/mocha test/simple.test.js"
    }
    ```

    - Group tests into files, or group into test suites(?).

    `describe` statement groups other tests and adds methods:  
    `before` runs before all tests in the current describe block, `after`, `beforeEach`, `afterEach`. Describes can be nested - beforeEach and afterEach apply to the nested statements as well. Can be more than one.
    
    `describe.skip` or `it.skip` - skips a group or test. 

     ```js
    describe('Test group', () =>{
        before(() =>{
            /* runs before all tests*/
        });

        aftereach(() => {
            /* runs after each test, incl. nested ones*/
        });

        describe.skip('Nested', () => {
            it('should return 4', () => {
                /* Arrange, Act, Assert*/
            });

            it('should return 4', () => {
                /* Arrange, Act, Assert*/
            });
        });
    });
    ```

 3. ## Asynchronous tests
        
    `It` are async. (?)

    - **Avoid**: with `done` parameter/callback. The test will wait for the `done` callback to be called.

     ```js
    const getValueAfter = (value, seconds) => {
        return new Promise((resolve) => {
            return setTimeout(() => resolve(value), seconds * 1000);
        });
    };

    describe('Async tests', () =>{
        it('with done()', (done) => {
            getValueAfter(5, 1)
                .then((value) => {
                    expect(value).to.equal(5);
                    done(); // !important
                });
        });
    });
    ```

    - **Recommended**: with `promise` (from newer versions of Mocha) - `it` knows that it has been attached a method returning a promise, it should execute it.

     ```js
    describe('Async tests', () =>{
        it('with return promise', () => {
            getValueAfter(5, 1)
                .then((value) => {
                    expect(value).to.equal(5);
                });
        });
    });
    ```

    - Mocha transpiles the test code, then analyses it.
        
     ```js
    it('without calling a function', () => {
        expect(5).not.to.be.null;
    });
    ```
 .
# Tooling
 27.06.2017 - Doncho [video](https://youtu.be/wet1WNvJ7vA)

 0. ## List
    - IDEs - **VSCode**, WebStorm, Atom, ViM, etc.
    - Package managers - NPM, Yarn, (Bower)
    - Project scaffolding - **Yeoman**
    - Task runners - **Gulp**, (Grunt, WebPack - Angular2 works with it)
    - Debugging - Node
    - **NodeMon** - automatic app rerun on file change. Will be useful when working with Express because we'll work either in the IDE or in the browser and restarting the server from the console will not be convenient.

 1. ## Package managers - **Bower**

    - Bower - a npm package

        Used to be used for front end packages

    - NPM - installing locally/globally, adding dev dependencies, initialising apps. 
    
        Used to be used for back-end packages.

    The separation between front-end and back-end was useful. There was a shift to uploading packages only to npm and now Bower is less used.

    Bower - similar API to npm. Only local installs, no global.

    `bower init` - creates 'bower.json' file and 'bower_components' folder

    `bower install --save jquery`

    `bower install` recreates dependencies

    To link to `npm install` and install all bower dependencies, add Bower to devDependencies `yarn add bower -dev`. In package.json add:

    `"scripts" { "postinstall": "bower install" }` - for globally installed Bower

    `"scripts" { "postinstall": "./node_modules/.bin/bower install" }` - for locally installed Bower   

    2. ## App scaffolding - **Yeoman**

        - [**Yeoman**](Yeoman.io)

        **Scaffolding** tool for web apps. In Visual Studio like selecting the project type when creating an new project - some files are created automatically - i.e. Console Application, etc.

        `yarn global add yo` or `npm install -g yo` - !?_yarn doesn't work on my computer_

        `yarn global add generator-express` or `npm install -g generator-express`

        `yo express` - starts scaffolding the project - select options. Starts downloading npm packages, creates file system.

        Used **once** when starting a project. Creates very basic projects which are not always the best and need to be changed later.

        `yo` command to look for other generators - eg: asp.net mvc
        
    3. ## Task runners - **Gulp** & Grunt

        - Allow process automation

        Transpiling with Babel can be automated by creating a task runner command.

        Will run all future apps through Gulp. When we create integration tests we'll need a running server or a test database. All these tasks can be automated with test runners. The tests themselves should not create a fake database because this is too much of a responsibility. That's why we could set up task runners to do that.

        Gulp and Grunt do the same thing, achieve the same result but with different means.

        - **Grunt** - the old guy, works well, very stable, is being substituted with Gulp where writing is easier. Hard to configure. Have to pass big js objects for every operation. If we want a stylus css files to be compiled to one minified file, we have to first merge them, then compile them to one file, then minify it. Each of these steps is a separate configuration.

        *  **CoffeeScript** - js preprocessor, written using Python stuff, first use of lambda and classes, curly braces not obligatory for scope, significant whitespace. CoffeeScript is dying out with the development of js but is resurrected by Grunt because reduces configurations length.

        - **Gulp** - more convenient, easier to execute the configurations. The start Gulp file is a standard js file where regular  JavaScript is accepted. 

            - `> yarn init -y`
            - `> npm install -g gulp`
            - `> yarn global add gulp` (problem installing through yarn)
            - `> yarn add gulp` (install locally doesn't work)
            - `> mkdir folderName` - creates folder
            - `> echo.>gulpfile.js` - creates file, `touch gulpfile.js` (Linux)
            
            Gulp uses **streams** (=chaining) which gives better readability, makes configuration easier.

            ```js
            const gulp = require ('gulp'); 
            /* accepts all js code */
            gulp.task('sample', () =>{
                /* do stuff; */
            })
            ```    

            `> gulp sample` - executes the saved task

            Gulp automates build/compilation process. Can combine several tasks into one. Works with streams.   Stylus, CoffeScript, TypeScript files can be compiled with one command with Gulp. First add plugins for Gulp as local dev dependencies (`yarn add gulp-stylus gulp-babel gulp-typescript --dev`).

        * **Stylus** - `gulp compile:stylus`

             ```js
            const stylus = require('gulp-stylus');
            gulp.task('compile:stylus', () =>{
            /* get files any folder down, 
            with extension styl
            !return stream */
            return gulp.src('./app/styl/**/*.styl')
                /* compile */
                .pipe(stylus())
                /* put temp css files in build folder */
                .pipe(gulp.dest('./build/css'));
            });
            ```

        * **Babel** - `yarn add babel-preset-2017 -dev`

             ```js
            const babel = require('gulp-babel');
            gulp.task('compile:es2017', () =>{
                return gulp.src('./app/babel/**/*.js')
                    /* set up preset */
                    .pipe(babel({
                        presets: ['es2017']
                    }))
                    .pipe(gulp.dest('./build/es2017'));
            })
            ```

        * **Group tasks**

             ```js
            gulp.task('compile', ['compile:es2017', 'compile:stylus'],
            /* can also pass a callback 
            executes after compilation */
            () => {
            });
            ```

        * **Clean tasks** - delete old/tmp files - `yarn add -dev gulp-clean`

             ```js
            const clean = require('gulp-clean');

            gulp.task('clean', function(){
                /* delete build folder */
                return gulp.src('./build', 
                /* don't load files to memory */
                {read: false})
                    .pipe(clean());
            })
            ```

            Possible issue when using `clean` to delete everything (all old build files) in the dest folder and grouping it with other tasks. Tasks are async and while cleaning, the other tasks in the group could be running and writing. Use clean as a **synchronous** operation or use `gulp-sync` library.

             ```js
            gulp.task('compile', 
                ['clean']),
                () => {
                    /* destructuring assignment */
                    ['compile:es2017', 'compile:stylus']
                        .forEach((task) => gulp.start(task));
                }
            ```

            * Default task - can be run with `gulp` or `gulp default` command.

             ```js
            gulp.task('default', () =>{

            });
            ```

        * UT - Will start UT through Gulp in the future, it makes sense for integration tests - to launch test server, create database. - `yarn add gulp-mocha --dev`

             ```js
            const mocha = require('gulp-mocha');

            gulp.task('test:unit', () =>{
                gulp.src('./test/unit/**/*.js')
                    /* optional mocha settings */
                    .pipe(mocha({
                        reporter: 'nyan', /* 'dot' */
                    }))
            });
            ```
    .

 .
# Express, Pug & Passport
 29.6.2017* Doncho > [video](https://www.youtube.com/watch?v=buWs2aaml10) 
    
 1. ## Overview
    
    Express = framework for creating web apps in Node.js. Like ASP.NET for C#, Spring MVC for Java. **Runs a web server** which handles requests and sends responses.
    
    Creates server side web apps (in JSApps course we used the server as a black box returning json). 
    
    Will cover - creating server with Node.js & Express, RESTful API, standard web apps - returning html, returning json, getting data from forms. 

    - Routes - a way for the user to request different pages (`get`, `post`, `put`, `delete`)
    - **Middlewares** - do stuff before and after requests. Types - built-in, third-party, custom. Eg. an url for creating items to be accessible only to authenticated users.
    - Views - most popular of the many view engines is **Pug** - allows flexible html, rendered when requested
    - Working with Data - reading input, visualising data.

    Express used to be the only framework for web apps in Node.js. Nowadays there are others, better, but it is still the most used. Express = library for Node.js = creating a web server easily with fluent api.

    The benefit of Express is that it is **pluggable** and through middlewares, we can add any functionality we want.

 2. ## Running an Express app

    Node.js with express can launch a simple RESTful api in 15 min. Express supports all the standard http verbs `get`, `post`, `put`, `delete`.

    Have to restart the server on every change (= relaunch the server.js file).

    `add yarn express`

    `get(url, callback(request, response, next))` the callback accepts 3 parameters, 2 of them are required - the browser needs to know the details of the request and what response to send to the client (http request-response cycle). Usually the response sends some kind of an object.
    
    `res.send(jsObject or htmlCode or JSON)` is the simplest response function.

    * **SERVER ROUTES**

         ```js
        /* server.js file */
        const express = require("express");

        let app = express();

        app.get("/", (request, response) => {
            response.send("It works!");
        });

        app.get("/home", (req, res) => {
            res.send("<h1>Home</h1>");
        });

        app.get("/json", (req, res) => {
            res.send({"id": 1,
            "name": "Gosho",
            "interests": ["Math", "JS"]});
        });

        app.listen(3000, () => console.log(`App running at :3000`));
        ```

        Difference between server- and client-side routing? Client-side (originates from links) is when navigating within a web-page by # (id), which SPAs routing is based on (Sammy, Navigo) using the `onHashChange` event from 'history api' in HTML5, similar to the Express functions. Routes (#) are caught in the client-side js.

        When working with standard web apps (not using JSON through AJAX = SPA) the two methods used are `get` and `post`. The way to transfer information between the client and the server is through a **form** and they work only with get and post.

 3. ## Routes

    Routes have two parameters - `url` and `callback`.

    - **URL** - a relative path to the resource/page

    The url (= first parameter) passed to the route method is a RegEx (strings are RegEx)

    - **Callback** - function called when the resource is reached, takes 2 parameters:
        - `request` - holds information about the request (headers, agent, body, etc.). Properties: `body`
        
        - `response` - used to return a response to the client (body, headers, cookie, etc.). Has different methods: `send()`, `render()`, `sendFile()`, `status(404)`, `redirect('/404')`. The server tries to parse the value passed to send() to html. `post` - using json and Postman to create body.

    In express, the req does not have a body by default. Use **body-parser** middleware to parse json from post requests. The client must specify the data format in the header of the post request 'application/json'. The two most used options are `json` and `urlencoded` (=form data): 

    `>yarn add body-parser` 

     ```js
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    ```

    Good practice when a post creates something - return 201 (created) and the item created `res.status(201).send(item)`, except when creating/registering an user because we don't want to return the user password in the response.

    Import Router from Express - a middleware. Used shorten routes - instead of writing them in full in every post or get function (eg. 'api/items' -> '/'). Supports chaining. 
    
     ```js
    /* file api.routes.js */
    const { Router } = require('express');

    const attach = (app) => {
        router
            .get('/', (req, res)=>{})
            .post('/', (req, res)=>{});
        app.use('/api/items', router);
    };
    ```

    * **RESTful ROUTES** - client side, AJAX

    Routes can accept url/**route parameters** and query parameters `?searchTerm=gosho` (query params are not defined in the code, but are extracted from the req properties). Must parse the id from the url parameter to be able to search by id;

     ```js
    get('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        /* find item by id 
        if not found, can't redirect in AJAX/RESTful api
        return status(404) and send error json object
        */
        const item = items.find((i) => items.id === id);
        if(!item){
            return res.status(404)
                .send({
                    error: 'Not found',
                });
        };
        return res.send(item);
    });
    ```

    **Routes order** matters in some cases - routes with url parameters (`/:id`) must be last (after `/form`).

    **Query parameters** - extract from `req.query.q` and always check if a query parameter is present/passed `if(q){}`. Use url- localhost:3010/api/items?q=c

     ```js
    get('/', (req, res) => {
        let q = req.query.q;
        let result = items;
        if (q) {
            q = q.toLowerCase();
            result = items.filter((item) => {
                return item.name.toLocaleLowerCase().includes(q);
            });
        }
        res.send(result);
    });
    ```

    **Paging** - always parse url parameters, can assign default values if parameter not passed. Call at url - localhost:3001/api/items?page=2&size=3&q=ge

     ```js
    get('/', (req, res) => {
        let { q, page, size } = req.query;
        /* assign default values if parameter not passed */
        page = parseInt(page, 10)  1;
        size = parseInt(size, 10)  10;

        let result = items;
        if (q) {
            /* search logic */
        }
        /* return proper results */
        result = result.slice((page - 1) * size, page * size);
        res.send(result);
    });
    ```

 4. ## Express views with **Pug** (at end of video too)

    > Video [1:20:50](https://youtu.be/buWs2aaml10?t=1h21m5s)

    Pug is a high performance template/view engine. Compiles to pure HTML. Runs with JavaScript for Node.js and browsers. Uses **significant whitespace** (indentation makes nesting).

    Former name **Jade**. Allows writing dynamic html. Similar to Handlebars (mostly used client-side) but more powerful. Mostly used server side - renders with Node.js and the client receives the rendered html, not render on the client like Handlebars. Express allows use of various view engines.

    - Install: `>npm install -save pug` or `>yarn add pug`

    - Write some pug code (in index.pug) - 

    > Put pug files in 'views' folder

    > **!+tab** - generates html header

     ```js
    h1
            All
    ul
        each value, index in [1, 2, 3, 4, 5]
            li
                a(href="#item-" + value) 
                        Go to item 
                    =value 
                        &nbsp;at index #{index}
    ```

    - Set app view engine. Don't use res.send - it just accepts a js object, serializes it to json and returns it as a result. To return a view, use res.render. Reference files which res.render returns. The name of the view is a path relative to the 'views' folder. The render function accepts a **string** (=name of the view file) and **object**(to fill data in the view). If passing an array, wrap it in an object with property model or context `{ model: [the array] }`.

     ```js
    app.set("view engine", "pug");
    app.get("/",(req, res) => {
        res.render("superheroes-list", superheroes);
    });
    ```

    - Pug formatting
        - Significant whitespace, no closing tags, no brackets. 
        - Content is marked with tab +  Home.

        No need to restart the express server when changing pug files.

    - Features: 
        - conditionals (if-else, case-when)
        - iteration (each, while, for loops)
        - extending templates
        - mixins
        - executing code
    
    - Extending - Move common html to a '_master' file, name a block, page files extend the master file and under block name have individual html. Block names create issues if they mach in several files.

         ```js
        /* _master.pug file
        shared html here */
        block body

        /* page.pug file */
        extends shared/_master

        block body
            /* page html here */
        ```

    * **Nodemon** - to restart server/application automatically on changes

        - Install: `>yarn add nodemon`
        - Launch: `./node_modules/.bin/nodemon server.js`
        - Manual restart: `> rs`
        - Set up in 'package.json', starts with `>npm start` and `>npm run dev`
        
            ```js
        "scripts" : {
            "start": "node server.js",
            "dev": "./node_modules/.bin/nodemon server.js"
        }
        ```
    - **Handling wrong urls** - In server.js file after requiring all other routes (server.routes and api.routes) define a regex catching everything (*).

         ```js
        app.get('*', (req, res) => {
            res.redirect('/404');
        });
        ```

    > Video at [2:55:13 - Pug part 2](https://youtu.be/buWs2aaml10?t=2h55m13s)

    - Views inheritance/extending, **blocks** - used to define custom pieces of in the page master/template. Nested extends.

    > Client side javascript can't use ES2015 -> separate eslintrc file to ignore defining functions without lambdas. 

    - **Mixins** = functions - can be used for navigation. Allow to create reusable blocks, the html to be split int smaller parts like programme code.

    - [**html to jade**](http://html2jade.org/) online tool

 5. ## Middlewares

    > Video at [1:49:35](https://youtu.be/buWs2aaml10?t=1h49m35s)

    Middlewares are callbacks that are executed "between" other executions.

    The most important feature of Express. Without them, it is just a wrapper handling get, post requests. Can be executed before, after all routes, or before some routes. Accept url (optional, if connected to a specific url) and a callback with 3 parameters, `done` is required because they are designed to run async operations. Everything which uses `app.use` is a middleware, routers are actually middlewares, body-parser.  
    
    Define them in the **beginning** of the file if we want them to run before other code and at the end if will be run after other code.
    
    Mandatory call `done()` at the end, otherwise the request will not continue and will timeout.

     ```js
    app.use('url', (req, res, done) => {
        /*  do your stuff here */
        done();
    });
    ```

    - **Morgan** - middleware which logs requests

        `> yarn add morgan`

         ```js 
        const morgan = require('morgan');
        app.use(morgan('combined'));
        ```

    - ### Express static
        
        Built in Express. Serves static/public files (css, js, imgs, etc.). Put them in 'public' or 'static' folder. Define static route, use **absolute path** with `path` and `__dirname`. 
        
         ```js
        const express = require('express');
        app.use("static", express.static(pathToDirWithStaticFiles));
        ```

        Serve public files - read all folders and files in the 'static' folder

         ```js
        /* globals __dirname */
        const path = require('path');
        app.use('/static',
            express.static(
                path.join(__dirname, './static'))
        );
        ```
        
        Serve libraries - files from 'node_modules' (same as above, change strings to refer to `libs/` and `./node_modules`) - like bootstrap

        `>yarn add bootstrap`


    - **Custom middlewares** to record execution speed - don't pass url because we want it to run before all routes. Can create variables which are request based (=attach a var to every request) - useful with Passport. Create the custom middleware at the top (before others), attach an action to the `req.on('end', ()=.{})` event.

         ```js
        app.use((req, res, done) => {
            const start = new Date();
            req.on('end', () => {
                const end = new Date();
                console.log(`---- Execution time ${end - start} ---- `);
            });
            done();
        });
        ```
    
    - **Creating a post request** with standard web apps
    > Video at [3:19:53](https://youtu.be/buWs2aaml10?t=3h19m53s)
    
 6. ## Project file architecture (part 1)
    - Static, bodyParser, middlewares - extract to separate module - app/app.js. 
    Important for testing. 
    Tests need to require the app -> it needs to be exported from a module. 
    Tests need to mock the server -> the logic starting the server needs to be separate too.
    - Move routes folder in app folder
    - App folder should contain all the server logic
    - Root folder should contain - static, views, database
    - Good modules have zero 'require' - everything is passed with dependency injection. For the moment, create app/config/app.config.js which imports the required modules and configures the app, exports `configApp` function. This way the responsibility for creating the app is abstracted and can be tested (though the external libraries used don't need to be tested).
    - ### Require routers dynamically 

        (see [Dynamic module loading](#dynamic-module-loading))

         ```js
        /* globals __dirname */
        const fs = require('fs');
        const path = require('path');

        const attachRoutes = (app) => {
            /* read all files from directory */
            fs.readdirSync(__dirname)
                /* filter by part of name */
                .filter((file) => file.includes('router.js'))
                /* concatenate file absolute path */
                .map((file) => path.join(__dirname, file))
                /* require all modules */
                .forEach((modulePath) => require(modulePath)(app));
        };

        module.exports = attachRoutes;
        ```
    - Automate server launch with Gulp - `>gulp server` and `>gulp dev` task with gulp-nodemon which listens for changes to js files. Doesn't make much sense at the moment, but will be useful when testing.

        `>yarn add gulp` (add also global gulp to be able to pass cmd commands)

        `>yarn add gulp-nodemon`

         ```js
        const gulp = require('gulp');
        const nodemon = require('gulp-nodemon');

        gulp.task('server', () => {
            const app = require('./app');
            app.listen(3001, () => console.log('Server working at 3001'));
        });

        gulp.task('dev', ['server'], () => {
            return nodemon({
                /* which files to watch for changes*/
                ext: 'js',
                /* which tasks to run*/
                tasks: ['server'],
                /* needs a script to run*/
                script: 'server.js',
                /* database connection string, port etc.*/
                /* env: '',*/
            });
        });
        ```

 7. ## Forms
    
    Implementing post request in 'server.router.js' with a form. **Form attributes**:
        
    - **action** = url to which the post request is directed, 
    - **method** - `post` (form data goes in the body of the request) or `get` (form data goes in the url, used for **search**)

    Form **input attributes** - name (input attribute) - identifies what kind of object will be built when parsing the request -> Should match the properties of the objects in the database/array.
    ```html
    <label>Name:
        <input type="text" name="name"/>
    </label>
    ```

     ```js
    const items = [{
            id: 1,
            name: 'Cuki',
        },
    ];
    ```
    - Checkboxes and select multiple (dropdown) return an array!
    - When doing ajax requests, to prevent default submit action, attach a function to the form id, not to the form submit button!

 8. ## Authentication

    > Video at [3:43:00](https://youtu.be/buWs2aaml10?t=3h43m14s)

    **Authentication vs authorisation**:
    - Authentication = the user to be able to identify themselves for the application
    - Authorisation = the process of granting rights to a user (access to functionalities)

    Models for authentication:
    - Cookie = session/local? auth, used for standard web apps
    - Token - used for ajax working with json, xml

    **Cookie** authentication - when we develop/use a web application, a session is created. The sessions save information about the user(s) using the application at the moment. A different session is created for every user. The cookie is a text (key-value pairs - name, expiry date, domain) sent by server with response to (an initial?) request. The client (browser), if capable (curl can't), attaches the cookie to all future requests from the same client to the same server. Cookies are attached to an URL for the specific client (if a user logs in from Chrome, the cookie is saved for Chrome?). The reason to send the cookie with all requests is for the server to be able to decide whether to authorise the user (if the cookie is valid, server authorises the user, if not, it's a wrong cookie?). The reason is for the user to not always send their credentials. The cookie text contains an unique key used to identify the user on the server. For log-out - just delete the cookie from the client. The servers also support log-out - marks the key as invalid. Better log out at server level. Cookies are unique. When the server performs sign-out, it sends a cookie with the same name but with empty value thus rewriting (invalidating) the old cookie. Sign-out is implemented with a sing-out route handler on the server which deletes it from the database.

    **Credentials** = username & password

    (Cross-forgery keys - prevent if a cookie is copied and pasted to another computer, to be able to authenticate to the server)

    **OAuth & OAuth2** authentication (won't use this for now) - used for ajax. 2 levels of authentication. First  send request with credentials to get an unique route at which to auth, then authenticate to that route to get an auth token. More secure. AJAX requests are easier to hack.

    **Token** authentication - client sends credentials to the server and receives a token from the server. It acts the same as a cookie- is unique key which we have to attach manually to each request authorisation header. 
    `Authorization: <type> <credentials>` (eg. Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l)

    [**Passport**](http://passportjs.org/) library for Node.js - not great, but there's nothing better. Must set up a middleware. Provides a framework for auth and for different strategies (facebook, token, local etc.) we can set up different way for authentication. -> Copy configuration from site /docs/configure. Both passport and the type of strategy need to be installed with yarn/npm. Passport tries to imitate the way Express works middlewares -> creates its own middlewares.
    
    Install: `>yarn add passport passport-local` - passport + strategy
    
    Set up (copy from [website](http://passportjs.org/docs/configure)): 

    - Configure - copy configuration settings to 'config/auth.config.js', add data object
    - ### Middlewares for session authentication
        
        It is important if we want to have authentication on all routes, because Passport is actually a router, it should be placed at top (before other routers) - `>yarn add cookie-parser express-session`
    - Session serialisation/deserialisation - how to generate unique key(id) from passed user and vice-versa. Currently we use id but it would be better to have something generating unique key/session, saves it in the database and changes is on every log-in.
    - Sign-in form
    - Route '/auth/sign-in'
    - Route '/aut/log-out'

    > Video at [4:36:28](https://youtu.be/buWs2aaml10?t=4h36m28s) set up MongoDB persistent authentication storage

    Currently we don't have persistence for the keys generated at log in and they are lost on app restart. Passport has support for persistent sessions (with [MongoDb](https://stackoverflow.com/questions/10164312/node-js-express-js-passport-js-stay-authenticated-between-server-restart) - add mongo and connect-mongo, Redis(faster for sessions, message queues, caching) - redis connect)
    
    > Hash passwords before saving them in database (but not on client side) and when authenticating - compare hash
 .

# Project Structure
 6.7.2017 Doncho > [video](https://youtu.be/N9RIUgeGxTc) 

 0. ## Overview

    How to create a reusable, testable application. Writing less code - mini app inside the app which works with data, set up to automatically implement/generate different parts of the app??. Mini apps know about only a few of the oter mini apps.
    
    The app will be split into several smaller parts/applications - data, server, app (dependency injection = testability) which are not all connected to each other. **DB -> data -> app** (app layer depends on data layer, which depends on DB), server will know about all of the layers. This allows easier testing - can mock the layers which are not being tested.

 1. ## Initialisation
    - Init package.json file
    - Add eslintrc file and install `npm install -g eslint babel-eslint eslint-config-google`
    - Libraries - `yarn add express body-parser pug mongodb express-messages connect-flash bootstrap`
    - Folders - app (web server), data, db, views, static, models, config
    - Server.js file - will start the application

 2. ## Scripts
    
    Add scripts to package.json. 

     ```js
    "scripts": {
        "start": "node server.js",
        "mon": "mongod --dbpath \"D:/Telerik-HW/Databases/data\""
    }
    ```
    App startup: 

    1. `> npm run mon` - starts mongodb server
    2. `> npm start` - starts server.js (express server listen)
    3. `> mongo` - starts mongo cli where you can list database
    4. `http://localhost:3001/items/form` in browser
    
 3. ## **Server.js** file 
    
    Require all layers of the app, then refactor it to use async operations

     ```js
    /* sample server.js*/
    const db = require('./db');
    const data = require('./data').init(db);
    const app = require('./data').init(data);

    app.listen(3001, () => console.log('Listening at 3001'));
    ```
     ```js
    /* sample server.js refactored. Declare an async function with Promise.resolve for clarity (what happens after what), extract this to a separate library later*/
    const async = () => {
        return Promise.resolve();
    };

    async().then(() => require('./db').init())
        .then((db) => require('./data').init(db))
        .then((data) => require('./app').init(data))
        .then((app) => {
            app.listen(3001, () => console.log('Listening at 3001'));
        });
    ```
 4. ## App layer (part 1)
    - Require Express, 
    - Export init method which creates get and post routes, returns `Promise.resolve(app)` - **always return promises!** to avoid problems, because some of the inits will be async operations (ie. connecting to MongoDB), so be consistent. 
    - As configurations become too many, **extract requires** to another (config) module to simplify. 
    - **Dependency injection** - app receives a 'data' object but doesn't know how or where it comes from and how it does things. The **data is abstracted**/decoupled from the app.

 5. ## Data layer 
    - Generic solution to **create objects (dynamically)** - class Data which creates items, users, etc. The db object which comes from MongoDB has `db.collection('collName')` which saves in the specified collection. JS classes are function declarations (not function expressions) -> have a 'name' property. To generate the **name of the collection** from the ModelClass passed to the Data, create a _method (private = _, could be overridden in an inheritor if needed) which lower-cases the ModelClass.name string and adds an 's' to the end.
    - **Define database methods** - create, getAll, etc. MongoDB api is not much different than a standard js api (has the same array methods - `collection.find(filterObj, optionsObj), findOne(), toArray(), insert(model)`).
    - **Split data layer** to base.data, and items.data & users.data which extend base - can now add individual methods to inheritors. If a user.data.js method throws an exception (eg. password not found), the module which called the checkPassword method, should decide how to handle it. It is not the task of users.data to know about redirects and error handling.

 6. ## Db layer
    - Install MongoDB from [website](https://www.mongodb.com/)
    - Install driver `> yarn add mongodb`
    - Set up config layer which exports port and connectionString, import in server.js, inject in db init `require('./db').init(config.connectionString))`
    - Require mongodb, inject connectionString

         ```js
        /* db.js */
        const { MongoClient } = require('mongodb');
        const init = (connectionString) => {
            return MongoClient.connect(connectionString);
        };
        module.exports = { init };
        ```
    
 7. ## Validation 

    **3 levels - client side, server (app), database (item.data, base.data)**
    -  Set up models folder for items.model, user.model, will hold data validation?? (server side??). To validate in base.data.js we need to know what we are validating. Create private methods for validation in base.data.js (in the parent) and override in children with validations specific for the item/user. 
    - This data layer validation approach can be implemented for the controllers too but for them, it doesn't need to be so abstract (auto generated) because they work with more specific logic (can access several data). 
    - The other place for validation is the post itself. 
    - Another (better) approach - move these **validations in the models layer classes as static methods and pass a validator object to base.data ctor** (and items.data)

 8. ## Models 
    - item.model.js will also convert from model to viewModel (some other time)
    - Create `get id()` because the ids automatically assigned by MongoDB have an underscore (_id)
    - Create `toViewModel(model)` which converts the database objects to Item class objects. Call it in base.data `getAll()` and `create(model)`. Check if the ModelClass has a static toViewModel (to avoid errors).

 9. ## App layer routes (part 2)
    - The same way we create generic data, can create generic routers (some other time) `app.use(new ModelRouter(Item).getRouter())` - to create all CRUD operations - getById, getAll, create form for object creation, etc. Как такъв router ще разбере на какъв route ще намира тези пътища/обекти (на items да е item, на user, да е user)? С ModelClass.name. Как ще разбере кои view-та да рендерира? Малко по-различно от data-та - във views да направим folders (ModelClasс.name/all ../form) там ще ги дефинираме (всичко трябва да е 'generic'/dynamic там). but for this demo: 
    - Define things/routes?? explicitly (not dynamically) - app will load routers (from somewhre) with data - move all the routers from app.js to routers.js., require it in app.js
    - (Having file routers.js in main drectory and folder 'routers' with index.js and routers.js, is the same. But if you have both, could create confusion.)
    - Split routes into smaller files/modules and dynamically load them in routers.js (using `fs, path, __driname`, see demo1 [Require routers dynamically](#require-routers-dynamically))
    - Add static serve of node_modules at libs (see [express.static](#express-static))

 9. ## User interface
    - Prepare for testing the application - the purpose of functional testing is to automate clicking which imitates a user.
    - **Catch errors** - in items.router. With ajax it is easier because the (server) response contains the error. Instead of attaching the error ourselves, use **connect-flash** external library (middleware) which provides flash messages. Saves information in the session which can be used to bind to template. Instead of error messages printing in console, the information will show on the page so that the user knows about the error

    > Video has no sound from 2:05:35 till the end!!

    - [**express-messages**](https://github.com/expressjs/express-messages) provides rendering for flash notifications [connect-flash](https://github.com/jaredhanson/connect-flash)
    - `yarn add express-messages connect-flash` - copy from express-messages page usage settings (Express 3+), copy from connect-flash page usage - cookieParser and session (== express-session) settings, remove express in the parameters, require them.
    - `yarn add cookie-parser express-session` - for session authentication (see [Middlewares for session authentication](#middlewares-for-session-authentication))
    - items.router add `req.flash('error', err.message);` to the error caught in app.post
    - form.pug add `!= messages()` at the top of the file. It creates the message html (can have custom message templates, see documentaiton)

    - Create pug pages - `> yarn add bootstrap` - master, nav, home, all
 .

# Testing A Web App
 6.7.2017 Doncho > [video not in playlist](https://www.youtube.com/watch?v=HKMlLdcuyBE) 

 0. ## Overview
    - Selenium - imitates a human user and analyses the web page

    Most tests are done by QAs but not all. Selenium tests are important to be understood.

    - Set up to work with ChromeDriver and Phantomjs
    - Automate with Gulp task - it is important for the functional tests to be independent from the framework on which the application was created. 

 1. ## Code coverage
    Code coverage gives the % of code do tests go through, not what % of our code is covered. Main criteria:

    - Function coverage - how many of the functions are called
    - Statement coverage
    - Branch coverage - if-else
    - Condition coverage

    Istanbul - the only library for Node.js which creates code coverage info. Doesn't work well with the latest verion of Mocha (4) or Gulp Mocha (not sure), must use older 3rd version.

    `npm install --save-dev istanbul`

    `istanbul mocha tests/**/*.js` - start the tests through Istanbul

    - `npm install sinon --save-dev` - for mocking
    - Set up istanbul to calculate coverage based on all files instead of only the files containing tests - instsall `gulp-istanbul` and `gulp-mocha` (must be version 3, doesn't work with version 4). Create gulp task which pre-test collects files from app directory.

    > Demo **testing router** [00:51:10](https://youtu.be/HKMlLdcuyBE?t=51m10s)

    Need to mock request and response, use file [req-res.js](https://github.com/TelerikAcademy/Web-Applications-with-Node.js/tree/master/Live-demos/project-structure/test/unit) from demo

 2. ## Supertest (integration tests?)

    > Video at [1:07:00](https://youtu.be/HKMlLdcuyBE?t=1h7m)
    
    A tool which mocks the Node.js http server (can mock express as well). Fakes a web server and allows to create http requests, assert properties of the response. Can check if the request type is json, if a unauthorised user has access to a sepecific route, etc.

    To be able to test, the app needs to have `module.exports = app`.

    `> yarn add supertest --dev`

    **Testing redirect**

        ```js
    const express = require('express');
    const app = express();
    app.get('/', (req, res) => {
        return res.redirect('/home');
    });
    app.get('/home', (req, res) => {
    return res.render('home');
    });
    /* more code */
    module.exports = app;
    ```

        ```js
    const request = require('supertest');
    const app = require('../app');
    describe('GET /', () => {
        it('expect to redirect to /home', (done) => {
            request(app)
                .get('/')
                .expect(304)
                .end((err, res) => {
                    if(err) {
                        return done(err);
                    }
                    return done();
                });
        });
    });
    ```

    **Testing post, not found**

        ```js
    const express = require('express');
    const app = express();
    app.post('/', (req, res) => {
        const item = req.body;
        if(!item) {
            return res.redirect(400, '/');
        }
        return data.add(item)
            .then(() => res.redirect('/' + item.id))
        })
    // more code
    module.exports = app;
    ```

    ```js
    const request = require('supertest');
    const app = require('../app');
    describe('POST /', () => {
        it('expect to redirect to /:id', (done) => {
            request(app)
                .post('/')
                .send({
                    text: 'It works!',
                })
                .expect(304)
                .end((err, res) => {
                    if(err) {
                    return done(err);
                    }
                expect(res.header.location).to.start.with
                return done();
                });
        });
    });
    ```
    **Integration tests** = unit tests which cover more than one class. When we test the whole aplication.

    Add integration folder to gulp task. Gulp sometimes doesn't exit and might have to Ctrl+C stopped .

 3. ## Selenium WebDriver (functional tests)
    > Video at [01:24:00](https://youtu.be/HKMlLdcuyBE?t=1h24m39s)

    Testing framework for web applications. Used more for functional tests Imitates an user. Accepts commands and sends them to the browser through a browser-specific **driver**.
    
    Other frameworks: Cipoly? used in Progress. Difrenece is that Selenium checks if things work (the usage flow), but not if styles are applied. Cipoly? works with image recognition - takes snapshots of the website and compares them to tests -> creating tests takes longer than manually testing stuff (tests written in Python and Java).

    Selenium launches a browser and starts clicking around the app. Needs to have drivers installed for the respective browser (ChromeDriver, SafariDriver, EdgeDriver, GeckoDriver). Works with headless browsers - PhantomJS (= old Chrome). Not all drivers work well - use ChromeDriver which is proven to be stable, also use PhantomJS.

    Selenum can be used with other platforms, not only Node.js (C#, Java, etc.).

    #### Set up

    - Install server from [site](http://www.seleniumhq.org/download/) - **'Selenium standalone server v3.4.0'**

    - Run Selenium server

        `> java -jar /path/to/selenium-server.jar`  

    - Install web-driver/browser tobe able to create tests

        `> npm install --save-dev selenium-webdriver` or `> yarn add selenium-webdriver --dev`

        `> npm install -g chromedriver`

        Copy driver set up function from presentation (or Doncho's demo file [setup-driver.js](https://github.com/TelerikAcademy/Web-Applications-with-Node.js/tree/master/Live-demos/project-structure/test/browser/utils)). Create sub folder for browser tests. Video at [1:35:32](https://youtu.be/HKMlLdcuyBE?t=1h35m32s):

        ```js
    const webdriver = require('selenium-webdriver');
    
    const setupDriver = (browser) => {
    const driver = new webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities({
            browserName: browser,
        }))
        .build();

    return driver;
    };

    module.exports = { setupDriver };
    ```

        ```js
    const { setupDriver } = require('../utils/setup.driver.js');
    describe('Tests', () => {
        let driver = null;
        const appUrl = 'http://localhost:3002';

        beforeEach(() => {
            driver = setupDriver('chrome');
        });

        it('telerikacademy.com title', (done) => { /* dont't forget done()*/
            return driver.get(appUrl)
            .then(() => {
                return driver.getTitle();
            })
            .then((title) => {
                console.log(title);
                expect(title).to.equal(expectedTitle); 
                done();
            });
        });
    })
    ```

    To test the application locally, we need to run it in a before each. This makes tests dependent on starting the server, this is problematic for continuous integration, tests should be running on an already started server. To automate the server start and stop process, set up **gulp** to run them (it will start the needed server).

        ```js
    gulp.task('tests:browser', ['server-start'], () => {
        return gulp.src('./test/browser/**/*.js')
            .pipe(mocha({
                retporter: 'nyan',
                timeout: 10000,
            }))
            .once('end', () => {
                gulp.start('server-stop');
            });
    });

    const config = {
        connectionString: 'mongodb://localchost/items-db-test',
        port:3002,
    }

    gulp.task('server-start', () =>{
        return Promise.resolve()
            .then(() => require('./db').init(config.connectionString))
            .then((db) => require('./data').init(db))
            .then((data) => require('./app').init(data))
            .then((app) => {
                app.listen(
                    config.port,
                    () => console.log(`Magic at: ${config.port}`))
            });
    });

    const {MongoClient} = require('mongodb');
    gulp.task('server-stop', () =>{ 
        return MongoClient.connect(config.connectionString)
            .then((db) => {
                db.dropDatabase();
            });
    })
    ```
    > Demo more specific tests for h1 contents, video at [1:53:36](https://youtu.be/HKMlLdcuyBE?t=1h53m36s)

    Import webDriver init to use intellisence. Works with promises! Don't forget to call `done()` at the end!

    - Selenium and the webdrivers have a problem when testing clicks which cause page reload. Use [ui.js](https://github.com/TelerikAcademy/Web-Applications-with-Node.js/tree/master/Live-demos/project-structure/test/browser/utils) file from demo.
    
    **Test clicking** - click on add item, redirect to items list, check if the item is in the list. Abstracted from the application implementation, tests only functionalities in browser. -> User stories = the sequence of ations being tested.

    If using PhantomJS, no selenium server is needed??

 .

# Workshop 1
 11.7.2017^ - Steven > 
[task](https://gist.github.com/StevenTsvetkov/f6ea092583aba1cbecb5a7a5be27f00d)

# MongoDB
 13.7.2017^ Doncho > [video](https://youtu.be/IcqEpwagtAo) 

 <img style="float: right;" src="./images/RDBMS-Mongo-comparison.jpg" width="300px" alt="RDBMS-Mongo">

 1. ## **Overview**
    
    Cross-platform, document-oriented database. Written in C++.

    **Prsistent** database - data is not lost on system restart. Unlike Redis which is non-persistent. Can add, remove data with commands.

    **NoSQL** database : non-relaitonal, data objects are not related - an object needs to have all of its data inside itself (eg. books and authors - all books need to keep their authors, all authors need to keep their books).

    **Schema-less** - a collection can hold different documents (number of fields, content and size can vary in different documents). No complex joins (or none at all) => can get data with a single query. No need for a database architect/specialist to design it. Can write js queries which are run directly against the database.

    **Document-oriented storage** - data is stored in JSON-style documents.

    Getting data is fast, adding data is slow.

 2. ## **Using MongoDB**

    - Installation 
        - Download from website, install driver to work with specific platform. => Can launch MongoDB database local server on the machine.            
        - Through package manager (*ChocoLatte for Windows) - try it for installation of programs.

    - **Staring** - launch mongod.exe (or add it to PATH). After it is started, it can be used in Node.js. Saves files in `/data/db` folder (might need to create it manually, if we get errors on launch). [MongoDB.home tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) specify an alternate path for data files, 
        1. `"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "D:\Telerik-HW\Databases\data"` - or use relative path
        2. If 'C:\Program Files\MongoDB\Server\3.4\bin\' is added to Windows PATH use `mongod --dbpath "D:\Telerik-HW\Databases\data"`
        3. Using package.json `"scripts": { "mon": "mongod --dbpath \"D:/Telerik-HW/Databases/data\""}` run with **`npm run mon`**

    - **CLI** Commands - `use dbName`, `show collections`, `db.items.insert({text: "new text"})` other CRUD commands.
        - `> mongod` starts server
        - `> mongo` starts client (for CLI commands)
        - `> show dbs` list databases
        - `> use items-db` select database (where 'items-db' is a database)
        - `> show collections` list tables
        - `> db.items.find()` list data (where 'items' is a collection)
        - To create a database with CLI: switch to newDbName, create an object, insert it
        - `> use newDbName` 
        - `> s = { Name : "TecAdmin.net" }`
        - `> db.testTable.insert( s );`
        - `> db.testTable.find()` - should list the newly inserted item
        - To delete a database
        - `> use newDbName`
        - `> newDbName.dropDatabase()`

    - **Connecting** - need client (driver) - tralsates queris to the database server. Native `npm install --save mongodb` or `yarn add mongodb` not a dev depencency because we want to connect to the database in production too. mongo.exe allows connecting to a server (mongod.exe starts a local server).

    - **Use** - require, connect (works with **promise** which returns a db instance). Connection string format `mongoDB://SERVER:PORT/DB_NAME` (port is optional, default port 27017). For local db `mongodb://localhost/items-db`

         ```js
        const connectionString = 'mongodb://localhost/items-db';
        const { MongoClient } = require('mongodb');
        MongoClient.connect(connectionString)
        /*works with promises*/
            .then((db) => {
                /*get collection*/
                const items = db.collection('items');
                /*query collection - find all, filter*/
                return items.find({
                    text: {
                        /*$ sign indicates something from MongoDb*/
                        $regex: 'qwe.*', /* .* means 'contains anything' */
                    }
                })
                /*convert cursor to array*/
                    .toArray();
            })
        ```

    - Collections - `collection.find()`, insert, update. Querying whole documents or parts of them. Find returns a cursor (like a linked list - returns the first result and with `next` can iterate over all the results), can be converted `toArray()`. Better filter results with native queries like 'find', before converting them to array, to work faster, save loading to RAM (important for big databases).

    - Querying the collections - filtration is done with many nestings, eg `collection.find({text:{$regex: 'mi.*'}})` the $ sign indicates that this comes from mongodb (like native queries in SQL - select, where etc.??)

    - Use async & await, за да има по-малко nest-ване. Спестява 'then'  на promise-ите. 

         ```js
        const connectionString = 'mongodb://localhost/items-db';
        const { MongoClient } = require('mongodb');
        MongoClient.connect(connectionString)
            .then(async (db) => {
                const collection = db.collection('items');

                await collection.insert({text: "from code",});

                const items = await items.find({
                    text: {
                        $regex: '.*e.*', 
                    }
                })
                .toArray();

                console.log(items);
            })
        ```

    > Must watch after [00:35:00](https://youtu.be/IcqEpwagtAo?t=36m22s)

    Generates id automatically - guid sring 24 length. No get by id method, use findOne({_id: new ObjectID(id),}) (note automatic id is generated as property '_id'), create a getter to overcome this. When searching by id, cant only search by string, have to require ObjectID object to wrap the searched string in (because the id is a type that comes from mongodb). Can use find instead of findOne but need to convert the result toArray and access the [0] item, because find returns a cursor - await needs to be in brackets becaues it works with promises and not promises and toArray would access a collection which is not yet returned??.

    ^^^

 3. ## Building MongoDB access layer
 .

# RESTful APIs
 _Rest architecture with Express_

 This lecture was not held this season > notes from 
[ppt](https://rawgit.com/TelerikAcademy/Web-Applications-with-Node.js/master/Topics/12.%20Creating-RESTful-apis-with-Express/index.html#/title) | 
[video School Academy 2017](https://www.youtube.com/watch?v=-b_P_NTJHf8)

 1. ## Overview

    **SOA** : Service oriented architecture
    
    **REST** : Representational state transfer - set of architectural principles. Разглеждаме всички URL като документи. Има един и същи URL но в зависимост от http header (get, post etc.) действията са различни. Работи с текстови формати на данни, не html.

    **AJAX** : Вместо да се праща html от сървъра, той се генерира с javascript на клиента, а сървъра праща само масив от информацията, която да запълни html. Клиентът прави http requests, получава масив от обекти, парсва го и генерира html от него.

 2. ## DEMO - Doncho

     ```js
    /*server.ts file*/
    import * as express from "express";
    import * as bodyParser from "body-parser"; /*Important*/
    const app = express();
    app.use(bodyParser.json());
    app.use("/libs", express.static("node_modules")); /*to be able to use jQuery*/
    app.use("/static", express.static("public"));
    app.set("view engine", "pug"); /*html engine*/
    let books = [{
        id: 1,
        title: "Harry Potter",
        description: "Nice book"
    }];

    /*Non-REST*/
    app.get("/", (req, res) => {
        return res.render("index");
    })

    /*RESTful API*/
    app.get("/books", (req, res) => {
        return res.send(books);
    });
    app.post("/books", (req, res) => {
        let book = req.body;
        book.id = books.length + 1;
        books.push(book);
        return res.send(book);
    });

    app.listen(3002, () => console.log("Server working on 3002"));
    ```

    Using REST API:
    - `> npm install --save pug && npm install --save-dev @types/pug` - because working with typeScript
    - `> npm install --save jquery` 
    - Create html file 'index.pug' - load jquery in it

    ```html
    <!--index.pug file-->
    <!DOCTYPE html>
    html(lang="en")
    head
        meta(charset="UTF-8")
        title Document
        script(src="/libs/jquery/dist/jquery.js")
        script(src="/static/js/main.js")
    body
        button#btn-add
            | Add
        #books-container <!--what is the #?? id?-->
    ```

     ```js
    /*main.js file*/
    $(function() { /*Use pre ES2015 js for client side*/
        var $booksContainer = $("#books-container") /*$ before var name signifies it is a jQuery object*/

        var $btnAdd = $("#btn-add");

        $btnAdd.on("click", function(ev){
            $.ajax({
                method: "POST",
                url: "/books",
                contentType: "application/json", /*Don't forget!*/
                data: JSON.stringify({title: "Title1", description: "Hello"})
                success: function(){
                    loadBooks();
                }
            })
        })

        function loadBooks() {
            $.ajax({ /*method for http requests*/
                url: "/books", /*if not on the same server, need to specify full domain path*/
                method: "GET",
                success: function(books) {
                    var $list = $("<ul>");
                    $(books).each(functin(index, book) {
                        $("<li/>")
                            .addClass("list-item")
                            .append(
                                $("<span>")
                                .addClass("book-title")
                                .html(book.title)
                            )
                            .append(
                                $("<p/>")
                                .addClass("book-description")
                                .html(book.description)
                            )
                            .appendTo($list);
                    });

                    $booksContainer.html($list.html());
                }
            })
        })
    }
    ```

 2. ## Advantages
    - Client-server architecture - client and server should be separate systems => better separation of concerns, allows different parts of the system to evolve idenpendently, server can be reused by differnt clients, easier to isolate, test, maintain
    - Stateless communicaiton - a request should carry the neccessary information to be understood => better visibility (monitoring a single request is easier??), better scalability (not storing data between requests)
    - Cache (resources should be marked as cacheable or non-cacheable) - clients caching a response => improves perfomance and scalability because fewer trips to the server are required
    - Uniform interface between different components of the system => simplified and consistent communication between components, decouplese the provision of a service from its implementation
    
 3. ## Definitions 
    Web APIs that match the REST constraints (??) are considered RESTful. Comparison

    RESTful                          | Not RESTful                                      
    -------------------------------- | ------------------------------------------------
    GET /products/1052/reviews       | GET /reviews?product_id=1052                     
    POST /products/1052/reviews      | POST /post_review?product_id=1052                
    DELETE /products/1052/reviews/10 | POST /remove_review?product_id=1052&review_id=10 
    GET /products/1052/reviews/10    | GET /reviews?product_id=1052&review=10                   
    
    RESTful
    - GET /users  - all users, may be filtered by query params
    - POST /users - create a new user

    Operating on a record:
    - GET /users/ID    - return the user with the matching ID
    - DELETE /users/ID - remove the user with the matching ID
    - PATCH /users/ID  - update the user with the given ID
    - PUT /users/ID    - replace the user with the given ID

 4. ## Node.js and Express (not on ppt)
    - CRUD (Create, read, update, delte)
    - Restricted APIs

    > Must watch agian - demo [paste sharing service](https://github.com/TelerikAcademy/Web-Applications-with-Node.js/tree/master/Topics/12.%20Creating-RESTful-apis-with-Express/demos/paste-sharing-service)


 .
# REST
 _Best practices and common mistakes_

 20.7.2017* Steven > [video](https://youtu.be/nm3a7ESJXEI), notes from [ppt](https://rawgit.com/TelerikAcademy/Web-Applications-with-Node.js/master/Topics/17.%20REST-Best-Practices/index.html#/title)

 1. Definitions

    **Resource** : an object or a representation of something, which **has some associated data with it** and/or there can be a set of methods to operate on it. Eg. schools, animals, employees are resources; get, add, update, adopt are operations to be performed on them.

    **Collections** : set of resources. Eg. companies is the collection of company resources??, schools, animals

    **URL** : Uniform resource locator - a path through which a resource can be located and come actions can be performed on it.

    **REST can be used only with AJAX** (or other direct invokers??), not through an html form, which only supports POST & GET requests, but not PUT & DELETE. The goal of REST is to one collection/resource (route) to be able to implement all CRUD operations.

 3. **Guidelines** 
    ! **Build clean and simple to use API. The API is the developers UI.**

    - Use standards where they make sense
    - API should be friendly to the developer and explorable through the browser address bar
    - API should be simple, intiuitive and consistent to make adoption easy and plesant

    Rules
    - **Resources = nouns, http methods = verbs**
    - nouns, not verbs - allows to implement CRUD *?? crud are verbs, no? - read on*
    - plural nouns (because working with collecitons)
    - sub-resourcing relation
    - API versioning

    Http methods (verbs)
    - GET - requests data from the resource and should not produce any side effect
    - POST - requests the server to **create** a resource in the database
    - PUT - requests the server to **update** resource or create the resource, if it doesn’t exist. Updating a field with a value matching the current value should not do anything!
    - DELETE - requests that the resources, or its instance, should be removed from the database.


 2. Example

    Managing employees - problem: URL contains not only 'resource'(noun) but an action(verb) => limts flexibility and violates CRUD principle. 
    * POST /addNewEmployee => `POST /employees`
    * POST /updateEmployee => **`PUT /employees/:id`**
    * POST /deleteEmployee => `DELETE /employees/:id`
    * POST /deleteAllEmployees
    * POST /promoteEmployee
    * POST /promoteAllEmployees
    * POST /sortAllEmployeesByName
    * POST /sortAllEmployeesBySalary

 5. **Sub-resourcing **
    Cases when **one resource is under another one** = actions/methods applied to a resource
    - POST /promoteEmployee => `POST /employees/:id/promote`
    - POST /demoteEmployee => `POST /employees/:id/demote`
    - GET /companies/:id/employees
    - GET /companies/:id/employees/:id
    - PUT /companies/:id/employees/:id

    Only acceptible when sub-resource **cannot/should not be accessed directly**

 6. Other
    - POST /promoteAllEmployees - invoking mass action on a resource is an anti-pattern, could be acceptible if constraints are applied

 7. Searching, sorting, filtering and pagination
    All of these actions are **queries to one dataset** (resource/collection). There should be no new set of APIs (routes) to handle them. => **append the query parameters with the GET method API**.

    - Searching - `GET /employees?search=Pesho`
    - Sorting - `GET /employees?sort=name_asc,salary_desc&count=12` ??what is the differnce beetween , & 
    - Filtering - `GET /companies?category=banking&location=india` (can pass various options through query parameters)
    - Pagination - improves performance with large datasets, easier to handle response 
        - GET /employees?skip=10&take=5 (3rd page)
        - `GET /employees?page=3` (3rd page) - used when the page size is predefined on the server

 8. **Versioning** 
    If introducing breaking changes, add version number to the route, this way can keep old funcionality and introduce new one - POST /**v1**/employees/:id/promote
 .
# Containers
 27.07.2017 Steven > [video](https://youtu.be/0IEJMreS9vI)

 1. **Breif history** - 
    virtual machines vs containers - take less resources, containers reuse part of the host OS, eliminate guest OS

    <img style="float: right;" src="./images/VMs-containers.png"  width="350px" alt="VMs-containers">

    - **Physical** machines : each applications runs on separate physical machine => causes problems - procurement time, power solutions, cooling, administration, low utilisation
    - **Virtual** machines : each application runs on a separate VM on top of a physical one => solves some of the problems but causes licensing hell, higher administration costs (each physical and virtual machine needs to be updated), system resource overhead
    - **Containers** : each application runs in a separate container on top of a physical machine (or virtual) => solves most problems, though not perferct solution - apps are fast, lightweight, scale easily, provide availability. Containers allow to ship applications regardless of host's bins and libs.


 2. **The Docker Project** - 
    the biggest but not the only one (open sourced) - automates the deployment of software applicatoins inside containers by providing an additional layer of abstraction and automation of OS-level virtualisation on Linux.

    Applications are deployed in a **sandbox** (container) to run on the host OS. Docker runs on Linux, to run on Windows, needs a virtual machine. Main benefit - allows to package an application with all of its dependencies into a **standartised unit** for software development. Unlike virtual machines, containers do not have the high overhead => more efficient use of the underlying system resources.
    
    **Images** : blueprints of our applicaition, form the basis of containers (similar to VM templates, to OOP classes, to 3D blueprients).

    **Containers** : created from Docker images and run the actual application (similar to a VM instance, to OOP object, to 3D printed object)

    **Docker Daemon** : the background servic running on the host that manages building, running and distributing Docker containers. It is a process that runs in the OS to which clients talk to.

    **Docker Client** : the command line tool that allows the user to interact with the daemon (other forms of clients are possible, such as Kitematic).

    **Docker Hub** : a registry of Docker images (like GitHub but for Docker images), a directory of most publicly available Docker images. If needed, one can host their own Docker registries and use them for pulling images. You have one **free private repository** when you register.

    **Under the hood** each reusies the underlying OS's kernel and a part of the underlying bins and libraries. Each container consists of the application + the libraries needed, and has:
    - its own file system which root (/) - isolates it from the host OS
    - its own processes (PID)
    - its own network

    **Running on Windows** requirements: Windows Server 2016, Windows 10, CPU Virtualisation support (enable from BIOS, enable Hyper-V in Windows Features). Install Docker for Windows (not Docker Toolbox).

    **Running on Linux** (Debian, Ubutnu, CentOS distributions) `sudo wget -qO- https://get.docker.com/ | sh` 

 3. Docker in action

    Download a simple image:
    - `docker login` 
    - `docker pull hello-world` (optional) - downloads the image
    - `docker run hello-world` - downloads it if not found locally, creates container out of it, runs it without any additional settings, otuputs a hello-world text, dies (`PID 0 closes`)

    Commands:
    - `docker --help`
    - `docker ps` - lists all runing images
    - `docker ps -a` - output information about the speicified image runtime
    - `docker build -t angular`
    - `docker run -d -p 3001:3001` - name client angular
    - `docker start client`
    - `docker stop client`
    - `docker rm client `
    - `docker rmi angluar`

    Two types of repos in Docker hub - community (name starts with an username), official (has no username prefix)

 4. Docker in-depth
    
    blablabla
 .
# Running  web apps in AWS
 25.7.2017 Doncho > [video](https://youtu.be/ZquKHVb2zF0)

 [Instructions](https://github.com/TelerikAcademy/Web-Applications-with-Node.js/tree/master/Topics/16.%20Running-Node.js-apps-in-the-cloud)

 1. AWS.amazon.com - register - requires entereing payment info

 2. EC2 intance

 3. AWS

    1. Choose an Amazon Machine Image (AMI) -> Ubuntu Server 16.04 -> 
    2. Coose instance type - General purpose t2 micro (the only free option) -> 
    3. Configure Instance Details (use defaults) -> 
    4. Add storage (use defaults) -> 
    5. next -> 
    6. Configure security group - change name: 'node-app', description: 'node app security group' -> 
    7. Review - Launch -> 
    8. Select and existing key pair or create a new key pair. - create a new key pair (file containing the deployment machine) name: 'aws-demo' - this key pair is downloaded once and needs to be provided to SSH when deploying to connect to the instance. The access to this key needs to be restricted - few people, don't lose it. -> Launch instance

    **Connecting** - security group 'node-app' -> opens port 22 -> we can connect to it
    Right click (where??), copy example text (ssh -i "aws-demo.pem" ubuntu@ec2-52-57-4-79.eu-central-1.compute.amazonaws.com)  change "aws-demo.pem" to relative link to the key file (give read rights to the file ('cmod 400 aws-demo.pem'-> launches public ip (needs port 80 to be open), gives public DNS (looks like url)

    Ubunto on VM with UI - Ubunto server and Ubunto desktop are very similar, only one has user inteface. Set up machine. Then generate script which we can execute on the other machine?? First - install git (use cmd, git-shell no Tortoise) - add app demo to gitHub. Most Linux distributions have a package manager - 'apt' for Ubuntu - commands: `apt update -y` `apt upgrade` `apt install  PACKAGE_NAME` `apt remove PACKAGE_NAME`
    - `apt install git` - error lock file - root is like the admin user for Linux - use `sudo apt install git`


    ...zzz
    - install node
    - port forwarding (similar to expose) - to be able to access mongodb instance from another VM

    ..break

    - elastic ip - free under some conditions

    ...TMI
 .

# WebSockets
 This lecture was not held this season

 From Nade > [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9)
.
