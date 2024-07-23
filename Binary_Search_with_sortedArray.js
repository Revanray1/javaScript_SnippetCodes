1. Binary Search

function binarySearch(arr,target){
  let leftIndex = 0 ,rightIndex = arr.length -1
  
  while(leftIndex <= rightIndex){
    
    let middleIndex = Math.floor((leftIndex + rightIndex)/2) 
    
        if(target === arr[middleIndex]){
          return middleIndex
        }
    
        if(target < arr[middleIndex]){
          rightIndex =  middleIndex - 1
        }else{
          leftIndex = middleIndex + 1
        }

    }
    return -1
}

  

console.log(binarySearch([ 0, 1, 3, 4 ,7 ,9 ,12],3) )


Output:

2
