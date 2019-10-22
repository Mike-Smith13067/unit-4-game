//                      Crystal Collector Game
// Psuedocode




//1. Assign/define variables.
    //a. Crystal values.
    var blueGem = 0;
    var purpleGem = 0;
    var whiteGem = 0;
    var greenGem = 0;
    var targetNumber =0;
    console.log (blueGem);
    console.log (purpleGem);
    console.log (whiteGem);
    console.log (greenGem);
    
        //random values between 1-12.
    document.getElementById ("targetNumber").textContent="Target Value: " + targetNumber;
   

    
        //New value assigned at game start.
        //Value hidden until assigned crystal button is clicked.
    
    document.getElementById ("card-text-blue").textContent="Current Value: " + blueGem;
    document.getElementById ("card-text-purple").textContent="Current Value: " + purpleGem;
    document.getElementById ("card-text-white").textContent="Current Value: " + whiteGem;
    document.getElementById ("card-text-green").textContent="Current Value: " + greenGem;
    //b. Player score.
    var playerScore = 0;
    document.getElementById ("playerScore").textContent="Current Score: " + playerScore;
    //c. Player wins/losses.
    var playerWins = 0;
    document.getElementById ("playerWins").textContent="Player Wins: " + playerWins;
    var playerLosses = 0;
    document.getElementById ("playerLosses").textContent="Player Losses: " + playerLosses;
    //d. Target value to be guessed.
        // Randomly generated between 19-120
        // Resets to new value at game start

