var contactContent = {
  "title": "Get In Touch",
  "email": "joseph.schefer@gmail.com",
  "icons": [
    {
      "title": "LinkedIn",
      "icon": "./assets/images/icon_linkedin.png",
      "alt": "LinkedIn icon",
      "link": "https://www.linkedin.com/in/joseph-schefer-2b1ab1111/"
    },
    {
      "title": "GitHub",
      "icon": "./assets/images/icon_github.png",
      "alt": "GitHub icon",
      "link": "https://github.com/jes3rk"
    },
    {
      "title": "StackOverflow",
      "icon": "./assets/images/icon_stackoverflow.png",
      "alt": "StackOverFlow icon",
      "link": "https://stackoverflow.com/users/8705338/joseph"
    },
    {
      "title": "gmail",
      "icon": "./assets/images/icon_gmail.png",
      "alt": "Gmail Icon",
      "link": "mailto:Joseph.Schefer@gmail.com"
    }
  ]
}

function contact() {
  $('#content-row').empty();

// Declare variables and attributes
  var colDiv = $('<div/>');
  colDiv.attr("class", "col sm12 m12");

  var cardDiv = $('<div/>');
  cardDiv.attr("class", "card primary");

  var contentDiv = $('<div/>');
  contentDiv.attr("class", "card-content");

  var title = $('<h1/>');
  title.text(contactContent.title);

  var contactRow = $('<div/>');
  contactRow.attr("class", "row");

  var contactCol = $('<div/>');
  contactCol.attr("class", "row center-align");

  for (var i = 0; i < contactContent.icons.length; i++) {
    var contact = contactContent.icons[i];

    var link = $('<a/>');
    link.attr({
      "href": contact.link,
      "target": "_blank"
    })

    var icon = $('<img>');
    icon.attr({
      "src": contact.icon,
      "alt": contact.alt,
      "class": "contact-icon"
    });

    link.append(icon);
    contactCol.append(link);
  }

// Put it all together
  contactRow.append(contactCol);
  contentDiv.append(contactRow);
  contentDiv.prepend(title);
  cardDiv.append(contentDiv);
  colDiv.append(cardDiv);
  $('#content-row').append(colDiv);
}

export {contact};
