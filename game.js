console.log("fuck");

let Strike,
  Base,
  Player = 0,
  Computer,
  Score = 0,
  StrikeVal = 0,
  Result = 0,
  Bat,
  Ball,
  ResultScore,
  PlayerScore,
  compkey,
  value = 0;
let one, two, three, four, five, six;

Strike = document.getElementById("strike");
Base = document.getElementById("base");
console.log(StrikeVal);

one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");

// setInterval(function(){
//     Computer = Math.round((Math.random()*5)+1);
// // },4000)  ;

function winner() {
  if (PlayerScore > 0 && ResultScore > 0) {
    if (PlayerScore > ResultScore) {
      document.querySelector(".runs").innerHTML = "Player wins";
      console.log("f u");
      setInterval(function () {
        // batting.close();
        // bowling.close();
        document.querySelector(".heading").innerHTML = "PLAYER WINS";
        window.location.href = "result.html";
        // alert("Player wins");
      }, 5000);
    } else {
      document.querySelector(".runs").innerHTML = "Computer wins";
      console.log("tu");
      setInterval(function () {
        // batting.close();
        // bowling.close();
        document.querySelector(".heading").innerHTML = "COMPUTER WINS";
        window.location.href = "result2.html";
        // alert("Computer wins");
      }, 5000);
    }
  }
}

Strike.addEventListener("click", function () {
  document.querySelector(".heading").innerHTML = "YOU CHOSE TO STRIKE FIRST";
  Bat = true;
  Base.remove();
  value = 1;
  if (StrikeVal != 3) {
    batting();
  } else {
    bowling();
  }
  console.log(Computer);
});

Base.addEventListener("click", function () {
  document.querySelector(".heading").innerHTML = "YOU CHOSE BASE FIRST";
  Ball = true;
  Strike.remove();
  value = 2;
  if (StrikeVal != 3) {
    bowling();
  }
  //   Coutput();
  else {
    batting();
  }
  console.log(Computer);
});

function batting() {
  if (Bat == true) {
    console.log("fuck u");

    one.addEventListener("click", function () {
      play();
      Score = 1;
      console.log(Score);
      SCalc();
      compkey = "box1";
      // buttonAnimation(compkey);
    });
    two.addEventListener("click", function () {
      play();
      Score = 2;
      console.log(Score);
      SCalc();
      // compkey = "box2";
      // buttonAnimation(compkey);
    });
    three.addEventListener("click", function () {
      play();
      Score = 3;
      console.log(Score);
      SCalc();
      // compkey = "box3";
      // buttonAnimation(compkey);
    });
    four.addEventListener("click", function () {
      play();
      Score = 4;
      console.log(Score);
      SCalc();
      // compkey = "box4";
      // buttonAnimation(compkey);
    });
    five.addEventListener("click", function () {
      play();
      Score = 5;
      console.log(Score);
      SCalc();
      // compkey = "box5";
      // buttonAnimation(compkey);
    });
    six.addEventListener("click", function () {
      play();
      Score = 6;
      console.log(Score);
      SCalc();
      // compkey = "box6";
      // buttonAnimation(compkey);
    });
  }
}

function bowling() {
  if (Ball == true) {
    console.log("fuck u");

    one.addEventListener("click", function () {
      sound();
      Score = 1;
      console.log(Score);
      BCalc();
      // compkey = "box1";
      // buttonAnimation(compkey);
    });
    two.addEventListener("click", function () {
      sound();
      Score = 2;
      console.log(Score);
      BCalc();
      // compkey = "box2";
      // buttonAnimation(compkey);
    });
    three.addEventListener("click", function () {
      sound();
      Score = 3;
      console.log(Score);
      BCalc();
      // compkey = "box3";
      // buttonAnimation(compkey);
    });
    four.addEventListener("click", function () {
      sound();
      Score = 4;
      console.log(Score);
      BCalc();
      // compkey = "box4";
      // buttonAnimation(compkey);
    });
    five.addEventListener("click", function () {
      sound();
      Score = 5;
      console.log(Score);
      BCalc();
      // compkey = "box5";
      // buttonAnimation(compkey);
    });
    six.addEventListener("click", function () {
      sound();
      Score = 6;
      console.log(Score);
      BCalc();
      // compkey = "box6";
      // buttonAnimation(compkey);
    });
  }
}

function SCalc() {
  let temp = true;
  //  while(temp){
  if (value == 1) {
    Computer = Math.round(Math.random() * 5 + 1);
    console.log(Computer);
    compkey = Computer;
    buttonAnimation(compkey);

    if (Computer + 1 == Score || Computer - 1 == Score) {
      StrikeVal += 1;
      if (StrikeVal == 3) {
        failSound();
        console.log(Player);
        document.querySelector(".heading").innerHTML =
          "That's Stike 3 and u r out! Now position change u hav to Base..." +
          "Computer's target is " +
          Player;
        StrikeVal = 0;
        PlayerScore = Player;
        Player = 0;
        value = 3;
        console.log(PlayerScore);
        winner();
        // temp = false;
        // bowling();
        // return;
      }
    } else if (Computer == Score) {
      Player += Score + Computer;
      if (StrikeVal > 0) {
        StrikeVal -= 1;
      }
    } else {
      Player += Score;
      if (StrikeVal > 0) {
        StrikeVal -= 1;
      }
    }
    Poutput();
  } else if (value == 3) {
    Computer = Math.round(Math.random() * 5 + 1);
    console.log(Computer);
    compkey = Computer;
    buttonAnimation(compkey);
    if (PlayerScore > Result) {
      if (Score + 1 == Computer || Score - 1 == Computer) {
        StrikeVal += 1;
        if (StrikeVal == 3) {
          failSound();
          console.log(Result);
          // document.querySelector(".heading").innerHTML =
          //   "That's Stike 3 and u r out! Now position change u hav to Base...";
          StrikeVal = 0;
          ResultScore = Result;
          Result = 0;
          value = 1;
          console.log(PlayerScore);
          winner();
          // temp = false;
          // bowling();
          // return;
        }
      } else if (Computer == Score) {
        Result += Score + Computer;
        if (StrikeVal > 0) {
          StrikeVal -= 1;
        }
      } else {
        Result += Computer;
        if (StrikeVal > 0) {
          StrikeVal -= 1;
        }
      }
    } else {
      ResultScore = Result;
      Result = 0;
      console.log("u damn bastard");
      winner();
    }
    Coutput();
  }
}
// }

function BCalc() {
  if (value == 2) {
    Computer = Math.round(Math.random() * 5 + 1);
    console.log(Computer);
    compkey = Computer;
    buttonAnimation(compkey);

    if (Computer + 1 == Score || Computer - 1 == Score) {
      StrikeVal += 1;
      if (StrikeVal == 3) {
        console.log(Result);
        winSound();
        document.querySelector(".heading").innerHTML =
          "That's Stike 3 and the Computer is out! Now position change u hav to Strike..." +
          "Your target is " +
          Result;
        StrikeVal = 0;
        ResultScore = Result;
        Result = 0;
        value = 4;
        console.log(ResultScore);
        winner();
        // temp = false;
        // batting();
        // return;
      }
    } else if (Computer == Score) {
      Result += Score + Computer;
      if (StrikeVal > 0) {
        StrikeVal -= 1;
      }
    } else {
      Result += Computer;
      if (StrikeVal > 0) {
        StrikeVal -= 1;
      }
    }
    Coutput();
  } else if (value == 4) {
    Computer = Math.round(Math.random() * 5 + 1);
    console.log(Computer);
    compkey = Computer;
    buttonAnimation(compkey);
    if (ResultScore > Player) {
      if (Computer + 1 == Score || Computer - 1 == Score) {
        StrikeVal += 1;
        if (StrikeVal == 3) {
          failSound();
          console.log(Player);
          // document.querySelector(".heading").innerHTML =
          //   "That's Stike 3 and u r out! Now position change u hav to Base...";
          StrikeVal = 0;
          PlayerScore = Player;
          Player = 0;
          value = 2;
          console.log(PlayerScore);
          winner();
          // temp = false;
          // bowling();
          // return;
        }
      } else if (Computer == Score) {
        Player += Score + Computer;
        if (StrikeVal > 0) {
          StrikeVal -= 1;
        }
      } else {
        Player += Score;
        if (StrikeVal > 0) {
          StrikeVal -= 1;
        }
      }
    } else {
      PlayerScore = Player;
      Player = 0;
      console.log("u damn bastard");
      winner();
    }
    Poutput();
  }
}

function play() {
  var audio = new Audio("assets/sound01.mp3");
  audio.play();
}

function sound() {
  var audio = new Audio("assets/sound02.mp3");
  audio.play();
}

function failSound() {
  var audio = new Audio("assets/sound03.mp3");
  audio.play();
}

function winSound() {
  var audio = new Audio("assets/winningSound.mp3");
  audio.play();
}

function buttonAnimation(butKey) {
  var actButton = document.querySelector(".box" + butKey);
  actButton.classList.add("pressed");
  setTimeout(function () {
    actButton.classList.remove("pressed");
  }, 1000);
}

function Poutput() {
  if (StrikeVal != 3) {
    document.querySelector(".runs").innerHTML =
      "your Score is " + Player + " and Strikes till now: " + StrikeVal;
    // document.querySelector(".strikeee").innerHTML = ;
  }
}

function Coutput() {
  if (StrikeVal != 3) {
    document.querySelector(".runs").innerHTML =
      "Computer Score is " + Result + " and Strikes till now: " + StrikeVal;
    // document.querySelector(".strikeee").innerHTML = "Strikes till now: "+ StrikeVal;
  }
}

console.log(Score);
console.log(Computer);
