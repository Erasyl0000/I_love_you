// Получаем страницы
const page1 = document.querySelector('.cover');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

// Для отслеживания текущей страницы
let currentPage = 1;

// Функция для перехода на вторую страницу
function showSecondPage() {
  page1.classList.add('hidden'); // Скрываем первую страницу
  page2.classList.remove('hidden'); // Показываем вторую страницу
  currentPage = 2;
}

// Логика для двойных нажатий
document.body.addEventListener('dblclick', () => {
  if (currentPage === 2) {
    // Если мы на второй странице, показываем третью
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
    currentPage = 3;
  } else if (currentPage === 3) {
    // Если мы на третьей странице, показываем четвёртую
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
    currentPage = 4;
  }
});