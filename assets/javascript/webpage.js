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
      "descShort": "A modern password generator",
      "descLong": "<p>In this age of cybersecurity threats, a strong password is absolutely essential. But strong passwords tend to be exceedingly difficult to remember and so mosy users default to weaker, insecure passwords. Enter <b>GuileCat</b>: a password generator for the digital age. With <b>GuileCat</b>, users can generate secure yet easy to remember passwords to secure their online presence.</p><p><b>GuileCat</b> works on the simple principle that words are considerably easier to remember than a random series of characters. With <b>GuileCat</b>, users are presented with a selection of randomly chosen words outside of the top 10,000 most common words in the English language. The user then can add any number of additional numbers and symbols to their password, ensuring a secure password to safe-guard all their online activities.</p>",
      "image": "./assets/images/GuileCat-logo.jpg",
      "imageAttr": '<a href="https://www.freepik.com/free-photos-vectors/vintage">Vintage vector created by Freepik</a>',
      "imageALT": "GuileCat logo",
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

function portfolio() {
  $('#content-row').empty();
// Primary card col creator
  var colPri = $('<div/>');
  colPri.attr("class", "col sm12 m12");
// Primary card creator
  var cardPri = $('<div/>');
  cardPri.attr("class", "card");
// Primary card content box
  var contentPri = $('<div/>');
  contentPri.attr("class", "card-content");
// Primary card title
  var titlePri = $('<h1/>');
  titlePri.text(portfolioContent.title);
// Row for projects... still needs work
  var rowDiv = $('<div/>');
  rowDiv.attr("class", "row");
// Row to display in-depth project
  var dispDiv = $('<div/>');
  dispDiv.attr("class", "row display")
// Put it all together
  $('#content-row').append(colPri);
  colPri.append(cardPri);
  cardPri.append(contentPri);
  contentPri.prepend(dispDiv);
  contentPri.prepend(titlePri);


  for (var i = 0; i < portfolioContent.projects.length; i++) {
    var project = portfolioContent.projects[i];

// Create cards
    var colDiv = $('<div/>');
    colDiv.attr("class", "col sm12 m4");

    var cardDiv = $('<div/>');
    cardDiv.attr("class", "card project");

    var imgDiv = $('<div/>');
    imgDiv.attr("class", "card-image");

    var img = $('<img>');
    img.attr({
      // "class": "portfolio-img",
      "src": project.image,
      "alt": project.imageALT,
    });

    var title = $('<span/>');
    title.attr("class", "card-title");
    title.text(project.title);

    var icon = $('<a/>');
    icon.attr({
      "class": "btn-floating halfway-fab waves-effect waves-light red",
      "data-index": i,
    });
    icon.html('<i class="material-icons">add</i>');

    var contentDiv = $('<div/>');
    contentDiv.attr("class", "card-content");

    var contentShort = $('<p/>');
    contentShort.text(project.descShort);

    // Put it all together in the loop
    contentDiv.append(contentShort);
    cardDiv.append(contentDiv);
    imgDiv.append(img);
    contentDiv.prepend(title);
    imgDiv.append(icon);
    cardDiv.prepend(imgDiv);
    colDiv.append(cardDiv);
    rowDiv.append(colDiv)
    contentPri.append(rowDiv);

// End of for loop
  };
}

function displayProject(index) {
  var project = portfolioContent.projects[index];

  var picCol = $('<div/>');
  picCol.attr("class", "col sm12 m4");

  var img = $('<img>');
  img.attr({
    "src": project.image,
    "alt": project.imageALT,
    "class": "portfolio-img"
  });

  $('.display').append(picCol)
  picCol.append(img);

  var textCol = $('<div/>');
  textCol.attr("class", "col sm12 m8");

  var title = $('<h2/>');
  title.text(project.title);

  // var desc = $('<p/>');
  // desc.text(project.descLong);

  $('.display').append(textCol);
  textCol.append(title);
  textCol.append(project.descLong);

}

function aboutMe() {
  $('#content-row').empty();

// Declare variables and attributes
  var colDiv = $('<div/>');
  colDiv.attr("class", "col sm12 m12");

  var cardDiv = $('<div/>');
  cardDiv.attr("class", "card about");

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

  // aboutMe();
  portfolio();

  $('.about-me').on('click touch', function(){
    aboutMe();
  });

  $('.portfolio').on('click touch', function(){
    portfolio();
  });

  $('.btn-floating').on('click touch', function() {
    console.log($(this).attr("data-index"));
    displayProject($(this).attr("data-index"));
  });
})
