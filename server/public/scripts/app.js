var count = 0; //global variable to keep track of student indices

var studentNumber = 0; //global variable to keep track of which student is showing

var timer = setInterval(showNextStudent, 10000); //global variable to set timer

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);
        showFirstStudent();
        activateFirstCounter();
        timer;
        $('#nextButton').on("click", showNextStudent);
        $('#nextButton').on("click", resetTimer);
        $('#prevButton').on("click", showPrevStudent);
        $('#prevButton').on("click", resetTimer);
      }
    });
});

//function to add students to the DOM and add counter divs to the DOM
function appendDom(data) {
  for (var i = 0 ; i < data.sigmanauts.length ; i++) {
    $("#students").append('<div class="student indivStudent'+ count + '"></div>');
    //setting var $el to individual student divs
    var $el = $("#students").children().last();
    $el.append('<h2>' + data.sigmanauts[i].name + '</h2>');
    $el.append('<p>' + "Github Username: " + data.sigmanauts[i].git_username + '</p>');
    $el.append('<p>' + "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');
    $el.hide();
    $("#counter").append('<div class="counter studentCounter'+ count + '"></div>');
    //adding to count, assigning higher number for student div class
    count++;
  }
}


//function to show Chris
function showFirstStudent() {
  $('.indivStudent0').fadeIn("slow").show();
}

//function to activate first counter
function activateFirstCounter() {
  $('.studentCounter0').addClass('active');
}

//function to show Kris
function showLastStudent() {
  $('.indivStudent18').fadeIn("slow").show();
}

//function to activate last counter
function activateLastCounter() {
  $('.studentCounter18').addClass('active');
}

//function to hide the current student and show the next one
//if it reaches the last student, it starts back at the first
//this also advances the student counter
function showNextStudent(data){
  $('.indivStudent' + studentNumber).fadeOut("slow").hide();
  $('.studentCounter' + studentNumber).removeClass('active');
  studentNumber++;
  $('.indivStudent' + studentNumber).fadeIn("slow").show();
  $('.studentCounter' + studentNumber).addClass('active');
  if(studentNumber > 18){
    studentNumber = 0;
    showFirstStudent();
    activateFirstCounter();
  }
  console.log(studentNumber);
}

//function to hide the current student and show the previous one
//if it reaches the first student, it starts over from the back
function showPrevStudent(data){
  $('.indivStudent' + studentNumber).fadeOut("slow").hide();
  $('.studentCounter' + studentNumber).removeClass('active');
  studentNumber--;
  $('.indivStudent' + studentNumber).fadeIn("slow").show();
  $('.studentCounter' + studentNumber).addClass('active');
  if(studentNumber < 0){
    studentNumber = 18;
    showLastStudent();
    activateLastCounter();
  }
  console.log(studentNumber);
}

// function to reset timer on clicks
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(showNextStudent, 10000);
}
