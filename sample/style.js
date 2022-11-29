// for displaying the Image
function imagePreview(image){
    var images = image.files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        $('#out-put').attr("src",reader.result).width(150).height(200);
    }
   reader.readAsDataURL(images)
   
}

$(document).ready(function(){
    // show Educational background
   $(".btnnext").click(function(){
    var fnameVal = $("#fname").val();
    var contactVal = $("#contact").val(); 
    var emailVal = $("#email").val();
    if(fnameVal.length!=0 && contactVal.length!=0 && emailVal!=0)  
    {
       $(".first").hide(); 
     $(".second").show();

    }
   });
   // show Professional Skills
 
   $(".nextbtn1").click(function(){
    var startVal = $("#start").val();
    var endVal = $("#end").val();
    if(startVal!=0 && endVal!=0){   
    $(".second").hide(); 
       $(".first").hide(); 
     $(".third").show();
    }

  
   });
   $(".backbtn1").click(function(){
    
   
     $(".second").hide();
     $(".first").show();
    
   });
    // show Work History
   $(".nextbtn2").click(function(){
       var skillsVal = $("#skills").val();
    
    if( skillsVal!=0){  
    $(".second").hide(); 
       $(".first").hide(); 
       $(".third").hide(); 
     $(".fourth").show();
       }
   });
   $(".backbtn2").click(function(){
 
   
     $(".third").hide();
     $(".second").show();
  
   });
//    for summary
   $(".nextbtn3").click(function(){
    var stVal = $("#st").val();
    var edVal = $("#ed").val();
    if(stVal!=0 && edVal!=0){
    $(".second").hide(); 
    $(".first").hide(); 
    $(".third").hide(); 
    $(".fourth").hide(); 
  $(".fifth").show();
 }
});
$(".backbtn3").click(function(){

  $(".fourth").hide();
  $(".third").show();
 
});
// for final Review
// $(".nextbtn4").click(function(){
    // var startVal = $("#start").val();
 // var endVal = $("#end").val();
 // if(schoolVal.length!=0 && schoollocationVal!=0 && degreeVal!=0 && fieldVal!=0 && startVal!=0 && endVal!=0){ 
// //     $(".second").hide(); 
// //     $(".first").hide(); 
// //     $(".third").hide(); 
// //     $(".fourth").hide(); 
// //   $(".fifth").hide();
// });
$(".backbtn4").click(function(){
 
 
  $(".fifth").hide();
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
          <input type="text" placeholder="School name" name="schoolName${education_count}" style="width: 560px; height: 50px;" required id="school">
          <label >School name</label>
      </div>
      <div class="input-field">
          <input type="text" placeholder="school location" name="schoolLocation${education_count}" style="width:560px; height: 50px;" id="schooll" required>
          <label >school location</label>
      </div>  
  
  
  </div>
  <div class="field-1">
                    <div class="input-field-1">
                        <input type="text" placeholder="degree" name="degree${education_count}" style="width: 1259px; height: 50px;" id="deg" required>
                        <label >degree</label>
                    </div>
                    <div class="input-field-1">
                        <input type="text" placeholder="field of study" name="field${education_count}" style="width: 1259px; height: 50px;" id="field" required>
                        <label >field of study</label>
                    </div>      
                </div>
                <div class="field"style="grid-gap:11%">
                    <div class="input-field">
                        <input type="date" placeholder="school start" name="schoolStart${education_count}" style="width: 560px; height: 50px;" id="start" required>
                        <label >school start</label>
                    </div>
                    <div class="input-field">
                        <input type="date" placeholder="school end" name="schoolEnd${education_count}" style="width: 560px; height: 50px;" id="end" required>
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
      <input type="text" class="form-control" name="skill1${skill_count}" style="height: 30px; margin-bottom: 5px;" required>
      <select class="form-select mt-2" name="skill_level1${skill_count}" style="height: 30px;" required>
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


function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}









	