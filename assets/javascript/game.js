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
    var targetNumber = Math.floor(Math.random()*101) +19;
    var playerWins = 0;
    var playerLosses = 0;
    var playerScore = 0;
    
    
    //d. Target value to be guessed.
        // Randomly generated between 19-120
        // Resets to new value at game start

    var targetNumber = Math.floor(Math.random()*101) +19;
    console.log (targetNumber);
    $("#targetNumber").text(targetNumber);
    $("#playerScore").text(playerScore);

        //random values between 1-12.
    
        //New value assigned at game start.
        //Value hidden until assigned crystal button is clicked.
//      ***********************BLUE GEM***********************
$("#blue-btn").on("click", function() {
    if (blueGem == 0) {
        blueGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-blue").text ("Current Value: " + blueGem);}
    else {
        blueGemGame += blueGem;
        console.log (blueGemGame + "bg");
    
         playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
        $("#playerScore").text(playerScore);
    console.log (playerScore); 
    gameOver ();
    }
           
})
//      **********************YELLOW GEM**********************

$("#yellow-btn").on("click", function() {
    if (yellowGem == 0) {
        yellowGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-yellow").text ("Current Value: " + yellowGem);}
        else {
            yellowGemGame += yellowGem;
            console.log (yellowGemGame + "yg");}
        
         playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
        $ ("#playerScore").text(playerScore);
        console.log (playerScore);

        gameOver();

          
    })
//      *********************WHITE GEM*****************************
$("#white-btn").on("click", function() {
    if (whiteGem == 0) {
        whiteGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-white").text ("Current Value: " + whiteGem);}
    else {
        whiteGemGame += whiteGem;}
 
     playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
    $ ("#playerScore").text(playerScore);
    console.log (playerScore);

    gameOver();
    

    
})
//******************************GREEN GEM***************************
$("#green-btn").on("click", function() {
    if (greenGem == 0) {
        greenGem = Math.floor(Math.random()*11) + 1;
        $ ("#card-text-green").text ("Current Value: " + greenGem);}
    else {
        greenGemGame += greenGem;}
 
     playerScore = blueGemGame + yellowGemGame + whiteGemGame + greenGemGame;
    $ ("#playerScore").text(playerScore);
    console.log (playerScore);

    gameOver ();
   
   
})

function gameOver () {
    if (playerScore == targetNumber) {
        $("#playerScore").text(playerScore);
            alert("You win!! Player score equals target value. ");
            playerWins++;
            $ ("#playerWins").text("Player Wins: " + playerWins);

        reset();}
    
    if (playerScore > targetNumber) {
        $ ("#playerScore").text(playerScore);
            alert("You Lose! Player score exceeded target value.");
            playerLosses++;
            $("#playerLosses").text("Player Losses: " + playerLosses);
        
        reset();}
    }

function reset() {
     blueGemGame = 0;
     yellowGemGame = 0;
     whiteGemGame = 0;
     greenGemGame = 0;
     blueGem = 0;
     yellowGem = 0;
     whiteGem = 0;
     greenGem = 0;
     targetNumber = Math.floor(Math.random()*101) +19;
     $("#targetNumber").text(targetNumber);
     playerScore = 0;
    $("#playerScore").text(playerScore);}




