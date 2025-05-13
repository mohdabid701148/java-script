//dates
const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())//tue may 13 2025
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())//5/13/2025
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// type of date is object

// let createMyDate = new Date(2034,3,5)
// let createMyDate = new Date(2034,3,5,6,44)
// let createMyDate = new Date("2025-01-23")
let createMyDate = new Date("05-13-2025")
// console.log(createMyDate.toLocaleString())
let myTimeSpame = Date.now()
// console.log(myTimeSpame)
// console.log(createMyDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // ate now in  second
let newdate = new Date()
console.log(newdate.getMonth()+1)
console.log(newdate.getFullYear())
newdate.toLocaleString('default',{
    weekday  : "long"
})