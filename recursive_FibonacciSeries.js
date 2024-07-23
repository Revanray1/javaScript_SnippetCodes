function recursiveFibonacciSeries(n){

  if(n<2){
    return n
  }
  return recursiveFibonacciSeries(n-1) + recursiveFibonacciSeries(n-2)
  }

console.log(recursiveFibonacciSeries(4))



Output :
3
