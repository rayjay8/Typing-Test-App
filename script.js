const color = document.getElementById("color");
const sidebar = document.getElementById("sidebar");
const options = document.getElementById("options");
const hr = document.getElementById("hr");
const box = document.getElementById("box");
const tempCursor = document.getElementById("tempCursor");
const content = document.getElementById("content");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const wpm = document.getElementById("wpm");
const title = document.getElementById("title");
const banner = document.getElementById("banner");
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const casing = document.getElementById("case");
const submit = document.getElementById("submit");
const theme = document.getElementById("theme");
const dark = document.getElementById("dark");
const themeIcon = document.getElementById("themeIcon");
const selectTime = document.getElementById("time");
const selectDifficulty = document.getElementById("difficulty");

let backSpaceCheck = false;
let caseCheck = false;
let scores = [];

let time = 1;
let typed = 0;

theme.addEventListener("click", () => {
  if (dark.style.transform === "scale(100)") {
    dark.style.transform = "scale(0)";
  } else {
    dark.style.transform = "scale(100)";
  }
  setTimeout(() => {
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
  }, 350);

  box.classList.toggle("boxToggle");
  box.classList.toggle("active");
  title.classList.toggle("titleToggle");
  title.classList.toggle("active");
  sidebar.classList.toggle("sidebarToggle");
  sidebar.classList.toggle("active");
  options.classList.toggle("optionsToggle");
  options.classList.toggle("active");
  selectDifficulty.classList.toggle("selectToggle");
  selectDifficulty.classList.toggle("active");
  selectTime.classList.toggle("selectToggle");
  selectTime.classList.toggle("active");
  hr.classList.toggle("hrToggle");
  hr.classList.toggle("active");
});

submit.addEventListener("click", () => {
  switch (selectTime.value) {
    case "1":
      {
        color.textContent = "1 Minute";
      }
      break;
    case "2":
      {
        color.textContent = "2 Minute" + "s";
      }
      break;
    case "3":
      {
        color.textContent = "3 Minute" + "s";
      }
      break;
    case "4":
      {
        color.textContent = "4 Minute" + "s";
      }
      break;
    case "5":
      {
        color.textContent = "5 Minute" + "s";
      }
      break;

    default:
      break;
  }

  time = selectTime.value;

  if (backspace.checked) {
    backSpaceCheck = true;
  }

  if (casing.checked) {
    caseCheck = true;
  }

  switch (selectDifficulty.value) {
    case "1":
      {
        content.textContent = `The sun was shining brightly in the sky as I walked down the street. I had just finished my morning jog and was feeling energized and ready to tackle the day ahead. I turned the corner and saw my favorite coffee shop, The Daily Grind, just a few blocks away. I quickened my pace, eager to get my hands on a freshly brewed cup of coffee. As I approached the shop, I noticed a long line of people waiting to place their orders. I sighed and joined the queue, wondering how long it would take to get my caffeine fix. As I waited, I pulled out my phone and checked my emails. I had a few messages from work, but nothing too pressing. I put my phone away and glanced around at the other people in line. Most of them were chatting with each other, their faces lit up with excitement. I couldn't help but feel a sense of happiness and community in that moment. It was nice to see people out and about, enjoying their day and each other's company. Finally, it was my turn to order. I stepped up to the counter and greeted the barista, who was wearing a bright smile. "Good morning! What can I get for you today?" she asked. "I'll have a medium coffee with cream and sugar, please," I replied. "Coming right up!" the barista said, as she started to prepare my drink. I paid for my coffee and waited for it to be ready. As I stood there, I couldn't help but feel grateful for the small things in life, like a simple cup of coffee. It may seem like a small pleasure, but it can bring so much joy and comfort to a person's day. Finally, my coffee was ready. I grabbed it and took a sip, savoring the warm, creamy flavor. As I walked out of the coffee shop, I couldn't wait to start my day and see what other little pleasures it might bring.`;
      }
      break;

    case "2":
      {
        content.textContent =
          "The verdant landscape stretched out before me as I stood atop the hill, the panoramic vista taking my breath away. The sun was setting behind the distant mountains, casting a warm glow over the rolling hills and forests below. I couldn't help but feel a sense of awe at the majesty of nature, the way it could inspire such a feeling of grandeur and insignificance all at once. I descended the hill, my footsteps falling softly on the dew-laden grass. As I walked, my thoughts turned to the day's events. It had been a day of great productivity, filled with numerous tasks and responsibilities that had kept me occupied from dawn till dusk. But despite the demands of my work, I had found solace in the tranquility of the outdoors, the peaceful surroundings providing a much-needed respite from the frenetic pace of my daily life. As I reached the bottom of the hill, I came upon a babbling brook, its clear waters gurgling over the rocks and pebbles that lined its bed. I sat down on a nearby log and watched as a school of minnows darted through the water, their iridescent scales glinting in the fading light. I closed my eyes and took a deep breath, letting the serene atmosphere wash over me. It was moments like these that reminded me of the importance of slowing down and savoring the simple pleasures of life. Too often, we get caught up in the hustle and bustle of our daily routines, forgetting to take the time to appreciate the beauty that surrounds us. As the sun set, I rose from my perch and made my way back home. As I walked, I couldn't help but feel a sense of gratitude for the day's experiences, the difficult words and challenging tasks that had tested my mettle and pushed me to grow. For in the end, it is through facing and overcoming such challenges that we truly come to understand our own strength and resilience.";
      }
      break;

    case "3":
      {
        content.textContent = `The fenestella glimmered in the opalescent light of the nebula, casting a faint glow on the pellucid walls of the chronocar. As the temporal vessel navigated through the wormhole, its crew of chrononauts marveled at the exotic vistas unfurling before them. Captain Ariadne, a fierce and sagacious woman with skin as dark as onyx and hair like a halo of solar flames, stood at the helm, her eyes fixed on the chronometer. "We're approaching the singularity," she announced, her voice laced with anticipation. "Prepare for temporospatial displacement." The chrononauts hastened to their stations, their hearts racing with excitement and trepidation. They knew that venturing into the singularity was a perilous undertaking, but they also knew that it held the key to unlocking the secrets of the multiverse. Dr. Erebus, the ship's chief scientist, peered through the periscope, his gaunt face contorted with awe. "I can see it! The singularity is a swirling vortex of energy, surrounded by swirling clouds of plasma and radiation. It's like nothing I've ever seen before." As the chronocar drew closer to the singularity, the space-time fabric began to ripple and distort. The chrononauts felt a sense of vertigo wash over them, as if the very foundations of reality were shifting beneath their feet. But Captain Ariadne remained steady, her hand steady on the controls. "Hold on," she said, her voice steady. "We're almost there." With a final burst of speed, the chronocar hurtled into the singularity, and the chrononauts felt themselves tumbling through a maelstrom of colors and shapes. It was as if they were falling through a kaleidoscope of infinite possibility, each moment a new and wondrous vista. And then, as suddenly as it had begun, it was over. The chronocar emerged from the singularity, and the chrononauts found themselves back in the familiar confines of normal space. Captain Ariadne let out a triumphant whoop. "We did it! We've traveled through time and space, and returned unscathed. This is a momentous day for science, and for humanity." The chrononauts erupted into cheers and applause, their spirits soaring with pride and exhilaration. They had dared to venture into the unknown, and they had returned victorious. They had opened a door to a new and wondrous world, and they knew that their journey had only just begun.`;
      }
      break;

    default:
      break;
  }
});

// let text = content.textContent.replace(/\s+/g, " ").trim();
// const splitText = text.split("");

// const words = text.split(" ");
// const wordCount = words.length;

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

// let i = 0;

// splitText.forEach((letter) => {
//   const span = document.createElement("span");
//   span.setAttribute("id", "letter" + i++);
//   span.textContent = letter;
//   box.appendChild(span);
// });

function test() {
  let text = content.textContent.replace(/\s+/g, " ").trim();
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

  let j = 0;

  document.addEventListener("keypress", (e) => {
    const char = document.getElementById("letter" + j);
    if (caseCheck) {
      if (e.key.toUpperCase() === char.textContent.toUpperCase()) {
        char.style.color = "green";
        char.insertAdjacentElement("afterend", cursor);
        typed++;
      } else {
        char.textContent = e.key;
        char.style.color = "red";
        char.insertAdjacentElement("afterend", cursor);
      }
    } else {
      if (e.key === char.textContent) {
        char.style.color = "green";
        char.insertAdjacentElement("afterend", cursor);
        typed++;
      } else {
        char.textContent = e.key;
        char.style.color = "red";
        char.insertAdjacentElement("afterend", cursor);
      }
    }
    j++;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && backSpaceCheck === false) {
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
  let i = time * 60 * 1000;

  function updateTimer() {
    btn.style.backgroundColor = "blue";
    btn.style.width = "134px";
    btn.style.padding = "15px 40px";
    var minutes = Math.floor(i / 1000 / 60);
    var seconds = Math.floor((i / 1000) % 60);
    btn.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    i -= 1000;
    if (seconds <= 10 && seconds > 0 && minutes == 0) {
      btn.style.backgroundColor = "red";
    }
    if (seconds == 0 && minutes == 0) {
      clearInterval(timer);
      btn.innerHTML = "";
      btn.style.backgroundColor = "green";
      btn.style.width = "54px";
      btn.style.padding = "0px";
      let stopIcon = document.createElement("i");
      stopIcon.setAttribute("class", "fas fa-stop");
      btn.appendChild(stopIcon);

      wpm.innerHTML = Math.round(typed / 5 / time) + " WPM";

      scores.push(Math.round(typed / 5 / time));
      localStorage.setItem("scores", JSON.stringify(scores));
      let scoresArray = JSON.parse(localStorage.getItem("scores"));

      popup.style.display = "flex";
      document.addEventListener("mouseup", (e) => {
        if (!popup.contains(e.target)) {
          popup.style.display = "none";
          location.reload();
        }
      });
    }
  }

  let timer = setInterval(updateTimer, 1000);
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
    content.style.display = "none";
    box.style.display = "block";
    tempCursor.outerHTML = "";
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
