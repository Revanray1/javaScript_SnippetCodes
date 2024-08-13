//longestSubstringwithoutRepeatedhar.js

function findString(s){
  
  const charSet = new Set()
  let start =0;
  let maxLength = 0;
  let startIndex=0
  
  for(let end=0;end<s.length;end++){
  
    while(charSet.has(s[end])){
      charSet.delete(s[start])
      start++
    }
    
    charSet.add(s[end])

    if(maxLength < (end-start+1)){
     
      maxLength = end-start+1;
      startIndex= start
      
    }
  }
  // console.log(maxLength,startIndex)
  // console.log(s.substring(startIndex,startIndex+maxLength))
  return {length:maxLength,string:s.substring(startIndex,startIndex+maxLength)}
  
}

console.log(findString("abcabcdbbfghy"))

____________________________________________________________
OUTPUT:

{ length: 5, string: 'bfghy' }
