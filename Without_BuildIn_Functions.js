without Inbuiit Functions

// MAP and FILTER

const data = [{name:"Ayush", age:22, course:"BSC"},{name:"Chal", age:24, course:"Maths"}
,{name:"deloti", age:21, course:"BAC"},{name:"agarkhan", age:27, course:"B.com"}]

function mapData(data, callBack){
  let temp_array =[];
  
  for(i=0;i<data.length;i++){
    if(callBack(data[i],i,data)){
    temp_array.push(data[i])
    }
  }
  return temp_array
  
}

const callBack = (d)=>( d.course !== "BSC") // here we can use what thecondition required -> map filter

const result = mapData(data,callBack)

console.log(result)
