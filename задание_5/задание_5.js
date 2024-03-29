const inputPage = document.getElementById('inputPage');
const inputLimit = document.getElementById('inputLimit');
const btn = document.getElementById('btn');
const images = document.getElementById('images');

// Получаем данные из localStorage
const lastPage = localStorage.getItem('lastPage');
const lastLimit = localStorage.getItem('lastLimit');

// Если данные есть, заполняем ими поля ввода
if (lastPage && lastLimit) {
  inputPage.value = lastPage;
  inputLimit.value = lastLimit;
}

// Обработчик клика по кнопке
btn.addEventListener('click', function() {
  // Получаем введенные числа
  const page = parseInt(inputPage.value);
  const limit = parseInt(inputLimit.value);

  // Проверяем, попадают ли числа в диапазон от 1 до 10
  let error = '';
  if (isNaN(page) || page < 1 || page > 10) {
    error += 'Номер страницы вне диапазона от 1 до 10<br>';
  }
  if (isNaN(limit) || limit < 1 || limit > 10) {
    error += 'Лимит вне диапазона от 1 до 10<br>';
  }

  // Если есть ошибки, выводим их и прерываем выполнение функции
  if (error) {
    images.innerHTML = `<div class="error">${error}</div>`;
    return;
  }

  // Формируем URL-адрес запроса
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  // Создаем новый объект XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Открываем соединение и указываем путь к файлу
  xhr.open('GET', url);

  // Обработчик события загрузки
  xhr.onload = function() {
    // Получаем данные из ответа
    const data = JSON.parse(xhr.response);

    // Генерируем HTML-код картинок
    let html = '';
    data.forEach(function(item) {
      html += `<img src="${item.download_url}" alt="${item.author}">`;
    });

    // Выводим HTML-код на страницу
    images.innerHTML = html;

    // Сохраняем данные в localStorage
    localStorage.setItem('lastPage', page);
    localStorage.setItem('lastLimit', limit);
  };

  // Отправляем запрос
  xhr.send();
});