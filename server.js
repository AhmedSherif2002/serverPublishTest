var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    var url = req.url;
    if(url === '/'){
        fs.readFile("main.html", (er, file)=>{
            if(er){
                res.write("FILE NOT FOUND ");
            }else{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(file);
                res.end();
            }
        })
    }else if(url === '/index'){
        fs.readFile("index.html", (er, file)=>{
            if(er){
                res.write("index.html NOT FOUND");
            }else{
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.write(file);
                res.end();
            }
        })
    }else if(url === "/main"){
        fs.readFile("main.html", (er, data)=>{
            if(er){
                res.write("main.html NOT FOUND");
            }else{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
                res.end();
            }
        })
    }
}).listen(4000, ()=>{
    console.log("Server is running on Port: 4000");
})