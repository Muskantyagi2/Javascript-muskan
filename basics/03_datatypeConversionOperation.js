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
console.log("Boolean to Number ",LoggedInNum)

let LoggedOut = "muskan"
let LoggedOutBool = Boolean (LoggedOut)
console.log("number to cboolean ", LoggedOutBool)
