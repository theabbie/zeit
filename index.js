const express = require('express');
const app = express();
const fs = require('fs');
const formidable = require('formidable');
const store = require("data-store");
var db = new store({path: "/tmp/data.json"})

app.post('/upload', function(req, res) {
var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    db.set("name",files.file.name)
      fs.rename(files.file.path, "/tmp/"+files.file.name, function (err) {
        if (err) throw err;
        res.redirect(301,"https://filed.now.sh/"+Math.floor(Math.random()*100));
      });
 });
});

app.get('/', function(req, res) {
res.setHeader("content-type","text/html");
res.end(`
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<form method="post" action="https://filed.now.sh/upload" enctype="multipart/form-data">
<input type="file" name="file">
<input type="submit">
</form>
</html>
`);
})

app.get('/*', function(req, res) {
res.sendFile('/tmp/'+db.get("name"));
})

app.listen(process.env.PORT);
