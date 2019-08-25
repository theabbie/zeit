var app = require('express')();
var axios = require('axios');

app.get("/*", function(req,res) {
axios.get(faker.image.avatar(), function(img) {
res.send(img)
})
})

