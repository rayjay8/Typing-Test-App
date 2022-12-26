const color = document.getElementById("color");
const box = document.getElementById("box");
const content = document.getElementById("content");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const wpm = document.getElementById("wpm");
const title = document.getElementById("title");
const banner = document.getElementById("banner");
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const casing = document.getElementById("case");
let scores = [];

const time = 1;
let typed = 0;

let text = box.textContent.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
const splitText = text.split("");

const words = text.split(" ");
const wordCount = words.length;

const cursor = document.createElement("span");
cursor.setAttribute("id", "iCursor");
cursor.textContent = "|";
box.appendChild(cursor);
var c = true;
var speed = 500;
setInterval(function () {
  if (c) {
    document.getElementById("iCursor").style.opacity = 0;
    c = false;
  } else {
    document.getElementById("iCursor").style.opacity = 1;
    c = true;
  }
}, speed);

let i = 0;

splitText.forEach((letter) => {
  const span = document.createElement("span");
  span.setAttribute("id", "letter" + i++);
  span.textContent = letter;
  box.appendChild(span);
});

function test() {
  let j = 0;

  document.addEventListener("keypress", (e) => {
    const char = document.getElementById("letter" + j);
    if (e.key === splitText[j]) {
      char.style.color = "green";
      char.insertAdjacentElement("afterend", cursor);
      typed++;
    } else {
      char.textContent = e.key;
      char.style.color = "red";
      char.insertAdjacentElement("afterend", cursor);
    }
    j++;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      j--;
      const char = document.getElementById("letter" + j);
      char.insertAdjacentElement("beforebegin", cursor);
      char.style.color = "black";
      if (e.key !== splitText[j]) {
        char.textContent = splitText[j];
      }
      typed--;
    }
  });

  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      const char = document.getElementById("letter" + j);
      char.insertAdjacentElement("afterend", cursor);
      char.style.color = "black";
      if (e.key !== splitText[j]) {
        char.textContent = splitText[j];
      }
      j++;
      typed++;
    }
  };
}

function start() {
  let i = 59;
  let timer = setInterval(() => {
    btn.style.backgroundColor = "blue";
    btn.style.width = "134px";
    btn.style.padding = "15px 40px";
    if (i < 10) {
      btn.innerHTML = "00:0" + i--;
    } else {
      btn.innerHTML = "00:" + i--;
    }
    if (i > 0 && i < 10) {
      btn.style.backgroundColor = "red";
    }
    if (btn.innerHTML === "00:01") {
      btn.style.backgroundColor = "red";
    }
    if (i == 0) {
      let wait = setInterval(() => {
        clearInterval(timer);
        btn.innerHTML = "";
        btn.style.backgroundColor = "green";
        btn.style.width = "54px";
        btn.style.padding = "0px";
        let stopIcon = document.createElement("i");
        stopIcon.setAttribute("class", "fas fa-stop");
        btn.appendChild(stopIcon);
        wpm.innerHTML = Math.round(typed / 5 / time) + " WPM";
      }, 1000);

      setTimeout(() => {
        scores.push(Math.round(typed / 5 / time));
        console.log(scores);
        localStorage.setItem("scores", JSON.stringify(scores));
        let scoresArray = JSON.parse(localStorage.getItem("scores"));
        console.log(scoresArray);
      }, 1000);

      let popupTimeout = setTimeout(() => {
        popup.style.display = "flex";
      }, 1000);
      document.addEventListener("mouseup", function (e) {
        if (!popup.contains(e.target)) {
          popup.style.display = "none";
          location.reload();
        }
      });
    }
  }, 1000);
}

document.addEventListener("keypress", (e) => {
  let shake = setInterval(() => {
    banner.classList.toggle("shake");
  }, 100);
  setTimeout(() => {
    clearInterval(shake);
    banner.classList.remove("shake");
  }, 400);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    setTimeout(() => {
      banner.classList.toggle("fade");
    }, 1000);
    setTimeout(() => {
      banner.style.display = "none";
    }, 2000);
    start();
    test();
  }
});
