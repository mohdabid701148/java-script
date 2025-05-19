const user = {
    username : "abid",
    price : 100 ,
    // wellComemessage : function(){
    //     console.log(`${this.username},welcome to abid's world`)
    //     console.log(this)
    // }

}
// user.wellComemessage()
// user.username = "hey"
// user.wellComemessage()
// console.log(this)
function chai(){
    let username = "Abidrayeen"
    console.log(this.username)
}
// chai()
const one = ()=>{
    username = "abid"
    console.log(this.username)
}
// one()

// arrow functions
// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// const addtwo = (num1,num2)=> num1+num2
const addtwo = (num1,num2)=> ({name : "Abid"})
console.log(addtwo(4,7))