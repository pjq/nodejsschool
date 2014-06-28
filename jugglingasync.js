var http=require('http');
var bl=require('bl');
var concat=require('concat-stream');
var url1=process.argv[2];
var url2=process.argv[3];
var url3=process.argv[4];

function getBl(url, callback){
    var request=http.get(url, function(resp){
        resp.setEncoding('utf8');
        resp.pipe(bl(function(err, data){
            if(err){
                console.log(err);
            }else{
                var string = data.toString();
                //console.log(string);
                callback(err, string)
            }
        }));
    });
}

function getConcat(url, callback){
    var request=http.get(url, function(resp){
        resp.setEncoding('utf8');
        resp.pipe(concat(function(data){
            var string = data.toString();
            //console.log(string);
            callback(null, string);
        }));
    });
}

//getBl(url1);
getConcat(url1, function callback(err, data){
    console.log(data);
    getConcat(url2, function callback(err, data){
        console.log(data);
        getConcat(url3, function callback(err, data){
            console.log(data);
        });
    });
});
