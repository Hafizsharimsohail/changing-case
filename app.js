//Assignment 1
var cityToCheck = "KARACHI";
var firstChar = cityToCheck.slice(0,1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
console.log(cappedCity);

// Assignment 2
var day = prompt("Enter a month");
var charsInday = day.length;
if (charsInday > 5) {
dayAbbrev = day.slice(0, 5);
console.log(dayAbbrev);
}

// Assignment 3
let str = "Python Programming";
let length = str.length;
console.log(length);

// Assignment 4
let part = str.slice(2, 7);
console.log(part);

// Assignment 15
let part2 = str.substring(0,11)
console.log(part2);
