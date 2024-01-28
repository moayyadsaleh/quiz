//Test Questions
const questions = [
  {
    question: "What is instructional design?",
    options: [
      "A. The process of creating educational materials.",
      "B. The art of teaching effectively.",
      "C. The systematic development of instructional specifications using learning and instructional theory.",
      "D. The practice of using technology in education.",
    ],
    correctAnswer: 2,
    explanation:
      "Instructional design involves the systematic development of instructional specifications based on learning and instructional theory.",
  },
  {
    question: "What are the key components of instructional design?",
    options: [
      "A. Content, audience, and delivery method.",
      "B. Analysis, design, development, implementation, and evaluation.",
      "C. Instructional materials, technology, and assessment.",
      "D. Teacher, student, and curriculum.",
    ],
    correctAnswer: 1,
    explanation:
      "The key components of instructional design include analysis, design, development, implementation, and evaluation, commonly known as the ADDIE model.",
  },
  {
    question: "Why is analysis a crucial step in instructional design?",
    options: [
      "A. To determine the cost of the project.",
      "B. To identify the target audience and their needs.",
      "C. To decide which technology to use.",
      "D. To create instructional materials.",
    ],
    correctAnswer: 1,
    explanation:
      "Analysis helps identify the target audience, their characteristics, and their learning needs, which are essential for designing effective instruction.",
  },
  {
    question:
      "What is the purpose of the design phase in instructional design?",
    options: [
      "A. To deliver the instructional materials.",
      "B. To develop prototypes of the learning materials.",
      "C. To outline the structure and organization of the instruction.",
      "D. To assess the effectiveness of the instruction.",
    ],
    correctAnswer: 2,
    explanation:
      "The design phase focuses on outlining the structure, organization, and instructional strategies to be used in the learning materials.",
  },
  {
    question:
      "How does the development phase contribute to instructional design?",
    options: [
      "A. By testing the instructional materials with learners.",
      "B. By creating the actual learning materials.",
      "C. By evaluating the effectiveness of the instruction.",
      "D. By identifying the learning objectives.",
    ],
    correctAnswer: 1,
    explanation:
      "The development phase involves creating the actual learning materials based on the design specifications outlined in the previous phase.",
  },
  {
    question:
      "What is the significance of the implementation phase in instructional design?",
    options: [
      "A. To analyze learner feedback.",
      "B. To evaluate the effectiveness of the instruction.",
      "C. To deliver the instruction to the learners.",
      "D. To design the instructional materials.",
    ],
    correctAnswer: 2,
    explanation:
      "The implementation phase involves delivering the instruction to the learners through various means, such as classroom teaching or online platforms.",
  },
  {
    question: "How do you evaluate the effectiveness of instructional design?",
    options: [
      "A. By assessing the instructor's performance.",
      "B. By measuring learner satisfaction.",
      "C. By analyzing learner performance and behavior change.",
      "D. By comparing the cost of the project with the initial budget.",
    ],
    correctAnswer: 2,
    explanation:
      "Effectiveness in instructional design is typically evaluated by analyzing learner performance and behavior change resulting from the instruction.",
  },
  {
    question:
      "What role does feedback play in the instructional design process?",
    options: [
      "A. It helps determine the budget for the project.",
      "B. It informs revisions and improvements to the instruction.",
      "C. It establishes learning objectives.",
      "D. It selects the appropriate delivery method.",
    ],
    correctAnswer: 1,
    explanation:
      "Feedback from learners and stakeholders informs revisions and improvements to the instruction, ensuring its effectiveness.",
  },
  {
    question: "How does instructional design incorporate learning theories?",
    options: [
      "A. By selecting instructional materials.",
      "B. By determining the length of the instructional program.",
      "C. By aligning instructional strategies with theoretical principles of learning.",
      "D. By designing assessment methods.",
    ],
    correctAnswer: 2,
    explanation:
      "Instructional design aligns instructional strategies with theoretical principles of learning to enhance learning outcomes.",
  },
  {
    question: "What is the role of technology in modern instructional design?",
    options: [
      "A. To replace traditional teaching methods entirely.",
      "B. To enhance and supplement instructional delivery.",
      "C. To reduce the need for instructional materials.",
      "D. To increase the cost of instructional design projects.",
    ],
    correctAnswer: 1,
    explanation:
      "Technology is used to enhance and supplement instructional delivery, providing new opportunities for interactive and multimedia learning experiences.",
  },
  {
    question: "How does instructional design accommodate diverse learners?",
    options: [
      "A. By standardizing instructional materials.",
      "B. By providing multiple modes of representation and engagement.",
      "C. By excluding learners with special needs.",
      "D. By focusing only on the majority of learners.",
    ],
    correctAnswer: 1,
    explanation:
      "Instructional design accommodates diverse learners by providing multiple modes of representation and engagement to cater to various learning preferences and needs.",
  },
  {
    question:
      "What ethical considerations are important in instructional design?",
    options: [
      "A. Ensuring equal access to instructional materials.",
      "B. Maximizing profits from the instructional program.",
      "C. Excluding certain groups from accessing the instruction.",
      "D. Advertising unrelated products during instruction.",
    ],
    correctAnswer: 0,
    explanation:
      "Ethical considerations in instructional design include ensuring equal access to instructional materials and avoiding practices that exploit learners for profit.",
  },
  {
    question: "How can instructional design promote learner engagement?",
    options: [
      "A. By providing lengthy lectures without interaction.",
      "B. By incorporating interactive activities and multimedia.",
      "C. By using outdated instructional materials.",
      "D. By assigning passive reading assignments.",
    ],
    correctAnswer: 1,
    explanation:
      "Instructional design promotes learner engagement by incorporating interactive activities and multimedia that actively involve learners in the learning process.",
  },
  {
    question:
      "What strategies can be used to motivate learners in instructional design?",
    options: [
      "A. Providing irrelevant content.",
      "B. Offering extrinsic rewards for completion.",
      "C. Creating meaningful and relevant learning experiences.",
      "D. Ignoring learner feedback.",
    ],
    correctAnswer: 2,
    explanation:
      "Motivation in instructional design is fostered by creating meaningful and relevant learning experiences that resonate with learners' interests and goals.",
  },
  {
    question:
      "How can instructional design promote long-term retention of knowledge?",
    options: [
      "A. By focusing solely on memorization through repetition.",
      "B. By integrating spaced repetition and retrieval practice.",
      "C. By avoiding assessments.",
      "D. By limiting exposure to new information.",
    ],
    correctAnswer: 1,
    explanation:
      "Instructional design promotes long-term retention of knowledge by integrating strategies such as spaced repetition and retrieval practice, which enhance memory consolidation.",
  },
];

let userAnswers = new Array(questions.length).fill(null);
let currentQuestion = 0;
let score = 0;
let timer;

function startTimer() {
  let seconds = 200;
  timer = setInterval(function () {
    document.getElementById("timer").innerText = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const currentQuestionData = questions[currentQuestion];

  questionText.textContent = currentQuestionData.question;

  optionsContainer.innerHTML = "";
  currentQuestionData.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${index}" ${
      userAnswers[currentQuestion] === index ? "checked" : ""
    }>${option}`;
    optionsContainer.appendChild(label);
  });
}

function saveAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestion] = parseInt(selectedOption.value);
  }
}

function nextQuestion() {
  saveAnswer();
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    // If all questions are answered, hide the question container
    document.getElementById("question-container").style.display = "none";
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    saveAnswer();
    currentQuestion--;
    displayQuestion();
  }
}

function submitQuiz() {
  saveAnswer(); // Save the answer for the current question
  clearInterval(timer);

  // Check if all questions are answered
  if (userAnswers.includes(null)) {
    alert("Please finish all questions before submitting.");
    return;
  }

  document.getElementById("options-container").style.display = "none";
  document.getElementById("button-container").style.display = "none";
  document.getElementById("timer-container").style.display = "none";

  const scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "block";
  scoreContainer.innerHTML = `Your Score: ${calculateScore()}`;
}

function calculateScore() {
  let calculatedScore = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      calculatedScore++;
    }
  }
  return calculatedScore;
}

// Start the quiz
displayQuestion();
startTimer();

//Play and Pause audio
function toggleAudio() {
  var audio = document.getElementById("audioPlayer");
  var playButton = document.getElementById("playButton");

  if (audio.paused) {
    audio.play();
    playButton.innerText = "Pause Music";
  } else {
    audio.pause();
    playButton.innerText = "Click to Play Music";
  }
}
