1. FibonacciSeries


function fibonacciSeries(n){
  
  const fibo = [0,1]
  for(i=2;i<n;i++){
    fibo[i]= fibo[i-1] + fibo[i-2]
  }
  return fibo
}

console.log(fibonacciSeries(4))



Output:

[ 0, 1, 1, 2 ]
