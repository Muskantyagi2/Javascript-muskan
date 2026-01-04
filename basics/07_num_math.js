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

// Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.


// console.log(Math.PI)
//there are several others properties like Math.E , Math.SQRT2 , Math.LN10 etc

//maths method

// console.log(Math.abs(-7))  //7
// console.log(Math.round(4.5))  //5  // it will round off to nearest integer 
// console.log(Math.round(4.2))  //4

// console.log(Math.ceil(4.5))  //5  it will take upper interger
// console.log(Math.ceil(4.2))  //5

// console.log(Math.floor(4.7))  //4 it will take lower integer
// console.log(Math.floor(4.2))  //4 


// console.log(Math.max(2,6,1,4))
// console.log(Math.min(2,6,1,4))

//random

// console.log(Math.random())  //it will generate radom number bewteen ( 0 -1 )  excluding 1

// console.log(Math.floor(Math.random()+1))   // it will always give 1  because random will generate number between 0 to less than 1 so after adding 1 it will be between 1 to less than 2 and floor will make it 1

console.log((Math.random()*10)+1)   // it will give number between 1 to less than 11  - to shift value to before decimal we multiply it by 10



// const min = 2
// const max = 40

// console.log(Math.floor((Math.random() * (max - min +1))+ min))  // it will give random number between min and max including both




//otp genration

function otp (){
    let min = 100000
    let max = 999999

    let otp = Math.floor((Math.random() * (max - min + 1)) + min)
    return otp
}

otp()