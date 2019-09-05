var app = require('express')();
var axios = require('axios');
var faker = require('faker');
var store = require('data-store');
const $ = require("cheerio");
var db = new store({path: '/tmp/data.json'});

app.get("/sitemap*", function(req,res) {
axios("https://hl-upfbwr4pp09a.runkit.sh/").then(function(x) {
x.data.reverse();
x.data.push("");
x.data.reverse();
var result =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
for (i=0; i<x.data.length; i++) {result+=
`<url>
<loc>https://${req.headers.host}/${x.data[i].split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim()}</loc>
<image:image>
<image:loc>
https://source.unsplash.com/800x450/?${faker.random.words().split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim().split(" ").join(",").split("-").join(",")}
</image:loc>
</image:image>
<image:image>
<image:loc>
https://source.unsplash.com/800x450/?${faker.random.words().split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim().split(" ").join(",").split("-").join(",")}
</image:loc>
</image:image>
<image:image>
<image:loc>
https://source.unsplash.com/800x450/?${faker.random.words().split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim().split(" ").join(",").split("-").join(",")}
</image:loc>
</image:image>
<image:image>
<image:loc>
https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/IMG_20190720_184556.jpg
</image:loc>
</image:image>
<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
<changefreq>daily</changefreq>
<priority>1</priority>
</url>
`
}
result+=`</urlset>`
res.type("application/xml");
res.end(result);
})
})

app.get("/*", function(req,res) {
var phrase = [];
axios.get("https://www.title-generator.com/best-online-title-generator.html?qs="+(req.query.s || ['technology','universe','AI','Machine Learning','Programming','adsense'][Math.floor(6*Math.random())])+"&page=1").then(function(x) {
$("td:nth-child(2)",x.data).contents().each(function(i,x) {phrase.push($(this).text())})
var extra = 
`<img src="https://source.unsplash.com/800x450/?hacker" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<img src="https://source.unsplash.com/800x450/?coding" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<b>Advertisement</b><br>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-2455012527087318"
     data-ad-slot="3567490595"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<img src="https://source.unsplash.com/800x450/?network" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()+faker.hacker.phrase()}</h4>
<h3 class="w3-container w3-padding-32">Also see:</h3>
`
if(!db.has(decodeURIComponent(req.url.substring(1)))) {db.set(decodeURIComponent(req.url.substring(1)),extra)}

var result = 
`<!DOCTYPE html>
<html>
<head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-2455012527087318",
          enable_page_level_ads: true
     });
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-99338607-8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-99338607-8');
</script>
<script type="application/ld+json">
{
   "@context":"https://schema.org",
   "@graph":[
      {
         "@type":"Organization",
         "@id":"https://${req.headers.host}",
         "name":"${req.headers.host.split(".")[0]}",
         "url":"https://${req.headers.host}",
         "sameAs":[
            "https://www.facebook.com/abhishek.vice.versa",
            "https://instagram.com/sasta_abbie",
            "https://www.linkedin.com/in/abhishek-choudhary-a9a016102/",
            "https://www.youtube.com/abhishekchaudharyhome",
            "https://www.pinterest.com/abhishek7gg7",
            "https://twitter.com/theabbiee",
            "https://github.com/theabbie"
         ],
         "logo":{
            "@type":"ImageObject",
            "@id":"https://${req.headers.host}",
            "url":"https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/IMG_20190720_184556.jpg",
            "width": 400,
            "height":225,
            "caption":"${req.headers.host.split(".")[0]}"
         },
         "image":{
            "@id":"https://${req.headers.host}"
         }
      },
      {
         "@type":"WebSite",
         "@id":"https://${req.headers.host}",
         "url":"https://${req.headers.host}",
         "name":"${req.headers.host.split(".")[0]}",
         "publisher":{
            "@id":"https://${req.headers.host}"
         },
         "potentialAction":{
            "@type":"SearchAction",
            "target":"https://${req.headers.host}/?s={search_term_string}",
            "query-input":"required name=search_term_string"
         }
      },
      {
         "@type":"WebPage",
         "@id":"https://${req.headers.host}",
         "url":"https://${req.headers.host}",
         "inLanguage":"en-US",
         "name":"${req.headers.host.split(".")[0]} official",
         "isPartOf":{
            "@id":"https://${req.headers.host}"
         },
         "about":{
            "@id":"https://${req.headers.host}"
         },
         "datePublished":"${new Date().toISOString()}",
         "dateModified":"${new Date().toISOString()}",
         "description":"${req.headers.host.split(".")[0].toUpperCase()} official is a blog about modern interests, sciences, AI, and Machine learning"
      }
   ]
}
</script>
<meta name="google-site-verification" content="esWdvsZT7Pj4JUmY9NRbjNri9UawGrXbDGBcDgcK3Uo" />
<meta name="description" content="${req.url=="/"?req.headers.host.split(".")[0].toUpperCase()+" official":decodeURIComponent(req.url.substring(1))}">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/Adobe_Post_20190830_210419.png">
<title>${req.url.split("?s=")[0]=="/"?req.headers.host.split(".")[0].toUpperCase():decodeURIComponent(req.url.substring(1))}</title>
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
<div class="w3-content" style="max-width:1400px">
<!-- Header -->
<header class="w3-container w3-center w3-padding-32"> 
  <h1><b><a href="https://${req.headers.host}">${req.url.split("?s=")[0]=="/"?req.headers.host.split(".")[0].toUpperCase():decodeURIComponent(req.url.substring(1))}</a></b></h1>
  <p>Welcome to the blog of <span class="w3-tag"><a href="https://github.com/theabbie">Abhishek</a></span></p>
</header>
${req.url.split("?s=")[0]=="/"?"":(db.has(decodeURIComponent(req.url.substring(1)))?db.get(decodeURIComponent(req.url.substring(1))):extra)}
<center><form action="https://${req.headers.host}"><input name="s" type="text" class="search w3-card w3-input w3-border w3-round-large w3-margin" style="width:75%;" Placeholder="Search"></form></center>
<h3 class="w3-container w3-padding-32">${req.query.s?("Search results for "+req.query.s.bold()):""}</h3>
<div class="w3-row">
<div class="w3-col l8 s12">
  <div class="w3-card-4 w3-margin w3-white">
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[0]}">${phrase[0]}</a></b></h3>
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
  <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Norway" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[1]}">${phrase[1]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[2]}">${phrase[2]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[3]}">${phrase[3]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[4]}">${phrase[4]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[5]}">${phrase[5]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[6]}">${phrase[6]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[7]}">${phrase[7]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[8]}">${phrase[8]}</a></b></h3>
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
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[9]}">${phrase[9]}</a></b></h3>
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
        <a href="/${phrase[10]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[10]}</span><br>
        </a>
      </li>
      <li class="w3-padding-16">
       <a href="/${phrase[11]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[11]}</span><br>
        </a>
      </li> 
      <li class="w3-padding-16">
      <a href="/${phrase[12]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[12]}</span><br>
        </a>
      </li>   
      <li class="w3-padding-16">
      <a href="/${phrase[13]}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[13]}</span><br>
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
    <p>
    <span class="w3-tag w3-light-grey w3-margin-bottom">TECHNOLOGY</span> 
    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">UNIVERSE</span> 
    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">AI</span>
    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">MACHINE LEARNING</span>
    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">PROGRAMMING</span>
    <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">ADSENSE</span>
    </p>
    </div>
  </div>
<!-- AD -->
<div class="w3-card w3-margin">
<center><h3>AD</h3></center>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- paige -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2455012527087318"
     data-ad-slot="7646336409"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
  </div>
<!-- END Introduction Menu -->
</div>
<!-- END GRID -->
</div><br>
<!-- END w3-content -->
</div>
<!-- Footer -->
<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  <button class="w3-button w3-black w3-padding-large w3-margin-bottom"><a href="https://${req.headers.host}/">Next &raquo;</a></button>
  <p class="w3-text-white w3-large">${req.headers.host.split(".")[0].toUpperCase()}</p>
</footer>
</body>
<script>
document.querySelectorAll(".w3-tag").forEach(function(x) {
x.addEventListener("click",function() {location.href="#"+x.innerHTML})
})
</script>
</html>`;
res.setHeader("content-type","text/html");
res.end(result);
})
})

app.listen(process.env.PORT);
