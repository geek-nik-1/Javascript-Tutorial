const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// The for...in loop is used to iterate over the enumerable properties of an object, but in your case, you are trying to use it with a Map, which doesn't work as expected because Map objects are not enumerable in the way that normal objects are.

// To iterate over the keys of a Map, you should use the for...of loop or map.keys(). Here's the corrected version of your code: