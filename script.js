function rollDice(sides, n) {   //this rolldice function is to take 2 custom "dice" inputs and calculate them 
  var result = 0;
  for (let i = 0; i < n; i++)
  {
    result += Math.floor(Math.random() * sides) + 1;
  }
  return result;
}

function rollD4() {   //these dice functions are each a seperate "dice" that have each own functino call
  var result = Math.floor(Math.random() * 4) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d4!";
}

function rollD6() {
  var result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d6!";
}

function rollD8() {
  var result = Math.floor(Math.random() * 8) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d8!";
}

function rollD10() {
  var result = Math.floor(Math.random() * 10) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d10";
}

function rollD12() {
  var result = Math.floor(Math.random() * 12) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d12!";
}

function rollD20() {   //the d20 dice is special and has special properties to its highest and lowest roll hence the if statements
  var result = Math.floor(Math.random() * 20) + 1;
  if(result == 20)
  {
    document.getElementById("result").innerHTML = "You rolled a Natural 20! :)";
  }
  else if(result == 1)
  {
    document.getElementById("result").innerHTML = "Nat 1 :( ";
  }
  else{
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d20!";
  }
}

function rollD100() {
  var result = Math.floor(Math.random() * 100) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result + " on a d100!";
} 