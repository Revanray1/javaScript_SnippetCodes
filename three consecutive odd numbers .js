1. Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

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
