//comparison operator results always in true or false

// console.log(2>4)
// console.log(2<4)
// console.log(2<=4)
// console.log(2>=4)
// console.log(2==4)
// console.log(2!=4)

// console.log("2" == 2)  //true because == only check value not datatype
// console.log("2" === 2)  //false beacuse === check vlue and datatype of both

console.log(null > 0); //false
console.log(null == 0); //false becasue it only check the no.
console.log(null >= 0); //true, because it will first convert the null into number = 0 , then it will chekc the condition 0 = 0 ie, true


//strict check
console.log("2" === 2)  

//avoid these type of comparison