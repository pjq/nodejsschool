//console.log(process.argv)

var length = process.argv.length;
//console.log(length);
var i = 2;
var sum = 0;
for (i=2;i<length;i++){
    sum += Number(process.argv[i])
}

console.log(sum);
