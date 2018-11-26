var finalTarget = 0;

$(document).ready(function() {
  $("form#questionA").submit(function(event) {
    event.preventDefault();
    var targetInputA = parseInt($("input:radio[name=prelimQuestion]:checked").val());
    console.log(targetInputA);

    $("div#formA").slideToggle();

    if (targetInputA == 100) {
      $("div#formB1").slideToggle();
      finalTarget += targetInputA;
    }
    else {
      $("div#formB2").slideToggle();
      finalTarget += targetInputA;
    }

  });
  $("form#questionBA").submit(function(event) {
    event.preventDefault();
    var targetInputB = parseInt($("input:radio[name=secondQuestionA]:checked").val());
    console.log(targetInputB);

    $("div#formB1").slideToggle();

    if (targetInputB == 10) {
      $("div#formC1").slideToggle();
      finalTarget += targetInputB;
    }
    else {
      $("div#formC2").slideToggle();
      finalTarget += targetInputB;
    }

  });
  $("form#questionBB").submit(function(event) {
    event.preventDefault();
    var targetInputB = parseInt($("input:radio[name=secondQuestionB]:checked").val());
    console.log(targetInputB);

    $("div#formB2").slideToggle();

    if (targetInputB == 30) {
      $("div#formC3").slideToggle();
      finalTarget += targetInputB;
    }
    else {
      $("div#formC4").slideToggle();
      finalTarget += targetInputB;
    }

  });
  $("form#questionCA").submit(function(event) {
    event.preventDefault();
    var targetInputC = parseInt($("input:radio[name=thirdQuestionA]:checked").val());
    console.log(targetInputC);

    $("div#formC1").slideToggle();

    if (targetInputC == 1) {
      $("div#results").slideToggle();
      $("span#charA").show();
      finalTarget += targetInputC;
    }
    else {
      $("div#results").slideToggle();
      $("span#charB").show();
      finalTarget += targetInputC;
    }

  });
  $("form#questionCB").submit(function(event) {
    event.preventDefault();
    var targetInputC = parseInt($("input:radio[name=thirdQuestionB]:checked").val());
    console.log(targetInputC);

    $("div#formC2").slideToggle();

    if (targetInputC == 3) {
      $("div#results").slideToggle();
      $("span#charC").show();
      finalTarget += targetInputC;
    }
    else {
      $("div#results").slideToggle();
      $("span#charD").show();
      finalTarget += targetInputC;
    }

  });
  $("form#questionCC").submit(function(event) {
    event.preventDefault();
    var targetInputC = parseInt($("input:radio[name=thirdQuestionC]:checked").val());
    console.log(targetInputC);

    $("div#formC3").slideToggle();

    if (targetInputC == 5) {
      $("div#results").slideToggle();
      $("span#charE").show();
      finalTarget += targetInputC;
    }
    else {
      $("div#results").slideToggle();
      $("span#charF").show();
      finalTarget += targetInputC;
    }

  });
  $("form#questionCD").submit(function(event) {
    event.preventDefault();
    var targetInputC = parseInt($("input:radio[name=thirdQuestionD]:checked").val());
    console.log(targetInputC);

    $("div#formC4").slideToggle();

    if (targetInputC == 7) {
      $("div#results").slideToggle();
      $("span#charG").show();
      finalTarget += targetInputC;
    }
    else {
      $("div#results").slideToggle();
      $("span#charH").show();
      finalTarget += targetInputC;
    }

  });
});
