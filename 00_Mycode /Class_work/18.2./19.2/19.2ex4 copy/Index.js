// Step 1: Hide a div
$("#button1").on("click", function() {
    $(".hideMe").slideToggle()

});


$("element").on("event", function() {

});


// Step 2: Change a color
$('#button2').on("click", function() {
    $('.cssChange').css("background-color", "red");
});

// Step 3: Append content
$('#button3').on("click", function() {
    $(".appendMe").append("<div class='child'>I got appended! Nice!</div>")

});

// Step 4: Animate a DIV
$("button").click(function() {
    $('.animate').animate({ left: '250px' }, 1000);
});