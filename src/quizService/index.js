const qBank = [
  {
    id: 1,
    question: "I am 1 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 2,
    question: "I am 2 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 3,
    question: "I am 3 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 4,
    question: "I am 4 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 5,
    question: "I am 5 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 6,
    question: "I am 6 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 7,
    question: "I am 7 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 8,
    question: "I am 8 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 9,
    question: "I am 9 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
  {
    id: 10,
    question: "I am 10 Question?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: "option 1",
  },
];

export default () =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, 5));
