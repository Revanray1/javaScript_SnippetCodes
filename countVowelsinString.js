//countVowelsinString

function countVowelsinString(string){
let Vowels="aeiouAEIOU";
let count = 0
      for(let charc of string){
          if(Vowels.includes(charc)){
            count++
          }
      }
      return count
}


console.log(countVowelsinString("hello world"))
________________________________________________________
Output:

3
