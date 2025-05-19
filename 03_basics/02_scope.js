if(true){
    let a = 10
    const b= 30
    var c  = 40
}
// console.log(a)
// console.log(b)
console.log(c)

function one(){
    const username = "abid"
    function two(){
        website = "yt"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

//*********************************INTRESTING****************************************//
console.log(addone(4))
function addone(num){
    return num+1
}

const addtwo = function(num){
    return num+2
}
addtwo(5)//but it give error when its console above the function