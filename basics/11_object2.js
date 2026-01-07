//singleton
const tinder = new Object ()   //object constructor
// const tinder = {}     //object literal
tinder.id = "12ab"           //through this we are accesing id roperties of tinder object
tinder.name ="muskan"
tinder.loggedin = true

// console.log(tinder)


//nesting of object ( inside of object)

const user = {
    email:"mus@gmail.com",
    fullname:{
        userfullname:{
            firstname:"muskan",
            middlename:{
                lastname:"tyagi",
            }
        }
    }
}

// console.log(user.fullname.userfullname.middlename.lastname)



//concatenation of object
const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//3 ways to concatenate objects
//1. normal way but not recommended

const obj3 = {obj1, obj2}
// console.log(obj3)  //it will create object inside object not what we want

//2. Object.assign() method
const obj4 = Object.assign({},obj1,obj2)  //first argument is target object(  ie, {} ) in which we want to copy other objects( ie, obj1,obj2)
// console.log(obj4)

//3. spread operator  - most recommended
const obj5 = {...obj1, ...obj2}
// console.log(obj5)


console.log(tinder)
console.log(Object.keys(tinder))  //it will give array of keys of tinder object - we can perform loops and several operation on it
console.log(Object.values(tinder))  //it will give array of values of tinder object
console.log(Object.entries(tinder))  //it will give array of arrays  ie, key value pairs of tinder object


//but if we want to check whether a key is present in object or not we can use hasOwnProperty method
console.log(tinder.hasOwnProperty("name"))  //it will return true if name key is present in tinder object else false
console.log(tinder.hasOwnProperty("age"))   //false as age key is not present in tinder object