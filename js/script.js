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
var randomInput


$(document).ready(function(){
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
    
    if (userChoice === "rock" && computerChoice === "Paper") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "paper" && computerChoice === "Paper") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "scissors" && computerChoice === "Paper") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "rock" && computerChoice === "Rock") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "paper" && computerChoice === "Rock") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "scissors" && computerChoice === "Rock") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "rock" && computerChoice === "Scissors") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "paper" && computerChoice === "Scissors") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "scissors" && computerChoice === "Scissors") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
     $("#input").val("");
}
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
    
    if (userChoice === "rock" && computerChoice === "Paper") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "paper" && computerChoice === "Paper") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "scissors" && computerChoice === "Paper") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "rock" && computerChoice === "Rock") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
    if (userChoice === "paper" && computerChoice === "Rock") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "scissors" && computerChoice === "Rock") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "rock" && computerChoice === "Scissors") {
        $("#result").html("User Wins"+",");
        userWin += 1
        $("#userWins").html(userWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "UserWon");
    }
    if (userChoice === "paper" && computerChoice === "Scissors") {
        $("#result").html("Computer Wins"+",");
        compWin += 1
        $("#compWins").html(compWin);
        winRatio = userWin/(compWin+userWin);
        winRatio = winRatio*100;
        winRatio = Math.round(winRatio);
        $("#resultRatio").html(winRatio)
        console.log(userChoice + counter + "ComputerWon");
    }
    if (userChoice === "scissors" && computerChoice === "Scissors") {
        $("#result").html("Tie"+",");
        console.log(userChoice + counter + "Tie");
    }
     $("#input").val("");
    
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
$("#randomButton").click(function(){
    randomNumber = Math.random();
    //add random outputs
    userChoice = "scissors";
    $("#input").val("Scissors");
    rpsFunction();
});
});
