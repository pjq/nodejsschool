var fs = require("fs");

var file=process.argv[2];

fs.readFile(file,
        function callback(err, data){
            if(err){
                console.log("error");
            }else{
                console.log(data.toString().split('\n').length-1);
            }
        }
        );
