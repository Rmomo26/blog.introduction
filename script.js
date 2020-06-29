$(function(){

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500)
  });

  $('.content').hover(
    function(){
      $(this).find('.text-contents').addClass('active');
    },
    function(){
      $(this).find('.text-contents').removeClass('active');
    });

  $('.btn').click(function(){
    $('.contact-modal-wrapper').fadeIn();
  });

  $('.close-modal').click(function(){
    $('.contact-modal-wrapper').fadeOut();
  });

});
