$(document).ready(function(){
  $('.open').click(function(){
           $('.open').css('display','none');
           $('#bti-close').removeClass("btn-colse") ;
           $('#bti-close').attr('style', 'display: block !important'); 
            $(".navCol").show(500);
       });


     $('.btn-close').click(function(){
       	   $('.open').css('display','block')
           $('.btn-close').css('display','none');
           $(".navCol").hide(500);
             
       });
});