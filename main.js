$(document).ready(function (){
    console.log("You are reading this from the console");

    $("h1").css("color", "red");

    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));

    var c = Shape.Circle(200,200, 50);

    c.fillColor = "green";

    paper.view.draw();


});
