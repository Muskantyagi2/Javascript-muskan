//array  - it is an object  , in this we can store elements of different data types

const myarr = [ 1, 2, 3, "muskan", true]
// console.log(myarr)

//we can access array through indexes
// console.log(myarr[3])  

//and in this if we perform any operation on array it will store that in shallow copy(change in original copy ) not in deep copy(not change in original copy) 

//we can create array using new keyword also 
const arr = new Array(1,2,3,4)
// console.log(arr.length)

//array methods
//1. push () - add elements at the end of an array
arr.push(6)
console.log(arr)   //chnge in original array

//2. pop() - removes last elemnts from an array

arr.pop()
console.log(arr)