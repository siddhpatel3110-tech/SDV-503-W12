// 02 - Question with validation
//
// Same idea as example 01, but we *do something* with the answer:
// we convert it to a number and validate it before continuing.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('How old are you? ', (answer) => {
  // The answer is always a string. Convert it to a number.
  const age = Number(answer);

  if (Number.isNaN(age) || age < 0) {
    console.log(`"${answer}" is not a valid age.`);
  } else if (age < 18) {
    console.log(`You are ${age} — still a minor.`);
  } else {
    console.log(`You are ${age} — an adult.`);
  }

  rl.close();
});
 