const load = document.getElementById("load");
const color = document.getElementById("color");
const sidebar = document.getElementById("sidebar");
const warning = document.getElementById("warning");
const file = document.getElementById("file");
const options = document.getElementById("options");
const hr = document.getElementById("hr");
const container = document.getElementById("container");
const box = document.getElementById("box");
const tempCursor = document.getElementById("tempCursor");
const loading = document.getElementById("loading");
const ldsRing = document.querySelectorAll("lds-ring");
const lds = document.getElementById("lds");
const content = document.getElementById("content");
const retry = document.getElementById("retry");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const resultTile = document.getElementById("result-title");
const review = document.getElementById("review");
const retake = document.getElementById("retake");
const wpm = document.getElementById("wpm");
const title = document.getElementById("title");
const banner = document.getElementById("banner");
const backspace = document.getElementById("backspace");
const errors = document.getElementById("errors");
const casing = document.getElementById("case");
const submit = document.getElementById("submit");
const theme = document.getElementById("theme");
const dark = document.getElementById("dark");
const themeIcon = document.getElementById("themeIcon");
const selectTime = document.getElementById("time");
const selectDifficulty = document.getElementById("difficulty");
const inputStyle = document.getElementById("inputStyle");
const remove = document.getElementById("remove");
const fileName = document.getElementById("fileName");

let backSpaceCheck = false;
let caseCheck = false;
let darkMode = false;
let fileCheck = false;
let errorCheck = false;
let validity = false;
let selection = 0;
let j = 0;
let textLength = 0;
let scores = [];

let time = 1;
let typed = 0;
let wrong = 0;
let gross = 0;
let accuracy;

document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    load.style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "visible";
    load.style.visibility = "hidden";
  }
};

localStorage.getItem("key");
console.log(localStorage.getItem("key"));

backspace.addEventListener("click", () => {
  backspace.blur();
  if (backspace.checked) {
    selection++;
  } else {
    selection--;
  }
});

errors.addEventListener("click", () => {
  errors.blur();
  if (errors.checked) {
    selection++;
  } else {
    selection--;
  }
});

casing.addEventListener("click", () => {
  casing.blur();
  if (casing.checked) {
    selection++;
  } else {
    selection--;
  }
});

selectTime.addEventListener("change", () => {
  selectTime.blur();
  selection++;
});

selectDifficulty.addEventListener("change", () => {
  selectDifficulty.blur();
  selection++;
});

theme.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("key", darkMode);
  inputStyle.style.transition = "all 0.4s linear 0.2s";
  selectTime.style.transition = "all 0.4s linear 0.2s";
  selectDifficulty.style.transition = "all 0.4s linear 0.2s";
  setTimeout(() => {
    inputStyle.style.transition = "none";
    selectTime.style.transition = "none";
    selectDifficulty.style.transition = "none";
  }, 600);
  sidebar.style.backgroundColor = "#f7f7f200";
  loading.classList.toggle("loadingToggle");
  if (dark.style.transform === "scale(100)") {
    dark.style.transform = "scale(0)";
  } else {
    dark.style.transform = "scale(100)";
  }
  setTimeout(() => {
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
    theme.classList.toggle("themeToggle");
  }, 400);

  banner.classList.toggle("bannerToggle");
  box.classList.toggle("boxToggle");
  title.classList.toggle("titleToggle");
  sidebar.classList.toggle("sidebarToggle");
  options.classList.toggle("optionsToggle");
  selectDifficulty.classList.toggle("selectToggle");
  selectTime.classList.toggle("selectToggle");
  hr.classList.toggle("hrToggle");
  inputStyle.classList.toggle("inputStyleToggle");
  popup.classList.toggle("popupToggle");
  resultTile.classList.toggle("resultToggle");
  review.classList.toggle("reviewToggle");
  close.classList.toggle("closeToggle");
});

if (localStorage.getItem("key") === "true") {
  theme.click();
}

inputStyle.addEventListener("input", () => {
  inputStyle.blur();
  fileCheck = true;
});

function checkFile() {
  if (file.files.length > 0) {
    file.disabled = true;
    selectDifficulty.style.pointerEvents = "none";
    selectDifficulty.style.opacity = "0.5";
    inputStyle.style.textAlign = "center";
    fileName.textContent = file.files[0].name;
    remove.style.display = "block";
  }
}

remove.addEventListener("click", () => {
  fileCheck = false;
  file.value = "";
  selectDifficulty.style.pointerEvents = "auto";
  selectDifficulty.style.opacity = "1";
  fileName.textContent = "Upload Custom Text";
  remove.style.display = "none";
  setTimeout(() => {
    file.disabled = false;
  }, 500);
});

setInterval(() => {
  checkFile();
}, 100);

submit.addEventListener("click", () => {
  submit.blur();
  selection = 0;
  fileCheck = false;
  setTimeout(() => {
    const reader = new FileReader();
    reader.readAsText(file.files[0]);
    reader.onload = () => {
      content.textContent = reader.result;
      const text = content.textContent.replace(/\s+/g, " ").trim();
      content.innerHTML = `<span id="tempCursor">|</span>` + text;
    };
  }, 500);

  remove.addEventListener("click", () => {
    setTimeout(() => {
      content.innerHTML = `<span id="tempCursor">|</span>The sun was shining brightly in the sky
      as I walked down the street. I had just finished my morning jog and
      was feeling energized and ready to tackle the day ahead. I turned the
      corner and saw my favorite coffee shop, The Daily Grind, just a few
      blocks away. I quickened my pace, eager to get my hands on a freshly
      brewed cup of coffee. As I approached the shop, I noticed a long line
      of people waiting to place their orders. I sighed and joined the
      queue, wondering how long it would take to get my caffeine fix. As I
      waited, I pulled out my phone and checked my emails. I had a few
      messages from work, but nothing too pressing. I put my phone away and
      glanced around at the other people in line. Most of them were chatting
      with each other, their faces lit up with excitement. I couldn't help
      but feel a sense of happiness and community in that moment. It was
      nice to see people out and about, enjoying their day and each other's
      company. Finally, it was my turn to order. I stepped up to the counter
      and greeted the barista, who was wearing a bright smile. "Good
      morning! What can I get for you today?" she asked. "I'll have a medium
      coffee with cream and sugar, please," I replied. "Coming right up!"
      the barista said, as she started to prepare my drink. I paid for my
      coffee and waited for it to be ready. As I stood there, I couldn't
      help but feel grateful for the small things in life, like a simple cup
      of coffee. It may seem like a small pleasure, but it can bring so much
      joy and comfort to a person's day. Finally, my coffee was ready. I
      grabbed it and took a sip, savoring the warm, creamy flavor. As I
      walked out of the coffee shop, I couldn't wait to start my day and see
      what other little pleasures it might bring.`;
    }, 500);
    loading.style.transform = "translateX(0%)";
    setTimeout(() => {
      loading.style.transform = "translateX(-130%)";
    }, 2500);

    setTimeout(() => {
      lds.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      lds.style.opacity = "0";
    }, 2200);

    theme.style.zIndex = "999";
    btn.style.zIndex = "999";
  });

  setTimeout(() => {
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
  }, 500);

  time = selectTime.value;

  if (backspace.checked) {
    backSpaceCheck = true;
  }

  if (errors.checked) {
    errorCheck = true;
    console.log(errorCheck);
  }

  if (casing.checked) {
    caseCheck = true;
  }

  setTimeout(() => {
    switch (selectDifficulty.value) {
      case "1":
        {
          content.innerHTML = `<span id="tempCursor">|</span>The sun was shining brightly in the sky as I walked down the street. I had just finished my morning jog and was feeling energized and ready to tackle the day ahead. I turned the corner and saw my favorite coffee shop, The Daily Grind, just a few blocks away. I quickened my pace, eager to get my hands on a freshly brewed cup of coffee. As I approached the shop, I noticed a long line of people waiting to place their orders. I sighed and joined the queue, wondering how long it would take to get my caffeine fix. As I waited, I pulled out my phone and checked my emails. I had a few messages from work, but nothing too pressing. I put my phone away and glanced around at the other people in line. Most of them were chatting with each other, their faces lit up with excitement. I couldn't help but feel a sense of happiness and community in that moment. It was nice to see people out and about, enjoying their day and each other's company. Finally, it was my turn to order. I stepped up to the counter and greeted the barista, who was wearing a bright smile. "Good morning! What can I get for you today?" she asked. "I'll have a medium coffee with cream and sugar, please," I replied. "Coming right up!" the barista said, as she started to prepare my drink. I paid for my coffee and waited for it to be ready. As I stood there, I couldn't help but feel grateful for the small things in life, like a simple cup of coffee. It may seem like a small pleasure, but it can bring so much joy and comfort to a person's day. Finally, my coffee was ready. I grabbed it and took a sip, savoring the warm, creamy flavor. As I walked out of the coffee shop, I couldn't wait to start my day and see what other little pleasures it might bring.`;
        }
        break;

      case "2":
        {
          content.innerHTML = `<span id="tempCursor">|</span>The verdant landscape stretched out before me as I stood atop the hill, the panoramic vista taking my breath away. The sun was setting behind the distant mountains, casting a warm glow over the rolling hills and forests below. I couldn't help but feel a sense of awe at the majesty of nature, the way it could inspire such a feeling of grandeur and insignificance all at once. I descended the hill, my footsteps falling softly on the dew-laden grass. As I walked, my thoughts turned to the day's events. It had been a day of great productivity, filled with numerous tasks and responsibilities that had kept me occupied from dawn till dusk. But despite the demands of my work, I had found solace in the tranquility of the outdoors, the peaceful surroundings providing a much-needed respite from the frenetic pace of my daily life. As I reached the bottom of the hill, I came upon a babbling brook, its clear waters gurgling over the rocks and pebbles that lined its bed. I sat down on a nearby log and watched as a school of minnows darted through the water, their iridescent scales glinting in the fading light. I closed my eyes and took a deep breath, letting the serene atmosphere wash over me. It was moments like these that reminded me of the importance of slowing down and savoring the simple pleasures of life. Too often, we get caught up in the hustle and bustle of our daily routines, forgetting to take the time to appreciate the beauty that surrounds us. As the sun set, I rose from my perch and made my way back home. As I walked, I couldn't help but feel a sense of gratitude for the day's experiences, the difficult words and challenging tasks that had tested my mettle and pushed me to grow. For in the end, it is through facing and overcoming such challenges that we truly come to understand our own strength and resilience.`;
        }
        break;

      case "3":
        {
          content.innerHTML = `<span id="tempCursor">|</span>The fenestella glimmered in the opalescent light of the nebula, casting a faint glow on the pellucid walls of the chronocar. As the temporal vessel navigated through the wormhole, its crew of chrononauts marveled at the exotic vistas unfurling before them. Captain Ariadne, a fierce and sagacious woman with skin as dark as onyx and hair like a halo of solar flames, stood at the helm, her eyes fixed on the chronometer. "We're approaching the singularity," she announced, her voice laced with anticipation. "Prepare for temporospatial displacement." The chrononauts hastened to their stations, their hearts racing with excitement and trepidation. They knew that venturing into the singularity was a perilous undertaking, but they also knew that it held the key to unlocking the secrets of the multiverse. Dr. Erebus, the ship's chief scientist, peered through the periscope, his gaunt face contorted with awe. "I can see it! The singularity is a swirling vortex of energy, surrounded by swirling clouds of plasma and radiation. It's like nothing I've ever seen before." As the chronocar drew closer to the singularity, the space-time fabric began to ripple and distort. The chrononauts felt a sense of vertigo wash over them, as if the very foundations of reality were shifting beneath their feet. But Captain Ariadne remained steady, her hand steady on the controls. "Hold on," she said, her voice steady. "We're almost there." With a final burst of speed, the chronocar hurtled into the singularity, and the chrononauts felt themselves tumbling through a maelstrom of colors and shapes. It was as if they were falling through a kaleidoscope of infinite possibility, each moment a new and wondrous vista. And then, as suddenly as it had begun, it was over. The chronocar emerged from the singularity, and the chrononauts found themselves back in the familiar confines of normal space. Captain Ariadne let out a triumphant whoop. "We did it! We've traveled through time and space, and returned unscathed. This is a momentous day for science, and for humanity." The chrononauts erupted into cheers and applause, their spirits soaring with pride and exhilaration. They had dared to venture into the unknown, and they had returned victorious. They had opened a door to a new and wondrous world, and they knew that their journey had only just begun.`;
        }
        break;

      default:
        break;
    }
  }, 500);

  loading.style.transform = "translateX(0%)";
  setTimeout(() => {
    loading.style.transform = "translateX(-130%)";
  }, 2500);

  setTimeout(() => {
    lds.style.opacity = "1";
  }, 500);

  setTimeout(() => {
    lds.style.opacity = "0";
  }, 2200);

  theme.style.zIndex = "999";
  btn.style.zIndex = "999";
});

function test() {
  theme.style.pointerEvents = "none";
  theme.style.opacity = "0.5";
  let text = content.textContent.replace(/\s+/g, " ").trim();
  textLength = text.length;
  console.log(textLength);
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
    span.classList.add("delete");
    span.textContent = letter;
    box.appendChild(span);
  });

  document.addEventListener("keypress", (e) => {
    const char = document.getElementById("letter" + j);
    if (caseCheck) {
      if (e.key.toUpperCase() === char.textContent.toUpperCase()) {
        if (darkMode) {
          char.style.color = "rgba(255, 255, 255, 0.5)";
        } else {
          char.style.color = "rgba(38, 28, 21, 0.5)";
        }
        char.insertAdjacentElement("afterend", cursor);
        typed++;
      } else {
        char.textContent = e.key;
        char.style.color = "red";
        char.style.backgroundColor = "transparent";
        char.insertAdjacentElement("afterend", cursor);
        typed++;
        wrong++;
      }
    } else {
      if (e.key === char.textContent) {
        if (darkMode) {
          char.style.color = "rgba(255, 255, 255, 0.5)";
        } else {
          char.style.color = "rgba(38, 28, 21, 0.5)";
        }
        char.insertAdjacentElement("afterend", cursor);
        typed++;
      } else {
        char.textContent = e.key;
        char.style.color = "red";
        char.style.backgroundColor = "transparent";
        char.insertAdjacentElement("afterend", cursor);
        typed++;
        wrong++;
      }
    }
    j++;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && backSpaceCheck === false) {
      j--;
      const char = document.getElementById("letter" + j);
      char.insertAdjacentElement("beforebegin", cursor);
      if (darkMode) {
        char.style.color = "white";
      } else {
        char.style.color = "black";
      }
      if (e.key !== splitText[j]) {
        char.textContent = splitText[j];
      }
      typed--;
      if (char.style.backgroundColor === "transparent") {
        wrong--;
      }
    }
  });

  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      const char = document.getElementById("letter" + j);
      char.insertAdjacentElement("afterend", cursor);
      if (darkMode) {
        char.style.color = "rgba(255, 255, 255)";
      } else {
        char.style.color = "black";
      }
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

  let storeText = content.textContent.replace(/\s+/g, " ").trim();

  function updateTimer() {
    btn.style.backgroundColor = "blue";
    btn.style.width = "134px";
    btn.style.padding = "15px 40px";
    var minutes = Math.floor(i / 1000 / 60);
    var seconds = Math.floor((i / 1000) % 60);
    btn.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    i -= 1000;

    if (textLength === typed && wrong === 0) {
      console.log("complete");
      let totalMinutes = time - (minutes + seconds / 60);
      console.log(totalMinutes);
      let gross = typed + wrong;
      let wordsPerMinute = Math.round(gross / 5 / totalMinutes);
      console.log(wordsPerMinute);
      let accuracy = Math.round((typed / gross) * 100);
      console.log(accuracy);
      clearInterval(timer);
      const congrats = document.getElementById("congrats");
      const congratsShadow = document.getElementById("congratsShadow");
      popup.style.transform = "scale(1)";
      congrats.style.display = "block";
      congratsShadow.style.display = "block";
      wpm.innerHTML =
        wordsPerMinute +
        " WPM" +
        `<br>` +
        `<span id="accuracy"
        >with <span id="percent">${accuracy}%</span> accuracy</span
      >`;
      close.addEventListener("click", () => {
        location.reload();
      });
      retake.addEventListener("click", () => {
        location.reload();
      });
      if (wordsPerMinute < 10) {
        review.innerHTML = "You are in the bottom 10% of typists!";
        wpm.style.color = "red";
      } else if (wordsPerMinute >= 10 && wordsPerMinute < 20) {
        review.innerHTML = "You need some massive improvement and practise!";
      } else if (wordsPerMinute >= 20 && wordsPerMinute < 30) {
        review.innerHTML = "You are below average and can do better!";
      } else if (wordsPerMinute >= 30 && wordsPerMinute < 40) {
        review.innerHTML = "Decent, but still below average, keep practising!";
      } else if (wordsPerMinute >= 40 && wordsPerMinute < 50) {
        review.innerHTML =
          "You are now an average typist. You still have significant room for improvement";
      } else if (wordsPerMinute >= 50 && wordsPerMinute < 60) {
        review.innerHTML =
          "Congratulations! You are now above average. Keep practising to improve further!";
      } else if (wordsPerMinute >= 60 && wordsPerMinute < 80) {
        review.innerHTML =
          "You are above average and can apply for typing jobs!";
      } else if (wordsPerMinute >= 80 && wordsPerMinute < 100) {
        review.innerHTML =
          "You are a catch! You are now in the top 10% of typists!";
      } else {
        review.innerHTML =
          "You are a beast! You are now in the top 1% of typists!";
      }
    }

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

      gross = typed + wrong;

      console.log(typed);
      console.log(wrong);

      if (errorCheck === false) {
        if (wrong > (typed / 100) * 20) {
          validity = true;
        } else {
          validity = false;
        }
      }

      if (validity) {
        retry.style.opacity = "1";
        retry.style.transform = "translate(-50%, -50%)";
        document.addEventListener("keypress", (e) => {
          location.reload();
        });
        document.addEventListener("click", () => {
          location.reload();
        });
      } else {
        let wordsPerMinute = Math.round(gross / 5 / time);
        let formula = Math.round((typed / gross) * 100);
        accuracy = formula + "%";
        wpm.innerHTML =
          wordsPerMinute +
          " WPM" +
          `<br>` +
          `<span id="accuracy"
        >with <span id="percent">${accuracy}</span> accuracy</span
      >`;

        const percentage = document.getElementById("percent");
        if (formula > 90) {
          percentage.style.color = "darkgreen";
        } else if (formula > 80 && formula <= 90) {
          percentage.style.color = "green";
        } else if (formula > 60 && formula <= 80) {
          percentage.style.color = "yellowgreen";
        } else if (formula > 40 && formula <= 60) {
          percentage.style.color = "orange";
        } else {
          percentage.style.color = "red";
        }

        popup.style.transform = "scale(1)";
        close.addEventListener("click", () => {
          location.reload();
        });
        retake.addEventListener("click", () => {
          location.reload();
        });

        if (wordsPerMinute < 10) {
          review.innerHTML = "You are in the bottom 10% of typists!";
          wpm.style.color = "red";
        } else if (wordsPerMinute >= 10 && wordsPerMinute < 20) {
          review.innerHTML = "You need some massive improvement and practise!";
        } else if (wordsPerMinute >= 20 && wordsPerMinute < 30) {
          review.innerHTML = "You are below average and can do better!";
        } else if (wordsPerMinute >= 30 && wordsPerMinute < 40) {
          review.innerHTML =
            "Decent, but still below average, keep practising!";
        } else if (wordsPerMinute >= 40 && wordsPerMinute < 50) {
          review.innerHTML =
            "You are now an average typist. You still have significant room for improvement";
        } else if (wordsPerMinute >= 50 && wordsPerMinute < 60) {
          review.innerHTML =
            "Congratulations! You are now above average. Keep practising to improve further!";
        } else if (wordsPerMinute >= 60 && wordsPerMinute < 80) {
          review.innerHTML =
            "You are above average and can apply for typing jobs!";
        } else if (wordsPerMinute >= 80 && wordsPerMinute < 100) {
          review.innerHTML =
            "You are a catch! You are now in the top 10% of typists!";
        } else {
          review.innerHTML =
            "You are a beast! You are now in the top 1% of typists!";
        }
      }
    }
  }

  let timer = setInterval(updateTimer, 1000);
}

document.addEventListener("keypress", (e) => {
  if (selection > 0 || fileCheck) {
    e.preventDefault();
  } else {
    let shake = setInterval(() => {
      banner.classList.toggle("shake");
    }, 100);
    setTimeout(() => {
      clearInterval(shake);
      banner.classList.remove("shake");
    }, 400);
  }
});

document.addEventListener("keydown", (e) => {
  if (selection > 0 || fileCheck) {
    warning.style.opacity = "1";
    warning.style.transform = "translate(-50%, -50%)";
    setTimeout(() => {
      warning.style.opacity = "0";
      warning.style.transform = "translate(-60%, -50%)";
    }, 1500);
  } else {
    if (e.key === "Enter") {
      e.preventDefault();
      sidebar.style.pointerEvents = "none";
      sidebar.style.opacity = "0.5";
      content.style.display = "none";
      box.style.display = "block";
      let tempCursor = document.getElementById("tempCursor");
      tempCursor.remove();
      setTimeout(() => {
        banner.classList.toggle("fade");
      }, 1000);
      setTimeout(() => {
        banner.style.display = "none";
      }, 2000);
      start();
      test();
    }
    setTimeout(() => {
      document.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
          e.preventDefault();
        }
      };
      document.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
          e.preventDefault();
        }
      });
    }, time * 60 * 1000 + 1000);
  }
});
