const express = require('express');
const app = express();
const fs = require('fs');
const formidable = require('formidable');
const store = require("data-store");
var db = new store({path: "/data.json"})

app.post('/upload', function(req, res) {
var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    db.set("name",files.file.name)
      fs.rename(files.file.path, "/"+files.file.name, function (err) {
        if (err) throw err;
        res.redirect(301,"https://srvrr.tk/custom/file");
      });
 });
});

app.get('/*', function(req, res) {
res.sendFile('/'+db.get("name"));
})

app.listen(process.env.PORT);
