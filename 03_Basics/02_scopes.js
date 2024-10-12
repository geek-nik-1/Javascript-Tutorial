

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);

function one() {
    const user = "Nikhil"

    function two(){
        const website = "youtube"
        console.log(user);
        
    }
    // console.log(website);
    two()
}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // error
const addTwo = function(num){
    return num + 2
}