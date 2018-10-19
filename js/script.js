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
var userInput = ""
var winRatio
var counter = 0
    

$(document).ready(function(){
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
    $("#start1").hide();
    $("#start2").hide();
    userChoice = $("#input").val();
   //Disabled to test style $("#userChoice").text($("#input").val());
    randomNumber = Math.random()
    counter = counter + 1
    $("#roundSum").html(counter)
    
    
//   https://www.transparenttextures.com/

    //User Input Images
        
    if (userChoice === "Rock"){
        $("#stone1").show();
        $("#blade1").hide();
        $("#parchment1").hide();
    }
    if (userChoice === "Paper"){
        $("#stone1").hide();
        $("#blade1").hide();
        $("#parchment1").show();
    }
    if (userChoice === "Scissors"){
        $("#stone1").hide();
        $("#blade1").show();
        $("#parchment1").hide();
    }

    // Computer output + images
    
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
    
    // Who wins + ratio calculator
    
    if (userChoice === "Rock" && computerChoice === "Paper") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "Paper" && computerChoice === "Paper") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "Rock" && computerChoice === "Rock") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "Scissors" && computerChoice === "Scissors") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    
    
});
});