var current = 0;
   var contWidth =0;
   var finalWidth = 0;
   


    $(window).resize(function() {

       var divWidth = $(window).width();
       /***************************/
      
         var wi=divWidth*4;
         contWidth =wi; /***** con ***/
         finalWidth =  (contWidth*.25)*-1; /***** d***/
         
       $(".slide1").css({'width':divWidth});

        $("#container").css({'width':wi});
        
        $("#container").animate({left:"0px"},200,function(){
                      current = 1;
                    });
                  
});
  function foo(){
        var divWidth = window.innerWidth;
         var wi=divWidth*4;

       contWidth =wi; /***** con ***/
         finalWidth =  (contWidth*.25)*-1; /***** d***/
         

        $("#container").css({'width':wi});
        $(".slide1").css({'width':divWidth});
       
        $("#rp").removeClass("img1");
        $("#rp").addClass("img2");
        $("#rp1").removeClass("img1");
        $("#rp1").addClass("img2");
        $("#rp2").removeClass("img1");
        $("#rp2").addClass("img2");
        $("#rp").animate( { 'opacity': '1'}, 300 , function(){
          $(".conInP1").css({'left':'0px'});
          $(".conInP2").css({'right':'0px'});
        });

  }
    

   $(".cycle-pager").on('click',function(){

          var v = $(this).attr('value');
          if (v == 1){
            $("#container").animate({left:"0px"},300,function(){
                      /*code going here*/
                      current=1;
                    });
                  } /*end Of if*/
          else if(v == 2){
             var divWidth1 = $(window).width();
             divWidth1=divWidth1*(-1);
            $("#container").animate({'left':divWidth1},300,function(){
                      /*code going here*/
                      current = 2;
                    });
                  }  /*end Of if*/
          else if(v == 3){
            var divWidth2 = $(window).width();
             divWidth2 = divWidth2*(-2);
            $("#container").animate({'left':divWidth2},300,function(){
                   current = 3;
                      /*code going here*/
                    });
                  }  /*end Of if*/
                    
            else if(v == 4){
            var divWidth2 = $(window).width();
             divWidth2 = divWidth2*(-3);
            $("#container").animate({'left':divWidth2},300,function(){
                      /*code going here*/
                      current = 4;
                    });
                  }    
       /*alert("hhh"+$(this).attr('value'));
    $("#container").animate({left:"-1366px"},800,function(){
            
           
                    });*/
            
   });
  
   $(".cycle-next").on('click',function(){
   var cwidth = $("#container").width()*-1;
  var currentLeft = parseInt($("#container").css("left"))*1;
  
  if( (currentLeft) == (cwidth*.25) ||  (currentLeft) == (cwidth*.50 ) ||(currentLeft) == (cwidth*.75) || currentLeft==0 ){var final = finalWidth+currentLeft;
   
   if((final*-1) === contWidth){
    $("#container").animate({left:"0"},200,function(){
                
                    });
              }
      else if(currentLeft<contWidth){
                 $("#container").animate({'left':final},200,function(){
                      
                      
                    });
                    }}
  

   });
   