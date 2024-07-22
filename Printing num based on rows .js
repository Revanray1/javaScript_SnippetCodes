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
