/* ════════════════════════════════════════════════════════
   COGNITIVE ANIMAL — quiz logic
   QUESTIONS（questions.js）を出題し、回答からVAK×EAWPの
   タイプを判定して該当アニマルページへ遷移する。
════════════════════════════════════════════════════════ */

const ANIMAL_CODE_TO_SLUG = {
  VE: "tako",
  VA: "karasu",
  VW: "taka",
  VP: "beaver",
  AE: "kujira",
  AA: "koumori",
  AW: "ookami",
  AP: "inko",
  KE: "umigame",
  KA: "mogura",
  KW: "zou",
  KP: "yagi"
};

let currentIndex = 0;
const answers = new Array(QUESTIONS.length).fill(null);

function trackEvent(name, params) {
  if (typeof gtag === "function") {
    gtag("event", name, params || {});
  }
}

function render() {
  const q = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;

  document.getElementById("progress-fill").style.width =
    (((currentIndex + 1) / total) * 100) + "%";
  document.getElementById("progress-count").textContent =
    String(currentIndex + 1).padStart(2, "0") + " / " + total;

  document.getElementById("question-eyebrow").textContent = "Q" + (currentIndex + 1);
  document.getElementById("question-text").textContent = q.text;

  const list = document.getElementById("options-list");
  list.setAttribute("role", "radiogroup");
  list.setAttribute("aria-labelledby", "question-text");
  list.innerHTML = "";

  q.options.forEach(function (opt) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.dataset.optionId = opt.id;
    btn.setAttribute("role", "radio");

    const radio = document.createElement("span");
    radio.className = "quiz-option-radio";
    radio.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.className = "quiz-option-text";
    text.textContent = opt.text;

    btn.appendChild(radio);
    btn.appendChild(text);

    const currentAnswer = answers[currentIndex];
    const isSelected = currentAnswer && currentAnswer.optionId === opt.id;
    if (isSelected) {
      btn.classList.add("is-selected");
    }
    btn.setAttribute("aria-checked", isSelected ? "true" : "false");

    btn.addEventListener("click", function () {
      selectOption(opt);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });

  const backBtn = document.getElementById("back-btn");
  backBtn.classList.toggle("is-disabled", currentIndex === 0);
  backBtn.disabled = currentIndex === 0;

  const nextBtn = document.getElementById("next-btn");
  const answered = !!answers[currentIndex];
  nextBtn.classList.toggle("is-active", answered);
  nextBtn.textContent = currentIndex === total - 1 ? "結果を見る" : "次へ";
}

function selectOption(opt) {
  answers[currentIndex] = {
    optionId: opt.id,
    axis: opt.axis,
    points: opt.points
  };
  render();
}

function goBack() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  render();
}

function goNext() {
  const answer = answers[currentIndex];
  if (!answer) return;

  const q = QUESTIONS[currentIndex];
  trackEvent("question_answered", {
    question_number: currentIndex + 1,
    axis_group: q.axisGroup,
    selected_axis: answer.axis
  });

  if (currentIndex === QUESTIONS.length - 1) {
    finishQuiz();
    return;
  }

  currentIndex += 1;
  render();
}

  function axisOf(id) {
    const i = QUESTIONS.findIndex(function (q) { return q.id === id; });
    return answers[i] ? answers[i].axis : null;
  }

  const topVak = pickTop(vakScores, [axisOf("Q6")]);
  const topEawp = pickTop(eawpScores, [axisOf("Q16"), axisOf("Q15")]);

function finishQuiz() {
  const vakScores = { V: 0, A: 0, K: 0 };
  const eawpScores = { E: 0, A: 0, W: 0, P: 0 };

  QUESTIONS.forEach(function (q, index) {
    const answer = answers[index];
    if (!answer) return;
    if (q.axisGroup === "VAK") {
      vakScores[answer.axis] += answer.points;
    } else {
      eawpScores[answer.axis] += answer.points;
    }
  });

  function axisOf(id) {
    const i = QUESTIONS.findIndex(function (q) { return q.id === id; });
    return answers[i] ? answers[i].axis : null;
  }

  // VAK：Q6で決める
  const topVak = pickTop(vakScores, [axisOf("Q6")]);

  // EAWP：Q16 → Q15 → Q14 … と後ろから遡って決める
  const eawpTiebreaks = [];
  for (let i = QUESTIONS.length - 1; i >= 0; i--) {
    if (QUESTIONS[i].axisGroup === "EAWP" && answers[i]) {
      eawpTiebreaks.push(answers[i].axis);
    }
  }
  const topEawp = pickTop(eawpScores, eawpTiebreaks);
  const animalCode = topVak + topEawp;
  const slug = ANIMAL_CODE_TO_SLUG[animalCode];

  trackEvent("quiz_complete", {
    result_type: animalCode,
    vak_axis: topVak,
    eawp_axis: topEawp
  });

  if (!slug) {
    console.error("Unknown animal code:", animalCode);
    return;
  }

  window.location.href = "animals/" + slug + ".html?result=" + animalCode;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("back-btn").addEventListener("click", goBack);
  document.getElementById("next-btn").addEventListener("click", goNext);
  trackEvent("quiz_start");
  render();
});
