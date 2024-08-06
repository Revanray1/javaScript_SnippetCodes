function firstNonRepeatedString(string){
  
  let obj={}
  for(let char of string){
    obj[char] = (obj[char] || 0) +1
  }
for(const key in obj){
  if(obj.hasOwnProperty(key)){
    if(obj[key]===1){
     return key
    }
  }
}

}


console.log(firstNonRepeatedString("swiss"))

OUTPUT:
w
