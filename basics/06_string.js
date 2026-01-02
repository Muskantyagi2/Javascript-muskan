// ways to print strings in js
//1.
let str1 = "hey there"
// console.log(str1 + " how are you?")

//2. backticks method - know as string interpolation
let name = "muskan"
let age = 12
// console.log(`hey my name is ${name} and my age is ${age}`)

//ways to write string
//1.  using double quote or single quotes
let str2 = "hello world"
let str3 = 'hell world'
// console.log(str3.toUpperCase())
// console.log(str3[3])

//2. using new keyword
let user = new String ('muskan')
// console.log(user)


// //several methods of string
// console.log(user.toLowerCase())    //it will not convert the original string to lower case
// console.log(user[3])
// console.log(user.toUpperCase())
// console.log(user.length)

console.log(user.charAt(4))   // it will give the character at index 4
console.log(user.indexOf('s'))   // it will give the index of character s   

console.log(user.charCodeAt(3))   //it will give unicode of charcter at index 3

// concat method
let user2 = new String(' tyagi')
console.log(user.concat(user2))   // it will concatenate two strings


console.log(user.endsWith('muskan',6))  // true    - it will check whether the string ends with 'muskan' or not
console.log(user.endsWith('muskan!',6))   // false

console.log(user.startsWith('m',0))  // true   - it will check whether the string starts with 'm' or not

console.log(user.includes("an"))  // true - it will check if the string is present in the given string or not

