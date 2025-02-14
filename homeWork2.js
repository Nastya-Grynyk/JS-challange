// Практика з лекції. Для тренування скілів
// Задача 1: Напишіть програму на JavaScript, яка приймає число від користувача і визначає, чи є введене число парним чи непарним.

/* let num = prompt("input number, please"); //оголосили змінну, яку отримаємо з поля вводу, користувачем
if (num % 2 == 0)
{
    console.log("Число " + num + " - парне.");
}
else
{
    console.log("Число " + num + " - непарне.");
} */

/* Задачка 2: Калькулятор знижки (самостійно)
Створіть програму, яка запитує в користувача суму покупки і визначає, яка знижка буде застосована в залежності від суми:
- Якщо сума менше або дорівнює 1000 грн, знижка складає 5%.
- Якщо сума більше 1000 грн, але менше або дорівнює 5000 грн, знижка складає 10%.
- Якщо сума більше 5000 грн, знижка складає 15%.

Вивести суму до оплати з урахуванням знижки */

/* let amount = prompt("Введіть суму покупки","0"); //оголосили змінну, яку отримаємо з поля вводу, користувачем
let discount

if (amount <= 1000)
{
    discount = "5%"
    console.log("Вітаємо, Ваша знижка 5%")
}
else if ((amount > 1000) && (amount <= 5000) )
{
    discount = "10%"
    console.log("Вітаємо, Ваша знижка 10%")
}
else if (amount > 5000)
{
    discount = "15%"
    console.log("Вітаємо, Ваша знижка 15%")
}
else 
{
    console.log("Перевірте та введіть правилльну суму покупки. Знижечка вас зачекалася!")
} */

// з підказками з лекції

/* let amount = 1;
let discount = 0;

if (amount <= 1000 && amount > 0)
{
    discount = 0.05 //5%
}
else if ((amount > 1000) && (amount <= 5000) )
{
    discount = 0.10 //10%
}
else if (amount > 5000)
{
    discount = 0.15 //15%
}
else 
{
    console.log("Перевірте та введіть правилльну суму покупки. Знижечка вас зачекалася!")
}

var discountedAmount = amount - (amount * discount);

console.log("Сума покупки: "+ amount + " грн" )
console.log("Знижка: "+ (discount * 100) + "%" )
console.log("Сума до сплати: "+ discountedAmount + " грн" ) */
    

//Домашнє завдання:
//Необхідно написати програму, яка буде виводити інформацію за умовами, при яких число виводитиметься з правильним словом: "рік", "роки" або "років"(тобто "29 років" чи "4 роки").
//Умови виконання ДЗ:
//Рік отримувати через prompt()
//Зробити перевірку, що користувач ввів число, і це число не є відʼємним.
//Не використовувати функції або інші матеріали, які ми не вивчали.
//Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки.
//Будь ласка, надайте наступні дані для перевірки вашої роботи:
//Посилання на вашу гілку js_homework2, в якій міститиметься файл з виконаним завданням.

//вводить число, ми виводимо ВАМ __ рок. Залишок від ділення, максимум 100 років, ввів не число: ви ввели невірне число, відємне число - 


//let age ="nine";//
let age = +prompt("Скільки Вам повних років?", "18"); //ввід змінної через діалогове вікно в браузері

if ((age == 1) || (age % 10 == 1) && (age > 20))
{
    console.log("Вам "+ age + " рік")
}
else if (age === 2 || age === 3 || age ===4 || (age % 10 == 2 || age % 10 == 3 || age % 10 == 4) && (age > 21))
{
    console.log("Вам "+ age + " роки")
}
else if (age % 10 == 0 ||  age % 10 == 5 ||  age % 10 == 6 ||  age % 10 == 7 ||  age % 10 == 8 ||  age % 10 == 9 || age >=5 && age <= 20)
{
    console.log("Вам "+ age + " років")
} 
else if (age < 0)
{
    console.log("Ви ввели від'ємне число")
} 
else
{
    console.log("упс...щось пішло не так")
} 




//Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми), друге значення це кількість, а потім переводити ці значення:
//кілометри - в метри
//години - в хвилини
//кілограми - в грами
//Зробити вивід отриманої інформації у вигляді - "10 км це 10000 м" або "1 год це 60хв", або "1 кг це 1000 г".
//Умови виконання ДЗ:
//В задачі не обовʼязково викорисутовувати prompt, просто запишіть значення в зміні.
//Обовʼязково при написанні завдання використовуйте switch
//Продумати варінат, якщо буде введена якась інша одиниця виміру
//Мудрувати та створювати валідацію не потрібно
//Для перевірки вашої роботи:
//Додайте ДЗ у гілку js_homework2
//Вишліть посилання на вашу гілку

/* var mesureUnit = "год" //змінна рядок
var value = 0.0258; //змінна число

switch (mesureUnit) {
    case "км": //значення з яким порівнюється наше а
        var result = value * 1000
        console.log(value + ' '+ mesureUnit + " це " + result + " м"); //робюимо ось це
        break;//припиняя дію сцітча
    case "год":
        var result = value * 60
        console.log(value + ' '+ mesureUnit + " це " + result + " хв"); //робюимо ось це
        break;
    case "кг":
        var result = value * 1000
        console.log(value + ' '+ mesureUnit + " це " + result + " г"); //робюимо ось це
        break;
    default: //якщо не зустрілося потрібного, тоді по дефолту виконається
        console.log('упс...такої величини немає в переліку');
}
 */