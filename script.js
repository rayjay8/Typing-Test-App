const color = document.getElementById("color");
const box = document.getElementById("box");
const content = document.getElementById("content");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const wpm = document.getElementById("wpm");
const time = 1;

let typed = 0;

let text = box.textContent.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
const splitText = text.split("");

const words = text.split(" ");
const wordCount = words.length;

// const cursor = document.createElement("span");
// cursor.setAttribute("id", "iCursor");
// cursor.textContent = "|";
// box.appendChild(cursor);
// var c = true;
// var speed = 500;
// setInterval(function () {
//   if (c) {
//     document.getElementById("iCursor").style.opacity = 0;
//     c = false;
//   } else {
//     document.getElementById("iCursor").style.opacity = 1;
//     c = true;
//   }
// }, speed);

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
    if (e.key === splitText[j]) {
      const char = document.getElementById("letter" + j);
      char.style.color = "green";
      typed++;
    } else {
      const char = document.getElementById("letter" + j);
      char.textContent = e.key;
      char.style.color = "red";
    }
    j++;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      j--;
      const char = document.getElementById("letter" + j);
      char.style.color = "black";
      if (e.key !== splitText[j]) {
        char.textContent = splitText[j];
      }
    }
  });

  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      const char = document.getElementById("letter" + j);
      char.style.color = "black";
      if (e.key !== splitText[j]) {
        char.textContent = splitText[j];
      }
      j++;
      typed++;
    }
  };
}

btn.addEventListener("click", () => {
  test();
  let i = 59;
  let timer = setInterval(() => {
    btn.style.backgroundColor = "blue";
    if (i < 10) {
      btn.innerHTML = "00:0" + i--;
    } else {
      btn.innerHTML = "00:" + i--;
    }
    if (i > 0 && i < 10) {
      btn.style.backgroundColor = "red";
    }
    if (i == 0) {
      clearInterval(timer);
      btn.innerHTML = "Restart";
      btn.style.backgroundColor = "green";
      popup.style.display = "flex";
      wpm.innerHTML = Math.round(typed / 5 / time) + " WPM";
      btn.addEventListener("click", () => {
        location.reload();
      });
    }
  }, 1000);
});

document.addEventListener("mouseup", function (e) {
  if (!popup.contains(e.target)) {
    popup.style.display = "none";
    // location.reload();
  }
});
