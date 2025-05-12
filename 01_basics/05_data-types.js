// premitive

// 7 types : string , number , boolean , null , undefined , symbole  , BigInt

const num = 3
const anothernum = 3.3
const isLoggedIn = false
const temp = null 
let accountEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)


// refrence(non-premitive)

// Array , objects , functions
const heros = ["abid","mohd Abid","mohd abid rayeen"]

let myObj = {
    name : "Abid",
    age : 19,
}

const myfunction = function(){
    console.log("hello world")
}

//*********************************MEMORY*************************************************/

//Stack(premitive) , Heap(non-premitive)

let name = "abid"
let anotherName = name 
anotherName = "mohd abid"
console.log(name)
console.log(anotherName)

let userOne = {
    email : "abidrayeen05@gmail.com",
    upi : "ajdjd",
}

let userTwo = userOne 
userTwo.email = "abid@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
