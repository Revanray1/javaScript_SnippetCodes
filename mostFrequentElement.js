
function mostFrequentElement(data){
  
let maxCount = 0;
let obj = {}
let mostFreqElement = null
          data.forEach((data)=>{
            obj[data] = (obj[data]|| 0) + 1
            
            if(obj[data] > maxCount){
              maxCount = obj[data]
              mostFreqElement = data
              
            }
            
          })
    return {maxCount,mostFreqElement}
}

console.log(mostFrequentElement([1,3,3,2,1,3,3]))

_________________________________________________________
Output:

{ maxCount: 4, mostFreqElement: 3 }
