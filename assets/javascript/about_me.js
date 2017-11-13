var aboutMeContent = {
  "title": "About Me",
  "picture": "./assets/images/Headshot-not.jpg",
  "pictureALT": "A picture of Joseph Schefer",
  // Put paragraphs as items in an array
  "body": ["Knausgaard fashion axe distillery, hammock kale chips gochujang marfa retro heirloom. Artisan jianbing cold-pressed slow-carb, unicorn dreamcatcher VHS cronut post-ironic four loko pok pok sustainable. Ugh food truck twee, cornhole kitsch hella occupy. Lumbersexual small batch asymmetrical, coloring book yuccie activated charcoal bitters cornhole tousled try-hard hoodie salvia man bun cray iceland. Helvetica keffiyeh single-origin coffee typewriter, knausgaard artisan la croix truffaut try-hard glossier hashtag meh. Put a bird on it crucifix everyday carry normcore la croix coloring book. Franzen DIY messenger bag, succulents tacos everyday carry try-hard food truck af sriracha man bun iceland quinoa. Vexillologist brunch pitchfork, iceland pork belly portland hot chicken next level tacos hell of fam single-origin coffee. Waistcoat humblebrag unicorn, adaptogen literally tumeric church-key bitters. Flexitarian scenester yuccie neutra, asymmetrical 90's lo-fi.",
  "Asymmetrical bespoke pickled, coloring book messenger bag pour-over raw denim. Bicycle rights health goth kickstarter tilde disrupt vaporware iPhone williamsburg aesthetic gentrify copper mug PBR&B cold-pressed bespoke. Retro biodiesel wolf thundercats health goth. Vinyl direct trade disrupt, vexillologist neutra intelligentsia slow-carb woke single-origin coffee cardigan. Tbh waistcoat DIY bicycle rights deep v neutra. Pop-up microdosing leggings austin artisan. Biodiesel jianbing pop-up shabby chic vice bespoke locavore gentrify banh mi.",
  "I bet you’re still using Bootstrap too…"
  ]
}

function aboutMe() {
  $('#content-row').empty();

// Declare variables and attributes
  var colDiv = $('<div/>');
  colDiv.attr("class", "col sm12 m12");

  var cardDiv = $('<div/>');
  cardDiv.attr("class", "card about primary");

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

export {aboutMeContent, aboutMe};
