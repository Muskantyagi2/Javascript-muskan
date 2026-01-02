//how we story memeory in js 
/*
memory - stack    - primitive data type ( varibale copy - and chamges made any reflect only in copyied variable not in origivnal variable)
store in stack
         heap  - non primitive data type ( varibale copy - and chamges made  reflect in both original and copied variable  )
         varibale store i stack but refrence ( value )  store in heap
*/

//code of stack

let user1 = "muskan"
let user2 = user1 //copy of user1 
user2 = "sidd"  //chnage made in user2 only   not in user 1

// console.log(user1)
// console.log(user2)


//code of heap

let obj1 ={
    email:"msuka@gmail.com",
    phone: 1234,
}

let obj2 = obj1   //copy of obj1 

obj2.email ="sidd@gmail.com"   //chnage made in obj2 reflect in both obj1 and obj2 ie, refrence object and original object

// console.log(obj1.email)
// console.log(obj2.email)