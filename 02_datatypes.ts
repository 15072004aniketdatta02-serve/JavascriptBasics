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
let name="letslearn.dev";
let isLoggedIn = false;
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
}
dataTypes();