$(function(){
   var count = $('.l-mainvisual li').length;
    
    var current = 1;
    
    var next = 2;
    
    var interval = 7000;
    
    var duration = 1000;
    
    var timer;
    
    $('.l-mainvisual li:not(:first-child)').hide();
    
    timer = setInterval(slideTimer,interval);
    function slideTimer(){
        $('.l-mainvisual li:nth-child(+' + current + ')').fadeOut(duration);
        $('.l-mainvisual li:nth-child(+' + next + ')').fadeIn(duration);
        
        current = next;
        next = ++next;
        
        if(next > count){
            next = 1;
        }
    }
})