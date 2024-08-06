//GroupAnagrams

function groupAnagrams(data){
  let obj = {}
          data.forEach((val)=>{
              const uniqueKey = val.split("").sort().join("");
              if(obj.hasOwnProperty(uniqueKey)){
                let array =  obj[uniqueKey]
                array.push(val)
                obj[uniqueKey] = array
              }else{
                  obj[uniqueKey] = [val] 
              }
          })

  return Object.values(obj)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

____________________________________________________________________________________
// ANOTHER METHOD

function groupAnagrams(data){

let obj = new Map()
 
    for(let val of data){
      const uniqueKey = val.split("").sort().join("");
        if(!obj.has(uniqueKey)){
          obj.set(uniqueKey,[])
        }
        obj.get(uniqueKey).push(val)
    
      }

  return Array.from(obj.values())
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
____________________________________________________________________________________


Output:

[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
