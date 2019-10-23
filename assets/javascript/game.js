//                      Crystal Collector Game
// Psuedocode




//1. Assign/define variables.
    //a. Crystal values.
    var blueGemGame = 0;
    var yellowGemGame = 0;
    var whiteGemGame = 0;
    var greenGemGame = 0;
    var blueGem = 0;
    var yellowGem = 0;
    var whiteGem = 0;
    var greenGem = 0;
    var targetNumber =0;

    
    
        
    //d. Target value to be guessed.
        // Randomly generated between 19-120
        // Resets to new value at game start

        var targetNumber = Math.floor(Math.random()*110) +19;
        console.log (targetNumber);
        $("#targetNumber").text("Target Value: " + targetNumber);

        //random values between 1-12.
    
        //New value assigned at game start.
        //Value hidden until assigned crystal button is clicked.
//      ***********************BLUE GEM***********************
$("#blue-btn").on("click", function() {
    if (blueGem == 0) {
        blueGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-blue").text ("Current Value: " + blueGem);
}
    else {
        blueGemGame += blueGem;
        console.log (blueGemGame + "bg");
    }
    var playerScore = 0;
    var playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
    $ ("#playerScore").text("Current Score: " + playerScore);
    console.log (playerScore);
})
//      **********************YELLOW GEM**********************

$("#yellow-btn").on("click", function() {
    if (yellowGem == 0) {
        yellowGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-yellow").text ("Current Value: " + yellowGem);
    }
        else {
            yellowGemGame += yellowGem;
            console.log (yellowGemGame + "yg");
        }
        var playerScore = 0;
        var playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
        $ ("#playerScore").text("Current Score: " + playerScore);
        console.log (playerScore);
    })
//      *********************WHITE GEM*****************************
$("#white-btn").on("click", function() {
    if (whiteGem == 0) {
        whiteGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-white").text ("Current Value: " + whiteGem);
}
    else {
        whiteGemGame += whiteGem;
    }
    var playerScore = 0;
    var playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
    $ ("#playerScore").text("Current Score: " + playerScore);
    console.log (playerScore);
})
//******************************GREEN GEM***************************
$("#green-btn").on("click", function() {
    if (greenGem == 0) {
        greenGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-green").text ("Current Value: " + greenGem);
}
    else {
        greenGemGame += greenGem;
    }
    var playerScore = 0;
    var playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
    $ ("#playerScore").text("Current Score: " + playerScore);
    console.log (playerScore);

   
})
if (playerScore == targetNumber) {
    //Reset Game Variables
    alert ("Correct Value Match");

    var blueGemGame = 0;
    var yellowGemGame = 0;
    var whiteGemGame = 0;
    var greenGemGame = 0;
    var blueGem = 0;
    var yellowGem = 0;
    var whiteGem = 0;
    var greenGem = 0;
    var targetNumber =Math.floor(Math.random()*110) +19;
    wins++;
    $ ("#playerWins").text("Player Wins: " + playerWins);

}
else {
    alert ("Correct Value Match");

    var blueGemGame = 0;
    var yellowGemGame = 0;
    var whiteGemGame = 0;
    var greenGemGame = 0;
    var blueGem = 0;
    var yellowGem = 0;
    var whiteGem = 0;
    var greenGem = 0;
    var targetNumber = Math.floor(Math.random()*110) +19;
    losses++;
    $ ("#playerLosses").text("Player Losses: " + playerLosses);

}

    
    //c. Player wins/losses.
    var playerWins = 0;
    document.getElementById ("playerWins").textContent="Player Wins: " + playerWins;
    var playerLosses = 0;
    document.getElementById ("playerLosses").textContent="Player Losses: " + playerLosses;



