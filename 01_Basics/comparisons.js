// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*the reason is that an equality check == and comparisons > < >= <=
work differently
comparisons convert null to a number, treating it as 0
thats why 3) null>=0 is true */

// === 

console.log("2" === 2);