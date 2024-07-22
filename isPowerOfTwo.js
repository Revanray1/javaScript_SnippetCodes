1. find the given bnumber is  Power O fTwo

function isPowerOfTwo(n){
      if(n<1){
        return false
      }
      while(n>1){
        if(n%2 !==0){
          return false
        }
        n =n/2
      }
      return true
}


console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(7)) // false
console.log(isPowerOfTwo(8)) // true


output :
true || false
