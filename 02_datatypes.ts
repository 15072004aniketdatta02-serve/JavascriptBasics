function dataTypes(){
    console.log("String");
    /* 
    
    String
    Number
    BigInteger
    Float
    undefined
//  not defined is not defined nothing to do with undefined (RefError)
    null
        
//    
    Objects
    Arrays
    Boolean

    
    
    Symbol
    */

var rank:number=55;
let score:number = 102;
console.log(score);
//score stores the reference to the memory address where 102 is stored
let hex1:string='0xb10101100';
let hex2:number=0xb10101100;
console.log(Object(hex1));
console.log();
console.log(rank);
console.log(Object(hex2));
// console.log(hex1==hex2);//true //bad practice
// console.log(hex1===hex2);//false //bad practice
// strings
// let name="letslearn.dev";
// let isLoggedIn = false;
//object
let teaTypes:string[]=["masala Tea","Grean Tea","Oolong Tea","Spicy Tea","Lemon Tea","Ginger Tea","Milk Tea","Halmari Tea"]

let ratings:Record<string,number>=
{   "Milk Tea":4.8,
    "Halmari Tea": 5.0,
    "masala Tea":3,
    "Grean Tea":3.2,
    "Oolong Tea":3.8,
    "Spicy Tea":1.3,
    "Lemon Tea":4.0,
    "Ginger Tea":4.6, 
}
// Sort teas in descending order of ratings
const sortedTeas: string[] = [...teaTypes].sort(
  (a: string, b: string): number => ratings[b] - ratings[a]
);

// Print results
sortedTeas.forEach((tea: string): void => {
  console.log(`${tea}: ${ratings[tea]}`);
});
//objects
let User={firstName:"Aniket",lastName:"Datta"}
//Date 
console.log(Date.now());
console.log(Boolean(0));//false
console.log(Boolean(1));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(User));//true
//assignment
const getScore:number=score;
console.log(getScore);
//types: Primitive Data Types and Non-Primitive Data Types
//Primitive (most basic form) Data Types : Special data types in Javascript and in typescript environment that are immutable in nature, (values can not be changed here only reassigned).These data types store by value copy when assigned not referenced.
//The primitives live in the call stack and not the heap. String , Boolean ,Number , null, undefined, Symbol are primitive data types.
/**
 *
 * TypeScript has 7 primitive types (inherited from JavaScript):
 *   1. number
 *   2. string
 *   3. boolean
 *   4. null
 *   5. undefined
 *   6. symbol
 *   7. bigint
 *
 * Primitives are:
 *   - Immutable       → you cannot change the value itself, only reassign the variable
 *   - Stored by value → copied when assigned, not referenced
 *   - Stack allocated → live in the call stack, not the heap (unlike objects)
 */

// =============================================================================
// 1. NUMBER
// =============================================================================
// TS `number` covers ALL numeric forms: integers, floats, hex, octal, binary, NaN, Infinity
// There is NO separate `int` or `float` type in TypeScript (unlike Java/C#)

let integer   : number = 42;
let float     : number = 3.14;
let negative  : number = -100;
let hex       : number = 0xFF;        // 255 in decimal — hexadecimal literal
let octal     : number = 0o77;        // 63  in decimal — octal literal
let binary    : number = 0b1010;      // 10  in decimal — binary literal
let scientific: number = 2.5e4;       // 25000           — scientific notation
let separator : number = 1_000_000;   // 1000000         — numeric separator (readability only, TS 2.7+)

// Special number values — these are VALID `number` types in TS
let notANumber: number = NaN;         // result of invalid math e.g. Number("abc")
let infinite  : number = Infinity;    // result of 1/0
let negInf    : number = -Infinity;   // result of -1/0

console.log("--- NUMBER ---");
console.log(integer, float, hex, octal, binary, scientific, separator);
console.log(notANumber, infinite, negInf);

// NaN is the only value in JS/TS that is NOT equal to itself
// console.log(NaN === NaN);             // false — use Number.isNaN() instead
console.log(Number.isNaN(NaN));       // true  — correct way to check NaN
console.log(Number.isNaN("hello"));   // false — isNaN() coerces, Number.isNaN() does NOT

// Number range limits
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991  (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);        // largest representable number ~1.8e+308
console.log(Number.EPSILON);          // smallest difference between two numbers ~2.2e-16

// Floating point precision gotcha — famous JS/TS quirk
console.log(0.1 + 0.2);              // 0.30000000000000004 — NOT 0.3 !
console.log(0.1 + 0.2 === 0.3);      // false — floating point representation issue
// Fix: use toFixed or multiply by 100 for currency
console.log((0.1 + 0.2).toFixed(1)); // "0.3" — string, but visually correct

// Number utility methods
let n: number = 123.456;
console.log(n.toFixed(2));            // "123.46"  — rounds to 2 decimal places (returns string)
console.log(n.toPrecision(5));        // "123.46"  — total 5 significant digits (returns string)
console.log(n.toExponential(2));      // "1.23e+2" — scientific notation (returns string)
console.log(n.toString(2));           // binary string representation
console.log(n.toString(16));          // hex string representation


// =============================================================================
// 2. STRING
// =============================================================================
// Three ways to write string literals — all produce the same `string` type

let single  : string = 'Hello';        // single quotes
let double  : string = "World";        // double quotes — identical to single
let template: string = `Hello World`;  // template literal (backtick) — can span lines

// Template literals — embed expressions directly, no concatenation needed
let firstName: string = "Aniket";
let age      : number = 21;
let greeting : string = `My name is ${firstName} and I am ${age} years old.`;
// Any valid JS expression can go inside ${}
let expr     : string = `2 + 2 = ${2 + 2}`;
let ternary  : string = `I am ${age >= 18 ? "an adult" : "a minor"}`;

console.log("\n--- STRING ---");
console.log(greeting);
console.log(expr);
console.log(ternary);

// Multi-line strings — only template literals support this natively
let multiLine: string = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// String is immutable — you cannot change a character in-place
let word: string = "hello";
// word[0] = "H"; // silently fails in JS, TS may warn — strings are immutable
let fixed: string = "H" + word.slice(1); // correct way: create a new string

// Key string methods (all return NEW strings — original is unchanged)
let message: string = "  Hello, TypeScript!  ";

console.log(message.trim());                    // "Hello, TypeScript!" — removes leading/trailing spaces
console.log(message.trimStart());               // removes only leading spaces
console.log(message.trimEnd());                 // removes only trailing spaces
console.log(message.toUpperCase());             // "  HELLO, TYPESCRIPT!  "
console.log(message.toLowerCase());             // "  hello, typescript!  "
console.log(message.includes("TypeScript"));    // true  — case sensitive
console.log(message.startsWith("  Hello"));     // true
console.log(message.endsWith("!  "));           // true
console.log(message.indexOf("Script"));         // 12  — first occurrence index
console.log(message.lastIndexOf("l"));          // 6   — last occurrence index
console.log(message.replace("TypeScript", "TS")); // replaces first match
console.log(message.replaceAll("l", "L"));      // replaces ALL matches
console.log(message.slice(2, 7));               // "Hello"  — slice(start, end) end is exclusive
console.log(message.substring(2, 7));           // "Hello"  — similar to slice, no negative index
console.log(message.split(", "));               // ["  Hello", "TypeScript!  "] — returns string[]
console.log(message.padStart(25, "*"));         // pads from start to reach length 25
console.log(message.padEnd(25, "*"));           // pads from end
console.log("ha".repeat(3));                    // "hahaha"
console.log(message.charAt(2));                 // "H"  — char at index
console.log(message.charCodeAt(2));             // 72   — UTF-16 code unit
console.log(String.fromCharCode(72));           // "H"  — reverse of charCodeAt

// String to number conversions
console.log(Number("42"));       // 42    — preferred
console.log(parseInt("42px"));   // 42    — stops at first non-numeric char
console.log(parseFloat("3.14x"));// 3.14
console.log(+"42");               // 42    — unary + operator


// =============================================================================
// 3. BOOLEAN
// =============================================================================
// Only two values: true or false — the foundation of all conditional logic

let isLoggedIn : boolean = true;
let hasAccess  : boolean = false;

console.log("\n--- BOOLEAN ---");
console.log(isLoggedIn, hasAccess);
console.log(typeof isLoggedIn); // "boolean"

// Boolean() — explicit conversion, shows what JS considers truthy/falsy
// FALSY values — these all convert to false:
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false — empty string
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean(false));      // false
// Every other value is TRUTHY — including:
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true  — even empty array!
console.log(Boolean({}));         // true  — even empty object!
console.log(Boolean(-1));         // true  — any non-zero number

// Short-circuit evaluation — common patterns
let username: string | null = null;
let displayName: string = username || "Guest";  // "Guest" — || returns first truthy value
console.log(displayName);

let user: string = "Aniket";
let name: string  = user && user.toUpperCase(); // "ANIKET" — && returns last truthy or first falsy
console.log(name);

// Nullish coalescing ?? — only falls back on null/undefined (NOT on 0 or "")
let count: number | null = 0;
console.log(count || 10);   // 10    — wrong! 0 is falsy so it falls back
console.log(count ?? 10);   // 0     — correct! 0 is not null/undefined


// =============================================================================
// 4. NULL
// =============================================================================
// `null` = intentional absence of a value — YOU explicitly set it
// It means: "this variable exists, but has no value right now"

let selectedUser: string | null = null; // TS: `string | null` union type
console.log("\n--- NULL ---");
console.log(selectedUser);          // null
console.log(typeof null);           // "object" — famous JS bug, kept for legacy reasons
                                    // null is NOT an object — typeof null is just a known quirk

// null is only loosely equal to undefined, strictly unequal to everything else
console.log(null == undefined);     // true  — loose equality (type coercion)
console.log(null === undefined);    // false — strict equality (no coercion)
console.log(null == 0);             // false
console.log(null == false);         // false
console.log(null == "");            // false

// Optional chaining ?. — safe navigation when a value might be null
let maybeUser: { name: string } | null = null;
// console.log(maybeUser?.name);       // undefined — does NOT throw, safe access
// console.log(maybeUser.name);     // TypeError: Cannot read properties of null

// Non-null assertion ! — tells TS "I KNOW this is not null/undefined"
// Use only when you are 100% certain — bypasses compile-time null check
function getElement(): HTMLElement | null { return null; }
// const el = getElement()!; // asserts non-null — risky if assumption is wrong


// =============================================================================
// 5. UNDEFINED
// =============================================================================
// `undefined` = a variable declared but NOT yet assigned any value
// JS automatically sets uninitialized variables to undefined

let notAssigned: undefined;          // TS: explicitly typed as undefined
let alsoUndefined: string | undefined; // typical use: optional value

console.log("\n--- UNDEFINED ---");
console.log(notAssigned);            // undefined
console.log(alsoUndefined);          // undefined
console.log(typeof undefined);       // "undefined"

// undefined vs null — when to use which:
// null    → YOU explicitly signal "no value" (intentional)
// undefined → JS signals "not yet set" (accidental or optional)

// Function with optional parameter — TS uses `undefined` for missing args
function greet(userName: string, greeting?: string): string {
    // greeting is `string | undefined` because it's optional (?)
    return `${greeting ?? "Hello"}, ${userName}!`;
}
console.log(greet("Aniket"));            // "Hello, Aniket!"
console.log(greet("Aniket", "Namaste")); // "Namaste, Aniket!"

// Object property that may not exist
type Config = {
    host   : string;
    port  ?: number;    // ?: means optional — type is `number | undefined`
};
const config: Config = { host: "localhost" };
console.log(config.port);               // undefined — key exists in type but not in object
console.log(config.port ?? 3000);       // 3000 — fallback for undefined


// =============================================================================
// 6. SYMBOL
// =============================================================================
// `symbol` = guaranteed unique value every time Symbol() is called
// Primary use: unique object property keys that never collide

let sym1: symbol = Symbol();
let sym2: symbol = Symbol();
let sym3: symbol = Symbol("description"); // optional label — for debugging only, not identity
let sym4: symbol = Symbol("description");

console.log("\n--- SYMBOL ---");
console.log(sym1 === sym2);          // false — every Symbol() call creates a unique value
console.log(sym3 === sym4);          // false — same description ≠ same symbol
console.log(sym3.toString());        // "Symbol(description)"
console.log(sym3.description);       // "description" — TS 2.9+ property

// Symbols as object keys — prevents accidental key collisions
const ID     : symbol = Symbol("id");
const VERSION: symbol = Symbol("version");

const product: { [key: symbol]: any; name: string } = {
    name   : "TypeScript Course",
    [ID]   : 101,         // symbol as computed key — never conflicts with string keys
    [VERSION]: "1.0.0"
};
console.log(product[ID]);           // 101  — access via the symbol reference
console.log(product[VERSION]);      // "1.0.0"
// Symbol keys are hidden from normal enumeration:
console.log(Object.keys(product));  // ["name"] — symbol keys NOT included
console.log(Object.getOwnPropertySymbols(product)); // [Symbol(id), Symbol(version)]

// Symbol.for() — global registry, same key returns SAME symbol
let globalSym1: symbol = Symbol.for("app.id");
let globalSym2: symbol = Symbol.for("app.id");
console.log(globalSym1 === globalSym2); // true  — unlike Symbol(), Symbol.for() reuses

// Well-known symbols — built-in symbols that customize JS behavior
// Symbol.iterator  → makes an object iterable (used in for...of)
// Symbol.toPrimitive → customizes type conversion
// Symbol.hasInstance → customizes instanceof behavior


// =============================================================================
// 7. BIGINT
// =============================================================================
// `bigint` = integers of ARBITRARY size — no upper limit like Number.MAX_SAFE_INTEGER
// Syntax: append `n` to a numeric literal, or use BigInt()

let big1: bigint = 1234567890123456789012345678901234567890n; // literal with `n`
let big2: bigint = BigInt("9999999999999999999999999999999");  // from string
let big3: bigint = BigInt(42);                                 // from regular number

console.log("\n--- BIGINT ---");
console.log(big1);
console.log(big2);
console.log(typeof big1); // "bigint"

// BigInt arithmetic — same operators as number
let a: bigint = 100n;
let b: bigint = 30n;
console.log(a + b);   // 130n
console.log(a - b);   // 70n
console.log(a * b);   // 3000n
console.log(a / b);   // 3n   — integer division, truncates (no decimals in BigInt)
console.log(a % b);   // 10n
console.log(a ** b);  // 100n^30n — exponentiation

// BigInt vs Number — CANNOT mix them in arithmetic (TS compile error)
// console.log(100n + 1);   // Error: Cannot mix BigInt and other types
// console.log(100n > 50);  // This comparison IS allowed (comparison only, not arithmetic)
console.log(100n > 50);     // true — comparison across types is fine
//nsole.log(100n == 100);   // true  — loose equality works
// console.log(100n === 100);  // false — strict: different types

// Convert between BigInt and Number — explicit conversion required
let bigNum  : bigint = 999n;
let asNumber: number = Number(bigNum);  // may lose precision if too large
let asBigInt: bigint = BigInt(42);
console.log(asNumber, asBigInt);

// When to use BigInt:
// - Cryptography (large key sizes)
// - Database IDs larger than MAX_SAFE_INTEGER
// - Financial calculations requiring exact large integers


// =============================================================================
// STORED BY VALUE — The defining trait of ALL primitives
// =============================================================================
// When you assign a primitive to another variable, the VALUE is copied.
// The two variables are completely independent — changing one does NOT affect the other.

console.log("\n--- STORED BY VALUE ---");

let original: number = 10;
let copy    : number = original; // value 10 is COPIED into `copy`
copy = 99;                       // only `copy` changes
console.log(original);           // 10 — original untouched
console.log(copy);               // 99

let str1: string = "hello";
let str2: string = str1;         // "hello" is copied
str2 = "world";
console.log(str1);               // "hello" — unaffected
console.log(str2);               // "world"

// Contrast with objects (NON-primitive) — stored by REFERENCE
let obj1 = { name: "Aniket" };
let obj2 = obj1;                 // NOT a copy — both point to SAME object in memory
obj2.name = "Rohit";
console.log(obj1.name);          // "Rohit" — obj1 was also changed! shared reference


// =============================================================================
// TYPE NARROWING WITH PRIMITIVES — TS-specific power feature
// =============================================================================
// TypeScript can narrow a union type down to a specific primitive using typeof checks

function processInput(input: string | number | boolean | null | undefined): string {
    if (typeof input === "string") {
        return `String: ${input.toUpperCase()}`; // TS knows input is string here
    } else if (typeof input === "number") {
        return `Number: ${input.toFixed(2)}`;    // TS knows input is number here
    } else if (typeof input === "boolean") {
        return `Boolean: ${input ? "YES" : "NO"}`; // TS knows input is boolean here
    } else if (input === null) {
        return "Value is null";
    } else {
        return "Value is undefined";
    }
}

console.log("\n--- TYPE NARROWING ---");
console.log(processInput("hello"));
console.log(processInput(3.14159));
console.log(processInput(true));
console.log(processInput(null));
console.log(processInput(undefined));


// =============================================================================
// LITERAL TYPES — TS-only feature, stricter than primitive types
// =============================================================================
// Instead of allowing ALL strings/numbers, you can restrict to specific VALUES

type Direction  = "north" | "south" | "east" | "west"; // only 4 valid strings
type DiceRoll   = 1 | 2 | 3 | 4 | 5 | 6;               // only 6 valid numbers
type Answer     = true | false;                          // same as boolean, but explicit

let move: Direction = "north"; // valid
// let move2: Direction = "up"; // Error: "up" is not assignable to type Direction

let roll: DiceRoll = 6;        // valid
// let roll2: DiceRoll = 7;    // Error: 7 is not assignable to type DiceRoll

console.log("\n--- LITERAL TYPES ---");
console.log(move, roll);


// =============================================================================
// SUMMARY TABLE
// =============================================================================
//
//  Type       | typeof result | Default value    | Example
// ------------|---------------|------------------|----------------------------
//  number     | "number"      | 0                | 42, 3.14, NaN, Infinity
//  string     | "string"      | ""               | "hello", `world`
//  boolean    | "boolean"     | false            | true, false
//  null       | "object" (!)  | null             | null
//  undefined  | "undefined"   | undefined        | undefined
//  symbol     | "symbol"      | Symbol()         | Symbol("id")
//  bigint     | "bigint"      | 0n               | 9007199254740992n
//
}
dataTypes();
