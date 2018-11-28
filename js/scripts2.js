var estLoc = null;
var inputName = null;
var inputDate = null;
var inputGender = null;


$(document).ready(function() {
  $("form#initialForm").submit(function(event) {
    inputName = ($("#prelimInputA1").val()).concat(" ", $("#prelimInputA2").val());
    console.log(inputName);
    inputDate = $("#prelimInputB").val();
    inputGender = $("input:radio[name=gender]:checked").val();
    $("div#formA").hide();
    $("div#formB").show();
    $("span#firstName").append($("#prelimInputA1").val());
    event.preventDefault();
  });
  $("form#mainForm").submit(function(event) {
    @("div#formB").hide();
    $("div#endDiv").show();
    event.preventDefault();
  });
  $("form#resetForNew").submit(function(event) {
    inputName = null;
    inputDate = null;
    inputGender = null;
    $("div#endDiv").hide();
    $("div#formA").show();
    event.preventDefault();
  });
});
