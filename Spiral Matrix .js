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
