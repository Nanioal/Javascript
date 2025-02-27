const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const allowed = ["almi", "baby", "Redu", "nan"];

function getin(guest) {
    if (allowed.includes(guest)) {
        console.log("Pass.");
    } else {
        console.log("Don't pass.");
    }
}

rl.question("How many guests? ", function(guestCount) {
    const guests = [];
    let count = 0;

    const askGuestName = () => {
        if (count < guestCount) {
            rl.question("Enter guest name: ", function(guest) {
                guests.push(guest);
                count++;
                askGuestName();
            });
        } else {
            guests.forEach(guest => getin(guest));
            rl.close();
        }
    };

    askGuestName();
});

