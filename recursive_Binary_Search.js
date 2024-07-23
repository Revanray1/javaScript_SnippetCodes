1.recursiveBinarySearch

function recursiveBinarySearch(arr,target){
  return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
  if(leftIndex > rightIndex){
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex)/2)
  if(target === arr[middleIndex]){
    return middleIndex
  }
  if(target < arr[middleIndex]){
    return search(arr,target,leftIndex,middleIndex-1)
  }else{
   return search(arr,target,middleIndex+1,rightIndex) 
  }
}

  

console.log(recursiveBinarySearch([ 0, 1, 3, 4 ,7 ,9 ,12],15) )



Output:

-1
