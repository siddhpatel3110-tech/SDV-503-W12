// 04 - Read a file line by line
//
// `readline` is not just for keyboard input. It can read ANY stream one
// line at a time -- a file, the network, etc. This is the right way to
// process large text files because it does NOT load the whole file into
// memory.

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

// Resolve the file path relative to this script, not the current working
// directory, so it works no matter where you run `node` from.
const filePath = path.join(__dirname, 'sample.txt');

// Create a readable stream from the file.
const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });

const rl = readline.createInterface({
  input: fileStream,
  // `crlfDelay: Infinity` makes sure Windows-style "\r\n" line endings
  // are treated as a single newline.
  crlfDelay: Infinity,
});

let lineNumber = 1;

// The "line" event fires once for every line in the input stream.
rl.on('line', (line) => {
  console.log(`${lineNumber}: ${line}`);
  lineNumber += 1;
});

// The "close" event fires when the file has been fully read.
rl.on('close', () => {
  console.log(`\nDone. Read ${lineNumber - 1} lines.`);
});
 