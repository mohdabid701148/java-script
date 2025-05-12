let score = "123ab"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber) 
console.log(valueInNumber) 


//"123abid"=>NaN
// "123" => 123
// null => object
// undefined => NaN


let IsLoggedIn = "Abid"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn)
//0      => false
//1      => true
//""     => false
//"abid" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))