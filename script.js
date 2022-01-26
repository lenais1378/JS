// x = 1;   //(унарный)
// x = -x;
// alert(x);

// var x = 1, y = 2;
// alert(y-x); //(бинарный)

// alert('2' + 1); //(строка превращает второе число в строку)
// alert(2 - '1'); //(минусовать можно только числа, поэтому превращает строку в число)

// % - взятие остатка

//Икремент и декремент: более высокий приоритет! Выполнится раньше, чем другие матем операции
//'++' - икремент (+1)
//'--' - дикремент (-1)


//Сокращённая арифметика с присваиванием:
// var n=2;
// n=n*2;
// n=n*5;
// alert(n);

// var n=2;
// n+=2;
// n*=5;
// alert(n);


// var a=(2,5,7);
// alert(a);  //(уведомить)

// user = prompt('Сколько тебе лет?', 23);  (ввод пользователем чего-то)
// alert('Тебе ' + user + ' лет!')

// result = confirm('question'); (согласиться или отказаться)


// if, ?

// var year = prompt ('Какой сейчас год?', '');
// if (year == 2016) {
//     alert("Правильно!");
// }

// else {
//     alert('Неправильно!');

// }

// var year = prompt ('Какой сейчас год?', '');
// if (year < 2015) {
//     alert("Рано!");
// }

// else if (year > 2016){
//     alert('Поздно!');

// }
// else {
//     alert('Именно так!');

// }


// var year;
// var age = prompt('Сколько Вам лет?', '');
// if (age>18) {
//     year = true;
// }

// else {
//     year = false;

// }
// alert(year);


// var company = prompt('Какая компания создала JS?', '');   (менее читаемая, поэтому не стоит)
// (company=='Netscape') ?
// alert('Верно!') : alert('Неверно!');

//ЦИКЛЫ:

// var i = 0;
// while(i<3)
// {
//     alert(i);
//     i++;
// }

// var i = 0; (используется редко, чаще обычный while)
// do {
//     alert(i);
//     i++;

// } while (i<3);


// for (var i=0;i<3;i++) {
//     alert(i);
// }

// var sum = 0;
// while(true){
//     var value =+prompt("Введите число", "");
//     if(!value) break;
//     sum+=value;
// }
// alert("Сумма = " + sum);


// for (var i = 0; i<10; i++) {   (ТОЛЬКО НЕЧЁТНЫЕ из-за i%2)
//     if (i%2 == 0) continue;
//     alert(i);
// }

// for (var i = 0; i<10; i++){
//     if(i%2){
//         alert(i);
//     }
// }


//МАССИВЫ:
// var arr = [1, "Чай", {name: 'John'}, true];

// arr[2] = "Груша";

// arr[4] = "Кофе";
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);
// alert(arr[3]);
// alert(arr[4]);

// alert(arr.length);

// alert(arr);

// var arr = [1, "Чай", "Конфеты", "Шоколад"];

// // arr.pop();  //удаляет последний элемент массива
// // arr.push('Мороженое'); //добавляет новый элемент массива в конец

// arr.shift(); //удаляет первый элемент массива
// arr.unshift(4); //добавляет новый элемент массива в начало 
// alert(arr);


// function eat(arr) {   //ФУНКЦИЯ удаления элементов из массива
//     arr.pop();
// }
// var arr = ["Чай", "Хлеб", "Сахар", "Сыр", "Стол"]
// alert (arr.length);
// eat(arr);
// eat(arr);
// alert(arr.length);

// var names = "Миша, Зося, Петя, Женя"; 
// var arr = names.split(', ');  //разбивает на пункты
// for(var i = 0; i<arr.length; i++){ //выводит каждое по очереди пока не кончится количество элементов
//     alert ("Вам сообщение, " + arr[i]);
// }

// var str = "Катя";
// alert(str.split("")); //разбивает на элементы - на буквы


// var arr = ["Миша", "Катя", "Петя", "Женя"];
// var str = arr.join(";"); //склеивает элементы массива в строку
// alert(str);


// alert(new Array(4).join("ха")); // вывели строку и повторили её 3 раза 


// var arr = ["Я", "иду", "гулять",];
// delete arr[1]; // удаляет ключ и значение
// alert(arr);

// var arr = ["Я", "иду", "гулять"];
// arr.splice(1, 1); //с позиции 1 удаляется первый элемент
// alert(arr[1]); //гулять становится 1 элементом - нумерация сдвигается влево

// var arr = ["Я", "иду", "гулять"];
// arr.splice(0, 2, "Мы", "идём"); //с позиции 0 удаляется нулевой элемент и заменяется на "Мы", с позиции 2 удаляется второй элеемнт и заменяется на "идём"
// alert(arr); 

// var arr = ["Я", "иду", "гулять"];
// arr.splice(2, 0, "Мы", "идём"); //с позиции 2 НЕ удаляется элемент и добавляются элементы "Мы" и "идём"
// alert(arr); 

// var arr = [1, 2, 3];
// arr.reverse(); //выстраивает массив в обратном порядке (3, 2, 1)
// alert(arr);



// var arr = [1, 2];
// var newArr = arr.concat(3,4);  //создаёт новый массив, в который копируются элементы, а также значения
// alert(newArr);


// function showMessage //Имя функции
// (

//     //список параметров
// ){

//     //тело функции, которое будет выполняться при вызове данной функции
//     alert("Привет всем!");
// }
//     showMessage();
//     showMessage();
    
// function showMessage (){
//     var message = "Привет, вы на...";  //локальная переменная - видна только внутри этой функции
//     alert(message);
// }
//     showMessage();  
      
// var username = "Alex";
//       function showMessage (){
//     username = "John";
//     var message = "Привет, я " + username;
//     alert(message);
//         }
//         showMessage();
 
// function calcD(a, b, c) {
//     return b*b - 4*a*c; //возврат значения
// }
// var test = calcD(-4,2,1); //(в скобках значения a,b,c)
// alert(test);


//ОБЪЕКТЫ
// var myFriend = {   //объект
//     "name" : "Alex",
//     "legs" : 2,
//     "friends" : 50,
//     "the drink" : "water"

// };

// var nameofFriend = myFriend.name;
// alert(nameofFriend);


// var myFriend = {  
//     "name" : "Alex",
//     "legs" : 2,
//     "friends" : 50,
//     "the drink" : "water"

// };

// var nameofFriend = myFriend['the drink'];
// alert(nameofFriend);

// var testObject = {
//     12: "Kirill",
//     15: "David",
//     25: "Alex"
// }
// var playerNumber = 15;
// var player = testObject[playerNumber];
// alert(player);

// var myFriend = {  
//     "name" : "Alex",
//     "legs" : 2,
//     "friends" : 50,
//     "the drink" : "water"

// };

// myFriend.name = "Denis";
// myFriend["game"] = "football";
// delete myFriend.game;
// var nameofFriend = myFriend.game;
// alert(nameofFriend)


// var myStorage = {
//     "car":{
//         "inside":{
//             "glove box" : "maps",
//             "passenger seat" : "crumbs"
//         },
//         "outside":{
//             "trunk" : "Jack"
//         }
//     }
// };
// var gloveBoxContent = myStorage.car.inside["glove box"];
// alert(gloveBoxContent);



//ПЕРЕБОР СВОЙСТВ ОБЪЕКТОВ
// var menu = {
//     width: 400,
//     height: 200,
//     title: "Menu"
// };
// for (var key in menu) {
//     alert ("Ключ: " + key + "Значение:  " + menu[key]);
// }

// var menu = {
//     width: 400,
//     height: 200,
//     title: "Menu"
// };
// var counter = 0;
// for (var key in menu ){
//     counter++;

// }
// alert("Всего свойств: " + counter);



// var codes = {
//     "12": "USA",
//     "5": "Poland",
//     "73": "Ukraine"
// };
// for(var prop in codes){
//     alert(prop);

// }

// var codes = {
//     "+12": "USA",
//     "+5": "Poland",
//     "+73": "Ukraine"
// };
// for(var prop in codes){
//     alert(prop);

// }
// var user = {
//     name: "Roma",
//     surname: "Petrov"
// };
// user.age = 25;
// for (var prop in user) {
//     alert(prop);
// }

//МЕТОД: ДАТА И ВРЕМЯ

// var now = new Date(); //Время сейчас
// alert(now);

// var now = new Date(2011,0,1,0,0,0,0);
// alert(now.getFullYear());

// var now = new Date(2011,0,1,0,0,0,0);
// alert(now.getMonth());

// var now = new Date(2011,0,1,0,0,0,0);
// alert(now.getDate());

// var now = new Date(2011,0,1,0,0,0,0);
// alert(now.getHours());

// var now = new Date(2011,0,1,0,0,0,0);
// alert(now.getDay());

// var d = new Date(2011,1,28);
// d.setDate(d.getDate() + 2);
// alert(d);

// var d = new Date();
// d.setSeconds(d.getSeconds() + 70);
// alert(d);

// var d = new Date();
// d.setDate(1);
// alert(d);

// d.setDate(0);
// alert(d);

// var d = new Date();
// d.setDate(1);
// alert(d);

// d.setDate(-1);
// alert(d);

//ОБРАБОТКА СОБЫТИЙ - см в html (в закомментированных) 


// DOM. Доступ к элементам веб-страницы

// var element = document.getElementById('header');
// console.log(element);


// var element = document.getElementsByTagName('');
// document.getElementsByClassName('');


// var divs = document.getElementsByTagName ('div');
// var links = document.getElementsByClassName ('my-link');
// console.log('collection of tag name' + divs);
// console.log('collection of class name' + links);

