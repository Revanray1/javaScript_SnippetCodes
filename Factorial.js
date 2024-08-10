//factorialNumber

function factorialNumber(num){
if(num<0){
  return  "factorial is not defined for negative values"
}
let number = 1 ;
for(i=1;i<=num;i++){
  number *=i
}
return number

}

console.log(factorialNumber(5));

___________________________________________________
Output:

120
