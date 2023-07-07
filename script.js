let head, tail, user, computer, choice, output;
let Player, Pc, Toss;

output = document.getElementById("output");
choice = Math.round(Math.random() * 10);
let randNum = Math.round(Math.random() * 3);
// output = document.getElementsByClassName("sol");

console.log(randNum);

head = document.getElementById("head");
head.addEventListener("click", function () {
  user = "Head";
  if (randNum == 0 || randNum == 2) {
    document.querySelector(".sol").innerHTML = "YOU WON THE TOSS!!";
    document.querySelector(".option").innerHTML =
      " U will be redirected to the game in few seconds";
    setTimeout(function () {
      window.location.href = "game.html";
    }, 5000);
    Toss = 1;
  } else {
    document.querySelector(".sol").innerHTML = "YOU LOST THE TOSS";
    Toss = 2;
    document.querySelector(".option").innerHTML =
      "Computer Won the toss, U will be redirected to the game in few seconds";
    setTimeout(function () {
      window.location.href = "game2.html";
    }, 5000);
  }
  output.remove();
});

tail = document.getElementById("tail");
tail.addEventListener("click", function () {
  user = "Tail";
  if (randNum == 1 || randNum == 3) {
    document.querySelector(".sol").innerHTML = "YOU WON THE TOSS!!";
    document.querySelector(".option").innerHTML =
      " U will be redirected to the game in few seconds";
    setTimeout(function () {
      window.location.href = "game.html";
    }, 5000);
    Toss = 1;
  } else {
    document.querySelector(".sol").innerHTML = "YOU LOST THE TOSS";
    Toss = 2;
    document.querySelector(".option").innerHTML =
      "Computer Won the toss, U will be redirected to the game in few seconds";
    setTimeout(function () {
      window.location.href = "game2.html";
    }, 5000);
  }
  output.remove();
});
