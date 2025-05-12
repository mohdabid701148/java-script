let score = "123ab"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber) 
// console.log(valueInNumber) 


//"123abid"=>NaN
// "123" => 123
// null => object
// undefined => NaN


let IsLoggedIn = "Abid"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsLoggedIn)
//0      => false
//1      => true
//""     => false
//"abid" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

//************************************OPERATIONS****************************************/
let value = 2
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)
// console.log(3/2)
// console.log(43%3)

let str1 = "hello"
let str2 = " Abid"
let str3 = str1 + str2
// console.log(str3)
// console.log(1+"3")
// console.log("1"+3)
// console.log(1+3+"4")
// console.log("1"+3+4)

// console.log(+true)
// console.log(+"")

let x = 5
const y = x++
console.log(`x:${x},y:${y}`)
let a = 5
const b = ++a
console.log(`a:${a},b:${b}`)