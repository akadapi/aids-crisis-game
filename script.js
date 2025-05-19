let playerCharacter = null;
let currentQuestion = 0;
let score = 0;

const stories = {
    activist: [
        {
            text: `It's 1987. The AIDS epidemic is devastating your community in New York. Friends are dying, and the government remains largely silent. You attend your first ACT UP meeting—a group of direct action protestors. You're nervous. One leader suggests a bold protest at the FDA to demand faster drug approval. It could get media attention, but also lead to arrests.\n\nDo you join the protest or focus on writing op-eds and raising awareness in safer ways?`,
            choices: [
                { text: "Join the protest", points: 3 },
                { text: "Raise awareness through writing", points: 2 }
            ]
        },
        {
            text: `After participating in the FDA protest, you're contacted by a local newspaper reporter who wants an anonymous interview about life during the AIDS crisis. Sharing your story might humanize the issue—but it also means risking your privacy and possibly your job.\n\nDo you agree to the interview?`,
            choices: [
                { text: "Agree to the interview", points: 3 },
                { text: "Decline and protect your anonymity", points: 1 }
            ]
        },
        {
            text: `You’ve been volunteering at an AIDS hospice, offering support to patients whose families have abandoned them. One patient is a former politician who voted against AIDS funding. Now he's dying alone. Your team asks if you'd be willing to sit with him in his final days.\n\nDo you choose compassion or stand on principle?`,
            choices: [
                { text: "Care for him despite his past", points: 3 },
                { text: "Refuse to help due to his history", points: 1 }
            ]
        },
        {
            text: `Your protest work leads you to a controversial moment: your group wants to stage "die-ins" at Catholic churches to call out their opposition to safe sex education. Some members object, saying it's too extreme.\n\nDo you vote in favor of the action or propose an alternative?`,
            choices: [
                { text: "Support the church protest", points: 3 },
                { text: "Suggest a non-religious protest", points: 2 }
            ]
        },
        {
            text: `You’re approached by a pharmaceutical company offering a speaking platform to activists—if you agree to moderate your tone. It’s a rare opportunity to speak publicly, but it may water down your message.\n\nDo you accept the offer or refuse?`,
            choices: [
                { text: "Accept and try to influence from within", points: 2 },
                { text: "Refuse and maintain integrity", points: 3 }
            ]
        },
        {
            text: `A fellow activist is arrested and charged unfairly after a protest turns chaotic. The community wants you to organize a legal defense fund and media campaign. It’s a lot of work, and you're already burned out.\n\nDo you lead the charge again?`,
            choices: [
                { text: "Lead the legal defense effort", points: 3 },
                { text: "Support but take a step back", points: 2 }
            ]
        },
        {
            text: `You’re asked to help create a controversial art installation showing the faces of people lost to AIDS. The project will be placed on government buildings.\n\nDo you contribute?`,
            choices: [
                { text: "Yes, art can spark awareness", points: 3 },
                { text: "No, it's too confrontational", points: 1 }
            ]
        },
        {
            text: `You discover internal conflict in your group: racial and gender minorities feel sidelined. They ask for structural change.\n\nDo you help push for a more inclusive structure?`,
            choices: [
                { text: "Yes, equity matters", points: 3 },
                { text: "Stay neutral to avoid division", points: 1 }
            ]
        },
        {
            text: `A national news outlet wants you on air to talk about AIDS activism. They ask for soundbites and a scripted message.\n\nDo you speak your truth, or play along for the platform?`,
            choices: [
                { text: "Speak truthfully, even if risky", points: 3 },
                { text: "Follow the script", points: 2 }
            ]
        },
        {
            text: `Your closest friend is diagnosed. They ask for your help telling their conservative family.\n\nDo you support them through the conversation, or recommend they keep it quiet for safety?`,
            choices: [
                { text: "Support them and face the family", points: 3 },
                { text: "Advise silence for protection", points: 1 }
            ]
        }
    ],

    ally: [
        {
            text: `You're a university student in 1985. One of your professors, who is openly gay, is being targeted by conservative groups claiming he “promotes immoral behavior.” Most students stay silent. The campus LGBTQ+ group asks you to speak in his defense at a rally.\n\nDo you risk your reputation to support him?`,
            choices: [
                { text: "Speak at the rally", points: 3 },
                { text: "Support quietly by attending", points: 2 },
                { text: "Stay silent", points: 0 }
            ]
        },
        {
            text: `Your roommate recently came out as HIV positive. Rumors spread quickly in your dorm, and others are pressuring you to request a new roommate. You feel torn between friendship and fear.\n\nDo you request a room change or defend your roommate publicly?`,
            choices: [
                { text: "Defend them and stay", points: 3 },
                { text: "Move out quietly", points: 1 }
            ]
        },
        {
            text: `You’ve been asked to help fundraise for an AIDS support center. Your parents disapprove, saying it’s “not your fight.”\n\nDo you continue with the fundraiser or step back to maintain peace at home?`,
            choices: [
                { text: "Keep fundraising", points: 3 },
                { text: "Step back to appease them", points: 1 }
            ]
        },
        {
            text: `You're offered an internship with a major politician, but discover they’ve voted against AIDS funding and LGBTQ+ protections.\n\nDo you confront them or take the opportunity and try to influence from within?`,
            choices: [
                { text: "Confront or decline the offer", points: 3 },
                { text: "Accept and try to influence", points: 2 }
            ]
        },
        {
            text: `An LGBTQ+ friend asks you to accompany them to a funeral where their partner is not welcome.\n\nDo you attend with them and support their right to grieve?`,
            choices: [
                { text: "Yes, stand by them", points: 3 },
                { text: "No, it might cause conflict", points: 1 }
            ]
        },
        {
            text: `A classmate makes a cruel joke about AIDS in a lecture. The professor ignores it.\n\nDo you speak up or let it pass to avoid confrontation?`,
            choices: [
                { text: "Speak up in class", points: 3 },
                { text: "Talk to the professor later", points: 2 },
                { text: "Say nothing", points: 0 }
            ]
        },
        {
            text: `You’re invited to volunteer at an AIDS memorial quilt event, but it overlaps with your exam schedule.\n\nDo you try to do both, prioritize school, or the cause?`,
            choices: [
                { text: "Prioritize the event", points: 3 },
                { text: "Try to balance both", points: 2 }
            ]
        },
        {
            text: `A friend is being harassed for being openly gay. You see the bullying happen.\n\nDo you step in and risk becoming a target, or stay out of it?`,
            choices: [
                { text: "Intervene", points: 3 },
                { text: "Report it anonymously", points: 2 },
                { text: "Do nothing", points: 0 }
            ]
        },
        {
            text: `You’re helping at a blood drive, and learn that gay men are being denied the right to donate.\n\nDo you raise awareness and protest the policy?`,
            choices: [
                { text: "Yes, protest the policy", points: 3 },
                { text: "No, just follow the rules", points: 0 }
            ]
        },
        {
            text: `You’re asked to write an article about the AIDS crisis for the school paper. You have to choose between a personal story and a statistical summary.\n\nWhat do you write?`,
            choices: [
                { text: "A personal, emotional story", points: 3 },
                { text: "A neutral, statistical report", points: 2 }
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
