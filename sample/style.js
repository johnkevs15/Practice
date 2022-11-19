// for displaying the Image
function imagePreview(image){
    var images = image.files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        $('#out-put').attr("src",reader.result).width(150).height(200);
    }
   reader.readAsDataURL(images)
   
}
// for adding education
$(document).ready(function(){
    // show Educational background
   $(".btnnext").click(function(){
    
    // var lastnameVal = $("#lname").val();
    // var fnameVal = $("#fname").val();
    // var jobVal = $("#job").val();
    // var addressVal = $("#address").val();
    // var contactVal = $("#contact").val(); 
    // var emailVal = $("#email").val();
    // if(lastnameVal.length!=0 && fnameVal.length!=0 && jobVal.length!=0 && addressVal.length!=0 && contactVal.length!=0 && emailVal!=0)  
    // {
       $(".first").hide(); 
     $(".second").show();
    // }
   });
   // show Professional Skills
 
   $(".nextbtn1").click(function(){
       $(".second").hide(); 
       $(".first").hide(); 
     $(".third").show();
   

  
   });
   $(".backbtn1").click(function(){
    // var schoolVal = $("#school").val();
    // var schoollocationVal = $("#schooll").val();
    // var degreeVal = $("#deg").val();
    // var fieldVal = $("#field").val();
    // var startVal = $("#start").val();
    // var endVal = $("#end").val();
    // if(schoolVal.length!=0 && schoollocationVal!=0 && degreeVal!=0 && fieldVal!=0 && startVal!=0 && endVal!=0){ 
     $(".second").hide();
     $(".first").show();
    // }
   });
    // show Work History
   $(".nextbtn2").click(function(){
       $(".second").hide(); 
       $(".first").hide(); 
       $(".third").hide(); 
     $(".fourth").show();
   });
});

// for add education
var education_count = 1;
function addEducation(){
  let addEducation = document.getElementById('addEducation');
  let educationHide = document.getElementById('education_hide');

  if(education_count<3)
  {
      ++education_count;
      var field = 
      `  <div class="field" style="grid-gap:11% ;margin-top:30px;">
      <div class="input-field">
          <input type="text" placeholder="School name" style="width: 570px; height: 50px;" required id="school">
          <label >School name</label>
      </div>
      <div class="input-field">
          <input type="text" placeholder="school location" style="width: 570px; height: 50px;" id="schooll" required>
          <label >school location</label>
      </div>  
  
  
  </div>
  <div class="field-1">
                    <div class="input-field-1">
                        <input type="text" placeholder="degree" style="width: 1285px; height: 50px;" id="deg" required>
                        <label >degree</label>
                    </div>
                    <div class="input-field-1">
                        <input type="text" placeholder="field of study" style="width: 1285px; height: 50px;" id="field" required>
                        <label >field of study</label>
                    </div>      
                </div>
                <div class="field"style="grid-gap:11%">
                    <div class="input-field">
                        <input type="date" placeholder="school start" style="width: 570px; height: 50px;" id="start" required>
                        <label >school start</label>
                    </div>
                    <div class="input-field">
                        <input type="date" placeholder="school end" style="width: 570px; height: 50px;" id="end" required>
                        <label >school end</label>
                    </div>  
                
                
                </div>`;
      var htmlObject = document.createElement('div')
      htmlObject.innerHTML=field;
      addEducation.insertAdjacentElement("beforeend", htmlObject);
    }
    if(education_count==3)
    {
        educationHide.style = "display:none";
    }
}
// for professional Skills
var skill_count =1;
function addSkill(){
  let addSkill = document.getElementById('addSkill');
  let skillHide = document.getElementById('skill_hide');
  if(skill_count<5)
  {
      ++skill_count;
      var field = 
      `<div class="mb-3" style="display: grid; padding:10px; with:100%;">
      <label for="exampleInputEmail1" class="form-label">Your Skills</label>
      <input type="text" class="form-control" name="skill1" style="height: 30px; margin-bottom: 5px;" required>
      <select class="form-select mt-2" name="skill_level1" style="height: 30px;" required>
          <option value="">Select stars based upon your skill level</option>
          <option value="1">1 - Novice</option>
          <option value="2">2 - Advanced Beginner</option>
          <option value="3">3 - Competent</option>
          <option value="4">4 - Proficient</option>
          <option value="5">5 - Expert</option>
      </select>
  </div>`;
      console.log(field);
      var htmlObject = document.createElement('div');
      htmlObject.innerHTML=field;
      addSkill.insertAdjacentElement("beforeend", htmlObject);
  }
  if(skill_count==4)
  {
      skillHide.style = "display:none";
  }
}
 // for to do list
//  $(document).ready(function(){
//  $('#skilladd').click(function(){
//     var input = $('.input').val()
//    var text= $("#select :selected").text();
//   var value = $("#select").val();
//     $('ul').append('<li">'+input +'\n'+ text+'</li>').css("text-decoration","none")
//     $(this).val('');
 
//  })
 
  

// });


