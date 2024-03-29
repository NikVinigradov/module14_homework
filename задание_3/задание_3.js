// Получаем элементы со страницы
const inputNumber = document.getElementById('inputNumber');
const btn = document.getElementById('btn');
const images = document.getElementById('images');

// Обработчик клика по кнопке
btn.addEventListener('click', function() {
    // Получаем введенное число
    const number = inputNumber.value;
     // Проверяем, попадает ли число в диапазон от 1 до 10
  if (number < 1 || number > 10) {
    // Выводим сообщение об ошибке
    images.innerHTML = 'Число вне диапазона от 1 до 10';
  } else {
    // Формируем URL-адрес запроса
    const url = `https://picsum.photos/v2/list?limit=${number}`;

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
     };
 
     // Отправляем запрос
     xhr.send();
   }
 });