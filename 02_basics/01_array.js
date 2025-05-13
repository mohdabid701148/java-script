//Array
// const myArr = [2,4,5,3,true,"Abid"]
const myArr = [2,4,5,3,56,-1]
// console.log(myArr[3])
const myHeroes = ["abid","mohd abid", "mohd abid rayeen"]
const myArr2 = new Array(1,2,34,5,6,7,8,9)


// array methodes
myArr2.push(-3)
myArr2.push(19)
myArr2.pop()

// console.log(myArr2)

myArr2.unshift(4)//use to ad a element to starting 
// console.log(myArr2)
myArr2.shift() // use to remove first element
// console.log(myArr2)


// console.log(myArr2.includes(34))
// console.log(myArr2.indexOf(454)) // give index of given element
// console.log(myArr2.sort())
 
const newarr = myArr2.join() // convert as string form
// console.log(newarr)
// console.log(myArr2)
// console.log(typeof(newarr))

//slice and splice
console.log("A",myArr2)
const mya1 = myArr2.slice(1,3)
console.log(mya1);
console.log('B',myArr2)

const mya2 = myArr2.splice(1,3)
console.log('c',myArr2)
console.log(mya2)

