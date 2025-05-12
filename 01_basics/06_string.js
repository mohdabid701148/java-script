const name ="Abid"
const repos = 50 
// console.log(name+repos+ " value")

console.log(`hello my name is ${name} and repocount : ${repos}`)

const gameName = new String("kingdomeofabid")
console.log(gameName)
console.log(gameName[2])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))
const newString = gameName.substring(0,8)
console.log(newString)
const anotherString = gameName.slice(-11,4)
console.log(anotherString)