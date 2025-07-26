const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Transfer Makeup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "Which is the correct JavaScript syntax to change HTML content?",
    answers: [
      { text: 'document.getElement("p").innerHTML = "Hello World!";', correct: false },
      { text: 'document.getElementById("demo").innerHTML = "Hello World!";', correct: true },
      { text: '#demo.innerHTML = "Hello World!";', correct: false },
      { text: 'document.querySelector("p").text = "Hello World!";', correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to include JavaScript code?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Creative Style System", correct: false }
    ]
  }
];
