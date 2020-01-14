const anim = lottie.loadAnimation({
  container: document.getElementById('anime-wrapper'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
});
$(function () {
  $(".mainSite").css("display", "none");
  setTimeout(function () {
    $('.loadAnime').fadeOut();
  }, 2000);
});
$(function () {
  $(".mainSite").css({opacity: '0'});
  setTimeout(function () {
    $(".mainSite").css("display", "block");
    $(".mainSite").stop().animate({opacity: '1'}, 1000);
  }, 2500);
});