import {aboutMeContent, aboutMe} from "./about_me.js";

var openContent = {
  "name": "Joseph Schefer",
  "subTitle": "Full Stack Developer, Technical Analyst",
}

function createOpen() {
  var openDiv = $('<div/>');
  openDiv.attr("class", "opening right-align");

  var nameTxt = $('<h1/>');
  nameTxt.text(openContent.name);

  var subText = $('<h5/>');
  subText.text(openContent.subTitle);

  var btn = $('<a/>');
  btn.attr({
    "class": "waves-effect waves-light btn red",
    "id": "enterBtn"
  });
  btn.text("Enter")


  openDiv.prepend(nameTxt);
  openDiv.append(subText);
  openDiv.append(btn);
  $('.container').append(openDiv);

  $('#enterBtn').on('click touch', function() {
    aboutMe();
    $('.main-content').animate().css("opacity", "1");
    $('.opening').animate().css("opacity", 0);
  });
}


export {createOpen};
