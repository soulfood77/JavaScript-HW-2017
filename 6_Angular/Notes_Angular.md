# Single Page Applications with Angular 
### Notes

Telerik Academy course, August 2017

[videos playlist]()

| Vid |              Topic              | Date |  C  |  V  |
| --- | ------------------------------- | ---- | --- | --- |
|     | [Intro](#course-intro)          |      |     |     |
|     | [Overview](#angular-2-overview) |      |     |     |
|     | TypeScript                      |      |     |     |
|     | Setup                           |      |     |     |
|     | OOP                             |      |     |     |
|     | CLI                             |      |     |     |
|     | Lifecycle                       |      |     |     |
|     | Components                      |      |     |     |
|     | Pipes and Directives            |      |     |     |
|     | Data Binding                    |      |     |     |
|     | Forms                           |      |     |     |
|     | Services and DI                 |      |     |     |
|     | Observables                     |      |     |     |
|     | Router                          |      |     |     |

- `*` - missed &emsp; `^` - present, didn't listen &ensp; 
- `0` - video yes, not in playlist &emsp; `.` - lecture yes, no video  &emsp; `--` - lecture no

## Course intro
 1. Course program
 2. Evaluation 
    - Course project - 85%
    - Attendance - 10%
    - Helping others - 5%

## Angular 2 Overview
 1. What is Angular 
    [website](https://angular.io/guide/quickstart)  
    = Open-source JavaScript framework for creating single-page applications (SPA). Provides application architecture (MVC), routing, templates, server-communication (http), etc. Something like a bundle of jQuery + Handlebars + Sammy.js with consistent APIs. Can be used with both JS and TypeScript (recommended by Google)
 2. Installation
    - Install Node.js
    - Clone Angular Quickstart application from [github](https://github.com/angular/quickstart)
    - Run `> npm install`
    - Run the application

## TypeScript Fundamentals
 1. What is TS?

    = **Superset dialect of ECMAScript**. Created by Microsoft. Has optional static typing. Inherits concepts from C#. Can use type definitions for intellisense. Can use JavaScript libraries. **Compiles to JavaScript**.

    1. Benefits over JS:
        - More **predictable** due to static typing
        - **Scales** better for larger apps due to modules, namespaces and stronger OOP
        - Some **errors** are caught at compile-time instead of at run-time due to compilation step.

    1. **Installation**    
        `> npm i -g typescript` - install     
        `> tsc - v` - check fi the compiler has been installed     
        `> tsc --help` - get help      

    1. **Compiling**    
        Typescript is written in .ts files, which can't be used directly in the browser. They need to be translated to vanilla .js. Options for compiling:
        - Terminal `> tsc main.ts` (where main.ts is the name of the file to be compiled)
        - Visual Studio or another IDE
        - Automated task runners such as gulp

 2. Environment Setup
    1. VS Code - a tool developed by Microsoft for TypeScript and .NET Core development. Prerequisites:
        - Configure files: tscofig.json, launch.json, tasks.json
        - Have globally installed **typescript** and **tslint**
        - Extenstions for TypeScript: TSLint, Typings auto install, Auto Import, Debugger for Chrome

    1. ### tsconfig.json    

        Specifies the way .ts files are compiled.   
        Auto generate with **`> tsc --init`**

         ```json
        {
            "compilerOptions": {
                "target": "es5", // Sets the output JS's version
                "module": "commonjs", // Sets the module loader
                "outDir": "dist", // Sets output JS files' location
                "sourceMap": true, // Allows debugging
                "noEmitOnError": true // Do not compile if errors
            }
        }
        ```

    1. ### launch.json

        Specifies the way VS Code should launch the application.    
        Auto generate with VS Code.

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

    1. Running the code
        - Run `Ctrl + F5`
        - Debug `F5`
        - Debug windows: local variables, watch list, call stack, breakpoints (can be line or column, have settings like in Visual Studio)

 3. Static Typing

    = Can declare types of variables. The compiler makes sure they are assigned values of the specified type. If the type declaration is omitted, the compiler will infer it from the code. Similar to C#, there are **basic types** (predefined in the language) and **complex types** (created by the developer).

     ```ts
    let firstName: string = "Pesho";
    let age: number = 20;

    let firstSentence: string = `My name is ${firstName}.`;
    let lastSentence: string = `I am ${age} years old.`;

    function printTwoSentences(one: string, two: string) {
    console.log(`${one} ${two}`);
    }

    printTwoSentences(firstSentence, lastSentence);
    // My name is  Pesho. I am 20 years old.
    ```

 4. Basic Types
    1. **Numbers** - as in JavaScript, all numbers int TypeScript are **floating point values**. The language is **type-safe** - once set/inferred, the type cannot be changed.

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

    1. **Strings** - double quotes ("), single quotes ('), backtick (`) template strings to span multiple lines and embed expressions/variables.

    1. **Arrays**

        Basic type: `let list: number[] = [1, 2, 3];`

        Complex generic type (not inferred): `let list: Array&ltnumber&gt = [1, 2, 3];` (means: `Array<number>`)
    
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

    1. Null and undefined - same as in JavaScript, not very useful on their own. They are subtypes of all other types. If `strictNullChecks` flag is used during compilation null number will not compile.

         ```ts
        let u: undefined = undefined;
        let n: null = null;
        let num: number = null; // won't compile if strictNullChecks
        ```

 5. Other Basic Types
    1. Any - used to disable type-checking for a given variable or function, when we are not sure of the type or when a variable comes from an external library. Can be used on arrays. **Bad practice**, avoid using. 

         ```ts
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean

        let list: any[] = [1, true, "Pesho"];
        ```

    1. Unions - type that combines two types, can be used on arrays. Rarely used - somewhat **bad practice**.

         ```ts
        let example: (number | string);
        example = "Pesho"; /* OK */
        example = true; /* Error */
        example = 10; /* OK */

        let list: (number | string)[] = [1, 2, "Pesho"];
        ```

    1. Tuple - express an array where the type of a fixed number of elements is known, but their values might be different.

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

 6. Functions - both standard and arrow functions are valid
 .
## Setup and Architecture
 1. What is in the generated template
 2. VS Code Setup, Tools and the CLI
## TypeScript OOP
## Angular CLI
## Angular Lifecycle
## Components
 1. SRP in Components
 2. Template syntax & black magic
 3. Component Communication - Event raising, Variable binding
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
