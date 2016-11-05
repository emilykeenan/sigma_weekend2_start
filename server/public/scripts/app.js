var count = 0; //global variable to keep track of student indices

var studentNumber = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);
        showFirstStudent();
        $('#nextButton').on("click", showNextStudent);
        $('#prevButton').on("click", showPrevStudent);
      }
    });
});

//function to add students to the DOM and add counter divs to the DOM
function appendDom(data) {
  for (var i = 0 ; i < data.sigmanauts.length ; i++) {
    $("#students").append('<div class="student indivStudent'+ count + '"></div>');
    //setting var $el to individual student divs
    var $el = $("#students").children().last();
    $el.append('<h3>' + data.sigmanauts[i].name + '</h3>');
    $el.append('<h5>' + "Github Username: " + data.sigmanauts[i].git_username + '</h5>');
    $el.append('<p>' + "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');
    $el.hide();
    $("#counter").append('<div class="counter studentCounter'+ count + '"></div>');
    //adding to count, assigning higher number for student div class
    count++;
  }
}


//function to show Chris
function showFirstStudent() {
  $('.indivStudent0').show();
}

function showLastStudent() {
  $('.indivStudent18').show();
}

//function to hide the current student and show the next one
//if it reaches the last student, it starts back at the first
function showNextStudent(){
  $('.indivStudent' + studentNumber).fadeOut().hide();
  studentNumber++;
  $('.indivStudent' + studentNumber).fadeIn().show();
  if(studentNumber > 18){
    studentNumber = 0;
    showFirstStudent();
  }
  console.log(studentNumber);
}

//function to hide the current student and show the previous one
//if it reaches the first student, it starts over from the back
function showPrevStudent(){
  $('.indivStudent' + studentNumber)fadeOut().hide();
  studentNumber--;
  $('.indivStudent' + studentNumber).fadeIn().show();
  if(studentNumber < 0){
    studentNumber = 18;
    showLastStudent();
  }
  console.log(studentNumber);
}
