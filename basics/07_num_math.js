let stringvalue = new String("hey")  //in this we are explicitly creating a string object  [string : 'hey']
//console.log(stringvalue)


let stringvalue2 = String("heloo")       //hello it will just convert the value to string 
// console.log(stringvalue2)

let num = 123
// console.log(num)

let num2 = Number (123)  // it will convert the value to number
// console.log(num2)

let num3 = new Number(123)   // it will create a number object
// console.log(num3)

// console.log(typeof num3.toString())  // it will convert the number object to string , now we can perform string methods on it

// console.log(num3.toString().length) // it will give the length of the string converted from number object
// console.log(num3.toString().substring(0,2)) //it will give the substring from index 0 to 2

// console.log(num3.toFixed(2))  // it will convert the number to string with fixed 2 decimal points
// console.log(num3.toExponential(3))  // it will convert the number to string in exponential form with 3 decimal points


let anothernum = 1123.9567
//console.log(anothernum.toPrecision(3))  

/*Number of significant digits. Must be in the range 1 - 21, inclusive.
 Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. */  
 
 //it do round-of digits  according to the precision given value + if preicision is less than the number of digits before decimal it will convert it to exponential form

 

const sample = 100_00_00
//console.log(sample)   //it is just for reading purpose 


const sample1 = 10000000
//console.log(sample1.toLocaleString('en-IN'))   // it will convert the number to string with commas according to the locale - us standard  AND 'en-IN ' for indian standard




//+++++++++++++++++++++++++++++++ MATH  +++++++++++++++++++++++++++++++++++++++

