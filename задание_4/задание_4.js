const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    resultDiv.textContent = 'Одно из чисел вне диапазона от 100 до 300';
  } else {
    const url = ` https://dummyimage.com/100x300/`;

    fetch(url)
      .then(response => {
        const img = document.createElement('img');
        img.src = response.url;
        resultDiv.innerHTML = '';
        resultDiv.appendChild(img);
      })
      .catch(error => {
        resultDiv.textContent = 'Ошибка загрузки картинки';
      });
  }
});