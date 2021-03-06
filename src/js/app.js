$( document ).ready(function() {
})
// Code to Scroll Top each Section
$(function() {
  $('.btnScroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Partículas del inicio
particlesJS.load('startSection', 'src/data/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// Sticky Nav Bar
var stickyTop = $(".navbar").offset().top -2;
//whenever the user scrolls, measure how far we have scrolled
$(window).scroll(function() {
  var windowTop = $(window).scrollTop();
  //check to see if we have scrolled past the original location of the sticky element
  if (windowTop > stickyTop) {
    //if so, change the sticky element to fised positioning
    $('.sticky').addClass('stuck');
  } else {   
    $('.sticky').removeClass('stuck');
  }
});

// Esconder collapse nav al click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Hover on ."conocer" button
$('.know-me-btn').mouseenter(function(){
  $('.fa-angle-right').css('transform', 'rotate(90deg)');
})
$('.know-me-btn').mouseleave(function(){
  $('.fa-angle-right').css('transform', 'rotate(0deg)');
})

