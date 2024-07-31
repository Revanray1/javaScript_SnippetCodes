// Finding a number in a sequence

function findtheNumber(arr,number){
  let actualNumber = number*(number + 1) / 2
  
  let sumNumber = arr.reduce((acc,val)=>{
    return acc +=val
  },0)

 return  Math.abs(sumNumber - actualNumber)
  
}


console.log(findtheNumber([1,4,7,13],5))
console.log(findtheNumber([1,2,4,5],5))
