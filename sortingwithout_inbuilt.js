//SORTING without Inbuilt methods ,Array of object 1st char to uppercase chage

const inputArray = [
    { name: "apple", value: 5 },
    { name: "orange", value: 20 },
    { name: "pear", value: 15 },
    { name: "kiwi", value: 10 },
    { name: "melon", value: 25 },
    { name: "banana", value: 8 }
];

function data(arr){
  
  let n = inputArray.length
  
  for(i=0;i<n-1;i++){
    for(j=0;j< n-i-1;j++){
      
    if(arr[j].value < arr[j+1].value){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
    
    }
    
  }
  return arr
}

console.log(data)

// 1st char uppercase

console.log(inputArray[1].name[0].toUpperCase()+inputArray[1].name.slice(1,inputArray[1].name.length))


// sorting and 1st char uppercase



const  data = inputArray.sort((a,b) => b.value - a.value).map((data,index)=>{
  let temp = data.name;
  let string = ""
  
  for(i=0;i<temp.length;i++){
    if(i === 0){
      string += temp[i].toUpperCase()
    }else{
      string += temp[i]
    }
  }
  return {name:string,value:data.value}

})

console.log(data(inputArray))
