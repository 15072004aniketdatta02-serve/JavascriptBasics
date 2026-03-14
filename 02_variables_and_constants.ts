function PORTADDRESS() {
  const PORT: number=5000;console.log(PORT);
  for(var i:number=0;i<=10;i++){
  console.log(`Value of i at position ${i} is ${i}`);
  }
  console.log(i)
  for(let i1:number=0;i1<=10;i1++){
  console.log(`Value of i1 at position ${i1} is ${i1}`);
  console.log(i1);
  }
  let i1=undefined;
  console.log(i1);
  //understand
  //typeerror,referenceError-> not defined
  const userName:string="aniketdattadotstudy";
  // userName="aniketdotlearn"; //cannot assign to userName because this is a constant
  console.log(userName);
}
PORTADDRESS();
function add(parameterOne:number,parameterTwo:number):number{
  // process.stdout.write("hello World!");
//   process.stdout.read(a);  
return parameterOne+parameterTwo;

//first return statement is executed

}
console.log(add(2,1));
