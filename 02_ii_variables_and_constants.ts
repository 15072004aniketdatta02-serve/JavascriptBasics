function understandingOperators()
{
  //BASIC OPERATIONS
  let addition:number= 4+5; //Number('4')+Number('5');
  let subtract:number = 9-3;
  let multiplication:number = 9*3;
  let division:number = 9/3;
  let modulo:number=9%2;
  let exponent:number=2**8;
  let xor:number= exponent^exponent^multiplication;
  console.log(`value of Bitwise XOR is ${xor}`);
  // Assignment and increament/decreament operators
   let myScore:number = 0;
   let incrScore:number = myScore++;
   let increamentedScore:number=++myScore;
   let decrScore:number=myScore--;
   let decreamentedScore:number=--myScore;
   let credits=myScore+2;
   credits--;
  console.table({addition,subtract,multiplication,division,modulo,exponent,incrScore,decrScore,increamentedScore,decreamentedScore,credits});
  let score:number=102
  let bonus:number=25
  let totalScore:number=score+bonus;
  console.log(totalScore);
  //comparison operation:
  let num1:number = 3;
  let num2:number = 3;
  let num3:number = 6;
  console.log(num2>num1);//false
  console.log(num3==num1);//false
  console.log(num1==num2);//true
  //!(!)
  //!(xor)=xnor
//   let xnor:boolean = !(score^score);
//   console.log(`SCORE XNOR SCORE IS ${xnor}`);
  console.log(Object(num1)==Object(num2));//false
  console.log(num1!=num3);//true
  console.log(num1===(num3-num2));//true
  //logical Operations
  console.log(num2>num1 || num3==num1+num2);//true
  console.log(num2>num1 && num3==num1+num2); //false 
  let isLoggedIn:boolean = true;
  let isPaid:boolean =false;
  console.log(isLoggedIn && !isPaid); //true
  console.log(isLoggedIn && isPaid); //false
  //check if the user is emailUser or google user
  let isEmailUser = true;
  let isGoogleUser = !true;
  console.log(isEmailUser || isGoogleUser);//true
  //Assignment Operator
  let temperature=null;
  temperature=35.5;
  num3+=2;
  console.log(`temperature value is ${temperature} degree celsius`);
  let temperatureInFahrenheit: number= (temperature*1.8)+32;
  temperatureInFahrenheit /=1.00;
  console.log(`Temperature in fahrenheit:${temperatureInFahrenheit}`);
  console.log(`increamneted num3 by 2 is ${num3}`);
  console.log(2/2*3%2+(2-1));// braces for oppreced
 console.log(`Input new Temperature in fahrenheit:${temperatureInFahrenheit}`);
}
understandingOperators();