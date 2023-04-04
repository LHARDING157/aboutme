"use strict";

let userPoints = 0;

function username() {
  let user = prompt("Hi my name is Luke what's yours?");
  // console.log("Hello " + user);
  alert("Hello " + user);
}

function question1() {
  let name = prompt("Is my name Luke? Please Answer yes/no or y/n");
  if (name.toLowerCase() === "yes" || name.toLowerCase() === "y") {
    userPoints++;
    //console.log("Yay That's Right!!! :D");
    alert("Yay That's Right!!! :D");
  } else {
    //console.log("Nopeeee :p");
    alert("Nopeeee :P");
  }
}

function question2() {
  let game = prompt("Do I like to play games? Please Answer yes/no or y/n");
  if (game.toLowerCase() === "yes" || game.toLowerCase() === "y") {
    userPoints++;
    //console.log("Good Job!!");
    alert("Good Job!!");
  } else {
    //console.log("Aww you got it wrong! :/");
    alert("Aww you got it wrong! :/");
  }
}

function question3() {
  let flip = prompt("Can I do a backflip? Please Answer yes/no or y/n");
  if (flip.toLowerCase() === "no" || flip.toLowerCase() === "n") {
    userPoints++;
    //console.log("Yay you got it right!");
    alert("Yay you got it right!");
  } else {
    //console.log("Nopeeee sadly not :(");
    alert("Nopeeee sadly not :(");
  }
}

function question4() {
  let study = prompt("Have I studied game design? Please Answer yes/no or y/n");
  if (study.toLowerCase() === "yes" || study.toLowerCase() === "y") {
    userPoints++;
    //console.log("That's right I did :D");
    alert("That's right I did :D");
  } else {
    //console.log("Wrong! :/ Better Luck Next Time!");
    alert("Wrong! :/ Better Luck Next Time!");
  }
}

function question5() {
  let city = prompt("Am I from liverpool? Please Answer yes/no or y/n");
  if (city.toLowerCase() === "yes" || city.toLowerCase() === "y") {
    userPoints++;
    //console.log("Correct! Thats all the questions good job!");
    alert("Good Job! Thanks for playing");
  } else {
    //console.log("Better luck next time! Click the quiz button to retry");
    alert("Better luck next time! You can retry the quiz if you want :)");
  }
}

const number = 7;

function question6() {
  let guess = prompt("Guess a number between 1 - 10");
  for (let i = 2; i >= 0; i--) {
    if (i === 0) {
      alert("Unlucky, You have no more attempts");
      break;
    }
    if (guess < number) {
      alert("Too Low!");
      guess = prompt("Please Guess again you have " + i + " attempts left");
    } else if (guess > number) {
      alert("Too High!");
      guess = prompt("Please Guess again you have " + i + " attempts left");
    } else {
      userPoints++;
      alert("Good Job! That's Right");
      break;
    }
  }
}

function question7() {
  let favColor = ["charcoal", "asura", "chrimson"];
  let finalAnswer = prompt("Can you name any of the colors i like?");
  for (let a = 6; a >= 0; a--) {
    if (a === 0) {
      alert("Unlucky, You have no more attempts");
      break;
    }
    if (
      finalAnswer.toLowerCase() === favColor[0] ||
      finalAnswer.toLowerCase() === favColor[1] ||
      finalAnswer.toLowerCase() === favColor[2]
    ) {
      userScore++;
      alert("WOW!!! You got it right");
    } else {
      alert("Nooo not that one, you have " + a + " attempts left");
      finalAnswer = prompt(
        "Please Guess again you have " + a + " attempts left"
      );
    }
  }
}

function end() {
  alert("Congratz you got " + userPoints + " / 7");
}
