var http=require('http');
var u=require('url');
var fs=require('fs');
var server=http.createServer(function(req,res){

var url_p=u.parse(req.url,true);
var path=url_p.pathname;
var fname=path.substring(1);

fs.readFile(fname,function(err,data)
{
  if(!err)
  {
     res.writeHead(200,{'content-type':'text/html'});
     res.write(data.toString());
     res.end();
  }
  else
  {
     res.write("<h1> file is not found </h1>");
     res.end();
  }
});
});
server.listen(9000,function(){
console.log("server started");
});