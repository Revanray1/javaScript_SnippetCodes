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


OUTPUT :
Input  : here is the new Challenge is
Output : sieg ne lla hCw enehtsier eh
