window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();


window.addEventListener('DOMContentLoaded', function(){

if (w > 999) {
} else {
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-list').fadeToggle(200);
    });

  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-list').fadeToggle(200);
});
  }
});