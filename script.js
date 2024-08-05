// Seleccionar elementos del DOM
const titleElement = document.getElementById('title');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');

// Ocultar el título y esperar 5 segundos antes de iniciar el cuestionario
titleElement.textContent = 'CUESTIONARIO PARA SABER CUANTO ME QUIERES';
setTimeout(startQuiz, 5000);

// Función para iniciar el cuestionario
function startQuiz() {
  questionsContainer.style.display = 'block';
  showQuestion();
}

// Función para mostrar la pregunta actual
let currentQuestion = 0;
const questions = [
  {
    text: '¿Cuál es mi nombre completo?',
    type: 'text',
    correctAnswer: 'DENIS ENRIQUE BENAVIDES CAIPE'
  },
  {
    text: '¿Cuál es la fecha de mi nacimiento en formato DD/MM/AAAA?',
    type: 'text',
    correctAnswer: '13/04/2004'
  },
  {
    text: '¿Cuál es la fecha de nuestro cumple meses o aniversario?',
    type: 'number',
    correctAnswer: 24
  },
  {
    text: '¿Cuál es mi equipo favorito?',
    type: 'elect',
    options: ['Bayer Munich', 'Bayern Munchen', 'Bayern Munich', 'Bayern de Múnich'],
    correctAnswer: 'Bayern de Múnich'
  },
  {
    text: '¿Cuál es mi jugador favorito?',
    type: 'text',
    correctAnswer: 'NEYMAR'
  },
  {
    text: '¿Dónde fue nuestro primer beso?',
    type: 'elect',
    options: ['Universidad', 'Boulevard', 'Coctiki', 'Parque'],
    correctAnswer: 'Coctiki'
  },
  {
    text: '¿Cuáles son las dos palabras que más nos hemos dicho en nuestros chats?',
    type: 'text',
    correctAnswer: 'TE QUIERO'
  }
];

function showQuestion() {
  const questionElement = document.createElement('p');
  questionElement.textContent = questions[currentQuestion].text;
  questionsContainer.appendChild(questionElement);

  let inputElement;
  if (questions[currentQuestion].type === 'text') {
    inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Escribe tu
