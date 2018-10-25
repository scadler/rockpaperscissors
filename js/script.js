// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW

var userChoice = "";
var computerChoice = "";
var randomNumber = 0;
var userWin = 0;
var compWin = 0;
var noWin = 0;
var userInput = "";
var winRatio;
var compWinRatio
var noWinRatio;
var counter = 0   ;
var randomInput = "";


$(document).ready(function(){
var randomInputFunction = function(){
    randomInput = Math.random();
    if (randomInput <= 0.33) {
        userChoice = "Rock";
    }
    if (randomInput > 0.33 && randomNumber < 0.66) {
        userChoice = "Scissors";
    }
    if (randomInput >= 0.66) {
        userChoice = "Paper";
    }
    $("#input").val(userChoice);
};

var randomThrowFunction = function(){
        randomInputFunction();
        rpsFunction();
};

var rpsFunction = function() {
    $("#start1").hide();
    $("#start2").hide();
    userChoice = $("#input").val();
   
   //$("#userChoice").text($("#input").val());
    randomNumber = Math.random();
    counter = counter + 1;
    $("#roundSum").html(counter);
    userChoice = userChoice.toLowerCase();
    
    
//   https://www.transparenttextures.com/
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
        $("#stone1").hide();
        $("#blade1").hide();
        $("#parchment1").hide();
        $("#start1").show();
    }
    //User Input Images
        
    if (userChoice === "rock"){
        $("#stone1").show();
        $("#blade1").hide();
        $("#parchment1").hide();
    }
    if (userChoice === "paper"){
        $("#stone1").hide();
        $("#blade1").hide();
        $("#parchment1").show();
    }
    if (userChoice === "scissors"){
        $("#stone1").hide();
        $("#blade1").show();
        $("#parchment1").hide();
    }

    // Computer output + images
    
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
        $("#stone2").show();
        $("#blade2").hide();
        $("#parchment2").hide();
    }
    if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "scissors";
        $("#blade2").show();
        $("#stone2").hide();
        $("#parchment2").hide();
    }
    if (randomNumber >= 0.66) {
        computerChoice = "paper";
        $("#parchment2").show();
        $("#stone2").hide();
        $("#blade2").hide();
    }
    
    // Who wins + ratio calculator
    
    if (userChoice === "rock" && computerChoice === "paper") {
        $("#result").html("Computer Wins"+",");
        compWin += 1;
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " ComputerWon");
    }
    if (userChoice === "paper" && computerChoice === "paper") {
        noWin += 1;
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        $("#result").html("Tie"+",");
        console.log(userChoice + " VS " + computerChoice + " " + counter + " Tie");
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        $("#result").html("User Wins"+",");
        userWin += 1;
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " UserWon");
    }
    if (userChoice === "rock" && computerChoice === "rock") {
        noWin += 1
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        $("#result").html("Tie"+",");
        console.log(userChoice + " VS " + computerChoice + " " + counter + " Tie");
    }
    if (userChoice === "paper" && computerChoice === "rock") {
        $("#result").html("User Wins"+",");
        userWin += 1;
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("tieRatio").html(noWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " UserWon");
    }
    if (userChoice === "scissors" && computerChoice === "rock") {
        $("#result").html("Computer Wins"+",");
        compWin += 1;
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " ComputerWon");
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
        $("#result").html("User Wins"+",");
        userWin += 1;
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " UserWon");
    }
    if (userChoice === "paper" && computerChoice === "scissors") {
        $("#result").html("Computer Wins"+",");
        compWin += 1;
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        console.log(userChoice + " VS " + computerChoice + " " + counter + " ComputerWon");
    }
    if (userChoice === "scissors" && computerChoice === "scissors") {
        noWin += 1;
        winRatio = userWin/(compWin+userWin+noWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        compWinRatio = compWin/(compWin+userWin+noWin);
        compWinRatio = compWinRatio*100;
        compWinRatio = Math.round(compWinRatio);
        noWinRatio = noWin/(compWin+userWin+noWin);
        noWinRatio = noWinRatio*100;
        noWinRatio = Math.round(noWinRatio);
        $("#tieRatio").html(noWinRatio)
        $("#resultRatio").html(winRatio)
        $("#compResultRatio").html(compWinRatio)
        $("#result").html("Tie"+",");
        console.log(userChoice + " VS " + computerChoice + " " + counter + " Tie");
    }
     $("#input").val("");
};

    $("#start1").show();
    $("#start2").show();
    $("#stone1").hide();
    $("#blade1").hide();
    $("#parchment1").hide();
    $("#stone2").hide();
    $("#blade2").hide();
    $("#parchment2").hide();
    // Button clickhandler
$("#shoot").click(function(){
    rpsFunction();
});
$("#rockButton").click(function(){
    userChoice = "rock";
    $("#input").val("Rock");
    rpsFunction();
});
$("#paperButton").click(function(){
    userChoice = "paper";
    $("#input").val("Paper");
    rpsFunction();
});
$("#scissorsButton").click(function(){
    userChoice = "scissors";
    $("#input").val("Scissors");
    rpsFunction();
});
$("#randomButton").click(function(){
        randomThrowFunction();
});
});