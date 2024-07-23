1. recursiveFactorial

function recursiveFactorial(n){
  
  if(n === 0){
   return 1 
  }
  return n* (recursiveFactorial(n-1))
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))


output :-
1
1
120


Explaination

recursiveFactorial(3)       	3× ?    3×  ?	
recursiveFactorial(2)	        2× ?    2×  ?	
recursiveFactorial(1)	        1× ?    1×  ?	
recursiveFactorial(0)	       Return    1	1
Unwind recursiveFactorial(1)	1×1    1×1	1
Unwind recursiveFactorial(2)	2×1    2×1	2
Unwind recursiveFactorial(3)	3×2    3×2	6
