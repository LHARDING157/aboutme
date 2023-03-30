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
  for (let i = 3; i >= 0; i--) {
    if (i === 0) {
      alert("Unlucky, You have no more attempts" + number);
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

// function question6() {
//   let answer;
//   while (answer != 7) {
//     answer = prompt("Guess a number between 1 - 10");
//     if (answer > 7) {
//       alert("Too High");
//     } else if (answer < 7) {
//       alert("Too Low");
//     } else {
//       userPoints++;
//       alert("That's Correct!");
//     }
//   }
// }

function end() {
  alert("Congratz you got " + userPoints + " / 6");
}
