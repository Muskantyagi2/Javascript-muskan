//SINGLETON OBJECT

//ways of creating object - 2   ( LITERAL) , ( CONSTRUCTOR )

//1. literal synatx
const obj1= {}

//2. constructor syntax
// object.create()

//code
//key value pair in which js read keys as string
const user = {
    name:"muskan",
    age:20,
    email:"muskan@gmail.com",
    isLoggedIn: true,
    "full name": "muskan tyagi",
    lastLoggin:["monday","saturday"],

}

//access
// console.log(user.email)  //dot notation

// //suppose we have key in string ie "fullname" then  we cant use do notation  so 
// console.log(user["full name"])  //bracket notation

//SYMBOL KEY

const mysym = Symbol("key 1") //unique key     now we have to use this is in object and access it

const user2={
    name:"siddharth",
    [mysym]:"my key",
}

// console.log(user2[mysym])  //accessing symbol key



//chage value
user.age = 18
// console.log(user["age"])

//but when we dont want to chnge value of object by anyone we can use freeze method
// Object.freeze(user)  //now no one can change value of user object

user.email = "muskan@iitm.com"
// console.log(user)

// Object.freeze(user2)  //freezing user2 object
user2.name ="muskan"
// console.log(user2)  //name will not change as object is freezed


//function inside object
user.greetings = function (){
    // console.log("hello user")    //using this it will print heelo user but the it will return undefined because after running this fucntion will check for return statement that is return undefined

    return "hello user"   //but after using return it will return hello user  and not undefined
}
console.log(user.greetings())

//now supoose i want to access name of user inside greeting function
user.greet2 = function(){
    // return `hello , ${user["full name"]}`;            //can also use user.name or this.name
       return `hello , ${this["full name"]}`      //this refere to the current object ( user object here) and access its property
}
console.log(user.greet2())

