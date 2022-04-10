"use strict";

// HOMEWORK #9

// Task# 1

// let numOrStr = prompt("Введите данные");
//
// if (numOrStr === null) {
//     console.log("вы отменили")
// }
//
// else if (numOrStr.trim () === "") {
//     console.log("Empty String")
// }
//
// else if (isNaN(+numOrStr)) {
//     console.log("Number is Ba_NaN")
// }

let numOrStr = prompt("Введите данные");

if (numOrStr === null || numOrStr.trim() === "" || isNaN(+numOrStr)) {
  console.log("Error");

} else {
  console.log("Correct, it is Number");
}
