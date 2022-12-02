// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру 
// в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32


function interData() {
  celciusTemp = parseInt(prompt('Enter temperature in Celcium '));
  return celciusTemp
}

let celciusT = interData();

function celsiusTofaringate(celciusTemp) {
  let faringateTemp = (9 / 5) * celciusTemp + 32;
  return faringateTemp;
}

let faringateT = celsiusTofaringate(celciusT);

function printtemp(fisrt_value, second_value) {
  let text_result = alert(`Celsius: ${fisrt_value}, Faringate: ${second_value}`);
  return text_result;
}

let result = printtemp(celciusT, faringateT);