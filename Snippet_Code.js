// Snippet Codes

1. Printing num based on rows
let a = 5
let count = 0
let row = 0;
let column = 0

for(i=0;i<=a;i++){
  let str = "  "
  for(j= 0;j<a;j++){
    count++;
    str = str+count+" "
  }
  console.log(str)
}

output : 
         1 2  3  4  5 
        6  7  8  9  10 
        11 12 13 14 15 
        16 17 18 19 20 
        21 22 23 24 25 
        26 27 28 29 30 

______________________________________________________________

2. Spiral Matrix

let a=5;
let o=new Array(a).fill().map(()=>new Array(a).fill())
let n=1
let w=true
while(w){
  let s = a
  let sideCount=  Math.ceil(s/2);
    for(z=0;z<sideCount;z++){
    
      let p1=[[0+z,z],[0,s-1-z]]
      for(let i=p1[0][1]; i<=p1[1][1]; i++){
        // console.log(p1[0][0],i,n)
        o[p1[0][0]][i]=n;
        n+=1;
      }
    
      let p2=[[0,0+z],[0,s-1-z]]
        for(let i= p2[0][1];i<p2[1][1];i++){
          // console.log(i+1,p2[1][1],n)
        o[i+1][p2[1][1]]= n;
        n+=1
      }
     
        
      let p3=[[0,s-1-z],[0,0+z]]
        for(let i= p3[0][1];i>p3[1][1];i--){
        // console.log(p3[0][1],i-1,n)
        o[p3[0][1]][i-1]= n;
        n+=1
      }
    
      
      let p4=[[0+z,s-2-z],[0,0+z]]
        for(let i= p4[0][1];i>p4[1][1];i--){
        // console.log(i,p4[0][0]+z,n)
        o[i][p4[0][0]]= n;
        n+=1
    
      }
    }
  
 
  w=false
}
o.forEach((data)=>{
  console.log(data.join(" "))
})


output : 
         1 2  3 4 5
        16 17 18 19 6
        15 24 25 20 7
        14 23 22 21 8
        13 12 11 10 9 

________________________________________________________________________________________
3. 
input 5
V
VW
WXX
XYYY
YZZZZ

// Ascii value

// let char="abc"
// // let ascii = char.charCodeAt(0)  =>from string to num 
// let charValue= 86
// let ascii = String.fromCharCode(charValue); => from number to sring 

// console.log(ascii)

let a = 5
let initialAlphabet = ""
let Alphabet =""
let code = 86

for(i=0;i<a;i++){
initialAlphabet = String.fromCharCode(code+i)
Alphabet = String.fromCharCode(code+i-1)

  let str =""
  
      for(j=0;j<=i;j++){
          if(j=== 0 ){
            if(i === 0){
              str = initialAlphabet
            }else{
            str += Alphabet+" "
            }

          }else{
            
               str += String.fromCharCode(code+i)+" "
          }
      }
 
  console.log(str)
  
}

Output:

V
V W 
W X X 
X Y Y Y 
Y Z Z Z Z 
________________________________________________________________________________________
4. 
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Explanation: There are no three consecutive odds.
Output: false

Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Explanation: [5,7,23] are three consecutive odds.
Output: true


var threeConsecutiveOdds = function(arr) {

let allarray = []
for(i=0;i<arr.length;i++){

  flag= true;
  DummyArray= [];
  loop = i+2;
  
    for(j=i;j<=loop;j++){
        if(DummyArray.length < 3 && flag && arr[j]){
          if(arr[j] % 2 !== 0 ){
            DummyArray.push(arr[j])
          }else{
            falg=false
            DummyArray = []
            break;
          
          }
        }
    }
    if(DummyArray.length === 3){
      allarray.push(`[${DummyArray}] are ${DummyArray.length} consecutive Odds`)
    }
    
}
if(allarray.length !== 0){
    return true
//   allarray.forEach((data)=> console.log(data))
}else{
    return false
  console.log("There are no three consecutive odds.")
}

};
threeConsecutiveOdds([1,2,34,3,4,5,7,23,5,12])

Output:

false || true





