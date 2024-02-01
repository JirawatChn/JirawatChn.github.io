let randomnum = (x) => {
  return Math.floor(Math.random() * x) + 1;
};

let random = 0;
let mode = sessionStorage.getItem("mode");
let highnum = 0;
let minnum = 0;

let checkmode = (m) => {
  if (m == 1) {
    mode = 1;
    window.location.href = "easy.html";
    sessionStorage.setItem("mode", mode);
  } else if (m == 2) {
    mode = 2;
    window.location.href = "normal.html";
    sessionStorage.setItem("mode", mode);
  }
};

console.log("mode ", mode);

if (mode == 1) {
  random = randomnum(50);
  highnum = 50;
  minnum = 1;
  console.log("high "+highnum)
  console.log("min "+minnum)
  console.log("random" + " " + random);
} else if (mode == 2) {
  random = randomnum(99);
  highnum = 99;
  minnum = 1;
  console.log("high "+highnum)
  console.log("min "+minnum)
  console.log("random" + " " + random);
}

let left = 10;
let i = 1;
let show = 0;

const check = () => {
  let more = document.getElementById("more");
  let less = document.getElementById("less");
  let inputnum = parseInt(document.getElementById("inputnum").value);
  let input = document.getElementById("inputnum");
  let outleft = document.getElementById("outleft");
  let diff = document.getElementById("diff");
  let gameset = document.getElementById("gameset");
  let back = document.getElementById("back");
  let enter = document.getElementById("enter");
  let show = i;

  if (!inputnum) {
    runnumber.innerHTML =
      "[" + i + "] Please Enter a Number!";
    return;
  }
  console.log(inputnum);

  if (i < 10) {
    if (inputnum == random) {
      console.log("correct");
      document.getElementById("diff").innerHTML =
        "The Number is " + random + "!";
      gameset.innerHTML = "You Win!";
      gameset.style.color = "#67DB3F";
      input.style.background = "#67DB3F";
      inputnum.readOnly = true;
      runnumber.innerHTML =
        "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
      enter.innerHTML = "Play Again?";
      return (i = 11);
    } else if (inputnum > random) {
      lessthan();
    } else if (inputnum < random) {
      morethan();
    }
    left--;
    i++;
    console.log("i " + show);
    console.log(left + " left");
    outleft.innerHTML = left + " left";
    document.getElementById("inputnum").value =""
    diff.innerHTML = minnum+"-"+highnum

  } else if (i == 10) {
    left = 0;
    if (inputnum == random) {
      console.log("correct");
      diff.innerHTML =
        "The Number is " + random + "!";
      gameset.innerHTML = "You Win!";
      gameset.style.color = "#67DB3F";
      input.style.background = "#67DB3F";
      inputnum.readOnly = true;
      runnumber.innerHTML =
        "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
      enter.innerHTML = "Play Again?";
      return (i = 11);
    } else if (inputnum > random) {
      lessthan();
    } else if (inputnum < random) {
      morethan();
    }
    if (!inputnum) {
      runnumber.innerHTML =
        "[" + i + "] Please Enter a Number!";
      return;
    }
    outleft.innerHTML = left + " left";
    diff.innerHTML = minnum+"-"+highnum
    runnumber.innerHTML =
      "The Number is " + random + "!";
    i = 11;
    input.style.background = "#E33B3B";
    inputnum.readOnly = true;
    if (repeatnum == 9) {
      diff.innerHTML = "You repeat it 10 times?";
    } else {
      diff.innerHTML = "Play it again!";
    }
    gameset.innerHTML = "You Lose!";
    gameset.style.color = "#E33B3B";
    enter.innerHTML = "Try Again?";
  } else {
    location.reload();
  }
};

let list = [];
let last = 0;
repeatnum = 0;

let checklast = (repeat) => {
  let inputnum = document.getElementById("inputnum").value;
  let runnumber = document.getElementById("runnumber");

  list.push(inputnum);

  if (i >= 2 && i <= 10) {
    if (inputnum == list[list.length - 2] && inputnum != []) {
      console.log("repeat");
      repeatnum++;
      if (repeatnum == 1) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] Your Number is repeat! ";
      } else if (repeatnum == 2) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] This Number again? ";
      } else if (repeatnum == 3) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] Change the Number! ";
      } else if (repeatnum >= 4 && repeatnum < 8) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] ARE YOU OK?? ";
      } else if (repeatnum == 8) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] Error????";
      }
    } else {
      runnumber.innerHTML =
        "[" + (i + 1) + "] The Number is " + repeat + " " + inputnum;
    }
  }
};
const morethan = () => {
  let inputnum = document.getElementById("inputnum").value;
  let runnumber = document.getElementById("runnumber");

  runnumber.innerHTML =
    "[" + (i + 1) + "] The Number is more than " + inputnum;
  document.getElementById("more").innerHTML +=
    "[" + i + "] " + inputnum + "<br>";
  minnum = inputnum

  console.log("more");
  checklast("more than");
  console.log("high "+highnum);
  console.log("min "+minnum);
};
const lessthan = () => {
  let inputnum = document.getElementById("inputnum").value;
  let runnumber = document.getElementById("runnumber");

  runnumber.innerHTML =
    "[" + (i + 1) + "] The Number is less than " + inputnum;
  document.getElementById("less").innerHTML +=
    "[" + i + "] " + inputnum + "<br>";
  highnum = inputnum

  checklast("less than ");
  console.log("less");
  console.log("high "+highnum);
  console.log("min "+minnum);
};
