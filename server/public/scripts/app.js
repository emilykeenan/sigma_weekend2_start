var count = 0; //global variable to keep track of student indices

var studentNumber = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);
        showFirst();
        $('#students').children().on("click", showNext);
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



function showFirst() {
  $('.indivStudent0').show();
}

function showNext(){
  $(this).next().show();
}
