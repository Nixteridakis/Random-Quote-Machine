function myMachine() {
  var newData = new XMLHttpRequest();
  newData.open("GET", "https://talaikis.com/api/quotes/random/");
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
    $(".changeMe1").css("color", hue);
    $(".changeMe2").css("color", hue);
    $(".quote").css("color", hue);
    $("#btn").css("background-color", hue);




  };
  newData.send();
}

function renderHTML(obj) {
  print1 = Object.values(obj);
  $(".changeMe1").html(print1[0]);
  $(".changeMe2").html("- " + print1[1]);
}

myMachine();

$("#btn").on("click", function() {
  myMachine();
});

$("#twitter").on("click", function() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      '"' +
      print1[0] +
      '"     -' +
      print1[1]
  );
});
