document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');

var help = document.querySelector("#pass-reset");
var fields = document.querySelectorAll("input");
var reset = document.getElementById("#pass-reset");
var user = document.getElementById("#email");
var password = document.getElementById('password');
var schedule = [{"course": "ITMD-362", "building": "Stuart","room": "111","days": "MW","time": "3:15-4:30","professor": "K. Stolley"},
                {"course": "ITMT-430", "building": "Tech south","room": "2030","days": "MW","time": "10:00-11:40","professor": "J.Hajek"},
                {"course": "ITMD-465", "building": "Perlstein","room": "131","days": "T","time": "6:25-9:05","professor": "B.Bailey"},
                {"course": "ITMO-433", "building": "Stuart","room": "239","days": "W","time": "5:00-7:40","professor": "S.Shamsuddin"}];

for (var i=0; i < fields.length; i++) {
  fields[i].addEventListener("focus", function(event){
    var text = event.target.getAttribute("data-help");
    help.textContent = text;
  });
  fields[i].addEventListener("blur", function(event) {
    help.textContent = "";
  });
}//end of for statement

function logIn(){

  var text2 = "fields cannot be empty";

  if (user === "froman2@hawk.iit.edu"){
    console.log("welcome to IIT " + user);
  }else{
    help.text2Content = text2;
  }
}//end of logIn function

function makeSchedule() {
  var select = document.querySelector("select");

    if (select.value == "spring"){
      console.log("You selected Spring");
      printSchedule(select.value);
    }else if (select.value == "fall"){
      console.log("You selected Fall");
      printSchedule(select.value);
    }else if (select.value == "summer"){
      console.log("You selected Summer");
    }                                  
}//end of schedule function
function printSchedule(val){
  console.log(val);
  var temp = "";
  var html = '<table class ="table">';
  html += '<tr><th>Course</th><th>Building</th><th>Room</th><th>Day</th><th>Time</th><th>Professor</th></tr>';
  if (val === "spring"){
    temp = schedule;  
  } else if (val === "fall"){
    temp = fall;
  }
  {
    for (var i = 0; i < temp.length; i++){
      html += '<tr>';
      html += '<td>' + temp[i].course + '</td>';
      html += '<td>' + temp[i].building + '</td>';
      html += '<td>' + temp[i].room + '</td>';
      html += '<td>' + temp[i].days + '</td>';
      html += '<td>' + temp[i].time + '</td>';
      html += '<td>' + temp[i].professor + '</td>';
      html +='</tr>';
  }//end of for statement
  html += '</table>';
  document.querySelector('#results').innerHTML = html;
  }//end of if statement
}//end of print schedule
document.querySelector("#selct1").addEventListener('change',makeSchedule, false);
document.getElementById("submit").addEventListener('click',logIn, false);
},false);
