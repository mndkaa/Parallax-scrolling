$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.pyramid-1').css('top',(400-(scrolled*.8))+'px');
   $('.pyramid-2').css('top',(200-(scrolled*.6))+'px');
   $('.pyramid-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.pyramid-4').css('top',(600-(scrolled*.5))+'px'); 
   $('.pyramid-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.pyramid-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.pyramid-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.pyramid-8').css('top',(200-(scrolled*.2))+'px');
   $('.pyramid-9').css('top',(200-(scrolled*.4))+'px');
}


