// Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя 
// и вызвать функцию greeting, передав туда данное значение.

let UserName = prompt('Enter your name, please');

function greeting(name) {
    text = (`Hello, ${name}`);
    return text;
}

let result = alert(greeting(UserName));