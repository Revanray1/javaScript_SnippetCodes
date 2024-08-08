function largestPalindromicString(str) {
let maxlength = 0;
let start = 0;
      
    for(i=0;i<str.length;i++){
      
      for(j=i;j<str.length;j++){
         let ispalindrome = true
             for(k=0;k<(j-i+1)/2;k++){
               
               if(str[i+k] !== str[j-k]){
                 ispalindrome = false;
                 break
               }
             }
             
           if(ispalindrome && (j-i+1) > maxlength){
             start = i;
             maxlength = j-i+1
           }
       } 
       
    }
    return str.substring(start,start+maxlength) 
    // OR
    // return str.slice(start,start+maxlength)
}

console.log(largestPalindromicString("abbad"));
_____________________________________________________________________
Output:

abba

_________________________________________________________________________
// using While Loop
function largestPalindromicString(str) {
  let maxlength = 0;
  let start = 0;
  let i = 0;
  
  while (i < str.length) {
    let j = i;
    
    while (j < str.length) {
      let isPalindrome = true;
      let k = 0;
      
      while (k < (j - i + 1) / 2) {
        if (str[i + k] !== str[j - k]) {
          isPalindrome = false;
          break;
        }
        k++;
      }
      
      if (isPalindrome && (j - i + 1) > maxlength) {
        start = i;
        maxlength = j - i + 1;
      }
      j++;
    }
    i++;
  }
  
  return str.substring(start, start + maxlength);
  // OR
  // return str.slice(start, start + maxlength);
}

console.log(largestPalindromicString("ababad"));
