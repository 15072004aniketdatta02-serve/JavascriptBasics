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
