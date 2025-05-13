const marvel_hero = ["iron man","thor","captain"]
const dc_hero = ["bat man","superman","jocker"]
// marvel_hero.push(dc_hero)
// console.log(marvel_hero)
// console.log(marvel_hero[3][2])

const newhero = marvel_hero.concat(dc_hero)
// console.log(newhero)
// console.log(marvel_hero)

//another way here we spread our array
const new_hero = [...marvel_hero,...dc_hero]
// console.log(new_hero)

//flat the array
const anotherArray = [1,3,[35,54,34],67,43,[21,31,[78,0]]]
const realarray = anotherArray.flat(Infinity)
// console.log(realarray)

console.log(Array.isArray("Abid"))
console.log(Array.from("Abid"))
console.log(Array.from({name : "Abid",}))

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))