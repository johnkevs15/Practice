

$(document).ready(function(){
     // show Educational background
   

    $(".btnnext").click(function(){
     var lastnameVal = $("#lname").val();
     var fnameVal = $("#fname").val();
     var jobVal = $("#job").val();
     var addressVal = $("#address").val();
     var contactVal = $("#contact").val(); 
     var emailVal = $("#email").val();
        // alert("working");
     if(lastnameVal.length!=0 && fnameVal.length!=0 && jobVal.length!=0 && addressVal.length!=0 && contactVal.length!=0 && emailVal!=0)  
     {
      $(".second").show();
     }
    });
    // show Professional Skills
  
    $(".nextbtn1").click(function(){
      var schoolVal = $("#school").val();
      var schoollocationVal = $("#schooll").val();
      var degreeVal = $("#deg").val();
      var fieldVal = $("#field").val();
      var startVal = $("#start").val();
      var endVal = $("#end").val();
      if(schoolVal.length!=0 && schoollocationVal!=0 && degreeVal!=0 && fieldVal!=0 && startVal!=0 && endVal!=0){ 
        $(".second").hide(); 
      $(".first").hide(); 
    $(".third").show();
  }
    });
    $(".backbtn1").click(function(){
      $(".second").hide();
    });
     // show Work History
    $(".nextbtn2").click(function(){
        $(".second").hide(); 
        $(".first").hide(); 
        $(".third").hide(); 
      $(".fourth").show();
    

   
    });
    $(".backbtn2").click(function(){
      $(".third").hide();
      $(".second").show();
    });
     // show Professional Summary
    $(".nextbtn3").click(function(){
        $(".second").hide(); 
        $(".first").hide(); 
        $(".third").hide(); 
        $(".fourth").hide(); 
      $(".fifth").show();
    

   
    });
    $(".backbtn3").click(function(){
      $(".fourth").hide();
      $(".third").show();
    });
    // next
    $(".nextbtn4").click(function(){
    //     $(".second").hide(); 
    //     $(".first").hide(); 
    //     $(".third").hide(); 
    //     $(".fourth").hide(); 
    //   $(".fifth").show();
    

   
    });
    $(".backbtn4").click(function(){
      $(".fifth").hide();
      $(".fourth").show();
    });
  });
  // for to do list
  $(document).ready(function(){
    $('.input').change(function(){
      var input = $(this).val()
      $('ul').append('<li>'+input+'</li>')
      $(this).val('');
    });
    

  });