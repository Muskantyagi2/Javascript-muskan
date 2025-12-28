// variable - const , let , var 

const accountId = 1234
let accountEmail = "muskan@gmail.com"
var accountPassword = "1234"
accountName = "muskan"     //global variable
let accountState;     //undefined bacuase nothing is define as a value


// value cannot be changed after initialization or once declare
// accountId = 2   //it will give assignment error 
console.log(accountId)

accountEmail ="xyz@.com"   //chnage
accountPassword="xyz"   //change but problem of va is bloack scope and functional scope 
accountName = "heya"
console.table([accountId,accountEmail,accountPassword, accountName, accountState])