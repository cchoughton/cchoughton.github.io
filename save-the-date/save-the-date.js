$(".action").click(function() {
    $('.envelope_top').toggleClass('top_anim');
  setTimeout(
  function() 
  {
  $('.card').toggleClass('card_anim');
  $('.envelope').toggleClass('envelope_anim');
  confetti();
  }, 1500);
  $('.action').off('click');
});
