let currentStep = 0;
let character = "";
let steps = [];

const storyEl = document.getElementById("story");
const choicesEl = document.getElementById("choices");
const introEl = document.getElementById("intro");
const gameEl = document.getElementById("game");

const characters = {
  "Activist": [
    ["You attend your first ACT UP meeting.", "Join protest", "Stay quiet"],
    ["You join a protest at the FDA headquarters.", "Get arrested", "Leave early"],
    ["You get arrested. The media covers your story.", "Keep organizing", "Quit activism"],
    ["You plan a die-in protest in a church.", "Hold protest", "Cancel event"],
    ["You face backlash from religious groups.", "Defend your cause", "Apologize"],
    ["A close friend dies from AIDS.", "Speak out publicly", "Grieve privately"],
    ["You're invited to speak at a university.", "Accept", "Decline"],
    ["Police shut down a protest violently.", "Call media", "Hide"],
    ["The mayor invites activists for discussion.", "Attend", "Reject invitation"],
    ["You reflect on years of activism.", "Feel hopeful", "Feel tired"]
  ],
  "Doctor": [
    ["You're one of few treating AIDS patients.", "Speak at medical conference", "Keep quiet"],
    ["Colleagues doubt AIDS is real.", "Push for research", "Stay silent"],
    ["You publish a paper on treatments.", "Distribute widely", "Keep private"],
    ["You see patients shunned by their families.", "Offer emotional support", "Focus only on medicine"],
    ["A new trial drug becomes available.", "Recommend it", "Wait for more studies"],
    ["A protest happens outside your hospital.", "Talk to protesters", "Ignore them"],
    ["You meet activists demanding better care.", "Collaborate", "Refuse"],
    ["You’re invited to advise the CDC.", "Accept", "Decline"],
    ["A religious group criticizes your work.", "Defend it", "Avoid media"],
    ["Your patient survives unexpectedly.", "Celebrate", "Stay cautious"]
  ],
  "Politician": [
    ["You’re briefed on the emerging AIDS crisis.", "Request more funding", "Delay action"],
    ["You hear from constituents.", "Meet them", "Ignore letters"],
    ["Activists protest at city hall.", "Speak to press", "Hide"],
    ["You vote on a health bill.", "Support it", "Cut funding"],
    ["You’re invited to an AIDS memorial.", "Attend", "Decline"],
    ["Religious groups demand conservative policy.", "Compromise", "Stay firm"],
    ["Your advisor warns about backlash.", "Hold your stance", "Backtrack"],
    ["The president makes a public statement.", "Echo support", "Stay silent"],
    ["Your party pressures you.", "Break rank", "Fall in line"],
    ["Years later, your decisions are studied.", "Feel pride", "Feel regret"]
  ]
};

function chooseCharacter(chosenCharacter) {
  character = chosenCharacter;
  steps = characters[character];
  currentStep = 0;
  introEl.classList.add("hidden");
  gameEl.classList.remove("hidden");
  showStep();
}

function showStep() {
  const [text, opt1, opt2] = steps[currentStep];
  storyEl.textContent = text;
  choicesEl.innerHTML = "";

  const btn1 = document.createElement("button");
  btn1.textContent = opt1;
  btn1.onclick = () => nextStep();
  choicesEl.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.textContent = opt2;
  btn2.onclick = () => nextStep();
  choicesEl.appendChild(btn2);
}

function nextStep() {
  currentStep++;
  if (currentStep >= steps.length) {
    storyEl.textContent = `Your journey as a ${character} is complete. Thank you for playing.`;
    choicesEl.innerHTML = "";
    return;
  }
  showStep();
}

