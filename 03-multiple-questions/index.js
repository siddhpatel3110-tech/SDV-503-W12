// 03 - Multiple questions
//
// Ask a sequence of questions. Each question must wait for the previous
// one to finish, so we *nest* the callbacks (or use Promises -- see
// example 10 for that style).

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your first name? ', (firstName) => {
  rl.question('What is your last name? ', (lastName) => {
    rl.question('What is your favorite programming language? ', (language) => {
      console.log('\n--- Profile ---');
      console.log(`Name    : ${firstName} ${lastName}`);
      console.log(`Favorite: ${language}`);
      console.log('----------------');

      rl.close();
    });
  });
});
 