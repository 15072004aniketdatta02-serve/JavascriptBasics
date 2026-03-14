/*The Call Stack is a fundamental part of the JavaScript language. It is a record-keeping structure that allows us to perform function calls. Each function call is represented as a frame on the Call Stack. This is how the JavaScript engine keeps track of which functions have been called and in what order. The JS engine uses this information to ensure execution picks back up in the right spot after a function returns.
When a JavaScript program first starts executing, the Call Stack is empty. When the first function call is made, a new frame is pushed onto the top of the Call Stack. When that function returns, its frame is popped off of the Call Stack. */
function helloworld(){ //helloworld:function
    console.log(`Hello ${typeof(helloworld)}`); //The console.log() static method outputs a message to the console.                                                //The typeof operator returns a string indicating the type of the operand's value.
}; 
helloworld(); // f:helloworld(){...}:undefined -> function❌ f:helloworld(){...}:{console.log(`Hello ${typeof(helloworld)}`)->function;}
const helloWorld = ()=>{
console.log("Hello World!");
} // Anonymous -> call stack -> console-> Hello World!
helloWorld();
function emptyFunction() {
 // Enable negative indexing in array in Javascript
//const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango'];
//console.log(fruits[-1]); // mango
//console.log(fruits[-2]); // grapes
//console.log(fruits[-3]); // banana
//console.log(fruits[-4]); // orange
//console.log(fruits[-5]); // apple
//console.log(fruits[-6]); // undefined
//console.log(fruits[-7]); // undefined
//console.log(fruits[-8]); // undefined
//console.log(fruits[-9]); // undefined
//console.log(fruits[-10]); // undefined
//console.log(fruits[-11]); // undefined
//console.log(fruits[-12]); // undefined
//console.log(fruits[-13]); // undefined
//console.log(fruits[-14]); // undefined

// TS: Explicit type annotations added to all variables using `: type` syntax
let name: string = "Aniket";
const pi: number = 3.14;
let number: number = 42;          // Number
let isTrue: boolean = true;        // Boolean
let empty: null = null;            // Null
let unDefined: undefined = undefined; // Undefined — TS requires explicit `undefined` assignment for typed vars
let text: string = "Hello";        // String
let SymbolVar: symbol = Symbol();  // Symbol
let bigint: bigint = 1234567890123456789012345678901234567890n; // BigInt

console.log(typeof unDefined);
console.log(typeof empty);
console.log(typeof SymbolVar);

// TS: Object type defined using an inline interface-style type annotation
// The `greet` method is typed as a function that returns void (nothing)
let person: {
    name: string;
    age: number;
    isAdult: boolean;
    hobbies: string[];           // Array of strings — typed as string[]
    greet: () => void;           // Function type: no params, no return value
} = {
    name: 'Aniket',
    age: 21,
    isAdult: true,
    hobbies: ['Reading', 'Coding', 'Travelling'],
    greet: function (): void {
        console.log('Hello');
    }
};

console.log(person.name);
console.log(Object.getPrototypeOf(person)); // TS prefers Object.getPrototypeOf() over __proto__ (deprecated)

//Most of the data travels in the form of strings in the web.
// So, we need to convert the data into JSON format.

//Explicit Type Conversion

// TS: `num` is typed as string, `convertedNum` as number — makes intent crystal clear
let num: string = "42";
let convertedNum: number = Number(num); // Industry standard way to convert string to number
console.log(typeof num);
console.log(typeof convertedNum);
console.log(convertedNum);

let num01: string = "42a";
let convertedNum01: number = Number(num01); // Results in NaN — TS still types it as number (NaN is of type number)
console.log(typeof num01);
console.log(typeof convertedNum01);
console.log(convertedNum01);

// TS: Unary `+` operator — valid in TS, but explicit Number() is preferred for readability
let convertedNum02: number = +num;
console.log(typeof convertedNum02);
console.log(convertedNum02);

let convertedNum03: number = parseFloat(num);
console.log(typeof convertedNum03);
console.log(convertedNum03);

let convertedNum04: number = parseInt(num);
console.log(typeof convertedNum04);

//Page, Forms and Sessions
//https://www.google.co.in/events/1232435abbcd2313 -> the number at the end provides an object id in MongoDB
// We should always know the data and type of data that we are sending to the server or receiving from the server.

// TS: All three variables are typed as string — shows that different conversion methods still yield the same type
let str: string = "42";
let convertedStr: string = String(str);         // Less computation
let convertedStr01: string = str.toString();    // More computation
let convertedStr02: string = JSON.stringify(str); // More computation — note: JSON.stringify adds extra quotes around strings
console.log(typeof str);
console.log(typeof convertedStr);
console.log(typeof convertedStr01);
console.log(typeof convertedStr02);

//Operations
let result: number = ((4 + (4 - 6)) * 3);
let a: number = 10;
let b: number = 3;

let sum: number = a + b;
let difference: number = a - b;
let product: number = a * b;
let quotient: number = a / b;
let remainder: number = a % b;
let power: number = a ** b;
let dividend: number = Math.floor(a / b);
console.log(dividend);

// TS: `Math.random()` always returns a number — typed accordingly
let random: number = Math.random();
random.toExponential(2);
random.toFixed(2);
random.toPrecision(2);
console.log(random);
console.table({ sum, difference, product, quotient, remainder, power });
console.table([
    random.toExponential(2),
    random.toFixed(2),
    random.toPrecision(2)
]);

// TS: Loose vs strict equality — same behavior, but TS may warn on `==` between string and number
// Prefer `===` in TypeScript as it avoids implicit type coercion
let x: string = "42";
let y: number = 42;
// console.log(x == y);   // true  — loose equality (type coercion happens)
// console.log(x === y);  // false — strict equality (no coercion; TS may flag this as always false)
// console.log(x != y);   // false
// console.log(x !== y);  // true

// console.log(x > y);    // false
// console.log(x < y);    // false
// console.log(x >= y);   // true
// console.log(x <= y);   // true

// TS: Logical operators — `&&` returns the last truthy value, `||` returns the first truthy value
// TS types these as `string | number` union unless you assert otherwise
// console.log('42' && 42);          // 42
// console.log(typeof ('42' && 42)); // number
// console.log('42' || 42);          // '42'
// console.log(typeof ('42' || 42)); // string

//Libraries:
//JavaScript:                                       //Node.js:
//1. Math                                           //1. crypto
//2. DateTime                                       //2. http

// TS: All Math methods return `number` — fully type-safe, no annotations needed here
console.log(Math.sin(30));
console.log(Math.cos(30));
console.log(Math.tan(30));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-42));
console.log(Math.ceil(42.1));
console.log(Math.floor(42.9));
console.log(Math.round(42.5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(4));
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));     // 0-9
console.log(Math.floor(Math.random() * 10) + 1); // 1-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

// 1-6
console.log(Math.floor(Math.random() * 6) + 1);

//String
// TS: String variables — template literals and concatenation work identically in TS
let firstName: string = "Aniket";
let lastName: string = "Datta";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

let message: string = "Hello";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.charAt(0));
console.log(message.charCodeAt(0));
console.log(message.concat(" World"));
console.log(message.includes("Hello"));
console.log(message.indexOf("l"));
console.log(message.lastIndexOf("l"));
console.log(message.match(/l/g));
console.log(message.slice(0, 2) + "y");

let templateLiterals: string = `I am ${firstName} ${lastName}`;
console.log(templateLiterals);     
}
console.log(typeof(emptyFunction));
console.log(emptyFunction);
const emptyFunction2 = ()=>{
// codefile-> parse-> Syntax Tree -> walking -> Annotated Syntax Tree (with object ids) before the code runs
}// In javascript everything is an Object
console.log(typeof(helloWorld));
console.log(typeof(emptyFunction2));
console.log(typeof(helloWorld()));
// helloworld.ts + tsconfig.json -> transpilation -> helloworld.js
let temperature:any;//let temperature=undefined;
console.log(temperature); //temperature=undefined
temperature=null;
console.log(temperature);
temperature=46;
console.log(temperature);

//{codefile-> parsing -> Syntax Tree}-> Just-In-Time Compiler ->{->Byte Code-> Machine Code}-> Code Execution.
function printsVar(){
console.log("Hello");
console.table({city: "Kolkata"});
console.error("Error is there");
console.warn(Error);
}
//Error is a constructor
printsVar();
//javascript
/*A **technical factory** (or an industrial manufacturing plant) works by following a structured process that involves raw material input, processing, assembly, quality control, and final product distribution. The entire workflow is optimized using automation, robotics, and human supervision.  

### **How a Technical Factory Works**  

### **1. Raw Material Acquisition & Preprocessing**  
- Factories receive raw materials (like metals, plastics, or chemicals).  
- Preprocessing may involve cutting, melting, refining, or shaping materials into usable components.  

### **2. Production & Assembly Line**  
- The **assembly line** consists of stations where specific tasks are performed in sequence.  
- **Automation & Robotics:** Many modern factories use robots for precision tasks (e.g., welding, painting, packaging).  
- **CNC Machines & 3D Printing:** These are used for precision machining and custom manufacturing.  

### **3. Quality Control & Testing**  
- Quality checks are done at various stages to ensure defect-free products.  
- Methods include **visual inspection, sensors, and AI-driven anomaly detection.**  

### **4. Packaging & Logistics**  
- Once products pass quality checks, they are **packaged, labeled, and prepared for shipment.**  
- **IoT and AI-based tracking** ensure real-time monitoring of supply chains.  

### **5. Maintenance & Optimization**  
- Regular maintenance of machines ensures smooth operations.  
- **Predictive maintenance (AI/ML-based)** helps avoid sudden breakdowns.  

### **Types of Technical Factories**  
1. **Automobile Factories** (e.g., Tesla, Toyota)  
2. **Electronics Manufacturing** (e.g., Foxconn for Apple)  
3. **Textile & Garment Factories**  
4. **Food Processing Plants** (e.g., Amul, Nestlé)  
5. **AI & Chip Manufacturing** (e.g., TSMC, Intel)  

In a factory , there is a manager  and a team of sales person say and the factory has production unit and workshop to build items which has many sub units(mini factories) and after production , the item is delivered for packaging and then logistics and finally supplied to the customer.
The customer mostly interacts with the sales person.
*/ 
// node js is the manager of Javascript Ecosystem where Javascript Ecosystem is like a factory, 
// libuv is the sales person , If express is the Sales person , 
// express knows how to deal with user requests and handle User Requests,
// Some requests are directed to already ready work ,some library,some protocol , some form of code and codebase which is already ready or some module
//  and ther are various smaller units of the production line and assembly which are compared to functions in Javascript.
// The APIs are the external modules and functions required by the production line ,
//  for example leather work which is not a part of wood factory workshop is obtained from outside.
/*The Showroom and Custom Code with Databases
A showroom displays finished products to potential customers, organized to highlight features and benefits in an accessible, appealing manner. The showroom experience is carefully crafted to demonstrate how products solve customer problems and fit into their environments. Behind this polished presentation lies substantial infrastructure - storage systems, inventory management, and product information databases that support the customer-facing display.
In the JavaScript ecosystem, custom application code combined with database systems serves a similar purpose to the showroom and its supporting infrastructure. Custom code creates the user interface and business logic that directly interacts with users, comparable to the carefully arranged displays in a showroom. Databases store, organize, and retrieve the information that powers these interactions, similar to the inventory systems behind a physical showroom.
MongoDB, which uses V8 (the same JavaScript engine that powers Node.js) and stores data in JSON-like structures, represents a particularly harmonious database choice for JavaScript applications1. This integration creates a consistent developer experience from data storage through application logic to user interface, similar to how successful showrooms maintain visual and functional consistency across different product lines. */
/*Raw Data Provider is the Database */
// class MessagePrinter {
//     constructor(message:string) {
//         this.message = message;
//     }

//     printMessage() {
//         console.log(this.message);
//     }
// }

// class Application {
//     constructor(who) {
//         this.messagePrinter: = new MessagePrinter(`Hello, World! ${who}`);
//     }

//     run() {
//         this.messagePrinter.printMessage();
//     }
// }

// const app = new Application("user");
// app.run();

// # JavaScript Object-Oriented Programming: Hello World Example Documentation

// ## Overview

// This code demonstrates a simple implementation of Object-Oriented Programming (OOP) principles in JavaScript. It creates a basic application that prints "Hello, World!" to the console using a class-based architecture.

// ## Code Structure

// The code is structured around two main classes:

// 1. `MessagePrinter` - Responsible for storing and displaying messages
// 2. `Application` - The main application class that uses MessagePrinter

// ## Detailed Explanation

// ### MessagePrinter Class

// ```javascript
// class MessagePrinter {
//     constructor(message) {
//         this.message = message;
//     }

//     printMessage() {
//         console.log(this.message);
//     }
// }
// ```

// - **Class Definition**: `MessagePrinter` is defined as a JavaScript class, which serves as a blueprint for creating objects.
// - **Constructor Method**: The `constructor` method is called automatically when an instance of the class is created.
//   - It takes a `message` parameter and stores it as a property of the instance using `this.message`.
//   - `this` refers to the current instance of the class being created.
// - **Instance Method**: `printMessage()` is an instance method that logs the stored message to the console.
//   - It accesses the instance property using `this.message`.

// ### Application Class

// ```javascript
// class Application {
//     constructor() {
//         this.messagePrinter = new MessagePrinter('Hello, World!');
//     }

//     run() {
//         this.messagePrinter.printMessage();
//     }
// }
// ```

// - **Class Definition**: `Application` represents the main application.
// - **Constructor Method**: Creates and initializes a new `MessagePrinter` instance with the message "Hello, World!".
//   - This demonstrates composition - the Application class contains a MessagePrinter object.
// - **Instance Method**: `run()` executes the application's functionality by calling the `printMessage()` method on the MessagePrinter instance.

// ### Application Instantiation and Execution

// ```javascript
// const app = new Application();
// app.run();
// ```

// - **Object Instantiation**: Creates a new instance of the `Application` class and assigns it to the `app` constant.
// - **Method Invocation**: Calls the `run()` method on the application instance, which triggers the message printing.

// ## OOP Concepts Demonstrated

// 1. **Encapsulation**: Both classes encapsulate their data (message) and behavior (methods) together.
// 2. **Abstraction**: The `Application` class abstracts the details of how messages are printed.
// 3. **Composition**: The `Application` class contains (composes) a `MessagePrinter` object.
// 4. **Single Responsibility Principle**: Each class has a single, well-defined responsibility.

// ## Relation to the Factory Metaphor

// In the context of the factory metaphor described in the comments:

// - The `Application` class acts as the "manager" that coordinates operations.
// - The `MessagePrinter` class represents a specialized "production unit" within the factory.
// - The creation and usage of objects mirrors how a factory creates and processes products.
// - The message string can be seen as the "raw material" that gets processed and output.

// This simple example establishes the foundation for more complex applications where additional classes could represent different components of the system, just as a factory consists of various specialized departments working together to create a final product.

/*# JavaScript Object-Oriented Programming: Hello World Example Documentation

## Overview

This code demonstrates a simple implementation of Object-Oriented Programming (OOP) principles in JavaScript. It creates a basic application that prints "Hello, World!" to the console using a class-based architecture.

## Code Structure

The code is structured around two main classes:

1. `MessagePrinter` - Responsible for storing and displaying messages
2. `Application` - The main application class that uses MessagePrinter

## Detailed Explanation

### MessagePrinter Class

```javascript
class MessagePrinter {
    constructor(message) {
        this.message = message;
    }

    printMessage() {
        console.log(this.message);
    }
}
```

- **Class Definition**: `MessagePrinter` is defined as a JavaScript class, which serves as a blueprint for creating objects.
- **Constructor Method**: The `constructor` method is called automatically when an instance of the class is created.
  - It takes a `message` parameter and stores it as a property of the instance using `this.message`.
  - `this` refers to the current instance of the class being created.
- **Instance Method**: `printMessage()` is an instance method that logs the stored message to the console.
  - It accesses the instance property using `this.message`.

### Application Class

```javascript
class Application {
    constructor() {
        this.messagePrinter = new MessagePrinter('Hello, World!');
    }

    run() {
        this.messagePrinter.printMessage();
    }
}
```

- **Class Definition**: `Application` represents the main application.
- **Constructor Method**: Creates and initializes a new `MessagePrinter` instance with the message "Hello, World!".
  - This demonstrates composition - the Application class contains a MessagePrinter object.
- **Instance Method**: `run()` executes the application's functionality by calling the `printMessage()` method on the MessagePrinter instance.

### Application Instantiation and Execution

```javascript
const app = new Application();
app.run();
```

- **Object Instantiation**: Creates a new instance of the `Application` class and assigns it to the `app` constant.
- **Method Invocation**: Calls the `run()` method on the application instance, which triggers the message printing.

## OOP Concepts Demonstrated

1. **Encapsulation**: Both classes encapsulate their data (message) and behavior (methods) together.
2. **Abstraction**: The `Application` class abstracts the details of how messages are printed.
3. **Composition**: The `Application` class contains (composes) a `MessagePrinter` object.
4. **Single Responsibility Principle**: Each class has a single, well-defined responsibility.

## Relation to the Factory Metaphor

In the context of the factory metaphor described in the comments:

- The `Application` class acts as the "manager" that coordinates operations.
- The `MessagePrinter` class represents a specialized "production unit" within the factory.
- The creation and usage of objects mirrors how a factory creates and processes products.
- The message string can be seen as the "raw material" that gets processed and output.

This simple example establishes the foundation for more complex applications where additional classes could represent different components of the system, just as a factory consists of various specialized departments working together to create a final product.*/
/*# JavaScript Object-Oriented Programming: Hello World Example Documentation

## Overview

This code demonstrates a simple implementation of Object-Oriented Programming (OOP) principles in JavaScript. It creates a basic application that prints "Hello, World!" to the console using a class-based architecture.

## Code Structure

The code is structured around two main classes:

1. `MessagePrinter` - Responsible for storing and displaying messages
2. `Application` - The main application class that uses MessagePrinter

## Detailed Explanation

### MessagePrinter Class

```javascript
class MessagePrinter {
    constructor(message) {
        this.message = message;
    }

    printMessage() {
        console.log(this.message);
    }
}
```

- **Class Definition**: `MessagePrinter` is defined as a JavaScript class, which serves as a blueprint for creating objects.
- **Constructor Method**: The `constructor` method is called automatically when an instance of the class is created.
  - It takes a `message` parameter and stores it as a property of the instance using `this.message`.
  - `this` refers to the current instance of the class being created.
- **Instance Method**: `printMessage()` is an instance method that logs the stored message to the console.
  - It accesses the instance property using `this.message`.

### Application Class

```javascript
class Application {
    constructor() {
        this.messagePrinter = new MessagePrinter('Hello, World!');
    }

    run() {
        this.messagePrinter.printMessage();
    }
}
```

- **Class Definition**: `Application` represents the main application.
- **Constructor Method**: Creates and initializes a new `MessagePrinter` instance with the message "Hello, World!".
  - This demonstrates composition - the Application class contains a MessagePrinter object.
- **Instance Method**: `run()` executes the application's functionality by calling the `printMessage()` method on the MessagePrinter instance.

### Application Instantiation and Execution

```javascript
const app = new Application();
app.run();
```

- **Object Instantiation**: Creates a new instance of the `Application` class and assigns it to the `app` constant.
- **Method Invocation**: Calls the `run()` method on the application instance, which triggers the message printing.

## OOP Concepts Demonstrated

1. **Encapsulation**: Both classes encapsulate their data (message) and behavior (methods) together.
2. **Abstraction**: The `Application` class abstracts the details of how messages are printed.
3. **Composition**: The `Application` class contains (composes) a `MessagePrinter` object.
4. **Single Responsibility Principle**: Each class has a single, well-defined responsibility.

## Relation to the Factory Metaphor

In the context of the factory metaphor described in the comments:

- The `Application` class acts as the "manager" that coordinates operations.
- The `MessagePrinter` class represents a specialized "production unit" within the factory.
- The creation and usage of objects mirrors how a factory creates and processes products.
- The message string can be seen as the "raw material" that gets processed and output.

This simple example establishes the foundation for more complex applications where additional classes could represent different components of the system, just as a factory consists of various specialized departments working together to create a final product. */


