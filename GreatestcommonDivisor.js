// GreatestcommonDivisor

function GreatestcommonDivisor(a,b){
  
    if(!b){
      return a
    }
    return GreatestcommonDivisor(b,a% b)
  }

console.log(GreatestcommonDivisor(56,98))

________________________________________________________
Output:

14
