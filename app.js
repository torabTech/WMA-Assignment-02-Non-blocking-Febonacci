//require('./fibonacci');

const child_process = require('child_process');
console.log('Before Child Process');
child_process.spawn("node",["./fibonacci.js"],{stdio:"inherit"});
console.log('After Child Process')
