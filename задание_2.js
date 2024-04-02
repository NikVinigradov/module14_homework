// JSON-строка
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   // Преобразование JSON-строки в объект
   const jsonObject = JSON.parse(jsonString);
   
   // Создание нового объекта в нужном формате
   const result = {
     list: []
   };
   
   // Обработка каждого элемента массива в объект JSON
   jsonObject.list.forEach(function(item) {
     const name = item.name;
     const age = Number(item.age);
     const prof = item.prof;
   
     result.list.push({
       name: name,
       age: age,
       prof: prof
     });
   });
   
   // Вывод результата в консоль
   console.log(result);