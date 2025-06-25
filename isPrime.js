1. function to find Prime num or not 
function isPrime(n){
      if(n < 2){
        return false
      }

      for(i= 2; i <n;i++){
          if(n % i === 0) {
            return false
          }
      }
      
      return true
}

console.log(isPrime(2)) // true
console.log(isPrime(5))  // true
console.log(isPrime(7)) // true
console.log(isPrime(8)) // false

output :
true || false
_____________________________________________________________________________________________

// for timeComplexity
// function isPrime(n){
//       if(n < 2){
//         return false
//       }

//       for(i= 2; i <= Math.sqrt(n);i++){
//           if(n % i === 0) {
//             return false
//           }
//       }
      
//       return true
// }
______________________________________________________________________________________________________


// prime in range

let a = 2;
let b = 15;

isPrimeNumbers(a,b)

function isPrime(num){
  if(num<2) return false;
  for(let i =2; i<= Math.sqrt(num);i++){
    if(num % i === 0) return false
  }
  return true
}
function  isPrimeNumbers(start,end){
  for(let i=start;i<=end;i++){
    if(isPrime(i)){
      console.log(i)
    }
  }
}


Output:

2
3
5
7
11
13
