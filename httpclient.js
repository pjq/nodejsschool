var http=require("http");

var url=process.argv[2];

var request=http.get(url, function (response){
    //console.log("response code " + response.statusCode);

    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});
