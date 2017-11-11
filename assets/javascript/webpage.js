// Import modules
import {aboutMeContent, aboutMe} from "./about_me.js";
import {portfolioContent, portfolio, displayProject} from "./portfolio.js";
import {contactContent, contact} from "./contact.js";
import {createOpen} from "./opening.js";




// Go Function
$(document).ready(function() {
  createOpen();
  // aboutMe();


  $(".button-collapse").sideNav();
// Start on About Me page

// Navigate to About Me
  $('.about-me').on('click touch', function() {
    aboutMe();
  });
// Navigate to Portfolio
  $('.portfolio').on('click touch', function() {
    portfolio();
  });
// Navigate to Contact
  $('.contact-me').on('click touch', function() {
    contact();
  });
})
