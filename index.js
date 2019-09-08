var app = require('express')();
var axios = require('axios');
var faker = require('faker');
var store = require('data-store');
const $ = require("cheerio");
var db = new store({path: '/tmp/data.json'});
var topics = ['technology','universe','ai','machine learning','programming','adsense','seo','database','cloud'];
var tags = "<br>#AI #Machine Learning #Universe<br> #Technology #Adsense #Programming<br> #SEO #database #cloud";

app.get("/logo", function(req,res) {res.redirect(301,"https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/IMG_20190720_184556.jpg")});

app.get("/sitemap*", function(req,res) {
axios.all([
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D1&sel=td:nth-child(2)&attribs=class&static=true'),
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D2&sel=td:nth-child(2)&attribs=class&static=true'),
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D3&sel=td:nth-child(2)&attribs=class&static=true')
  ])
  .then(axios.spread((one, two, three) => {
var hls = [...[""],...one.data.map(x => x.text),...two.data.map(y => y.text),...three.data.map(z => z.text)]
var result =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
for (i=0; i<hls.length; i++) {result+=
`<url>
<loc>https://${req.headers.host}/${hls[i].split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim()}</loc>
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
<priority>0.75</priority>
</url>
`
}
result+=`</urlset>`
res.type("application/xml").end(result);
}))
})

app.get("/*", function(req,res) {
axios.all([
axios.get("https://typi.tk/?url=https://m.wikihow-fun.com/Special:Randomizer&sel=.step&attribs=classs&static=true"),
axios.get("https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D"+(req.query.s?(topics.includes(req.query.s.toLowerCase())?req.query.s:topics[Math.floor((topics.length)*Math.random())]):topics[Math.floor((topics.length)*Math.random())])+"%26page%3D1&sel=td:nth-child(2)&attribs=classss&static=true")
]).then(axios.spread((contents, x) => {
var phrase = x.data.map(p => p.text);
var content = []
for (i=0; i<9; i++) {content[i]=(contents.data[i] || {text: ""})}
var extra = 
`<img src="https://source.unsplash.com/800x450/?hacker" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${content[0].text.split("WH").shift()}</h4>
<h4 class="w3-container w3-padding-32">${content[1].text+" "+content[2].text}</h4>
<img src="https://source.unsplash.com/800x450/?coding" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${content[3].text+" "+content[4].text}</h4>
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
<h4 class="w3-container w3-padding-32">${content[5].text+" "+content[6].text}</h4>
<img src="https://source.unsplash.com/800x450/?network" alt="Norway" style="width:100%">
<h4 class="w3-container w3-padding-32">${content[7].text+" "+content[8].text}</h4>
<h4 class="w3-container">
<b>Further reading:</b><br>
<ul>
<li><u><a href="/${phrase[14].trim()}">${phrase[14]}</a></u><br></li>
<li><u><a href="/${phrase[15].trim()}">${phrase[15]}</a></u><br></li>
<li><u><a href="/${phrase[16].trim()}">${phrase[16]}</a></u></li>
</ul>
</h4>
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
            "url":"https://${req.headers.host}/logo",
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
      },
     {
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://${req.headers.host+req.url}"
  },
  "headline": "${decodeURIComponent(req.url.substring(1))+"-"+req.headers.host.split(".")[0]}",
  "image": [
    "https://${req.headers.host}/logo"
   ],
  "datePublished": "${new Date().toISOString()}",
  "dateModified": "${new Date().toISOString()}",
  "author": {
    "@type": "Person",
    "name": "Abhishek chaudhary"
  },
   "publisher": {
    "@type": "Organization",
    "name": "${req.headers.host.split(".")[0]}",
    "logo": {
      "@type": "ImageObject",
      "url": "https://${req.headers.host}/logo"
    }
  },
  "description": "${decodeURIComponent(req.url.substring(1))}"
}
   ]
}
</script>
<meta name="google-site-verification" content="esWdvsZT7Pj4JUmY9NRbjNri9UawGrXbDGBcDgcK3Uo" />
<meta name="description" content="${req.url=="/"?req.headers.host.split(".")[0].toUpperCase()+" official is a blog about modern interests, sciences, AI, and Machine learning":(decodeURIComponent(req.url.substring(1))+content[1].text.split(" ").slice(0,21).join(" ")+"...\n"+tags.split("<br>").join(""))}">
<meta name="keywords" content="${topics.join(", ")}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/Adobe_Post_20190830_210419.png">
<title>${req.query.s?("Search results for "+req.query.s):(req.url.split("?s=")[0]=="/"?req.headers.host.split(".")[0].toUpperCase():decodeURIComponent(req.url.substring(1)))}</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
div, img {border-radius: 6px;}
a {text-decoration: none;}
a {background-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
</style>
</head>
<body class="w3-light-grey">
<div class="w3-content" style="max-width:1400px">
<!-- Header -->
<header class="w3-container w3-center w3-padding-32"> 
  <h1><b><a href="https://google.com/search?q=${decodeURIComponent(req.url.substring(1))}">${req.url.split("?s=")[0]=="/"?req.headers.host.split(".")[0].toUpperCase():decodeURIComponent(req.url.substring(1))}</a></b></h1>
  <p>The Blog of <span class="w3-tag"><a href="https://github.com/theabbie">Abhishek</a></span></p>
</header>
${req.url.split("?s=")[0]=="/"?"":(db.has(decodeURIComponent(req.url.substring(1)))?db.get(decodeURIComponent(req.url.substring(1))):extra)}
<center><form action="https://${req.headers.host}"><input name="s" type="text" class="search w3-card w3-input w3-border w3-round-large" style="width:75%;" Placeholder="Search"></form></center>
<h3 class="w3-container w3-padding-16">${req.query.s?((topics.includes(req.query.s.toLowerCase())?"Search":"No")+" results for "+req.query.s.bold()):""}</h3>
<div class="w3-row">
<div class="w3-col l8 s12">
${(function() {
var rs = ``;
for (i=0; i<10; i++) {
rs+=
`<div class="w3-card-4 w3-margin w3-white">
    <img src="https://source.unsplash.com/800x450/?${faker.random.words().split(" ").join(",").split("-").join(",")}" alt="Nature" style="width:100%">
    <div class="w3-container">
      <h3><b><a href="/${phrase[i].trim()}">${phrase[i]}</a></b></h3>
      <h5>${faker.name.firstName()}, <span class="w3-opacity">${faker.date.past().toString().split(" ").splice(0,4).join(" ")}</span></h5>
    </div>
    <div class="w3-container">
      <p>${phrase[i]+tags}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">
        </div>
      </div>
    </div>
  </div>
  <hr>\n`
}
return rs;
})()}
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
        <a href="/${phrase[10].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[10].split(" ").splice(0,6).join(" ")+"<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li>
      <li class="w3-padding-16">
       <a href="/${phrase[11].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[11].split(" ").splice(0,6).join(" ")+"<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li> 
      <li class="w3-padding-16">
      <a href="/${phrase[12].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[12].split(" ").splice(0,6).join(" ")+"<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li>   
      <li class="w3-padding-16">
      <a href="/${phrase[13].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[13].split(" ").splice(0,6).join(" ")+"<br>"+faker.name.firstName().bold()}</span><br>
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
    ${(function() {
    var rs = ``;
    topics.forEach(function(x) {rs+=`<a href="/?s=${x}"><span class="w3-tag w3-light-grey w3-margin-bottom">${x.toUpperCase()}</span></a>\n`})
    return rs;
    })()}
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
  <p class="w3-text-white w3-large">${req.headers.host.split(".")[0].toUpperCase()} official</p>
  <a class="w3-text-white w3-large" href="https://${req.headers.host}/sitemap">Sitemap</a>
</footer>
</body>
</html>`;
res.type("text/html").end(result);
}))
})

app.listen(process.env.PORT);
