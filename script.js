let playerCharacter = null;
let currentQuestion = 0;
let score = 0;

const stories = {
    activist: [
        {
            question: "You hear about a protest forming in Central Park. Do you join?",
            choices: [
                { text: "Yes, I join the protest", points: 2 },
                { text: "No, I stay home", points: 0 }
            ]
        },
        {
            question: "Police begin to push back the crowd. Do you stay or retreat?",
            choices: [
                { text: "Stay and chant louder", points: 2 },
                { text: "Retreat to safety", points: 1 }
            ]
        },
        {
            question: "You’re offered a chance to speak at a rally. Do you accept?",
            choices: [
                { text: "Yes, you speak out passionately", points: 2 },
                { text: "No, public speaking isn’t for you", points: 0 }
            ]
        },
        {
            question: "An anti-LGBTQ+ group confronts you. Do you engage or ignore?",
            choices: [
                { text: "Engage calmly with facts", points: 2 },
                { text: "Walk away to avoid conflict", points: 1 }
            ]
        },
        {
            question: "A friend is arrested during a protest. Do you help bail them out?",
            choices: [
                { text: "Yes, you fundraise and support them", points: 2 },
                { text: "No, you distance yourself", points: 0 }
            ]
        },
        {
            question: "You're asked to volunteer with ACT UP. Do you commit?",
            choices: [
                { text: "Yes, fully involved", points: 2 },
                { text: "Only attend a few meetings", points: 1 }
            ]
        },
        {
            question: "You hear about an AIDS patient refused care. Do you intervene?",
            choices: [
                { text: "Yes, publicly call it out", points: 2 },
                { text: "Let it go", points: 0 }
            ]
        },
        {
            question: "Media ignores your protest. Do you start your own zine?",
            choices: [
                { text: "Yes, spread awareness", points: 2 },
                { text: "No, too much effort", points: 0 }
            ]
        },
        {
            question: "You're exhausted. Do you take a break?",
            choices: [
                { text: "Yes, self-care is activism", points: 2 },
                { text: "No, keep pushing until you collapse", points: 1 }
            ]
        },
        {
            question: "Years later, you’re invited to speak on your activism. Do you go?",
            choices: [
                { text: "Yes, honor the legacy", points: 2 },
                { text: "No, you want to move on", points: 0 }
            ]
        }
    ],
    nurse: [
        {
            question: "You're assigned a patient with AIDS. Do you accept?",
            choices: [
                { text: "Yes, with empathy", points: 2 },
                { text: "No, request reassignment", points: 0 }
            ]
        },
        {
            question: "The hospital lacks protective gear. Do you speak up?",
            choices: [
                { text: "Yes, file a complaint", points: 2 },
                { text: "Stay silent", points: 0 }
            ]
        },
        {
            question: "A patient is scared and alone. Do you comfort them?",
            choices: [
                { text: "Yes, talk and listen", points: 2 },
                { text: "Keep interactions minimal", points: 0 }
            ]
        },
        {
            question: "Coworkers mock AIDS patients. Do you intervene?",
            choices: [
                { text: "Yes, educate them", points: 2 },
                { text: "Avoid conflict", points: 1 }
            ]
        },
        {
            question: "You're invited to speak at a medical seminar. Go?",
            choices: [
                { text: "Yes, share your experience", points: 2 },
                { text: "Decline, public speaking isn’t for you", points: 0 }
            ]
        },
        {
            question: "You're offered a chance to write about your experience. Accept?",
            choices: [
                { text: "Yes, tell your story", points: 2 },
                { text: "No, prefer privacy", points: 0 }
            ]
        },
        {
            question: "Your shift is over, but a patient is fading. Stay?",
            choices: [
                { text: "Stay and comfort them", points: 2 },
                { text: "Leave, you’re exhausted", points: 1 }
            ]
        },
        {
            question: "You’re asked to help train new nurses. Do you help?",
            choices: [
                { text: "Yes, it’s important", points: 2 },
                { text: "No, you’re overwhelmed", points: 0 }
            ]
        },
        {
            question: "Years later, your story is part of a museum exhibit. Contribute?",
            choices: [
                { text: "Yes, to honor patients", points: 2 },
                { text: "Decline, too personal", points: 0 }
            ]
        },
        {
            question: "You’re invited to meet with a politician about health reform. Attend?",
            choices: [
                { text: "Yes, advocate for change", points: 2 },
                { text: "No, skeptical of politics", points: 1 }
            ]
        }
    ],
    journalist: [
        {
            question: "You hear rumors about a virus affecting gay men. Investigate?",
            choices: [
                { text: "Yes, write a story", points: 2 },
                { text: "Ignore it for now", points: 0 }
            ]
        },
        {
            question: "Your editor says it's too controversial. Push back?",
            choices: [
                { text: "Yes, insist on publishing", points: 2 },
                { text: "Back down", points: 0 }
            ]
        },
        {
            question: "Sources want anonymity. Respect that?",
            choices: [
                { text: "Yes, protect them", points: 2 },
                { text: "Pressure them", points: 0 }
            ]
        },
        {
            question: "You’re offered a bigger platform. Take it?",
            choices: [
                { text: "Yes, spread awareness", points: 2 },
                { text: "Stay local", points: 0 }
            ]
        },
        {
            question: "Another journalist is discredited for their AIDS coverage. Defend them?",
            choices: [
                { text: "Yes, publicly support", points: 2 },
                { text: "Stay quiet", points: 1 }
            ]
        },
        {
            question: "You uncover hospital neglect. Expose it?",
            choices: [
                { text: "Yes, break the story", points: 2 },
                { text: "No, fear backlash", points: 0 }
            ]
        },
        {
            question: "You’re asked to interview grieving families. Do it?",
            choices: [
                { text: "Yes, with care", points: 2 },
                { text: "No, it's too hard", points: 0 }
            ]
        },
        {
            question: "You’re accused of bias. How do you respond?",
            choices: [
                { text: "Defend your work with facts", points: 2 },
                { text: "Let it go", points: 0 }
            ]
        },
        {
            question: "You have a chance to publish a book. Accept?",
            choices: [
                { text: "Yes, share the truth", points: 2 },
                { text: "No, avoid attention", points: 0 }
            ]
        },
        {
            question: "Your work is nominated for a journalism award. Accept?",
            choices: [
                { text: "Yes, honor the stories", points: 2 },
                { text: "Decline the spotlight", points: 0 }
            ]
        }
    ]
};

function selectCharacter(character) {
    playerCharacter = character;
    currentQuestion = 0;
    score = 0;

    document.getElementById('character-box').style.display = 'none';
    document.getElementById('story-box').style.display = 'block';
    document.getElementById('choice-box').style.display = 'block';
    document.getElementById('score-box').style.display = 'block';
    document.getElementById('ending-box').style.display = 'none';

    showStory();
}

function showStory() {
    const story = stories[playerCharacter];

    if (!story || currentQuestion >= story.length) {
        endGame();
        return;
    }

    const current = story[currentQuestion];
    document.getElementById('story-text').textContent = current.question;

    const choiceBox = document.getElementById('choice-box');
    choiceBox.innerHTML = '';

    current.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.textContent = choice.text;
        btn.className = "choice-button";
        btn.onclick = () => makeChoice(index);
        choiceBox.appendChild(btn);
    });

    document.getElementById('score-box').textContent = `Points: ${score}`;
}

function makeChoice(choiceIndex) {
    const current = stories[playerCharacter][currentQuestion];
    score += current.choices[choiceIndex].points;
    currentQuestion++;
    showStory();
}

function endGame() {
    document.getElementById('story-box').style.display = 'none';
    document.getElementById('choice-box').style.display = 'none';
    document.getElementById('ending-box').style.display = 'block';

    let message = "";
    if (score >= 18) {
        message = "You showed outstanding bravery and helped change the public narrative during the AIDS crisis.";
    } else if (score >= 12) {
        message = "You made meaningful contributions, even if limited by fear or circumstance.";
    } else {
        message = "You hesitated, and history remembers the silence too. But every choice reveals the difficulty of the time.";
    }

    document.getElementById('ending-box').innerHTML = `
        <h2>Game Over</h2>
        <p>Final Score: ${score}</p>
        <p>${message}</p>
    `;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = "Play Again";
    playAgainButton.className = "choice-button";
    playAgainButton.onclick = () => {
        document.getElementById('character-box').style.display = 'block';
        document.getElementById('ending-box').style.display = 'none';
        document.getElementById('score-box').textContent = '';
    };
    document.getElementById('ending-box').appendChild(playAgainButton);
}
