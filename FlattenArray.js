// FlattenArray program 
function FlattenArray(data){
  
return data.flatMap((val)=>{
   return Array.isArray(val) ? FlattenArray(val) : val
})

}


console.log(FlattenArray([1,[2,[3,4],5],6]))
____________________________________________________

Output:

[ 1, 2, 3, 4, 5, 6 ]
