var names = ["Abeb", "Abe", "Abem", "Almu", "Beletu"];

function pay(names) {
    var position = names.length;
    var payernumber = Math.floor(Math.random() * position);
    var payer = names[payernumber];

    return payer;
}

// Call the function and log the result
var chosenPayer = pay(names);
console.log("The person who will pay for dinner is: " + chosenPayer);
