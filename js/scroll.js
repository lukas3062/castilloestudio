$(document).ready(function(){
  //init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // create a scene
  var scene1 = new ScrollMagic.Scene({
   triggerElement: '#servicios'
   })
   .setTween('#fly',{opacity:1})
   .addTo(controller);

   var pinIntroScene = new ScrollMagic.Scene({
     triggerElement: '#banner',
     triggerHook: 0,
     duration:'92%'
   })
   .setPin('#banner', {pushFollowers: false})
   .addTo(controller);
});
