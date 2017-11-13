// Import modules
import {aboutMe} from "./about_me.js";
import {portfolio, displayProject} from "./portfolio.js";
import {contact} from "./contact.js";
import {createOpen} from "./opening.js";

function transition(fun) {
  $('#content-row')
    .animate({opacity: 0}, 600)
    .animate({opacity:1}, 600);
  setTimeout(function() {
    fun();
  }, 600);
}


// Go Function
$(document).ready(function() {
  createOpen();
  // aboutMe();


  $(".button-collapse").sideNav();
// Start on About Me page

// Navigate to About Me
  $('.about-me').on('click touch', function() {
    // aboutMe();
    transition(aboutMe);

  });
// Navigate to Portfolio
  $('.portfolio').on('click touch', function() {
    // portfolio();
    transition(portfolio);

  });
// Navigate to Contact
  $('.contact-me').on('click touch', function() {
    // contact();
    transition(contact);
  });
})
