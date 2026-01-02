"use strict"; //treat all js code as new version

/*
JS - dynamically typed lanaguge becasue in this we dont have to define data type of variable while defining it 

*/

/*

DATATYPE - primitive(call by value) and non-primitive (call by reference)
datatype decides on the basis of " how the data is stored in memory and how we can access them"

*/

/*
data type - primitive data types :- 
1. number  ( 2 ki power 53 ) 
2. string  ( "" , '',  `` template)
3. boolean  ( true, flase)
4. null  ( standalone value - empty value )  // object type
5. undefined  (  value not defined yet)
6. symbol ( to find uniuqueness in react js)
7. BigInt  ( to store large integers   in proejcts like reddit or trading etc..)

non-primitive data types :-
1. object
2. array
3. function
*/

//code
// console.log("number : ", 3)
// console.log("string : ", "hello")
// console.log("noolena : ", true)
// console.log("null: ",null)
// console.log("undefined : ", undefined)
// console.log("symbol : ", Symbol("id"))
// console.log("BigInt : ", 1234567890123456789012345678901234567890n)
const bigNumber = 12543n;
console.log(typeof bigNumber); //bigint

// console.log(typeof null)   //object

// console.log(typeof undefined)   //undefined
