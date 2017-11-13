import {aboutMeContent, aboutMe} from "./about_me.js";

var openContent = {
  "name": "Joseph Schefer",
  "subTitle": "Full Stack Developer",
}

function createOpen() {
  var openDiv = $('<div/>');
  openDiv.attr("class", "opening right-align");

  var nameTxt = $('<h1/>');
  nameTxt.text(openContent.name);
  nameTxt.css("opacity", "0");

  var subText = $('<h5/>');
  subText.text(openContent.subTitle);
  subText.css("opacity", "0");

  var btn = $('<a/>');
  btn.attr({
    "class": "waves-effect waves-light btn red",
    "id": "enterBtn",
    "style": "opacity: 0"
  });
  btn.text("Enter");


  openDiv.prepend(nameTxt);
  openDiv.append(subText);
  openDiv.append(btn);
  $('.container').append(openDiv);

// Make it appear
  setTimeout(function() {
    nameTxt.animate({"opacity": "1"}, 1000)
  }, 500);

  setTimeout(function() {
    subText.animate({"opacity": "1"}, 1000)
  }, 1000);

  setTimeout(function() {
    btn.animate({"opacity": "1"}, 1000)
  }, 1500);

  $('#enterBtn').on('click touch', function() {
    aboutMe();
    $('.main-content').animate().css("opacity", "1");
    $('.opening').animate().css("opacity", 0);
    setTimeout(function() {
      $('.opening').empty();
    }, 1500)
  });
}


export {createOpen};
