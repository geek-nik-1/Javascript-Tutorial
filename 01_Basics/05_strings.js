const name = 'Nikhil'
const repo = 50

// console.log(name + repo + " Value")

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repo}`);

const gameName = new String('Black-Myth-Wukong')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherSting = gameName.slice(-8, 4)
console.log(anotherSting);

const newStringOne = "   Nikhil     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%20khot"
console.log(url.replace('%20', '-'));

console.log(url.includes('nikhil'));

console.log(gameName.split('-'));



