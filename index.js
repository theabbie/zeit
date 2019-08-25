var app = require('express')();
var axios = require('axios');
var faker = require('faker')

app.get("/*", function(req,res) {
axios.get(faker.image.avatar(), function(img) {
res.send(img)
})
})

app.listen(process.env.PORT)
