var fs=require("fs");
var path=require("path");

module.exports=function listdir(directory, extension, cb){
    return listdirImpl(directory, extension, cb);
}
function listdirImpl(directory, extension, cb){
    var dir=process.argv[2];
    var ext=process.argv[3];
    dir=directory;
    ext=extension;
    fs.readdir(dir,
            function callback(err, list){
                var newlist=[];
                if (err){
                    //                    console.log("error");
                    cb(err, newlist);
                }else{
                    //console.log(list);

                    list=list.filter(function(file){
                        return path.extname(file) == "." +ext
                    });

                    for (var i=0;i<list.length;i++){
                        var fileitem=list[i];
                        if(fileitem.indexOf("."+ext)>0){
                            newlist.push(fileitem);
                            //                            console.log(fileitem);
                        }
                    }
                    cb(err, newlist);
                }
            }
    );
}

function test(){
    listdirImpl(process.argv[2], process.argv[3], function cb(err, list){
        if(err){
            console.log("some error");
        }else{
            for(var i = 0;i<list.length;i++){
                console.log(list[i]);
            }
        }

    });
}
