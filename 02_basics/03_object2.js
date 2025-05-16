// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Abid"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "some@gmsil.com",
    fullName :{
        userFullName : {
            firstName : "Mohd",
            lastName : "Abid",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1,obj2} // merguing of object

// console.log(obj3) // not good merging
const obj4 = Object.assign({},obj1,obj2)//merging
const obj5 = {...obj1 , ...obj2}//merging
// console.log(obj4)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))\


const course = {
    courseName : "js in hindi",
    price : 0,
    instructorName : "hitesh",
}

const {instructorName : instructor} = course
console.log(instructor);

// {
//     "Name" : "hitesh",
//     "price" : "free",
//     "courseName" : "js in hindi"  // api in form of json
// }