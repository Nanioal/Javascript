const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name1) {
  rl.question("What is your partner's name? ", function(name2) {
    let n = Math.random();
    n = n * 100;
    n = Math.floor(n);

    console.log("Your love percentage is: " + n);
    rl.close();
  });
});
