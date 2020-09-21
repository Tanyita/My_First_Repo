function addNumbers() {
    var two = 2;
    var three = 3;

    var five = two + three;

    console.log(five);

}





// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color", "red");

// Use jQuery to target the blue class and make it blue.
$(".blue").css("color", "blue");

// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html('Hello');

addNumbers();

function stringConcat() {
    var taco = "Tanyita Bandita is here";
    var cat = "give me all your money";
    var tacocat = taco + ' ' + cat;

    alert(tacocat);

}

stringConcat();