// Вопросы и варианты ответов
const questions = [
  {
    question: "Какой тип мусора можно отправить на вторичную переработку?",
    image: "1.png",
    answers: ["Пластик", "Органика", "Стекло", "Бумага"],
    correctAnswer: ["Пластик", "Стекло", "Бумага"] // Правильные ответы могут быть множественными
  },
  {
    question: "Что из следующего является биоразлагаемым?",
    image: "2.png",
    answers: ["Пластиковые пакеты", "Фрукты и овощи", "Стеклянные бутылки", "Металлические банки"],
    correctAnswer: "Фрукты и овощи"
  },
  {
    question: "Какой символ обозначает переработку?",
    image: "3.png",
    answers: ["Треугольник", "Круг", "Звезда", "Квадрат"],
    correctAnswer: "Треугольник"
  },
  {
    question: "Какой материал наиболее часто перерабатывается в мире?",
    image: "4.png",
    answers: ["Пластик", "Бумага", "Стекло", "Металл"],
    correctAnswer: "Бумага"
  },
  {
    question: "Как называется процесс превращения пищевых отходов в удобрение?",
    image: "5.png",
    answers: ["Переработка", "Компостирование", "Утилизация", "Разложение"],
    correctAnswer: "Компостирование"
  },
  {
question: "Что происходит с органическими отходами, если их не компостировать?",
    image: "6.png",
    answers: ["Они разлагаются без последствий", "Выделяют метан", "Превращаются в пластик", "Они не разлагаются"],
    correctAnswer: "Выделяют метан"
    
  },
  {
    question: "Какой цвет контейнера используется для сбора стекла?",
    image: "7.png",
    answers: ["Синий", "Зеленый", "Желтый", "Красный"],
    correctAnswer: "Зеленый"
  },
  {
    question: "Какой тип мусора нельзя выбрасывать в обычные урны?",
    image: "8.png",
    answers: ["Пластик", "Электроника", "Бумага", "Стекло"],
    correctAnswer: "Электроника"
  },
  {
    question: "Как называется процесс повторного использования материалов?",
    image: "9.png",
    answers: ["Переработка", "Ремонт", "Утилизация", "Вторичное использование"],
    correctAnswer: "Переработка"
  },
  {
    question: "Какой материал требует самой длительной утилизации?",
    image: "10.png",
    answers: ["Бумага", "Пластик", "Стекло", "Органика"],
    correctAnswer: "Стекло"
  },
  {
    question: "Какой процент пластиковых отходов перерабатывается в мире?",
    image: "11.png",
    answers: ["10%", "30%", "50%", "70%"],
    correctAnswer: "10%"
  },
  {
    question: "Какой материал можно использовать многократно без потери качества?",
    image: "12.png",
    answers: ["Пластик", "Стекло", "Бумага", "Органика"],
    correctAnswer: "Стекло"
  },
  {
    question: "Как называется процесс превращения мусора в энергию?",
    image: "13.png",
    answers: ["Энергичная утилизация", "Компостирование", "Утилизация", "Переработка"],
    correctAnswer: "Энергичная утилизация"
  },
  {
    question: "Какой цвет контейнера используется для сбора бумаги?",
    image: "14.png",
    answers: ["Синий", "Зеленый", "Желтый", "Красный"],
    correctAnswer: "Синий"
  },
  {
    question: "Какой материал можно переработать бесконечное количество раз?",
    image: "15.png",
    answers: ["Пластик", "Бумага", "Металл", "Органика"],
    correctAnswer: "Металл"
  }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Счетчик правильных выборов
let totalAnswers = questions.reduce((sum, q) => sum + q.correctAnswer.length, 0); // Общее количество правильных ответов

// Функция для запуска викторины
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

// Функция для отображения вопроса
function showQuestion() {
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const questionImage = document.getElementById("question-image");

  questionText.textContent = questions[currentQuestionIndex].question;
  questionImage.src = questions[currentQuestionIndex].image;

  answerButtons.innerHTML = "";
  questions[currentQuestionIndex].answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => toggleSelection(button));
    answerButtons.appendChild(button);
  });

  resetSelectedAnswers();
}

// Функция для переключения выбора ответа
function toggleSelection(button) {
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    button.style.backgroundColor = ""; // Возвращаем исходный цвет
    button.style.color = ""; // Возвращаем исходный текст
  } else {
    button.classList.add("selected");
    button.style.backgroundColor = "#3e8e41"; // Темно-зеленый
    button.style.color = "white"; // Белый текст
  }
}

// Функция для сброса выбранных ответов
function resetSelectedAnswers() {
  document.querySelectorAll(".answer-btn").forEach(button => {
    button.classList.remove("selected");
    button.style.backgroundColor = ""; // Возвращаем исходный цвет
    button.style.color = ""; // Возвращаем исходный текст
  });
}

// Функция для перехода к следующему вопросу
function nextQuestion() {
  // Получаем выбранные ответы
  const selectedAnswers = Array.from(
    document.querySelectorAll(".answer-btn.selected")
  ).map(button => button.textContent);

  // Получаем правильные ответы для текущего вопроса
  const correctAnswers = questions[currentQuestionIndex].correctAnswer;

  // Проверяем правильность каждого выбранного ответа
  selectedAnswers.forEach(answer => {
    if (correctAnswers.includes(answer)) {
      correctAnswersCount++; // Увеличиваем счетчик правильных выборов
    }
  });

  // Сбрасываем выбранные ответы перед показом нового вопроса
  resetSelectedAnswers();

  // Переходим к следующему вопросу или показываем результаты
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Функция для показа результатов
function showResults() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  // Рассчитываем процент правильных ответов
  const scorePercentage = Math.round((correctAnswersCount / totalAnswers) * 929);
  const scoreText = document.getElementById("score-text");
  scoreText.textContent = scorePercentage; // Отображаем процент
}

// Функция для перезапуска викторины
function restartQuiz() {
  currentQuestionIndex = 0;
  correctAnswersCount = 0; // Сбрасываем счетчик правильных выборов
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

// Инициализация кнопок
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("restart-button").addEventListener("click", restartQuiz);