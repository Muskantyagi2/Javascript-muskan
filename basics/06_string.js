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
let user = new String ('muskan tyagi')
// console.log(user)


// //several methods of string
// console.log(user.toLowerCase())    //it will not convert the original string to lower case
// console.log(user[3])
// console.log(user.toUpperCase())
// console.log(user.length)

// console.log(user.charAt(4))   // it will give the character at index 4
// console.log(user.indexOf('s'))   // it will give the index of character s   

// console.log(user.charCodeAt(3))   //it will give unicode of charcter at index 3

// // concat method
// let user2 = new String(' tyagi')
// console.log(user.concat(user2))   // it will concatenate two strings


// console.log(user.endsWith('muskan',6))  // true    - it will check whether the string ends with 'muskan' or not
// console.log(user.endsWith('muskan!',6))   // false

// console.log(user.startsWith('m',0))  // true   - it will check whether the string starts with 'm' or not

// console.log(user.includes("an"))  // true - it will check if the string is present in the given string or not


// let para = "The dog is between two another dog"
// let searchTerm = "dog"
// let indexOfFirst = para.indexOf(searchTerm)

// console.log(`inex of first ${searchTerm} is ${indexOfFirst}`);

// console.log(
//   `The index of the second "${searchTerm}" is ${para.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );



const anotherstring = user.substring(0,4)   //index will start from 0 - 4 ( -1)
// console.log(anotherstring)

const anotherslice = user.slice(-8,8)
// console.log(anotherslice)


const anotherstring2 = "      muskan.     "
const trimstring = anotherstring2.trim()  //it will remove space from both sides ( can use when taking input from user)   //it works only on white saces and line terminators such as /n, /r
// console.log(trimstring)
const trimstart = anotherstring2.trimStart()   
const trimend = anotherstring2.trimEnd()
// console.log(trimstart)
// console.log(trimend)


//replace method

let url = "https://muskan@20tygai.com"
console.log(url.replace('@20', '-'))      //it will replace selected part with teh new part
console.log(url.includes('tyagi'))


//split method
let message = "hey muskan taygi"

console.log(message.split(' '))  //it will split the string at space and return array of strings
console.log(message.split(' ', '2'))  // it will split the string at space and return array of strings but only 2 strings will be returned

