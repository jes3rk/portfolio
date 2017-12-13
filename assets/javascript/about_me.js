var aboutMeContent = {
  title: "About Me",
  picture: "./assets/images/Headshot-not.jpg",
  pictureALT: "A picture of Joseph Schefer",
  // Put paragraphs as items in an array
  body: [
    `Joseph Schefer is a talented web designer and programmer. With training from George Washington University's Coding Bootcamp and a Bachelor's from the University of Virginia in Economics, Joseph is constantly seeking the his next challenge or project. Currently, he is exploring the world of data analytics though publically available Congressional and Voter Registration data. Joseph is constantly pushing boundaries and thrives wherever the phrase "good enough" is never enough.`,
    "In the past, Joseph worked as a Composer, Audio Engineer, and Theatrical Technician. Through his work in these fields, he gained a plethora of skills and an insatiable drive to push the boundaries of what is possible. In particular, he has spent considerable time programming virtual instruments and occassionally working on small video game projects. His work frequently involved project management and working on Agile-like teams and projects."
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
  contentDiv.attr("class", "card-content about");

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
  contentDiv.append($('<a/>').attr({
    href: "https://jschefermusic.com",
    target: "_blank"
  })
  .text("His work on music and audio can be found here."));
  contentDiv.append()
  cardDiv.append(contentDiv);
  colDiv.append(cardDiv);
  $('#content-row').append(colDiv);
}

export {aboutMeContent, aboutMe};
