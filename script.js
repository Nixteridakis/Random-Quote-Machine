$(document).ready(function() {

  function myMachine() {
    var newData = new XMLHttpRequest();
    newData.open("GET", "https://api.quotable.io/random");
    newData.onload = function() {
      var print = JSON.parse(newData.responseText);
      renderHTML(print);
      var hue =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      $("body").css("background-color", hue);
      $("#quote").css("color", hue);
      $("#author").css("color", hue);
      $(".quote").css("color", hue);
      $("#btn").css("background-color", hue);
    };
    newData.send();
  }

  function renderHTML(obj) {
    data = Object.values(obj);
    console.log(data)
    $("#quote").html(data[1]);
    $("#author").html("- " + data[2]);
  }

  $("#btn").on("click", function() {
    myMachine();
  });

  $("#twitter").on("click", function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        '"' +
        data[1] +
        '" - ' +
        data[2]
    );
  })
  
  myMachine();

});
