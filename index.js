var app = require('express')();
var axios = require('axios');
var faker = require('faker')

app.get("/*", function(req,res) {
axios.get("https://typi.tk/?url=https://medium.com/&sel=a&attribs=href&static=true").then(function(links) {
var result = "";
for (x in links) {
result+="<a href='"+links[x]+"'>"+links[x]+"</a><br>"
}
res.setHeader("content-type","text/html");
res.end(result);
})
})

app.listen(process.env.PORT)
