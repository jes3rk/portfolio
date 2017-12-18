var portfolioContent = {
  title: "Portfolio",
  projects: [
    // Each project is its own opject in an array of objects
    {
      title: "GuileCat",
      descShort: "A modern password generator",
      // descLong is written as one would write html so that styling can happen
      descLong: "<p>In this age of cybersecurity threats, a strong password is absolutely essential. But strong passwords tend to be exceedingly difficult to remember and so mosy users default to weaker, insecure passwords. Enter <b>GuileCat</b>: a password generator for the digital age. With <b>GuileCat</b>, users can generate secure yet easy to remember passwords to secure their online presence.</p><p><b>GuileCat</b> works on the simple principle that words are considerably easier to remember than a random series of characters. With <b>GuileCat</b>, users are presented with a selection of randomly chosen words outside of the top 10,000 most common words in the English language. The user then can add any number of additional numbers and symbols to their password, ensuring a secure password to safe-guard all their online activities.</p>",
      image: "./assets/images/GuileCat-logo.jpg",
      imageAttr: '<p><a href="https://www.freepik.com/free-photos-vectors/vintage">Vintage vector created by Freepik</a></p>',
      imageALT: "GuileCat logo",
      link: "https://jes3rk.github.io/GuileCat/",
      gitHub: "https://github.com/jes3rk/GuileCat"
    },
    {
      title: "CongressWatch",
      descShort: "A simple search engine for members of Congress",
      descLong: "<p>What are your Representatives in Congress up to? Using this simple tool, you can get useful information about every currently sitting member of Congress. Currently, the page displays contact information, bill sponsorship/cosponsorship, how often they vote with their party, and how often they miss votes.</p><p>All data is sourced from <a href='https://projects.propublica.org/api-docs/congress-api/' target='_blank'>ProPublica</a> and all charts were built using <a href='https://d3js.org/' target='_blank'>D3.js</a>.</p>",
      image: "./assets/images/capitol.jpg",
      imageAlt: "Looking up at the Capitol Building",
      link: "https://congressional-data.herokuapp.com/",
      gitHub: "https://github.com/jes3rk/Congressional-Data"
    },
    // {
    //   title: "Hangith thee Man",
    //   descShort: "A simple game of Hangman",
    //   descLong: "<p>In this short game of Monty Python themed hangman, the player can enjoy a quick and whimsical game.</p>",
    //   image: "./assets/images/holy_grail_god.jpg",
    //   imageAlt: "GOD in all his glory",
    //   link: "https://jes3rk.github.io/Hangman-Game/",
    //   gitHub: "https://github.com/jes3rk/Hangman-Game"
    // }
    {
      title: "Dawn",
      descShort: "A short, relaxing game for all ages",
      descLong: "<p>In this short game, the user plays as a wood nypmh-esque character wandering through a world. The game itself is quite simple and can be finished very quickly but has a degree of replayability due to the achievements.</p><p>For my part, I wrote the original score for the game and programmed MIDI instruments to perform it. The score itself uses five seperate pieces of music synced to a master clock in order to dynamically change throughout the game.</p>",
      image: "./assets/images/dawn.jpg",
      imageAlt: "Player character observes the world",
      link: "http://store.steampowered.com/app/605610/Dawn/"
    }
  ]
};

var count = 0;

function portfolio() {
  $('#content-row').empty();
// Primary card col creator
  var colPri = $('<div/>');
  colPri.attr("class", "col sm12 m12");
// Primary card creator
  var cardPri = $('<div/>');
  cardPri.attr("class", "card primary");
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

    var title = $('<h6/>');
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
// Make portfolio projects go big
  $('.btn-floating').on('click touch', function() {
    displayProject($(this).attr("data-index"));
  });
}

function displayProject(index) {
  var project = portfolioContent.projects[index];
// Create col for picture and button
  var picCol = $('<div/>');
  picCol.attr("class", "col sm12 m4");
// Create row for picture
  var imgRow = $('<div/>');
  imgRow.attr("class", "row");

  var img = $('<img>');
  img.attr({
    "src": project.image,
    "alt": project.imageALT,
    "class": "portfolio-img"
  });

  var imgLink = $('<a/>');
  imgLink.attr({
    "href": project.link,
    "target": "_blank"
  });
// Create row for button
  var btnRow = $('<div/>');
  btnRow.attr("class", "row center-align");

// Create go away button
  var btn = $('<a/>');
  btn.attr("class", "close-btn waves-effect waves-light btn red");
  btn.text("Close");

// Put picture and button in

  picCol.append(imgRow);
  imgRow.append(imgLink);
  picCol.append(btnRow);
  btnRow.append(btn);
  imgLink.append(img);

// Create col for text
  var textCol = $('<div/>');
  textCol.attr("class", "col sm12 m8");

  var title = $('<h2/>');
  var link = $('<a/>');
  link.attr({
    "href": project.link,
    "target": "_blank"
  });
  link.text(project.title);
  title.append(link);

  var gitLink = $('<a/>');
  gitLink.attr({
    "href": project.gitHub,
    "target": "_blank"
  });
  gitLink.text("Link to GitHub");
// Put text in

  textCol.append(title);
  textCol.append(project.descLong);
  textCol.append("<br>");
  textCol.append(gitLink);
  textCol.append(project.imageAttr);


  // Animate in display
  function animate() {
    count++;
    $('.display').append(picCol);
    $('.portfolio-img').animate({
        "width": "100%",
    }, 750);
    setTimeout(function() {
      $('.display').animate({
        "opacity": "1"
      }, 750);
      $('.display').append(textCol);
    }, 750);
  };

  if (count > 0) {
    $('.display').empty();
    $('.display').append(picCol);
    $('.display').append(textCol);
    $('.portfolio-img').css("width", "100%");
  } else {
    animate();
  };


// Make big portfolio projects disappear
  $('.close-btn').on('click touch', function() {
    // Make display disappear
    $('.display').animate({
      "opacity": "0"
    }, 750);
    // Timeout for shrinking the image/row size
    setTimeout(function() {
      $('.portfolio-img').animate({
          "width": "0"
      }, 750);
      // need to do this cause otherwise it's super janky
      textCol.empty();
      btnRow.empty();
    }, 750);
    // Long timeout
    setTimeout(function() {
      $('.display').empty();
    }, 1501);
    count = 0;
  });

}

export {portfolio, displayProject};
