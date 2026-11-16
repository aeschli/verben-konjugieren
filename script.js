const verbData = {
  sein: {
    praesens: {
      ich: "bin",
      du: "bist",
      "er/sie/es": "ist",
      wir: "sind",
      ihr: "seid",
      "sie/Sie": "sind"
    },
    futur: {
      ich: "werde sein",
      du: "wirst sein",
      "er/sie/es": "wird sein",
      wir: "werden sein",
      ihr: "werdet sein",
      "sie/Sie": "werden sein"
    },
    praeteritum: {
      ich: "war",
      du: "warst",
      "er/sie/es": "war",
      wir: "waren",
      ihr: "wart",
      "sie/Sie": "waren"
    },
    perfekt: {
      ich: "bin gewesen",
      du: "bist gewesen",
      "er/sie/es": "ist gewesen",
      wir: "sind gewesen",
      ihr: "seid gewesen",
      "sie/Sie": "sind gewesen"
    }
  },
  haben: {
    praesens: {
      ich: "habe",
      du: "hast",
      "er/sie/es": "hat",
      wir: "haben",
      ihr: "habt",
      "sie/Sie": "haben"
    },
    futur: {
      ich: "werde haben",
      du: "wirst haben",
      "er/sie/es": "wird haben",
      wir: "werden haben",
      ihr: "werdet haben",
      "sie/Sie": "werden haben"
    },
    praeteritum: {
      ich: "hatte",
      du: "hattest",
      "er/sie/es": "hatte",
      wir: "hatten",
      ihr: "hattet",
      "sie/Sie": "hatten"
    },
    perfekt: {
      ich: "habe gehabt",
      du: "hast gehabt",
      "er/sie/es": "hat gehabt",
      wir: "haben gehabt",
      ihr: "habt gehabt",
      "sie/Sie": "haben gehabt"
    }
  },
  werden: {
    praesens: {
      ich: "werde",
      du: "wirst",
      "er/sie/es": "wird",
      wir: "werden",
      ihr: "werdet",
      "sie/Sie": "werden"
    },
    futur: {
      ich: "werde werden",
      du: "wirst werden",
      "er/sie/es": "wird werden",
      wir: "werden werden",
      ihr: "werdet werden",
      "sie/Sie": "werden werden"
    },
    praeteritum: {
      ich: "wurde",
      du: "wurdest",
      "er/sie/es": "wurde",
      wir: "wurden",
      ihr: "wurdet",
      "sie/Sie": "wurden"
    },
    perfekt: {
      ich: "bin geworden",
      du: "bist geworden",
      "er/sie/es": "ist geworden",
      wir: "sind geworden",
      ihr: "seid geworden",
      "sie/Sie": "sind geworden"
    }
  },
  gehen: {
    praesens: {
      ich: "gehe",
      du: "gehst",
      "er/sie/es": "geht",
      wir: "gehen",
      ihr: "geht",
      "sie/Sie": "gehen"
    },
    futur: {
      ich: "werde gehen",
      du: "wirst gehen",
      "er/sie/es": "wird gehen",
      wir: "werden gehen",
      ihr: "werdet gehen",
      "sie/Sie": "werden gehen"
    },
    praeteritum: {
      ich: "ging",
      du: "gingst",
      "er/sie/es": "ging",
      wir: "gingen",
      ihr: "gingt",
      "sie/Sie": "gingen"
    },
    perfekt: {
      ich: "bin gegangen",
      du: "bist gegangen",
      "er/sie/es": "ist gegangen",
      wir: "sind gegangen",
      ihr: "seid gegangen",
      "sie/Sie": "sind gegangen"
    }
  },
  kommen: {
    praesens: {
      ich: "komme",
      du: "kommst",
      "er/sie/es": "kommt",
      wir: "kommen",
      ihr: "kommt",
      "sie/Sie": "kommen"
    },
    futur: {
      ich: "werde kommen",
      du: "wirst kommen",
      "er/sie/es": "wird kommen",
      wir: "werden kommen",
      ihr: "werdet kommen",
      "sie/Sie": "werden kommen"
    },
    praeteritum: {
      ich: "kam",
      du: "kamst",
      "er/sie/es": "kam",
      wir: "kamen",
      ihr: "kamt",
      "sie/Sie": "kamen"
    },
    perfekt: {
      ich: "bin gekommen",
      du: "bist gekommen",
      "er/sie/es": "ist gekommen",
      wir: "sind gekommen",
      ihr: "seid gekommen",
      "sie/Sie": "sind gekommen"
    }
  },
  sehen: {
    praesens: {
      ich: "sehe",
      du: "siehst",
      "er/sie/es": "sieht",
      wir: "sehen",
      ihr: "seht",
      "sie/Sie": "sehen"
    },
    futur: {
      ich: "werde sehen",
      du: "wirst sehen",
      "er/sie/es": "wird sehen",
      wir: "werden sehen",
      ihr: "werdet sehen",
      "sie/Sie": "werden sehen"
    },
    praeteritum: {
      ich: "sah",
      du: "sahst",
      "er/sie/es": "sah",
      wir: "sahen",
      ihr: "saht",
      "sie/Sie": "sahen"
    },
    perfekt: {
      ich: "habe gesehen",
      du: "hast gesehen",
      "er/sie/es": "hat gesehen",
      wir: "haben gesehen",
      ihr: "habt gesehen",
      "sie/Sie": "haben gesehen"
    }
  },
  geben: {
    praesens: {
      ich: "gebe",
      du: "gibst",
      "er/sie/es": "gibt",
      wir: "geben",
      ihr: "gebt",
      "sie/Sie": "geben"
    },
    futur: {
      ich: "werde geben",
      du: "wirst geben",
      "er/sie/es": "wird geben",
      wir: "werden geben",
      ihr: "werdet geben",
      "sie/Sie": "werden geben"
    },
    praeteritum: {
      ich: "gab",
      du: "gabst",
      "er/sie/es": "gab",
      wir: "gaben",
      ihr: "gabt",
      "sie/Sie": "gaben"
    },
    perfekt: {
      ich: "habe gegeben",
      du: "hast gegeben",
      "er/sie/es": "hat gegeben",
      wir: "haben gegeben",
      ihr: "habt gegeben",
      "sie/Sie": "haben gegeben"
    }
  },
  essen: {
    praesens: {
      ich: "esse",
      du: "isst",
      "er/sie/es": "isst",
      wir: "essen",
      ihr: "esst",
      "sie/Sie": "essen"
    },
    futur: {
      ich: "werde essen",
      du: "wirst essen",
      "er/sie/es": "wird essen",
      wir: "werden essen",
      ihr: "werdet essen",
      "sie/Sie": "werden essen"
    },
    praeteritum: {
      ich: "aß",
      du: "aßest",
      "er/sie/es": "aß",
      wir: "aßen",
      ihr: "aßt",
      "sie/Sie": "aßen"
    },
    perfekt: {
      ich: "habe gegessen",
      du: "hast gegessen",
      "er/sie/es": "hat gegessen",
      wir: "haben gegessen",
      ihr: "habt gegessen",
      "sie/Sie": "haben gegessen"
    }
  },
  nehmen: {
    praesens: {
      ich: "nehme",
      du: "nimmst",
      "er/sie/es": "nimmt",
      wir: "nehmen",
      ihr: "nehmt",
      "sie/Sie": "nehmen"
    },
    futur: {
      ich: "werde nehmen",
      du: "wirst nehmen",
      "er/sie/es": "wird nehmen",
      wir: "werden nehmen",
      ihr: "werdet nehmen",
      "sie/Sie": "werden nehmen"
    },
    praeteritum: {
      ich: "nahm",
      du: "nahmst",
      "er/sie/es": "nahm",
      wir: "nahmen",
      ihr: "nahmt",
      "sie/Sie": "nahmen"
    },
    perfekt: {
      ich: "habe genommen",
      du: "hast genommen",
      "er/sie/es": "hat genommen",
      wir: "haben genommen",
      ihr: "habt genommen",
      "sie/Sie": "haben genommen"
    }
  },
  sprechen: {
    praesens: {
      ich: "spreche",
      du: "sprichst",
      "er/sie/es": "spricht",
      wir: "sprechen",
      ihr: "sprecht",
      "sie/Sie": "sprechen"
    },
    futur: {
      ich: "werde sprechen",
      du: "wirst sprechen",
      "er/sie/es": "wird sprechen",
      wir: "werden sprechen",
      ihr: "werdet sprechen",
      "sie/Sie": "werden sprechen"
    },
    praeteritum: {
      ich: "sprach",
      du: "sprachst",
      "er/sie/es": "sprach",
      wir: "sprachen",
      ihr: "spracht",
      "sie/Sie": "sprachen"
    },
    perfekt: {
      ich: "habe gesprochen",
      du: "hast gesprochen",
      "er/sie/es": "hat gesprochen",
      wir: "haben gesprochen",
      ihr: "habt gesprochen",
      "sie/Sie": "haben gesprochen"
    }
  }
};

const persons = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
const tenses = ["praesens", "futur", "praeteritum", "perfekt"];
const tenseLabels = {
  praesens: "Präsens",
  futur: "Futur I",
  praeteritum: "Präteritum",
  perfekt: "Perfekt"
};

const verbSelect = document.getElementById("verbSelect");
const tenseSelect = document.getElementById("tenseSelect");
const personSelect = document.getElementById("personSelect");
const nextBtn = document.getElementById("nextBtn");
const showBtn = document.getElementById("showBtn");
const promptText = document.getElementById("promptText");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");

let currentQuestion = null;
let score = { correct: 0, wrong: 0 };

function fillVerbSelect() {
  const allOption = document.createElement("option");
  allOption.value = "mixed";
  allOption.textContent = "Gemischt";
  verbSelect.append(allOption);

  Object.keys(verbData)
    .sort((left, right) => left.localeCompare(right, "de"))
    .forEach((verb) => {
      const option = document.createElement("option");
      option.value = verb;
      option.textContent = verb;
      verbSelect.append(option);
    });
}

function chooseRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

function getSelectedVerb() {
  if (verbSelect.value === "mixed") {
    return chooseRandom(Object.keys(verbData));
  }
  return verbSelect.value;
}

function getSelectedTense() {
  if (tenseSelect.value === "mixed") {
    return chooseRandom(tenses);
  }
  return tenseSelect.value;
}

function getSelectedPerson() {
  if (personSelect.value === "mixed") {
    return chooseRandom(persons);
  }
  return personSelect.value;
}

function generateQuestion() {
  const verb = getSelectedVerb();
  const tense = getSelectedTense();
  const person = getSelectedPerson();
  const expected = verbData[verb][tense][person];

  currentQuestion = { verb, tense, person, expected };
  promptText.textContent = `Konjugiere „${verb}“ in ${tenseLabels[tense]} für „${person}“.`;
  feedback.textContent = "";
  feedback.className = "feedback";
  answerInput.value = "";
  answerInput.focus();
}

function updateScore() {
  scoreText.textContent = `Richtig: ${score.correct} | Falsch: ${score.wrong}`;
}

function checkAnswer(event) {
  event.preventDefault();

  if (!currentQuestion) {
    feedback.textContent = "Bitte zuerst eine Aufgabe erstellen.";
    feedback.className = "feedback error";
    return;
  }

  const userAnswer = normalize(answerInput.value);
  const expectedAnswer = normalize(currentQuestion.expected);

  if (!userAnswer) {
    feedback.textContent = "Bitte gib eine Antwort ein.";
    feedback.className = "feedback error";
    return;
  }

  if (userAnswer === expectedAnswer) {
    score.correct += 1;
    feedback.textContent = "✅ Richtig! Super gemacht.";
    feedback.className = "feedback ok";
  } else {
    score.wrong += 1;
    feedback.textContent = `❌ Fast! Richtig ist: ${currentQuestion.expected}`;
    feedback.className = "feedback error";
  }

  updateScore();
}

function showSolution() {
  if (!currentQuestion) {
    feedback.textContent = "Bitte zuerst eine Aufgabe erstellen.";
    feedback.className = "feedback error";
    return;
  }

  feedback.textContent = `Lösung: ${currentQuestion.expected}`;
  feedback.className = "feedback ok";
}

nextBtn.addEventListener("click", generateQuestion);
showBtn.addEventListener("click", showSolution);
answerForm.addEventListener("submit", checkAnswer);

fillVerbSelect();
updateScore();
