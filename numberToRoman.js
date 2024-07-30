// NumberToRoman


function convertoRomans(number){
  const Numerals=[
    {value:1000,symbol:"M"},
    {value:900,symbol:"CM"},
    {value:500,symbol:"D"},
    {value:400,symbol:"CD"},
    {value:100,symbol:"C"},
    {value:90,symbol:"XC"},
    {value:50,symbol:"L"},
    {value:40,symbol:"XL"},
    {value:10,symbol:"X"},
    {value:9,symbol:"IX"},
    {value:5,symbol:"V"},
    {value:4,symbol:"IV"},
    {value:1,symbol:"I"} ]

      let results = "";
      
      for(const {value,symbol} of Numerals){
        
        while (number >= value){

          results += symbol;
          number -=value;
        }
       
      } 
      return results;
      

}

console.log(convertoRomans(1998))

Output:

MCMXCVIII

___________________________________________________________________________________________________________________________


const lookup = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const toRomanNumeral = num =>
  lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
  }, '');

  
console.log(toRomanNumeral(3))
console.log(toRomanNumeral(11))
console.log(toRomanNumeral(1998))


Output:

III
XI
MCMXCVIII

_______________________________________________________________________________________________________________





function convertoRoman(number){
  const Numerals=[
    {value:1000,symbol:"M"},
    {value:900,symbol:"CM"},
    {value:500,symbol:"D"},
    {value:400,symbol:"CD"},
    {value:100,symbol:"C"},
    {value:90,symbol:"XC"},
    {value:50,symbol:"L"},
    {value:40,symbol:"XL"},
    {value:10,symbol:"X"},
    {value:9,symbol:"IX"},
    {value:5,symbol:"V"},
    {value:4,symbol:"IV"},
    {value:1,symbol:"I"} ]


let Data = Numerals.reduce((acc,{value,symbol})=>{
  
        while(number >=value){
          acc +=symbol;
          number -=value
        }
        return acc
        
},"")

return Data
      

}

console.log(convertoRoman(1998))

Output:

MCMXCVIII
