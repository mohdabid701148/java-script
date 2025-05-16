const mySym = Symbol("key1")


const jsUser = {
    name : "Abid" ,
    "full name" : "Mohd Abid rayeen",
    [mySym] : "mykey1",
    email : "abidrayeen@gmail.com" ,
    location : "delhi",
    islogged : true,
    lastLoggedDay : ["monday","tuesday"],
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])//for symbol 

jsUser.email = "abid@gmail.com"
// Object.freeze(jsUser)//after that there is no change in jsUser object


jsUser.greeting = function(){
    console.log("hello js")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}
// console.log(jsUser.greeting)
// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())



