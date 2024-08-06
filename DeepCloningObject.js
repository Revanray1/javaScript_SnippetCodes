// DeepCloningObject

function deepCloningObject(obj){
          if(typeof obj !== 'object' || obj === null){
            return obj
          }
          
          if(Array.isArray(obj)){
           return  obj.map(item => deepCloningObject(item))
          }
        let clonedobj={}
        for(let key in obj){
          if(obj.hasOwnProperty(key)){
            clonedobj[key] = deepCloningObject(obj[key])
          }
        }
        
        return clonedobj
}


console.log(deepCloningObject({a:1,b:{c:[2,3]}}))
console.log(deepCloningObject({a:1,b:{c:2]}}))

________________________________________________________________
OUTPUT
{ a: 1, b: { c: [ 2, 3 ] } }

{ a: 1, b: { c: 2 } }
