var app = require('express')();
var axios = require('axios');
var faker = require('faker');
var store = require('data-store');
var db = new store({path: '/tmp/data.json'});

app.get("/sitemap", function(req,res) {
var result = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
for (i=0; i<10000; i++) {result+=`
   <url>
      <loc>http://www.paige.now.sh/${faker.hacker.phrase()}</loc>
      <lastmod>2019-08-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
   </url>
`}
result+=`</urlset>`
res.setHeader("content-type","text/xml");
res.end(result);
})

app.get("/*", function(req,res) {
var phrase = [faker.hacker.phrase(),faker.hacker.phrase(),faker.hacker.phrase(),faker.hacker.phrase(),faker.hacker.phrase()];
var words = [faker.random.words(),faker.random.words(),faker.random.words(),faker.random.words()];
var extra = `
<img src="https://source.unsplash.com/1600x900/?hacker" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<img src="https://source.unsplash.com/1600x900/?coding" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<img src="https://source.unsplash.com/1600x900/?network" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<h3 class="w3-container w3-padding-32">Also see:</h3>
`
var result = `
<!DOCTYPE html>
<html>
<head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-2455012527087318",
          enable_page_level_ads: true
     });
</script>
<meta name="google-site-verification" content="esWdvsZT7Pj4JUmY9NRbjNri9UawGrXbDGBcDgcK3Uo" />
<meta name="description" content="${req.url=="/"?"PAIGE official":decodeURIComponent(req.url.substring(1))}">
<title>${req.url=="/"?"PAIGE":decodeURIComponent(req.url.substring(1))}</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
div, img {border-radius: 6px;}
a {text-decoration: none;}
</style>
</head>
<body class="w3-light-grey">

<!-- w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1400px">

<!-- Header -->
<header class="w3-container w3-center w3-padding-32"> 
  <h1><b>${req.url=="/"?"PAIGE":decodeURIComponent(req.url.substring(1))}</b></h1>
  <p>Welcome to the blog of <span class="w3-tag">${faker.name.firstName()}</span></p>
</header>
${req.url=="/"?"":extra}
<!-- Grid -->
<div class="w3-row">

<!-- Blog entries -->
<div class="w3-col l8 s12">
  <!-- Blog entry -->
  <div class="w3-card-4 w3-margin w3-white">
    <img src="${faker.image.avatar()}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="https://paige.now.sh/${phrase[0]}">${phrase[0]}</a></b></h3>
      <h5>${faker.random.words()}, <span class="w3-opacity">April 7, 2019</span></h5>
    </div>

    <div class="w3-container">
      <p>${faker.hacker.phrase()+faker.hacker.phrase()}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">0</span></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr>

  <!-- Blog entry -->
  <div class="w3-card-4 w3-margin w3-white">
  <img src="${faker.image.avatar()}" alt="Norway" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="https://paige.now.sh/${phrase[1]}">${phrase[1]}</a></b></h3>
      <h5>${faker.random.words()}, <span class="w3-opacity">April 2, 2019</span></h5>
    </div>

    <div class="w3-container">
      <p>${faker.hacker.phrase()+faker.hacker.phrase()}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-badge">2</span></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="w3-card-4 w3-margin w3-white">
    <img src="${faker.image.avatar()}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="https://paige.now.sh/${phrase[2]}">${phrase[2]}</a></b></h3>
      <h5>${faker.random.words()}, <span class="w3-opacity">April 7, 2019</span></h5>
    </div>
    <div class="w3-container">
      <p>${faker.hacker.phrase()+faker.hacker.phrase()}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">0</span></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="w3-card-4 w3-margin w3-white">
    <img src="${faker.image.avatar()}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="https://paige.now.sh/${phrase[3]}">${phrase[3]}</a></b></h3>
      <h5>${faker.random.words()}, <span class="w3-opacity">April 7, 2019</span></h5>
    </div>

    <div class="w3-container">
      <p>${faker.hacker.phrase()+faker.hacker.phrase()}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">0</span></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="w3-card-4 w3-margin w3-white">
    <img src="${faker.image.avatar()}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="https://paige.now.sh/${phrase[4]}">${phrase[4]}</a></b></h3>
      <h5>${faker.random.words()}, <span class="w3-opacity">April 7, 2019</span></h5>
    </div>

    <div class="w3-container">
      <p>${faker.hacker.phrase()+faker.hacker.phrase()}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
        <div class="w3-col m4 w3-hide-small">
          <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">0</span></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr>
<!-- END BLOG ENTRIES -->
</div>

<!-- Introduction menu -->
<div class="w3-col l4">
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
  <img src="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/IMG_20190720_184556.jpg" style="width:100%">
    <div class="w3-container w3-white">
      <h4><b>Abhishek</b></h4>
      <p>Being a developer sometimes feels so amazing because we are instructing non-living machines to do wonderful tasks, 
      it is more than an art and few picasso's exist<br>
      <b><a href="https://github.com/theabbie">https://github.com/theabbie</a></b>
      </p>
    </div>
  </div><hr>
  
  <!-- Posts -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <li class="w3-padding-16">
        <a href="https://paige.now.sh/${words[0]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${words[0]}</span><br>
        <span>${faker.name.firstName()}</span>
        </a>
      </li>
      <li class="w3-padding-16">
       <a href="https://paige.now.sh/${words[1]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${words[1]}</span><br>
        <span>${faker.name.firstName()}</span>
        </a>
      </li> 
      <li class="w3-padding-16">
      <a href="https://paige.now.sh/${words[2]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${words[2]}</span><br>
        <span>${faker.name.firstName()}</span>
        </a>
      </li>   
      <li class="w3-padding-16 w3-hide-medium w3-hide-small">
      <a href="https://paige.now.sh/${words[3]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${words[3]}</span><br>
        <span>${faker.name.firstName()}</span>
        </a>
      </li>  
    </ul>
  </div>
  <hr> 
 
  <!-- Labels / tags -->
  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Tags</h4>
    </div>
    <div class="w3-container w3-white">
    <p><span class="w3-tag w3-black w3-margin-bottom">Java</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Python</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">C++</span>
    </p>
    </div>
  </div>
  
<!-- END Introduction Menu -->
</div>

<!-- END GRID -->
</div><br>

<!-- END w3-content -->
</div>

<!-- Footer -->
<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  <button class="w3-button w3-black w3-padding-large w3-margin-bottom"><a href="https://paige.now.sh/">Next &raquo;</a></button>
  <p class="w3-text-white w3-large">PAIGE</p>
</footer>
</body>
<script>
document.querySelectorAll(".w3-tag").forEach(function(x) {
x.addEventListener("click",function() {location.reload()})
})
</script>
</html>
`;
db.set(decodeURIComponent(req.url.substring(1)),result)
res.setHeader("content-type","text/html")
res.end(db.has(decodeURIComponent(req.url.substring(1)))?db.get(decodeURIComponent(req.url.substring(1))):result);
})

app.listen(process.env.PORT);
