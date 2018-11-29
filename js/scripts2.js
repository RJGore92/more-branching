var estLoc = null;
var inputName = null;
var inputDate = null;
var inputGender = null;
var resultNumber = 1;
var targetSpectrum = null;

var findLocationA = function(resultA) {
  if (resultA == "winter")
  {
    return 350;
  }
  else if (resultA == "spring") {
    return 225;
  }
  else if (resultA == "summer") {
    return 125;
  }
  else {
    return 25;
  }
}

var findLocationB = function(resultB) {
  if (resultB == "warm") {
    return 150;
  }
  else {
    return 450;
  }
}

var findLocationC = function(resultC) {
  if (resultC == "morning") {
    return 75;
  }
  else if (resultC == "afternoon") {
    return 150;
  }
  else if (resultC == "evening") {
    return 300;
  }
  else {
    return 425;
  }
}



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
    var locPointA;
    var locPointB;
    var locPointC;
    var resultA = $("input:radio[name=season]:checked").val();
    var resultB = $("input:radio[name=temp]:checked").val();
    var resultC = $("input:radio[name=time]:checked").val();

    locPointA = findLocationA(resultA);
    locPointB = findLocationB(resultB);
    locPointC = findLocationC(resultC);

    estLoc = Math.floor((locPointA + locPointB + locPointC)/3);
    targetSpectrum = Math.floor(estLoc/100);
    var findOffset = Math.floor((estLoc%100)/9);
    console.log(locPointA);
    console.log(locPointB);
    console.log(locPointC);
    console.log(estLoc);
    console.log(targetSpectrum);
    console.log(findOffset);

    $("div#resultLogDiv").after(
      "<div id='result" + resultNumber + "'>" +
        "<div class='row' id='inputPrelim" + resultNumber + "'>" +
          "<div class='col-md-6'>" +
            "<h6>" + inputName + "</h6></div>" +
          "<div class='col-md-2'>" +
            "<h6>" + inputGender + "</h6></div>" +
          "<div class='col-md-4'>" +
            "<h6>" + inputDate + "</h6></div></div>" +
        "<div class='row' id='resultSpectrum" + resultNumber + "'></div>" +
        "<div class='row' id='spectrumGuess" + resultNumber + "'></div>" +
      "</div>"
    )

    $("div#resultSpectrum"+resultNumber).append(
      "<div class='col-md-12'>"+
      "<div class='card spectRange' id='tarSpect" + resultNumber + "'></div></div>"
    )

    $("div#spectrumGuess"+resultNumber).append(
      "<div class='col-md-1 offset-md-"+findOffset+"'>" +
        "<p>^---^</p></div>"
    )

    if (targetSpectrum == 0)
    {
      $("div#tarSpect"+resultNumber).addClass("spectrumA");
    }
    else if (targetSpectrum == 1) {
      $("div#tarSpect"+resultNumber).addClass("spectrumB");
    }
    else if (targetSpectrum == 2) {
      $("div#tarSpect"+resultNumber).addClass("spectrumC");
    }
    else if (targetSpectrum == 3) {
      $("div#tarSpect"+resultNumber).addClass("spectrumD");
    }
    else {
      $("div#tarSpect"+resultNumber).addClass("spectrumE");
    }

    $("div#resultLogDiv").show();
    $("div#formB").hide();
    $("div#resetDiv").show();
    event.preventDefault();
  });
  $("form#resetForNew").submit(function(event) {
    inputName = null;
    inputDate = null;
    inputGender = null;
    estLoc = null;
    targetSpectrum = null;
    ++resultNumber;
    console.log(estLoc);
    console.log(targetSpectrum);
    console.log(resultNumber);
    console.log(inputName);
    $("div#resetDiv").hide();
    $("div#formA").show();
    $("#initialForm")[0].reset();
    $("#mainForm")[0].reset();
    event.preventDefault();
  });
});
