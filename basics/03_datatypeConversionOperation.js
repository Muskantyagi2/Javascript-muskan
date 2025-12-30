//***************Datatype conversion******************

let score = "33"//only work with number but in string form like "muskan"
let score2 = "muskan"
let num = 44 

//but if we use suppose = 33abc
let sample = "33abc"

// console.log(typeof score)
// console.log(typeof score2)
// console.log(typeof(num))


// console.log(typeof sample)

let valuechange = Number(score)
// console.log(typeof valuechange)

let stringvalue = String(num)
//console.log(typeof stringvalue)

let valuechangeofsample = Number(sample)
//console.log(valuechangeofsample)//value will be Nan because of abc in string but it will chnge into number

let valuechange2 = Number(score2)
//console.log("String2 name chnge while to  Number ",valuechange2)//value will be NaN because muskan is not a number

//conclusion
/*
"33" => Number = 33
"Muskan" / "33abc" => Number = NaN
44 => String = "44"
true =>Number = 1, false => Number = 0
"muskan" => Bollean = true , "" => Bolean = false
*/

let LoggedIn = true
let LoggedInNum = Number(LoggedIn)
//console.log("Boolean to Number ",LoggedInNum)

let LoggedOut = "muskan"
let LoggedOutBool = Boolean (LoggedOut)
//console.log("number to cboolean ", LoggedOutBool)



//*************operation******************/
let value = 3
let negVlaue = -value
// console.log(negVlaue)


//ARITHMETIC OPERATION
// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2%3)

let str1 = "hei "
let str2= "muskan"
let str3 = str1 + str2
//console.log(str3)


//conactenation according to prefrence of string or number we can say 
// console.log("1" + 2)// 12
// console.log(1 + "2") //12
// console.log("1"+2+2)  //122
// console.log(2+2+"1")//41


//PREFIX AND POSTFIX INCREMENT

//prefix
let x = 3     //value assign 3
let y = ++x       //first we will do increment i.e, x + 1 = 4    , then assign value of x to y ie, 4

console.log("prefix value of x is ", x) //4
console.log("value of y is ", y) //4



//postfix
let a = 2            //assign value 2
let b = a++             // then assign value of a ie, 2 to b , now value of b = 2,         then we increment value of a ie, a+1 = 3 , now value of a = 3

console.log("postfix value of a : ", a) //3
console.log("value of b :", b)  //2




