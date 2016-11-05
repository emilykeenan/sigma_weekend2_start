var count = 0;
var studentNumber = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);
      }
    });
});

function appendDom(data) {
  for (var i = 0 ; i < data.sigmanauts.length ; i++) {
    $("#students").append('<div class="indivStudent'+ count + '"></div>');
//style="display:none"
    //setting var $el to individual student divs
    var $el = $("#students").children().last();
    $el.append('<h3>' + data.sigmanauts[i].name + '</h3>');
    $el.append('<h5>' + "Github Username: " + data.sigmanauts[i].git_username + '</h5>');
    $el.append('<p>' + "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');

    $("#counter").append('<div class="studentCounter'+ count + '"></div>');

    count++;
  }
}
