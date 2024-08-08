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
