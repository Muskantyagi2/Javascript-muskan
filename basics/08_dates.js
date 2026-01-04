let myDate = new Date(); // it will give current date and time
// console.log(myDate)

// console.log(myDate.toString())  // it will convert date to string  - like sun jun 09 2024 12:34:56 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()) // it will give only date part - like Sun Jun 09 2024

// console.log(myDate.toTimeString())  // it will give only time part - like 12:34:56 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString())  // it will give date in ISO format - like 2024-06-09T07:04:56.789Z

// console.log(myDate.toLocaleDateString('en-IN')) // it will give date in local format according to the locale provided - like 09/06/2024 for 'en-IN'

// console.log(myDate.toUTCString())  // it will convert date to UTC format - like Sun, 09 Jun 2024 07:04:56 GMT

// console.log(myDate.toJSON()) // it will give date in JSON format - like 2024-06-09T07:04:56.789Z

// console.log(typeof myDate)  // it will give object because date is an object in javascript

// //getting individual date and time components

let createDate = new Date(2026, 0, 1); //year ,month , date  ( month in array starts with 0  - jan)
// console.log(createDate)
// console.log(createDate.toLocaleDateString())
// console.log(createDate.toDateString())   //it includes day also
// console.log(createDate.getFullYear())  // it will give year - 2026

let createDate2 = new Date("2025-01-30"); //year - month - day
// console.log(createDate2.toDateString())
// console.log(createDate2.toLocaleDateString('en-IN')) //by default it will give US format but by using 'en-IN' it will give indian format

//timestamp
let date3 = Date.now(); // it will give timestamp - number of milliseconds passed since jan 1 , 1970
// console.log(date3)

// console.log(createDate2.getTime())
// console.log(Math.floor(date3/1000))

let myDate2 = new Date();
// console.log(myDate2.getMonth()) // it will give month in number - 0 to 11 ( jan =0 , dec =11)
// console.log(myDate2.getDate()) // it will give date in number - 1 to 31
// console.log(myDate2.getHours()) // it will give hours in number - 0 to 23
// console.log(myDate2.getMinutes()) // it will give minutes in number - 0 to 59
// console.log(myDate2.getSeconds()) // it will give seconds in number - 0 to 59
// console.log(myDate2.getDay()) // it will give day in number - 0 to 6 ( sun =0 , sat =6)

//customize date
console.log(
  myDate2.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  })
);
