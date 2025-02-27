const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Year: ", 
function isleap(year){
    if (year % 4 !== 0){
        console.log(year + " is not leap year.")
    }
    if (year % 4 === 0 && year % 100 !== 0){
        console.log( year + " is leap year.");
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        console.log( year + " is leap year.");
    }
    else{
            console.log( year + " is not leap year.");
    }
});