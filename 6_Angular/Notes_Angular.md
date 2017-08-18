# Single Page Applications with Angular 
### Notes

Telerik Academy course, August 2017

[videos playlist]()

| Vid |                 Topic                  |  Date  |  C  |  V  |
| --- | -------------------------------------- | ------ | --- | --- |
| 1.  | [Intro](#course-intro)                 | 14.Aug |  +  |  +  |
| 2.  | [TypeScript](#typescript-fundamentals) | 14.Aug |  +  |  +  |
| 3.  | [TS OOP](#typescript-oop)              | 14.Aug |  +  |  +  |
| 4.  | [Tools](#angular-tools)                | 16.Aug |  +  |  +  |
| --  | [Overview](#angular-overview)          |        |     |     |
| 5.  | Architecture                           | 16.Aug |  ^  |     |
| 6.  | Components                             | 16.Aug |  ^  |     |
|     | CLI                                    |        |     |     |
|     | Lifecycle                              |        |     |     |
|     | Pipes and Directives                   |        |     |     |
|     | Data Binding                           |        |     |     |
|     | Forms                                  |        |     |     |
|     | Services and DI                        |        |     |     |
|     | Observables                            |        |     |     |
|     | Router                                 |        |     |     |

- `*` - missed &emsp; `^` - no listen &ensp; 
- `0` - video not in playlist &emsp; `.` - no video  &emsp; `--` - no lecture

## Course intro
 14.August.2017 Steven [video](https://youtu.be/IrZrdxUVS0I)

 1. #### Program  
    - Components - single responsibility!
    - Modules - lazy loading
    - Observables - async programming, observables are generics
    - Service layer - will be elaborated in MVC/Android course
 2. #### Evaluation 
    - Course project - 85%
    - Attendance - 10%
    - Helping others - 5%
 3. #### Team project
    - Random teams
    - Quality more important than quantity
    - Can use back-end as a service (eg. Firebase) or own server
    - Integration & UT tests (must be adequate!)
    - Bootstrap, materialise, other.
    - TSlint - no errors
    - Module loaders - SystemJS, WebPack
    - No points to projects which do not compile or don't produce an adequate result
    - Adequate commit logs in GitHub
    - Documentation - description of the project, how to use, 

    Bonus:
    - Use branches in github (git flow - master, dev, features)
    - Project management - GitHub, Trello, ZenHub
    - Cloud hosting (AWS)

    Defence:
    - Each team member will present the project separately - project, source code, architecture, commit logs, other conceptual technological questions.

 4. #### Resources
    - VS Code exclusively
    - Other editors/IDEs are possible but lack some TypeScript features
 .
## TypeScript Fundamentals
 14.August.2017 Steven [video](https://youtu.be/qFKQY2JIK-g)

 1. #### TypeScript Overview

    = **Superset dialect of ECMAScript** (one of many). Created by Microsoft. Has optional static typing. Inherits concepts from C# but has some differences on the use of interfaces and classes. Can use type definitions for intellisense. Can use JavaScript libraries. **Compiles to JavaScript**, not translate or transpile. That is why although Angular is a client-side technology (works on the browser), TypeScript can be used with it. Target JS can be selected during compilation (WebPack takes care for polyfills).
    
    Dialect because has no separate runtime, JavaScript runtime = Node.js > V8, C# runtime = .NET execution strategy. Superset because uses a specification (ECMAScript) and adds to it - variables, classes, interfaces, type definitions, compile time strategies.

    1. Benefits over JS:
        - Static typing (optional) -> more **predictable**
        - Modules, namespaces and stronger OOP -> **scales better** for larger apps 
        - Compilation step -> some **errors are caught at compile-time** instead of at run-time
        - `strictNullChecks` optional parameter to disallow null values
        - Access modifiers (public, private)

    1. **Installation**    
        `> npm i -g typescript` - installs **Type Script Compiler**     
        `> tsc -v` - check if the compiler has been installed     
        `> tsc --help` - get help      

    1. **Compiling**    
        Typescript is written in .ts files, which can't be used directly in the browser. They need to be translated to vanilla .js. Compiling can be done through:
        - Terminal `> tsc main.ts` (where main.ts is the name of the file to be compiled) - creates (in the same folder, can be changed) a .js file which can be executed (`> node main.js`)
        - Visual Studio or another IDE
        - Automated task runners such as gulp

 2. #### Environment Setup
 
    1. VS Code - a tool developed by Microsoft for TypeScript and .NET Core development. Prerequisites  
    (see [VSCode tools](#vs-code-tools)):
        - Configure files: tscofig.json, launch.json, tasks.json
        - Have globally installed **typescript** and **tslint**
        - VS Code Extensions for TypeScript:    
        [TSLint](https://github.com/palantir/tslint),   
        [Typings auto installer](https://github.com/jvitor83/typings-autoinstaller) - intellisense,     
        [Auto Import](https://github.com/soates/Auto-Import) - `Ctrl + .`,  
        [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug)

    1. ### tsconfig.json

        Specifies the way .ts files are compiled.   
        Auto generate with **`> tsc --init`** but adds too many other options

         ```json
        {
            "compilerOptions": {
                "target": "es5", // Sets the output JS's version
                "module": "commonjs", // Sets the module loader
                "outDir": "dist", // Sets output JS files' location
                "sourceMap": true, /* Generates *.js.map file, 
                to convert js to ts and enable debugging of ts in VSCode */
                "noEmitOnError": true /* Do not compile if errors, stop. 
                Default is to attempt to compile regardless of errors. */
            }
        }
        ```

        Module loaders - Node.js uses the default module loader, which implements the CommonJS convention. Other - AMD, SystemJS. Angular supports both SystemJS, and WebPack bundler.

        Dist folder (distribution) is a convention used in many libraries.

    1. ### launch.json

        Specifies the way VS Code should launch the application.    
        Auto generate with VS Code (`F5` or `Ctrl + F5`) - creates file in .vscode folder (also holds tasks file, other workspace files with our own configurations of the editor).

         ```json
        {
            "configurations": [
                {
                "type": "node",
                "request": "launch",
                "name": "Launch Program",
                "program": "${workspaceRoot}/dist/index.js",
                "preLaunchTask": "compile",
                "sourceMaps": true,
                "outFiles": [ "${workspaceRoot}/dist/*.js" ]
                }
            ]
        }
        ```
        
        preLaunchTask needs to be defined in the tasks.json file. Have to compile ts to js to be able to run. 

    1. ### tasks.json

        Specifies the way VS Code should run tasks.     
        Auto generate with VS Code.

         ```json
        {
            "version": "2.0.0",
            "tasks": [
                {
                "taskName": "compile",
                "command": "tsc",
                "type": "shell"
                }
            ]
        }
        ```

    1. Running the code and debug
        - Run `Ctrl + F5`
        - Debug `F5`
        - Debug windows: local variables, watch list, call stack, breakpoints (can be line or column, have settings like in Visual Studio)

 3. #### Static Typing

    = Can declare types of variables (sometimes is overhead, use inferring). The compiler makes sure they are assigned values of the specified type. If the type declaration is omitted, the compiler will **infer** it from the code. Similar to C#, there are **basic types** (predefined in the language) and **complex types** (created by the developer).

     ```ts
    let firstName: string = "Pesho";
    let age: number = 20;

    let firstSentence: string = `My name is ${firstName}.`;
    let lastSentence: string = `I am ${age} years old.`;

    function printTwoSentences(one: string, two: string) {
    console.log(`${one} ${two}`); // interpolation string
    }

    printTwoSentences(firstSentence, lastSentence);
    // My name is  Pesho. I am 20 years old.
    ```

 4. #### Basic Types
    1. **Numbers** - as in JavaScript, all numbers int TypeScript are **floating point values**. The language is **type-safe** - once set/inferred, the type cannot be changed (if not type `any`).

         ```js
        let floatNum = 10.5;
        floatNum = "Pesho"; // will not compile
        ```

        Samples

         ```ts
        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        ```

    1. **Strings** - double quotes ("), single quotes ('), backtick (`) template/interpolation strings to span multiple lines and embed expressions/variables.

    1. **Arrays**

        Basic type: `let list: number[] = [1, 2, 3];`

        Complex generic type Array (not inferred): `let list: Array<number> = [1, 2, 3];`
    
    1. **Boolean** - hold true or false value
    1. **Enums** - a way to give user-friendly names to sets of numeric values. Default numbering starts from 0. Numeric values can be manually set. Can log/get the value or the name of the enum.

         ```ts
        enum Color {Red = 1, Green, Blue}
        let c: Color = Color.Green;

        let colorNumber: number = Color.Green;
        console.log(colorNumber); // 2

        let colorName: string = Color[1]; 
        console.log(colorName); // Red
        ```

    1. Null and undefined - same as in JavaScript, not very useful on their own. They are subtypes of all other types (i.e. can be assigned to any type). If **`strictNullChecks`** flag is used during compilation null number will not compile.

         ```ts
        let u: undefined = undefined;
        let n: null = null;
        let num: number = null; // won't compile if strictNullChecks
        ```

 5. #### Other Basic Types
    1. Any - used to disable type-checking for a given variable or function, use when  not sure of the type or when a variable comes from an external library. Can be used on arrays. **Bad practice**, avoid using. 

         ```ts
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean

        let list: any[] = [1, true, "Pesho"];
        ```

    1. Unions - type that combines two+ types, can be used on arrays. Rarely used - somewhat **bad practice**. Used in tuples.

         ```ts
        let example: (number | string);
        example = "Pesho"; /* OK */
        example = true; /* Error */
        example = 10; /* OK */

        let list: (number | string)[] = [1, 2, "Pesho"];
        ```

    1. Tuple - express an array where the type of a fixed number of elements is known, but their values might be different. Not often used, not clear, bad practice.

         ```ts
        /* Declare a tuple type */
        let x: [string, number];

        /* Initialize it */
        x = ["hello", 10]; // OK

        /* Initialize it incorrectly */
        x = [10, "hello"]; // Error
        ```

    1. Indexing 
        - when accessing an element with known index, the correct type is retrieved

         ```ts
        console.log(x[0].substr(1)); /* OK */
        console.log(x[1].substr(1)); /* Error, 'number' does not have 'substr' */
        ```

        - when accessing an element outside the set of known indices, a union type is used instead.

         ```ts
        x[2] = "world"; /* OK, 'string' can be assigned to 'string | number' */
        console.log(x[3].toString()); /* OK, 'string' and 'number' both have 'toString' */
        x[4] = true; /* Error, 'boolean' isn't 'string | number' */
        ```

 6. #### Functions
    
    1. Both standard and arrow functions are valid.

        Allows to constrain input parameters and specify a return type. Return type can be a basic type or complex type, and can be inferred from the code. 

         ```js
        function add(x: number, y: number): number {
            return x + y;
        }
        ```

    1. **Return types**

        Two additional basic types used mainly as return types for functions :
        - `void` - used to indicate that the function returns nothing, **basic** type, opposite of `any`, technically could be assigned to a var, a void var can be only undefined or null) 

         ```ts
        let unusable: void;
        unusable = undefined; /* OK */
        unusable = null; /* OK */
        unusable = 1; // Error
        ```

        - `never` - **basic** type, represents the type of values that never occur, used for functions that always throw an error or never return. Not used often.

    1. **Parameters**

        By default, TypeScript assumes that every parameter is **required**. The compiler checks if all parameters are passed. Still can pass null or undefined (depends on the strictNullChecks flag), avoid it. Better use default or optional parameters `lastName = "Smith"`.

         ```js
        function buildName(firstName: string, lastName: string = "Smith") {
            return firstName + " " + lastName;
        }
        /* no default param set */
        let result1 = buildName("Bob");                  /* error, too few parameters */
        let result2 = buildName("Bob", "Adams", "Sr.");  /* error, too many parameters */
        let result3 = buildName("Bob", "Adams");         /* OK */
        let result4 = buildName("Bob", null);            /* works, returns "Bob null" */
        /* with default parameter */
        let result2 = buildName("Bob", undefined);       /* works, also returns "Bob Smith" */
        ```

        Optional parameters are possible with `?`, must always be last `function buildName(firstName: string, lastName?: string)`

        **Rest parameters** are possible with ellipsis (...) (similar to `arguments` global variable in JS but better because it's not a global var, global variables are difficult to unit test) 

         ```js
        function buildName(firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        }

        let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
        ```

        Ellipsis can be used in function definition.

         ```js
        function buildName(firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        }

        let buildNameFun: (fname: string, ...rest: string[]) => string;
        buildNameFun = buildName;
        ```

        When using Angular often types are inferred, only when creating interfaces and defining classes. **Return types** are more often used.
 .
## TypeScript OOP
 14.August.2017 Steven [video](https://youtu.be/nBGMoerF16c)

 Difference between modules in TypeScript (same as in JS) and in Angular (collection of components and services).

 1. #### Classes

    Allow defining complex types.
    Inheritance - `extends`, `this`, `super`. Variables and methods can be overridden - use `super` (instead of `this`) to call the base method to prevent recursion (same as in JavaScript).

    Can use polymorphism (real, not the default as in JS - everything inherits object??)

 2. #### Accessors - getter, setter

    Allow control of data state of the class by implementing **validations** (comes from ECMAScript standard)

 3. #### Static members

    Can be accessed through the type itself, no need to create an instance (prefix is the name of the class, not `this`). Hold values needed for the whole type in general, not for specific instances (ie `Math.sqrt()`) (comes from ECMAScript standard)

 4. #### Abstract Classes
    
    Base class from which other classes can be derived. **Cannot be instantiated directly**. Use - situations in which the base class is an abstraction, not a real object. Used for default configurations. Not so easy in JS.     
    `abstract class Animal { }`

 5. #### Access Modifiers

    Restrict access to methods, fields, functions and constructors. (no internal as in C# because modules are not namespaces):
    - **Public** - **default** (if not specified). Class member is accessible from anywhere. 
    - **Private** - accessible only within the class in which it is defined. Allows use of encapsulation -> improved readability. `class Animal { private name: string; }`
    - **Protected** - accessible within the current class and the class' children. Can be changed to public in children (not a good practice).
    - **Readonly properties** - must be initialised in their declaration or in constructor. Can hold external services. In the context of dependency injection, it is important injected properties/objects to be readonly.    
    - **Constructor shorthand** - use regular access modifiers and getter/setters to validate data.**Important to validate all incoming data!** -> maintainability, scalability.

         ```ts
        class Animal {
            constructor(private name: string) { } /* instead of declaring a field */
        }
        let cat: Animal = new Animal("Cat"); 
        console.log(cat.name) // Error: 'name' is private;
        ```

 6. #### Interfaces

    Just like classes but do not implement functionality & cannot be instantiated (like in C# but names don't start with 'I'). Can be **used as constraints**. Classes implementing an interface must provide the implementation details.

     ```ts
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    let mySquare = createSquare({color: "black"});

    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = {color: "white", area: 100}; /* Default values*/
        if (config.color) { /* if passed object has this property. 
        Check needed if the property is optional '?', 
        otherwise passing the object will give error?? */
            /* Error: Property 'clor' does not exist on type 'SquareConfig' */
            newSquare.color = config.clor;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    ```

    Above example not much high-quality code - creates an object inside. It would be better to receive a default values as parameter, but then it would need to be a class, because interfaces have no implementation.

    > Good practice: all interfaces in one file eg. 'data.models.ts'

    Inside an interface you can also define:
    - Indexers (index type and return type) (like in C#, not often used)
    - Function types/signature    
    `speak: () => string` name, parameters, return type or  
    `(source: string, subString: string): boolean;` parameters, return type

    ```ts
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let search: SearchFunc; /* ?? */
    let pesho = (source: string, subString: string) => { return true; }
    search = pesho;
    ```

 7. #### Generics

    Adding flexibility to object/function templates. Generics allow to create a class or function which works with a variety of types rather than a single one. Can accept multiple types eg. `<T, N>`

     ```ts
    function identity<T>(arg: T): T {
        return arg;
    }
    console.log(identity<string>("Pesho")) /* works with string. Prints Pesho */
    console.log(identity(new Person("Pesho")) /* works with Person. Type is inferred */
    ```

    Generic factory (like in C# `pesho<T>(pesho) where T: Person`)

     ```ts
    abstract class Animal { numLegs: number; }
    class Bee extends Animal { keeper: BeeKeeper; }
    class Lion extends Animal { keeper: ZooKeeper; }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    createInstance(Lion).keeper.nametag;  /* typechecks! */
    createInstance(Bee).keeper.hasMask;   /* typechecks! */
    ```

 8. #### Modules

    Executed within their own scope, not in the global scope. Variables, functions, classes, etc. declared within a module are not visible outside the module. `import`, `export`. Change of name at export is not a good practice but changing the name at import is useful because of possible conflicts. 

    Importing the whole module `import * as validator from "./ZipCodeValidator"` is not a good practice - **creates global variable**. Better ` import { ZipCodeValidator } from "./ZipCodeValidator";`

    **Export wrapping** - can wrap exports from multiple files into a single file called **barrel** file.

     ```ts
    /* index.ts file */
    export * from "./stringValidator"; /* exports interface 'StringValidator' */
    export * from "./zipCodeValidator";  /* exports class 'ZipCodeValidator' */
    ```
 .
## Angular Tools
 16.August.2017 Martin [video](https://youtu.be/UwJfAWhoq9k)

 1. #### IDEs
    - VS Code - not an IDE but with all the extensions, comes close
    - WebStorm - JavaScript oriented
    - IntelliJ IDEA - Java oriented

 2. #### VS Code Tools
    See [Environment set up](#environment-setup)
    - Quick set up **demo app with CLI** (more details in future lecture).
        - `> ng new ng-demo` - scaffolds a working project, does npm install. Different **seeds**?? (Minko Gechev) - better control over WebPack than in CLI. 
        - **WebPack** module bundler (similar to module loader SystemJS) - takes js, css all files and makes them into chunks files. 
        - `> ng serve -o` serves at port 4200. 
        - `index.html` is created empty with tag `<app-root>` (component which Angular bootstraps for us, everything happens in it).
        - `app` folder holds all Angular components and files (when creating from CLI)
        - `app.component.ts` file defines '@Component' with selector for the app-root tag from index.html and inserts/renders contents into app.component.html template

    - **Angular Language Service** - [link](https://github.com/angular/vscode-ng-language-service) - provides auto complete for data binding - from component.ts exports to component.html template file (like pug templates) (if it doesn't load suggestions, exclude node_modules in VSCode workspace settings `files.exclude: {"**/node_modules": true}`)

    - **TSLint** - [link](https://github.com/Microsoft/vscode-tslint) - integrates lint in VSCode, dynamic error notifications, otherwise have to run lint from cmd each time a change is made. Supports automatic fixing of errors - CLI creates tslint.json file, rules are in 'node_modules/codelyzer' (by Minko Gechev too)
    - **Angular Snippets** - 
    [BeastCode](https://github.com/BeastCode/VSCode-Angular-TypeScript-Snippets), 
    [johnpapa](https://github.com/johnpapa/vscode-angular-snippets)
    
    - **Angular Files** - [link](https://github.com/qwert789/vscode-angular2-files) - scaffolds files from templates - eg. component has css, html, spec.ts, ts files, can use this extension to generate all of them (based on CLI) (eg. right click on app folder - `Generate Component`)

         ```js
        /*.angular-cli.json file specifies component generation settings*/
        "defaults": {
            "styleExt": "css",
            "component": {
                "spec": true, /* will create spec file with some tests */
                "inlineStyle": false, /* will create css in a separate file*/
                "inlineTemplate": false, /* will create html template in separate file */
                "flat": false /* will create new folder */
            },
        ```

         ```ts
        /* app.component.ts file if most settings set to true - separate files*/
        import { Component } from '@angular/core';
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            person = { firstName: 'Marto' };
        }
        ```
         ```ts
        /* my.component.ts if all settings above set to false - all in one file*/
        import { Component, OnInit} from '@angular/core';
        @Component({
            selector: 'app-my',
            template: `
            <p> my Works</p>
            `,
            styles: []
        })
        export class MyComponent implements OnInit {
            constructor () { }
            ngOnInit() { }
        }
        ```

    - **Type Lens** - [link](https://github.com/kisstkondoros/typelens) - reference counter

    - **Types Auto Installer** - [link](https://github.com/jvitor83/typings-autoinstaller) - downloads type-files (interfaces) automatically on libraries installation -> intellisense

    - /Angular Switcher - [link](https://github.com/infinity1207/angular2-switcher) - move between html css ts files with `Alt+U` `Alt+O`

    - **Auto Import** - [link](https://github.com/soates/Auto-Import) - for importing modules

    - **Path Intellisense** - [link](https://github.com/ChristianKohler/PathIntellisense)

    - Settings sync Shan Khan - synchronise settings between many computers

 3. #### Angular-specific tools
    - **Angular CLI** - [link](https://cli.angular.io/)   
    `ng new`  
    Generating new component with CLI:    
    `ng g c new1 --spec false --flat false -d` (ng = engine?, g = generate, c = component, -d = dry run - no changes will be written??)

    - **Augury** - [link](https://augury.angular.io/) - useful for debugging, developed by Angular(Google), Google Chrome extension, provides additional information in Chrome Developer Tools (F12) in Augury tab- debug directly JS, router tree, modules (BrowserModule needed to specify which platform to work with??), `Ctrl + P` search files

    - **Codelyzer** - [link](http://codelyzer.com/) by Minko Gechev - set of tslint rules for static code analysis of Angular ts projects (supported by Angular CLI)

    - **Compodoc** - [link](https://compodoc.github.io/website/), [demo](https://compodoc.github.io/compodoc-demo-todomvc-angular/) - builds component documentation
    
    - **Angular Material** - [link](https://material.angular.io/), [intro](https://material.io/guidelines/material-design/introduction.html) - material components.     
    Other components resources: [Angular website resources](https://angular.io/resources), [GitHub list of components](https://github.com/brillout/awesome-angular-components)

 .
## Angular Overview
 1. What is Angular 
    [website](https://angular.io/guide/quickstart)  
    = Open-source JavaScript framework for creating single-page applications (SPA). Provides application architecture (MVC), routing, templates, server-communication (http), etc. Something like a bundle of jQuery + Handlebars + Sammy.js with consistent APIs. Can be used with both JS and TypeScript (recommended by Google)
 2. Installation
    - Install Node.js
    - Clone Angular Quickstart application from [github](https://github.com/angular/quickstart)
    - Run `> npm install`
    - Run the application
 .
## Setup and Architecture
 1. What is in the generated template
 2. VS Code Setup, Tools and the CLI
 .
## Components
 1. SRP in Components
 2. Template syntax & black magic
 3. Component Communication - Event raising, Variable binding

## Angular Lifecycle
## Angular CLI
## Pipes and Directives
## Data Binding
 1. Save guards
## Forms and Form controls
 1. Handle the UI and data printing
 2. Handle user data
 3. Validations
## Services and DI
 1. Building a Service layer
 2. Dependency Injectio n- Increase testability, Bind to types and strings functions
## Http Observables
 1. Async programming with Observables
## Angular 2 Router
 1. Public and private routes
 2. Guards and resolvers
 3. Modules - Lazy loading routes
