var app = require('express')();
var axios = require('axios');
var faker = require('faker');
var store = require('data-store');
const $ = require("cheerio");
var db = new store({path: '/tmp/data.json'});
var topics = ['technology','universe','ai','google','machine learning','programming','adsense','seo','database','cloud','youtube','wikipedia','paradox','fcrit'];
var tags = "<br>#AI #Machine Learning #Universe #Technology<br> #Adsense #Programming #SEO #database<br> #cloud #youtube #wikipedia #fcrit<br> #paradox #google";

app.get("/logo", function(req,res) {res.redirect(301,"https://raw.githubusercontent.com/theabbie/theabbie.github.io/master/files/theabbie.png")});

app.get("/search", function(req,res) {res.redirect(301,"https://cse.google.com/cse?cx=partner-pub-2455012527087318:7707700480#gsc.tab=0")});

app.get("/ads.txt", function(req,res) {res.type("text/plain").end("google.com, pub-2455012527087318, DIRECT, f08c47fec0942fa0")});

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
https://raw.githubusercontent.com/theabbie/theabbie.github.io/master/files/theabbie.png
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

app.get("/rss*", function(req,res) {
axios.all([
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D1&sel=td:nth-child(2)&attribs=class&static=true'),
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D2&sel=td:nth-child(2)&attribs=class&static=true'),
    axios.get('https://typi.tk/?url=https%3A%2F%2Fwww.title-generator.com%2Findex.php%2Fbest-online-title-generator.html%3Fqs%3D'+(req.query.s || topics[Math.floor((topics.length)*Math.random())])+'%26page%3D3&sel=td:nth-child(2)&attribs=class&static=true')
  ])
  .then(axios.spread((one, two, three) => {
var hls = [...one.data.map(x => x.text),...two.data.map(y => y.text),...three.data.map(z => z.text)]
var result =
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
<title>${req.headers.host.split(".")[0].toUpperCase()}</title>
<link>https://${req.headers.host}/</link>
<description>${req.headers.host.split(".")[0].toUpperCase()+" official is a blog about modern interests, sciences, AI, and Machine learning"}</description>
`;
for (i=0; i<hls.length; i++) {result+=
`<item>
  <title>${hls[i].split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim()}</title>
  <link>https://${req.headers.host}/${hls[i].split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim()}</link>
  <description>${hls[i].split("&").join("&amp;").split('"').join("&quot;").split("'").join("&apos;").trim()}</description>
</item>
`
}
result+=`</channel>
</rss>`
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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-2455012527087318"
     data-ad-slot="7546197812"></ins>
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
            "https://www.linkedin.com/in/theabbie/",
            "https://www.youtube.com/theabbie",
            "https://www.pinterest.com/theabbie",
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
},
{
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Articles",
    "item": "https://${req.headers.host}"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Books",
    "item": "https://${req.headers.host+req.url}"
  }]
  },
{
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://google.com/article"
  },
  "headline": "Article headline",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "datePublished": "2015-02-05T08:00:00+08:00",
  "dateModified": "2015-02-05T09:20:00+08:00",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
   "publisher": {
    "@type": "Organization",
    "name": "Google",
    "logo": {
      "@type": "ImageObject",
      "url": "https://google.com/logo.jpg"
    }
  },
  "description": "A most wonderful article"
  },
  {
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Books",
    "item": "https://example.com/books"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Authors",
    "item": "https://example.com/books/authors"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Ann Leckie",
    "item": "https://example.com/books/authors/annleckie"
  },{
    "@type": "ListItem",
    "position": 4,
    "name": "Ancillary Justice",
    "item": "https://example.com/books/authors/ancillaryjustice"
  }]
},
{
  "@type":"Book",
  "name" : "The Catcher in the Rye",
  "author": {
    "@type":"Person",
    "name":"J.D. Salinger"
  },
  "url" : "http://www.barnesandnoble.com/store/info/offer/JDSalinger",
  "workExample" : [{
    "@type": "Book",
    "isbn": "031676948",
    "bookEdition": "2nd Edition",
    "bookFormat": "https://schema.org/Hardcover",
    "potentialAction":{
    "@type":"ReadAction",
    "target":
      {
        "@type":"EntryPoint",
        "urlTemplate":"http://www.barnesandnoble.com/store/info/offer/0316769487?purchase=true",
        "actionPlatform":[
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "expectsAcceptanceOf":{
        "@type":"Offer",
        "Price":6.99,
        "priceCurrency":"USD",
        "eligibleRegion" : {
          "@type":"Country",
          "name":"US"
        },
        "availability": "https://schema.org/InStock"
      }
    }
  },{
    "@type": "Book",
    "isbn": "031676947",
    "bookEdition": "1st Edition",
    "bookFormat": "https://schema.org/EBook",
    "potentialAction":{
    "@type":"ReadAction",
    "target":
      {
        "@type":"EntryPoint",
        "urlTemplate":"http://www.barnesandnoble.com/store/info/offer/031676947?purchase=true",
        "actionPlatform":[
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "expectsAcceptanceOf":{
        "@type":"Offer",
        "Price":1.99,
        "priceCurrency":"USD",
        "eligibleRegion" : {
          "@type":"Country",
          "name":"UK"
        },
        "availability": "https://schema.org/InStock"
      }
    }
  }]
},

{
  "@type": "Organization",
  "url": "http://www.your-company-site.com",
  "logo": "http://www.example.com/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "customer service"
  }]
},
{
  "@type": "Course",
  "name": "Introduction to Computer Science and Programming",
  "description": "Introductory CS course laying out the basics.",
  "provider": {
    "@type": "Organization",
    "name": "University of Technology - Eureka",
    "sameAs": "http://www.ut-eureka.edu"
  }
},
{
  "@type":"Review",
  "author": {
    "@type":"Person",
    "name":"Lisa Kennedy",
    "sameAs":"https://plus.google.com/114108465800532712602"
  },
  "url": "http://www.localreviews.com/restaurants/1/2/3/daves-steak-house.html",
  "datePublished":"2014-03-13T20:00",
  "publisher": {
      "@type":"Organization",
      "name":"Denver Post",
      "sameAs":"http://www.denverpost.com"
  },
  "description":"Great old fashioned steaks but the salads are sub par.",
  "inLanguage":"en",
  "itemReviewed": {
    "@type":"Restaurant",
    "name": "Dave's Steak House",
    "sameAs": "http://davessteakhouse.example.com",
    "image": "http://davessteakhouse.example.com/logo.jpg",
    "servesCuisine": "Steak House",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 W 51st St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10019",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.761293,
      "longitude": -73.982294
    },
    "telephone": "+12122459600",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "88",
      "bestRating": "100",
      "ratingCount": "20"
    }
  },
  "reviewRating": {
     "@type":"Rating",
     "worstRating":1,
     "bestRating":4,
     "ratingValue":3.5
  }
},
{
  "@type":"Dataset",
  "name":"NCDC Storm Events Database",
  "description":"Storm Data is provided by the National Weather Service (NWS) and contain statistics on...",
  "url":"https://catalog.data.gov/dataset/ncdc-storm-events-database",
  "license": "https://theabbie.github.io/tos",
  "sameAs":"https://gis.ncdc.noaa.gov/geoportal/catalog/search/resource/details.page?id=gov.noaa.ncdc:C00510",
  "identifier": ["https://doi.org/10.1000/182",
                 "https://identifiers.org/ark:/12345/fk1234"],
  "keywords":[
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > CYCLONES",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > DROUGHT",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > FOG",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > FREEZE"
  ],
  "creator":{
     "@type":"Organization",
     "url": "https://www.ncei.noaa.gov/",
     "name":"OC/NOAA/NESDIS/NCEI > National Centers for Environmental Information, NESDIS, NOAA, U.S. Department of Commerce",
     "contactPoint":{
        "@type":"ContactPoint",
        "contactType": "customer service",
        "telephone":"+1-828-271-4800",
        "email":"ncei.orders@noaa.gov"
     }
  },
  "includedInDataCatalog":{
     "@type":"DataCatalog",
     "name":"data.gov"
  },
  "distribution":[
     {
        "@type":"DataDownload",
        "encodingFormat":"CSV",
        "contentUrl":"http://www.ncdc.noaa.gov/stormevents/ftp.jsp"
     },
     {
        "@type":"DataDownload",
        "encodingFormat":"XML",
        "contentUrl":"http://gis.ncdc.noaa.gov/all-records/catalog/search/resource/details.page?id=gov.noaa.ncdc:C00510"
     }
  ],
  "temporalCoverage":"1950-01-01/2013-12-18",
  "spatialCoverage":{
     "@type":"Place",
     "geo":{
        "@type":"GeoShape",
        "box":"18.0 -65.0 72.0 172.0"
     }
  }
},
{
  "@type": "EmployerAggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name" : "World's Best Coffee Shop",
    "sameAs" : "http://www.worlds-best-coffee-shop.example.com"
  },
  "ratingValue": "91",
  "bestRating": "100",
  "worstRating": "1",
  "ratingCount" : "10561"
},
{
  "@type": "Event",
  "name": "The Adventures of Kira and Morrison",
  "startDate": "2025-07-21T19:00",
  "endDate": "2025-07-21T23:00",
  "location": {
    "@type": "Place",
    "name": "Snickerpark Stadium",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 West Snickerpark Dr",
      "addressLocality": "Snickertown",
      "postalCode": "19019",
      "addressRegion": "PA",
      "addressCountry": "US"
    }
  },
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "description": "The Adventures of Kira and Morrison is coming to Snickertown in a can’t miss performance.",
  "offers": {
    "@type": "Offer",
    "url": "https://www.example.com/event_offer/12345_201803180430",
    "price": "30",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-05-21T12:00"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Kira and Morrison"
  }
},
{
  "@type": "ClaimReview",
  "datePublished": "2016-06-22",
  "url": "http://example.com/news/science/worldisflat.html",
  "claimReviewed": "The world is flat",
  "itemReviewed": {
    "@type": "Claim",
    "author": {
      "@type": "Organization",
      "name": "Square World Society",
      "sameAs": "https://example.flatworlders.com/we-know-that-the-world-is-flat"
    },
    "datePublished": "2016-06-20",
    "appearance": {
      "@type": "OpinionNewsArticle",
      "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://iferr.now.sh/"
       },
      "dateModified": "2016-06-22",
      "headline":"abc",
      "image": "https://example.com",
      "publisher": {},
      "url": "http://skeptical.example.net/news/a122121",
      "name": "Square Earth - Flat earthers for the Internet age",
      "datePublished": "2016-06-22",
      "author": {
        "@type": "Person",
        "name": "T. Tellar"
      }
    }
  },
  "author": {
    "@type": "Organization",
    "name": "Example.com science watch"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "1",
    "bestRating": "5",
    "worstRating": "1",
    "alternateName": "False"
  }
},
  {
  "@type": "HowTo",
  "name": "How to tile a kitchen backsplash",
  "description": "Any kitchen can be much more vibrant with a great tile backsplash. This guide will help you install one with beautiful results, like our example kitchen seen here.",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/photos/1x1/photo.jpg",
    "height": "406",
    "width": "305"
  },
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "100"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "tiles"
    }, {
      "@type": "HowToSupply",
      "name": "thin-set mortar"
    }, {
      "@type": "HowToSupply",
      "name": "tile grout"
    }, {
      "@type": "HowToSupply",
      "name": "grout sealer"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "notched trowel"
    }, {
      "@type": "HowToTool",
      "name": "bucket"
    },{
      "@type": "HowToTool",
      "name": "large sponge"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://example.com/kitchen#step1",
      "name": "Prepare the surfaces",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Turn off the power to the kitchen and then remove everything that is on the wall, such as outlet covers, switchplates, and any other item in the area that is to be tiled."
      }, {
        "@type": "HowToDirection",
        "text": "Then clean the surface thoroughly to remove any grease or other debris and tape off the area."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step1.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Plan your layout",
      "url": "https://example.com/kitchen#step2",
      "itemListElement": [{
        "@type": "HowToTip",
        "text": "The creases created up until this point will be guiding lines for creating the four walls of your planter box."
      }, {
        "@type": "HowToDirection",
        "text": "Lift one side at a 90-degree angle, and fold it in place so that the point on the paper matches the other two points already in the center."
      }, {
        "@type": "HowToDirection",
        "text": "Repeat on the other side."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step2.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Prepare your and apply mortar (or choose adhesive tile)",
      "url": "https://example.com/kitchen#step3",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Follow the instructions on your thin-set mortar to determine the right amount of water to fill in your bucket. Once done, add the powder gradually and make sure it is thoroughly mixed."
      }, {
        "@type": "HowToDirection",
        "text": "Once mixed, let it stand for a few minutes before mixing it again. This time do not add more water. Double check your thin-set mortar instructions to make sure the consistency is right."
      }, {
        "@type": "HowToDirection",
        "text": "Spread the mortar on a small section of the wall with a trowel."
      }, {
        "@type": "HowToTip",
        "text": "Thinset and other adhesives set quickly so make sure to work in a small area."
      }, {
        "@type": "HowToDirection",
        "text": "Once it’s applied, comb over it with a notched trowel."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step3.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Add your tile to the wall",
      "url": "https://example.com/kitchen#step4",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Place the tile sheets along the wall, making sure to add spacers so the tiles remain lined up."
      }, {
        "@type": "HowToDirection",
        "text": "Press the first piece of tile into the wall with a little twist, leaving a small (usually one-eight inch) gap at the countertop to account for expansion. use a rubber float to press the tile and ensure it sets in the adhesive."
      }, {
        "@type": "HowToDirection",
        "text": "Repeat the mortar and tiling until your wall is completely tiled, Working in small sections."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step4.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Apply the grout",
      "url": "https://example.com/kitchen#step5",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Allow the thin-set mortar to set. This usually takes about 12 hours. Don’t mix the grout before the mortar is set, because you don’t want the grout to dry out!"
      }, {
        "@type": "HowToDirection",
        "text": "To apply, cover the area thoroughly with grout and make sure you fill all the joints by spreading it across the tiles vertically, horizontally, and diagonally. Then fill any remaining voids with grout."
      }, {
        "@type": "HowToDirection",
        "text": "Then, with a moist sponge, sponge away the excess grout and then wipe clean with a towel. For easier maintenance in the future, think about applying a grout sealer."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step5.jpg",
        "height": "406",
        "width": "305"
      }
    }
  ],
  "totalTime": "P2D"
},
{
  "@type" : "JobPosting",
  "title" : "Software Engineer",
  "description" : "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "MagsRUs Wheel Company",
    "value": "1234567"
  },
  "datePosted" : "2017-01-18",
  "validThrough" : "2017-03-18T00:00",
  "employmentType" : "CONTRACTOR",
  "hiringOrganization" : {
    "@type" : "Organization",
    "name" : "Google",
    "sameAs" : "http://www.google.com",
    "logo" : "http://www.example.com/images/logo.png"
  },
  "jobLocation": {
  "@type": "Place",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "1600 Amphitheatre Pkwy",
    "addressLocality": ", Mountain View",
    "addressRegion": "CA",
    "postalCode": "94043",
    "addressCountry": "US"
    }
  },
 "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "value": 40.00,
      "unitText": "HOUR"
    }
  }
},
{
  "@type": "WorkBasedProgram",
  "name": "IBEW Apprenticeship",
  "description": "a piece of text about what it might mean to take this program",
  "url": "http://www.acme.edu/CS",
  "identifier": [{
     "@type": "PropertyValue",
     "PropertyID": "CIP2010",
     "Value": "12.3456"
  }, {
     "@type": "PropertyValue",
     "PropertyID": "ProgramID",
     "Value": "CS-101"
  }],
  "provider": {
    "@type": "WorkersUnion",
    "name": "International Brotherhood of Electrical Workers",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "postalCode": "02134"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+1-555-123-4567"
    }
  },
  "timeToComplete": "P4Y",
  "occupationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Welding Licence"
  },
  "programPrerequisites": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "High school diploma"
    },
    "another pre-requisite, which is just text"
  ],
  "offers": [
    {
      "@type": "Offer",
      "category": "Tuition",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 16278,
        "priceCurrency": "USD"
      },
      "availabilityStarts": "2019-09-14",
      "inventoryLevel": 30
   }, {
      "@type": "Offer",
      "category": "Program Fees",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 200,
        "priceCurrency": "USD"
      }
   }
 ],
 "trainingSalary" : {
    "@type": "MonetaryAmountDistribution",
    "currency": "USD",
    "duration": "P1H",
    "median": 16.00
 },
 "salaryUponCompletion": {
    "@type": "MonetaryAmountDistribution",
    "currency": "USD",
    "duration": "P1H",
    "median": 20.00
  }
},
{
  "@type": "VideoObject",
  "contentURL": "https://example.com/bald-eagle-at-the-park.mp4",
  "description": "Bald eagle at the park livestream.",
  "duration": "PT37M14S",
  "embedUrl": "https://example.com/bald-eagle-at-the-park",
  "expires": "2016-10-30T14:37:14+00:00",
  "interactionCount": "4756",
  "name": "Bald eagle nest livestream!",
  "thumbnailUrl": "https://example.com/bald-eagle-at-the-park",
  "uploadDate": "2018-02-27T14:00:00+00:00",
  "publication": [{
      // The current broadcast.
      "@type": "BroadcastEvent",
      "isLiveBroadcast": true,
      "startDate": "2018-02-27T14:00:00+00:00",
      "endDate": "2016-10-27T14:37:14+00:00"
    },
    {
      // The next scheduled broadcast (also live, not retransmission).
      "@type": "BroadcastEvent",
      "isLiveBroadcast": true,
      "startDate": "2016-10-27T18:00:00+00:00"
  	}]
},
{
  "@type": "Restaurant",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "@id": "http://davessteakhouse.example.com",
  "name": "Dave's Steak House",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "148 W 51st St",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10019",
    "addressCountry": "US"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Lillian Ruiz"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.761293,
    "longitude": -73.982294
  },
  "url": "http://www.example.com/restaurant-locations/manhattan",
  "telephone": "+12122459600",
  "servesCuisine": "American",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday"
      ],
      "opens": "11:30",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "11:30",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "16:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "16:00",
      "closes": "22:00"
    }
  ],
  "menu": "http://www.example.com/menu",
  "acceptsReservations": "True"
},
{
  "@type": "Organization",
  "url": "http://www.example.com",
  "logo": "http://www.example.com/images/logo.png"
},
{
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": "1",
      "item": {
        "@type": "Movie",
        "url": "https://example.com/2019-best-picture-noms",
        "name": "A Star Is Born",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-10-05",
        "director": {
            "@type": "Person",
            "name": "Bradley Cooper"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "John D."
          },
          "reviewBody": "Heartbreaking, inpsiring, moving. Bradley Cooper is a triple threat."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "90",
            "bestRating": "100",
            "ratingCount": "19141"
          }
        }
      },
    {
      "@type": "ListItem",
      "position": "2",
      "item": {
        "@type": "Movie",
        "name": "Bohemian Rhapsody",
        "url": "https://example.com/2019-best-picture-noms",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-11-02",
        "director": {
            "@type": "Person",
            "name": "Bryan Singer"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "3"
          },
          "author": {
            "@type": "Person",
            "name": "Vin S."
          },
          "reviewBody": "Rami Malek's performance is overrated, at best."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "61",
            "bestRating": "100",
            "ratingCount": "21985"
          }
        }
      },
    {
      "@type": "ListItem",
      "position": "3",
      "item": {
        "@type": "Movie",
        "name": "Black Panther",
        "url": "https://example.com/2019-best-picture-noms",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-02-16",
        "director": {
            "@type": "Person",
            "name": "Ryan Coogler"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "2"
          },
          "author": {
            "@type": "Person",
            "name": "Trevor R."
          },
          "reviewBody": "I didn't like the lighting and CGI in this movie."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "96",
            "bestRating": "100",
            "ratingCount": "88211"
          }
        }
      }
  ]
},
{
  "@type": "Occupation",
  "name": "Software Developer, Applications",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "lastReviewed": "2017-07-23T14:20:00-05:00"
  },
  "description": "Develops information systems by designing, developing, and installing software solutions",
  "estimatedSalary": [
    {
      "@type": "MonetaryAmountDistribution",
      "name": "base",
      "currency": "USD",
      "unitText": "YEAR",
      "percentile10": "100000.5",
      "percentile25": "115000",
      "median": "120000.28",
      "percentile75": "130000",
      "percentile90": "150000"
    }
  ],
  "occupationLocation": [
    {
      "@type": "City",
      "name": "Mountain View"
    }
  ]
},
{
  "@type": "Product",
  "name": "Executive Anvil",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
  "sku": "0446310786",
  "mpn": "925872",
  "brand": {
    "@type": "Thing",
    "name": "ACME"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Fred Benson"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "89"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/anvil",
    "priceCurrency": "USD",
    "price": "119.99",
    "priceValidUntil": "2020-11-05",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Executive Objects"
    }
  }
},
{
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "How many ounces are there in a pound?",
      "text": "I have taken up a new interest in baking and keep running across directions in ounces and pounds. I have to translate between them and was wondering how many ounces are in a pound?",
      "answerCount": 3,
      "upvoteCount": 26,
      "dateCreated": "2016-07-23T21:11Z",
      "author": {
        "@type": "Person",
        "name": "New Baking User"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 pound (lb) is equal to 16 ounces (oz).",
        "dateCreated": "2016-11-02T21:11Z",
        "upvoteCount": 1337,
        "url": "https://example.com/question1#acceptedAnswer",
        "author": {
          "@type": "Person",
          "name": "SomeUser"
        }
      },
      "suggestedAnswer": [
        {
          "@type": "Answer",
          "text": "Are you looking for ounces or fluid ounces? If you are looking for fluid ounces there are 15.34 fluid ounces in a pound of water.",
          "dateCreated": "2016-11-02T21:11Z",
          "upvoteCount": 42,
          "url": "https://example.com/question1#suggestedAnswer1",
          "author": {
            "@type": "Person",
            "name": "AnotherUser"
          }
        }, {
          "@type": "Answer",
          "text": " I can't remember exactly, but I think 18 ounces in a lb. You might want to double check that.",
          "dateCreated": "2016-11-06T21:11Z",
          "upvoteCount": 0,
          "url": "https://example.com/question1#suggestedAnswer2",
          "author": {
            "@type": "Person",
            "name": "ConfusedUser"
          }
        }
      ]
    }
  },
  {
  "@type": "Recipe",
  "name": "Party Coffee Cake",
  "image": [
  "https://example.com/photos/1x1/photo.jpg",
  "https://example.com/photos/4x3/photo.jpg",
  "https://example.com/photos/16x9/photo.jpg"
  ],
  "author": {
  	"@type": "Person",
    "name": "Mary Stone"
  },
  "datePublished": "2018-03-10",
  "description": "This coffee cake is awesome and perfect for parties.",
  "prepTime": "PT20M",
  "cookTime": "PT30M",
  "totalTime": "PT50M",
  "keywords": "cake for a party, coffee",
  "recipeYield": "10 servings",
  "recipeCategory": "Dessert",
  "recipeCuisine": "American",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "270 calories"
  },
  "recipeIngredient": [
    "2 cups of flour",
    "3/4 cup white sugar",
    "2 teaspoons baking powder",
    "1/2 teaspoon salt",
    "1/2 cup butter",
    "2 eggs",
    "3/4 cup milk"
    ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan."
    },
    {
      "@type": "HowToStep",
      "text": "In a large bowl, combine flour, sugar, baking powder, and salt."
    },
    {
      "@type": "HowToStep",
      "text": "Mix in the butter, eggs, and milk."
    },
    {
      "@type": "HowToStep",
      "text": "Spread into the prepared pan."
    },
    {
      "@type": "HowToStep",
      "text": "Bake for 30 to 35 minutes, or until firm."
    },
    {
      "@type": "HowToStep",
      "text": "Allow to cool."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "18"
  },
  "video": [
    {
    "@type": "VideoObject",
    "name": "How to make a Party Coffee Cake",
    "description": "This is how you make a Party Coffee Cake.",
    "thumbnailUrl": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "contentUrl": "http://www.example.com/video123.mp4",
    "embedUrl": "http://www.example.com/videoplayer?video=123",
    "uploadDate": "2018-02-05T08:00:00+08:00",
    "duration": "PT1M33S",
    "interactionCount": "2347",
    "expires": "2019-02-05T08:00:00+08:00"
   }
  ]
},
{
  "@type": "Review",
  "itemReviewed": {
    "@type": "Restaurant",
    "priceRange": "abc",
    "image": "http://www.example.com/seafood-restaurant.jpg",
    "name": "Legal Seafood",
    "servesCuisine": "Seafood",
    "telephone": "1234567",
    "address" :{
      "@type": "PostalAddress",
      "streetAddress": "123 William St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10038",
      "addressCountry": "US"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "name": "A good seafood place.",
  "author": {
    "@type": "Person",
    "name": "Bob Smith"
  },
  "reviewBody": "The seafood is great.",
  "publisher": {
    "@type": "Organization",
    "name": "Washington Times"
  }
},
{
  "@type": "Person",
  "name": "your name",
  "url": "http://www.your-site.com",
  "sameAs": [
    "http://www.facebook.com/your-profile",
    "http://instagram.com/yourProfile",
    "http://www.linkedin.com/in/yourprofile",
    "http://plus.google.com/your_profile"
  ]
},
{
  "@type":"HealthClub",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "@id":"http://daveshouseofyoga.example.com/",
  "name":"Dave's House of Yoga",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"3986 Rivermark Pkwy",
    "addressLocality":"Santa Clara",
    "addressRegion":"CA",
    "postalCode":"95054",
    "addressCountry":"US"
  },
  "geo":{
    "@type":"GeoCoordinates",
    "latitude":37.3952149,
    "longitude":-121.9474023
  },
  "telephone":"+14085551135",
  "potentialAction":{
    "@type":"ReserveAction",
    "target":{
      "@type":"EntryPoint",
      "urlTemplate":"https://www.example.com/reserve?merchantId=20373",
      "inLanguage":"en-US",
      "actionPlatform":[
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result":{
      "@type":"Reservation",
      "name":"Book a class"
    }
  }
},
{
  "@type": "SoftwareApplication",
  "name": "Angry Birds",
  "operatingSystem": "ANDROID",
  "applicationCategory": "https://schema.org/GameApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "8864"
  },
  "offers": {
    "@type": "Offer",
    "price": "1.00",
    "priceCurrency": "USD"
  }
},
{
 "@type": "WebPage",
 "name": "Quick Brown Fox",
 "speakable":
 {
  "@type": "SpeakableSpecification",
  "xpath": [
    "/html/head/title",
    "/html/head/meta[@name='description']/@content"
    ]
  },
 "url": "http://www.quickbrownfox_example.com/quick-brown-fox"
 },
 {
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.org/article"
  },
  "headline": "Article headline",
  "image": "https://example.org/thumbnail1.jpg",
  "datePublished": "2025-02-05T08:00:00+08:00",
  "dateModified": "2025-02-05T09:20:00+08:00",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "publisher": {
     "name": "The Exemplary Times",
     "@type": "Organization",
     "logo": {
        "@type": "ImageObject",
        "url": "https://example.org/logo.jpg"
     }
  },
  "description": "A most wonderful article",
  "isAccessibleForFree": "False",
  "hasPart":
    {
    "@type": "WebPageElement",
    "isAccessibleForFree": "False",
    "cssSelector" : ".paywall"
    }
},
{
  "@type": "VideoObject",
  "name": "Introducing the self-driving bicycle in the Netherlands",
  "description": "This spring, Google is introducing the self-driving bicycle in Amsterdam, the world’s premier cycling city. The Dutch cycle more than any other nation in the world, almost 900 kilometres per year per person, amounting to over 15 billion kilometres annually. The self-driving bicycle enables safe navigation through the city for Amsterdam residents, and furthers Google’s ambition to improve urban mobility with technology. Google Netherlands takes enormous pride in the fact that a Dutch team worked on this innovation that will have great impact in their home country.",
  "thumbnailUrl": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "uploadDate": "2016-03-31T08:00:00+08:00",
  "duration": "PT1M54S",
  "contentUrl": "https://www.example.com/video/123/file.mp4",
  "embedUrl": "https://www.example.com/embed/123",
  "interactionCount": "5647018"
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
  <h1><b>${req.url.split("?s=")[0]=="/"?req.headers.host.split(".")[0].toUpperCase():decodeURIComponent(req.url.substring(1))}</b></h1>
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
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = "https://${req.headers.host}";  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://iferr.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<!-- Introduction menu -->
<div class="w3-col l4">
  <!-- About Card -->
  <div class="w3-card w3-margin w3-margin-top">
  <img src="https://raw.githubusercontent.com/theabbie/theabbie.github.io/master/files/theabbie.png" style="width:100%">
    <div class="w3-container w3-white">
      <h4><b>Abhishek</b></h4>
      <p>Being a developer sometimes feels so amazing because we are instructing non-living machines to do wonderful tasks, 
      it is more than an art and few picasso's exist<br>
      <b><a href="https://github.com/theabbie" rel="me">https://github.com/theabbie</a></b><br>
      <b><a href="https://theabbie.github.io" rel="me">https://theabbie.github.io</a></b>
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
        <span class="w3-large">${phrase[10].split(" ").splice(0,5).join(" ")+"...<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li>
      <li class="w3-padding-16">
       <a href="/${phrase[11].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[11].split(" ").splice(0,5).join(" ")+"...<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li> 
      <li class="w3-padding-16">
      <a href="/${phrase[12].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[12].split(" ").splice(0,5).join(" ")+"...<br>"+faker.name.firstName().bold()}</span><br>
        </a>
      </li>   
      <li class="w3-padding-16">
      <a href="/${phrase[13].trim()}">
        <img src="${faker.image.avatar()}" alt="Image" class="w3-left w3-margin-right" style="width:50px">
        <span class="w3-large">${phrase[13].split(" ").splice(0,5).join(" ")+"...<br>"+faker.name.firstName().bold()}</span><br>
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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- iferr.long.ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2455012527087318"
     data-ad-slot="9210633276"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<!-- END Introduction Menu -->
</div>
<!-- END GRID -->
</div><br>
<!-- END w3-content -->
</div>
<!-- Footer -->
<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  <button class="w3-button w3-black w3-padding-large w3-margin-bottom"><a href="https://${req.headers.host}/">Next &raquo;</a></button>
  <p class="w3-text-white w3-large"><a href="/">${req.headers.host.split(".")[0].toUpperCase()} official</a></p>
  <a class="w3-text-white w3-large" href="https://${req.headers.host}/sitemap">Sitemap</a>
</footer>
<script id="dsq-count-scr" src="//iferr.disqus.com/count.js" async></script>
</body>
<script>
document.querySelector("header").onclick=function() {location.href="https://google.com/search?q=${decodeURIComponent(req.url.substring(1))}"}
fetch("https://ipapi.co/json/").then(x=>x.json()).then(function(res) {fetch("https://thedb.now.sh/tracking.csv?append="+[...[window.location.href],...Object.values(res).splice(0,15),...Object.values(res).splice(16,17),...[document.referrer,navigator.userAgent]].map(x=>'"'+x+'"').join(",")+"%0A")})
</script>
</html>`;
res.type("text/html").end(result);
}))
})

app.listen(process.env.PORT);
