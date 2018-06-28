// A $( document ).ready() block for starting to do things on load
$(document).ready(function () {
    var targetNumber = Math.round((Math.random() * ((120 - 19)) + 19));
    var crystalsTotal = 0;
    var winsCounter = 0;

    var crystals = []
    while (crystals.length < 4) {
        var randomCrystal = Math.round((Math.random() * (12 - 1)) + 1); // generates random # from 1-12
        if (crystals.indexOf(randomCrystal) > -1) { // Checks if random # is in array
            continue; // If it is, don't run next line
        }
        crystals.push(randomCrystal); // Push random # to last item of crystals
    }
    console.log(crystals);
    // At the end - crystals should be an array with 3 indexes (length of 4) full of unique random numbers

    $("#targetNumber").text(targetNumber); //posts the target number to the page
    $('#main').css("background-image", "url(./assets/images/crystalcave.png)");
    $('.transparent').css({ 'opacity' : 0.8 });
    $('.brightText').css("color", "darkred");
    

    //assigns each div as a variable
    var greenCrystal = $("#firstCrystal");
    var topazCrystal = $("#secondCrystal");
    var purpleCrystal = $("#thirdCrystal");
    var redCrystal = $("#fourthCrystal");

    //adds each crystal to the div as img thumbnail
    greenCrystal.prepend('<img id="green" class="img-thumbnail" src="./assets/images/green.png" />')
    topazCrystal.prepend('<img id="topaz" class="img-thumbnail" src="./assets/images/topaz.png" />')
    purpleCrystal.prepend('<img id="purple" class="img-thumbnail" src="./assets/images/purple.png" />')
    redCrystal.prepend('<img id="red" class="img-thumbnail" src="./assets/images/red.png" />')

    // Add random numbers as attributes to newly created elements
    greenCrystal.attr("randomCrystalValue", crystals[0]);
    topazCrystal.attr("randomCrystalValue", crystals[1]);
    purpleCrystal.attr("randomCrystalValue", crystals[2]);
    redCrystal.attr("randomCrystalValue", crystals[3]);

    $("#advisory").text(""); //sets the advisor text to blank on-load

    //establishes the reset button so players can try to match a new number using the random numbers generated
    $("#resetButton").on("click", function () {
        targetNumber = Math.round((Math.random() * ((120 - 19)) + 19));
        $("#targetNumber").text(targetNumber);
        crystalsTotal = 0;
        $("#crystalCounter").text(crystalsTotal);
        $("#advisory").text("");

    });

            $("#firstCrystal").on("click", function () { //green crystal button. 
                var crystalValue1 = greenCrystal.attr("randomCrystalValue");
                crystalValue1 = parseInt(crystalValue1);
                crystalsTotal += crystalValue1;
                $("#crystalCounter").text(crystalsTotal);
                if (crystalsTotal == targetNumber) {
                    winsCounter++;
                    $("#winsCounter").text(winsCounter);
                    $("#advisory").text("YOU WIN!!!");
                    $("#advisory").css("font-size", "50px");
                }
                else if (crystalsTotal > targetNumber) {
                    $("#advisory").text("YOU LOSE!!!");
                    $("#advisory").css("font-size", "50px");
                    
                }
            });
            $("#secondCrystal").on("click", function () {//topaz crystal button.
                var crystalValue2 = topazCrystal.attr("randomCrystalValue");
                crystalValue2 = parseInt(crystalValue2);
                crystalsTotal += crystalValue2;
                $("#crystalCounter").text(crystalsTotal);
                if (crystalsTotal == targetNumber) {
                    winsCounter++;
                    $("#winsCounter").text(winsCounter);
                    $("#advisory").text("YOU WIN!!!");
                    $("#advisory").css("font-size", "50px");
                }
                else if (crystalsTotal > targetNumber) {
                    $("#advisory").text("YOU LOSE!!!");
                    $("#advisory").css("font-size", "50px");
                }
            });
            $("#thirdCrystal").on("click", function () { //purple crystal button
                var crystalValue3 = purpleCrystal.attr("randomCrystalValue");
                crystalValue3 = parseInt(crystalValue3);
                crystalsTotal += crystalValue3;
                $("#crystalCounter").text(crystalsTotal);
                if (crystalsTotal == targetNumber) {
                    winsCounter++;
                    $("#winsCounter").text(winsCounter);
                    $("#advisory").text("YOU WIN!!!");
                    $("#advisory").css("font-size", "50px");
                }
                else if (crystalsTotal > targetNumber) {
                    $("#advisory").text("YOU LOSE!!!");
                    $("#advisory").css("font-size", "50px");
                }
            });
            $("#fourthCrystal").on("click", function () { //red crystal button
                var crystalValue4 = redCrystal.attr("randomCrystalValue");
                crystalValue4 = parseInt(crystalValue4);
                crystalsTotal += crystalValue4;
                $("#crystalCounter").text(crystalsTotal);
                if (crystalsTotal == targetNumber) {
                    winsCounter++;
                    $("#winsCounter").text(winsCounter);
                    $("#advisory").text("YOU WIN!!!");
                    $("#advisory").css("font-size", "50px");
                }
                else if (crystalsTotal > targetNumber) {
                    $("#advisory").text("YOU LOSE!!!");
                    $("#advisory").css("font-size", "50px");
                }
            });
});