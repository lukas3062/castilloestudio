// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
   });
});
$('.carousel').carousel({
  interval: 3000
})
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
   target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
});

//separados servicios
$('.A').click(function(){
  $('#negocios').removeClass('oculto');
  $('#negocios').addClass('view');
  $('#container4').addClass('animated fadeInLeftBig');
  $('#proyectos').addClass('oculto');
  $('#direccion').addClass('oculto');
  $('#construccion').addClass('oculto');
  $('#proyectos').removeClass('view');
  $('#direccion').removeClass('view');
  $('#construccion').removeClass('view');
  $('.B').addClass('opaco');
  $('.C').addClass('opaco');
  $('.D').addClass('opaco');
  $('.A').removeClass('opaco');
  $('.A').addClass('select1');
  $('.B').removeClass('select1');
  $('.C').removeClass('select1');
  $('.D').removeClass('select1');
});
$('.AA').click(function(){
  $("html, body").animate({ scrollTop: 2100 }, "slow");
  $('#negocios').removeClass('oculto');
  $('#negocios').addClass('view');
  $('#container4').addClass('animated fadeInLeftBig');
  $('#proyectos').addClass('oculto');
  $('#direccion').addClass('oculto');
  $('#construccion').addClass('oculto');
  $('#proyectos').removeClass('view');
  $('#direccion').removeClass('view');
  $('#construccion').removeClass('view');
  $('.BB').addClass('opaco');
  $('.CC').addClass('opaco');
  $('.DD').addClass('opaco');
  $('.AA').removeClass('opaco');
  $('.AA').addClass('select1');
  $('.BB').removeClass('select1');
  $('.CC').removeClass('select1');
  $('.DD').removeClass('select1');
});
$('.B').click(function(){
  $('#proyectos').removeClass('oculto');
  $('#proyectos').addClass('view');
  $('#container3').addClass('animated rotateInUpLeft');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#direccion').removeClass('view');
  $('#direccion').addClass('oculto');
  $('#construccion').removeClass('view');
  $('#construccion').addClass('oculto');
  $('.A').addClass('opaco');
  $('.C').addClass('opaco');
  $('.D').addClass('opaco');
  $('.B').removeClass('opaco');
  $('.B').addClass('select1');
  $('.A').removeClass('select1');
  $('.C').removeClass('select1');
  $('.D').removeClass('select1');
});
$('.BB').click(function(){
  $("html, body").animate({ scrollTop: 2100 }, "slow");
  $('#proyectos').removeClass('oculto');
  $('#proyectos').addClass('view');
  $('#container3').addClass('animated rotateInUpLeft');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#direccion').removeClass('view');
  $('#direccion').addClass('oculto');
  $('#construccion').removeClass('view');
  $('#construccion').addClass('oculto');
  $('.AA').addClass('opaco');
  $('.CC').addClass('opaco');
  $('.DD').addClass('opaco');
  $('.BB').removeClass('opaco');
  $('.BB').addClass('select1');
  $('.AA').removeClass('select1');
  $('.CC').removeClass('select1');
  $('.DD').removeClass('select1');
});
$('.C').click(function(){
  $('#container5').addClass('animated fadeInUp');
  $('#direccion').removeClass('oculto');
  $('#direccion').addClass('view');
  $('#proyectos').removeClass('view');
  $('#proyectos').addClass('oculto');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#construccion').removeClass('view');
  $('#construccion').addClass('oculto');
  $('.A').addClass('opaco');
  $('.B').addClass('opaco');
  $('.D').addClass('opaco');
  $('.C').removeClass('opaco');
  $('.C').addClass('select1');
  $('.B').removeClass('select1');
  $('.A').removeClass('select1');
  $('.D').removeClass('select1');
});
$('.CC').click(function(){
  $("html, body").animate({ scrollTop: 2100 }, "slow");
  $('#container5').addClass('animated fadeInUp');
  $('#direccion').removeClass('oculto');
  $('#direccion').addClass('view');
  $('#proyectos').removeClass('view');
  $('#proyectos').addClass('oculto');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#construccion').removeClass('view');
  $('#construccion').addClass('oculto');
  $('.AA').addClass('opaco');
  $('.BB').addClass('opaco');
  $('.DD').addClass('opaco');
  $('.CC').removeClass('opaco');
  $('.CC').addClass('select1');
  $('.BB').removeClass('select1');
  $('.AA').removeClass('select1');
  $('.DD').removeClass('select1');
});
$('.D').click(function(){
  $('#container6').addClass('animated fadeInRight');
  $('#construccion').removeClass('oculto');
  $('#construccion').addClass('view');
  $('#proyectos').removeClass('view');
  $('#proyectos').addClass('oculto');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#direccion').removeClass('view');
  $('#direccion').addClass('oculto');
  $('.A').addClass('opaco');
  $('.B').addClass('opaco');
  $('.C').addClass('opaco');
  $('.D').removeClass('opaco');
  $('.D').addClass('select1');
  $('.B').removeClass('select1');
  $('.C').removeClass('select1');
  $('.A').removeClass('select1');
});
$('.DD').click(function(){
  $("html, body").animate({ scrollTop: 2100 }, "slow");
  $('#container6').addClass('animated fadeInRight');
  $('#construccion').removeClass('oculto');
  $('#construccion').addClass('view');
  $('#proyectos').removeClass('view');
  $('#proyectos').addClass('oculto');
  $('#negocios').removeClass('view');
  $('#negocios').addClass('oculto');
  $('#direccion').removeClass('view');
  $('#direccion').addClass('oculto');
  $('.AA').addClass('opaco');
  $('.BB').addClass('opaco');
  $('.CC').addClass('opaco');
  $('.DD').removeClass('opaco');
  $('.DD').addClass('select1');
  $('.BB').removeClass('select1');
  $('.CC').removeClass('select1');
  $('.AA').removeClass('select1');
});
$('.E').click(function(){
  $('#container7').addClass('animated fadeInRight');
  $('#cemento').removeClass('oculto');
  $('#cemento').addClass('view');
  $('#mconstruccion').removeClass('view');
  $('#mconstruccion').addClass('oculto');
  $('#maderas').removeClass('view');
  $('#maderas').addClass('oculto');
  $('.F').addClass('opaco');
  $('.G').addClass('opaco');
  $('.E').removeClass('opaco');
  $('.E').addClass('select1');
  $('.F').removeClass('select1');
  $('.G').removeClass('select1');
});
$('.F').click(function(){
  $('#container8').addClass('animated fadeInRight');
  $('#mconstruccion').removeClass('oculto');
  $('#mconstruccion').addClass('view');
  $('#cemento').removeClass('view');
  $('#cemento').addClass('oculto');
  $('#maderas').removeClass('view');
  $('#maderas').addClass('oculto');
  $('.E').addClass('opaco');
  $('.G').addClass('opaco');
  $('.F').removeClass('opaco');
  $('.F').addClass('select1');
  $('.E').removeClass('select1');
  $('.G').removeClass('select1');
});
$('.G').click(function(){
  $('#container9').addClass('animated fadeInRight');
  $('#maderas').removeClass('oculto');
  $('#maderas').addClass('view');
  $('#mconstruccion').removeClass('view');
  $('#mconstruccion').addClass('oculto');
  $('#cemento').removeClass('view');
  $('#cemento').addClass('oculto');
  $('.F').addClass('opaco');
  $('.E').addClass('opaco');
  $('.G').removeClass('opaco');
  $('.G').addClass('select1');
  $('.F').removeClass('select1');
  $('.E').removeClass('select1');
});
$('#form').click(function(){
  $('.question').removeClass('oculto');
  $('.question').addClass('view');
});
$('#closeform').click(function(){
  $('.question').removeClass('view');
  $('.question').addClass('oculto');
});
// Change navbar color
function sticky_relocate() {
   var window_top = $(window).scrollTop();
   var anchor = $('.nav-marker').offset();
   if($(window).width() >= 768){
      if (window_top > anchor) {
      $('.navbar-default').addClass('bg-nav');
   } else {
      $('.navbar-default').removeClass('bg-nav');
   }
   }
}
$(window).load(function() {
  $(".loader").fadeOut("slow");
});
$(function(){
   $(window).scroll(sticky_relocate);
   sticky_relocate();
});
