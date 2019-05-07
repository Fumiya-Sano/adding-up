'use strict';
const fs = require('fs')
const readline ~ require('readline');
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({ 'input': rs, 'output': {}});
fl.on('line', (lineString) => {
	console.log(lineString);
});
rl.resume();
