
$(window).scroll(function(){
    $(".fade-away").css("opacity", 1 - $(window).scrollTop() / 250);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/





/*$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.top').css("opacity", 1 - scrollVar/300);
})*/