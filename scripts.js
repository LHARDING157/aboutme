"use strict";

function username() {
  let user = prompt("Hi my name is Luke what's yours?");
  // console.log("Hello " + user);
  alert("Hello " + user);
}

function question1() {
  let name = prompt("Is my name Luke? Please Answer yes/no or y/n");
  if (name.toLowerCase() === "yes" || name.toLowerCase() === "y") {
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
    //console.log("Correct! Thats all the questions good job!");
    alert("Good Job! Thanks for playing");
  } else {
    //console.log("Better luck next time! Click the quiz button to retry");
    alert("Better luck next time! You can retry the quiz if you want :)");
  }
}
