// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
var userChoice = ""
var computerChoice = ""
var randomNumber = 0
var userWin = 0
var compWin = 0

$(document).ready(function(){
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text($("#input").val());
    randomNumber = Math.random()
    // Computer output
    if (randomNumber <= 0.33) {
        computerChoice = "Rock"
        $("#computerChoice").html("Rock");
    }
    if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "Scissors"
        $("#computerChoice").html("Scissors");
    }
    if (randomNumber >= 0.66) {
        computerChoice = "Paper"
        $("#computerChoice").html("Paper");
    }
    // Who wins
    if (userChoice === "Rock" && computerChoice === "Paper") {
        $("#result").html("Computer Wins");
        compWin += 1
        $("#compWins").html(compWin);
    }
    if (userChoice === "Paper" && computerChoice === "Paper") {
        $("#result").html("Tie");
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        $("#result").html("User Wins");
    }
    if (userChoice === "Rock" && computerChoice === "Rock") {
        $("#result").html("Tie");
        
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        $("#result").html("User Wins");
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        $("#result").html("Computer Wins");
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        $("#result").html("User Wins");
        
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        $("#result").html("Computer Wins");
    }
    if (userChoice === "Scissors" && computerChoice === "Scissors") {
        $("#result").html("Tie");
    }
    
    console.log(userChoice);
});

});
