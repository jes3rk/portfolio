function titleSequence() {
  $('#title-row').css("height", "100%");
  setTimeout(function() {
    $('#title-name').animate({
      opacity: '1'
    });
  }, 500);
  setTimeout(function() {
    $('#title-sub-heading').animate({
      opacity: '1'
    });
  }, 750);
  setTimeout(function() {
    $('#title-desc').animate({
      opacity: '1'
    });
  }, 2000);
}

function titleSequenceOut() {
  $('#title-name').animate({
    opacity: '0'
  });
  $('#title-sub-heading').animate({
    opacity: '0'
  });
  $('#title-desc').animate({
    opacity: '0'
  });
}

$(document).ready(function() {
  titleSequence();
  $('#title-btn').on('click', function() {
    $('.navbar').animate({
      opacity: '1'
    });
    titleSequenceOut();
    // $('body').animate({
    //   backgroundImage: "url(./assets/images/page_background_blurred.jpg)"
    // });
    // $('body').fadeTo('slow', 1, function() {
    //   $(this).css("background-image", "url(./assets/images/page_background_blurred.jpg)");
    // });
  });
})
