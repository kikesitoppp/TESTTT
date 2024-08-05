// Seleccionar elementos del DOM
const titleElement = document.getElementById('title');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');

// Ocultar el título y mostrar solo las letras "CUESTIONARIO..."
titleElement.textContent = 'CUESTIONARIO...';

// Ejecutar la función showQuestions después de 5 segundos
setTimeout(showQuestions, 5000);

// Función para mostrar las preguntas
function showQuestions() {
  titleElement.style.display = 'none';
  questionsContainer.style.display = 'block';
  showQuestion();
}

// Función para mostrar la pregunta actual
let currentQuestion = 0;
const questions = [
  {
    text: '¿Cuánto me quieres?',
    options: ['Mucho', 'Poco', 'Nada']
  },
  {
    text: '¿Te gustaría pasar tiempo conmigo?',
    options: ['Sí', 'No', 'Tal vez']
  },
  // Agrega más preguntas aquí
];

function showQuestion() {
  const questionElement = document.createElement('p');
  questionElement.textContent = questions[currentQuestion].text;
  questionsContainer.appendChild(questionElement);

  const optionsElement = document.createElement('ul');
  questions[currentQuestion].options.forEach((option) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionsElement.appendChild(optionElement);
  });
  questionsContainer.appendChild(optionsElement);

  // Agrega un botón para pasar a la siguiente pregunta
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Siguiente';
  nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  };
  questionsContainer.appendChild(nextButton);
}

// Función para mostrar los resultados
function showResults() {
  questionsContainer.style.display = 'none';
  resultsContainer.style.display = 'block';

  const resultsElement = document.createElement('p');
  resultsElement.textContent = '¡Gracias por responder!';
  resultsContainer.appendChild(resultsElement);
}
