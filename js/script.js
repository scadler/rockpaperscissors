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
    // I am trying to hide these images and make them show
    //when the relating word is typed
    $("#stone1").hide();
    $("#blade1").hide();
    $("#parchment1").hide();
    $("#stone2").hide();
    $("#blade2").hide();
    $("#parchment2").hide();
    // Button clickhandler
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text($("#input").val());
    randomNumber = Math.random()
    //This does not work Fix everthing below
    if (userChoice = "Rock"){
        $("#stone1").show();
        $("#blade1").hide();
        $("#parchment1").hide();
    }
    if (userChoice = "Paper"){
        $("#stone1").hide();
        $("#blade1").show();
        $("#parchment1").hide();
    }
    if (userChoice = "Scissors"){
        $("#stone1").hide();
        $("#blade1").hide();
        $("#parchment1").show();
    }
    //Fix everything above
    // Computer output
    if (randomNumber <= 0.33) {
        computerChoice = "Rock"
        $("#stone2").show();
        $("#blade2").hide();
        $("#parchment2").hide();
    }
    if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "Scissors"
        $("#blade2").show();
        $("#stone2").hide();
        $("#parchment2").hide();
    }
    if (randomNumber >= 0.66) {
        computerChoice = "Paper"
        $("#parchment2").show();
        $("#stone2").hide();
        $("#blade2").hide();
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
        userWin += 1
        $("#userWins").html(userWin);
    }
    if (userChoice === "Rock" && computerChoice === "Rock") {
        $("#result").html("Tie");
        
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        $("#result").html("User Wins");
        userWin += 1
        $("#userWins").html(userWin);
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        $("#result").html("Computer Wins");
        compWin += 1
        $("#compWins").html(compWin);
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        $("#result").html("User Wins");
        userWin += 1
        $("#userWins").html(userWin);
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        $("#result").html("Computer Wins");
        compWin += 1
        $("#compWins").html(compWin);
    }
    if (userChoice === "Scissors" && computerChoice === "Scissors") {
        $("#result").html("Tie");
    }
    
    console.log(userChoice);
});
});

