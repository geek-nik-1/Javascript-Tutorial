const user = {
    username : "Nikhil",
    price : 999,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); // in browser global object is window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))