var fs=require('fs');

var file=process.argv[2];
var buffer=fs.readFileSync(file,'utf8');
var string=buffer.toString();
var lines=string.split('\n');
console.log(lines.length-1);
