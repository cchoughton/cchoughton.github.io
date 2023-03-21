$(".action").click(function() {
    $('.top').toggleClass('top_anim');
  setTimeout(
  function() 
  {
  $('.envelope').toggleClass('envelope_anim');
  $('.card').toggleClass('card_anim');
  confetti();
  }, 1500);
  $('.action').off('click');
});
