1. Pyramid  :- Word pyramid with next letter

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
