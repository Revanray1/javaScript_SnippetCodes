const sentence = "here is the new Challenge is"

function reverseSentence(data) {
  let Data = data.split("")
  console.log(Data)
  let TempData = []
     let Count = 0 
  Data.forEach((d,i)=>{
        if(d === " "){
          TempData.push(d)
        }
        else{
          if(Data[(Data.length-1)-Count] === " "){
           Count++ 
          }
          TempData.push(Data[(Data.length-1)-Count])
          Count++
        }
      })
  console.log(data)
  console.log(TempData.join(""))
}
reverseSentence(sentence); 





// ANOTHER METHOD 

const a = "here iss the new challenge is to"

const b = a.split(" ");
console.log(b.length)

let c = "", index=a.length-1;

for(let i=0;i<b.length;i++){

    for(let j=0;j<b[i].length;j++){

        if(a[index]===" "){

            index-=1;

        }

        c+= a[index];

        index-=1;

    }
console.log(c)
    c+=" "

}

console.log(c)

OUTPUT :
Input  : here is the new Challenge is
Output : sieg ne lla hCw enehtsier eh
