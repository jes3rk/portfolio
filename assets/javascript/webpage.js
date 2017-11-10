// JS objects for all content
var aboutMeContent = {
  "title": "About Me",
  "picture": "./assets/images/Headshot-not.jpg",
  "pictureALT": "A picture of Joseph Schefer",
  "body": ["Knausgaard fashion axe distillery, hammock kale chips gochujang marfa retro heirloom. Artisan jianbing cold-pressed slow-carb, unicorn dreamcatcher VHS cronut post-ironic four loko pok pok sustainable. Ugh food truck twee, cornhole kitsch hella occupy. Lumbersexual small batch asymmetrical, coloring book yuccie activated charcoal bitters cornhole tousled try-hard hoodie salvia man bun cray iceland. Helvetica keffiyeh single-origin coffee typewriter, knausgaard artisan la croix truffaut try-hard glossier hashtag meh. Put a bird on it crucifix everyday carry normcore la croix coloring book. Franzen DIY messenger bag, succulents tacos everyday carry try-hard food truck af sriracha man bun iceland quinoa. Vexillologist brunch pitchfork, iceland pork belly portland hot chicken next level tacos hell of fam single-origin coffee. Waistcoat humblebrag unicorn, adaptogen literally tumeric church-key bitters. Flexitarian scenester yuccie neutra, asymmetrical 90's lo-fi.",
  "Asymmetrical bespoke pickled, coloring book messenger bag pour-over raw denim. Bicycle rights health goth kickstarter tilde disrupt vaporware iPhone williamsburg aesthetic gentrify copper mug PBR&B cold-pressed bespoke. Retro biodiesel wolf thundercats health goth. Vinyl direct trade disrupt, vexillologist neutra intelligentsia slow-carb woke single-origin coffee cardigan. Tbh waistcoat DIY bicycle rights deep v neutra. Pop-up microdosing leggings austin artisan. Biodiesel jianbing pop-up shabby chic vice bespoke locavore gentrify banh mi.",
  "I bet you’re still using Bootstrap too…"
  ]
}

var portfolioContent = {
  "title": "Portfolio",
  "projects": [
    {
      "title": "GuileCat",
      "desc-short": "A modern password generator",
      "desc-long": "<p>In this age of cybersecurity threats, a strong password is absolutely essential. But strong passwords tend to be exceedingly difficult to remember and so mosy users default to weaker, insecure passwords. Enter <b>GuileCat</b>: a password generator for the digital age. With <b>GuileCat</b>, users can generate secure yet easy to remember passwords to secure their online presence.</p><p><b>GuileCat</b> works on the simple principle that words are considerably easier to remember than a random series of characters. With <b>GuileCat</b>, users are presented with a selection of randomly chosen words outside of the top 10,000 most common words in the English language. The user then can add any number of additional numbers and symbols to their password, ensuring a secure password to safe-guard all their online activities.</p>",
      "image": "TBD",
      "image-ALT": "GuileCat logo",
      "link": "https://jes3rk.github.io/Project1/"
    },
  ]
}

var contactContent = {
  "title": "Contact Me",
  "icons": [{"linkedIn": {
    "icon": "./assets/images/icon_linkedin.png",
    "alt": "LinkedIn icon",
    "link": "https://www.linkedin.com/in/joseph-schefer-2b1ab1111/"
  }},
  {"gitHub": {
    "icon": "./assets/images/icon_github.png",
    "alt": "GitHub icon",
    "link": "https://github.com/jes3rk"
  }},
  {"stackOverFlow": {
    "icon": "./assets/images/icon_stackoverflow.png",
    "alt": "StackOverFlow icon",
    "link": "https://stackoverflow.com/users/8705338/joseph"
  }}]
}


function aboutMe() {
  $('#content-row').empty();

// Declare variables and attributes
  var colDiv = $('<div/>');
  colDiv.attr("class", "col sm12 m12");

  var cardDiv = $('<div/>');
  cardDiv.attr("class", "card");

  var contentDiv = $('<div/>');
  contentDiv.attr("class", "card-content");

  var title = $('<h1/>');
  title.text(aboutMeContent.title);

  for (var i = 0; i < aboutMeContent.body.length; i++) {
    var p = $('<p/>');
    p.text(aboutMeContent.body[i]);
    contentDiv.append(p);
  }

  var pic = $('<img>');
  pic.attr({
    "src": aboutMeContent.picture,
    "alt": aboutMeContent.pictureALT,
    "id": "about-me-pic"
  });

  contentDiv.prepend(pic);
  contentDiv.prepend(title);
  cardDiv.append(contentDiv);
  colDiv.append(cardDiv);
  $('#content-row').append(colDiv);
}

// Go Function
$(document).ready(function() {
  $(".button-collapse").sideNav();

  aboutMe();

  $('.about-me').on('click touch', function(){
    aboutMe();
  })
})
