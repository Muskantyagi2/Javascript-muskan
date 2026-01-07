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
// console.log(arr)   //chnge in original array

//2. pop() - removes last elemnts from an array

arr.pop()
// console.log(arr)


//3. unshift() - add elements at the beginning of an array 
arr.unshift(9)
// console.log(arr)

//4. shift()- removes first element from an array
arr.shift()
// console.log(arr)

//5. includes()  - it checks whether the selected element is present in the array or not - return true or false

// console.log(arr.includes(4))  //true
// console.log(arr.includes(8))   //false


//6.indexof() - it returns the index of the selected elemnt from and array and if not found return -1
// console.log(arr.indexOf(4))
// console.log(arr.indexOf(7))   //-1


//7. join()  - it bind array and convert it into string - we can do it with any separator also("_"  for example)
const newarr = arr.join()
// console.log(newarr)


//8. slice() - it is use to extract a portion of an array and return - it does not change elemnet in original array 
// console.log("A", arr)
// console.log(arr.slice(0,2))  //it will extract element from index 0 to index 2 but not include index 2


// //9. splice() - it also includes range , it remove the certain elemnts from and array and display them - it do chnegs in original array
// console.log("b",arr)
// console.log(arr.splice(1,2))   // 1= starting index , 2= number of elements to be removed
// console.log("c",arr)


// arr.unshift(12,13,14)
// console.log("d",arr)

// console.log(arr.splice(0,3))  
// console.log("e",arr)



// add two arrays
const arr1 = [1,2,3]
const arr2= [4,5,6]

// arr1.push(arr2)  [1,2,3,[4,5,6]]
// console.log(arr1)   // it will add arr2 as a single element in arr1 - chnge in original array


const concatarr = arr1.concat(arr2) // it will add elemnts of arr2 in arr1 - no chnge in original array
// console.log(concatarr)  //[1,2,3,4,5,6]



//spread operator  - it is also use to add two arrays
const newconcat = [...arr1, ...arr2]
// console.log(newconcat)


//flat - it is use to convert multi dimensional array into single dimensional array
const imgar = [1,2,3,[4,5,6],7,[3,[5,6]]]
const realarr = imgar.flat(2)  //2 is the depth level - we can use infinity also
// console.log(realarr)



//when we have to check if our data is array or not
console.log(Array.isArray("muskan"))
//to convert array into string
console.log(Array.from("muskan"))

console.log(Array.from({name:"muskan"}))  // it will convert object into array with undefined values - return empty values


//of - it creates array from the given values
const score1 = [1,2,3]
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))