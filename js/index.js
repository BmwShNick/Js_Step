// 1. Задание
alert("What is the radius of the circle?");
prompt(" Your version? ");
alert("Correct answer:  " + "R = P : 2 * π");

// 2. Задание

let distance = prompt(
	"What is the distance in kilometers between the two cities ?"
);
let time = prompt("How many hours he wants to get there ?");

alert(
	" If you want to get there in " +
		time +
		" hours, we need to go an average of " +
		distance / time +
		" km per hour "
);

// 3. Задание

let exDollar = 28.4;
``;
let exEuro = 32.1;
let myPrice = prompt("Введите суму в долларах");

alert(
	" Если ты хочешь поменять " +
		myPrice +
		", ты получишь  " +
		(exDollar * myPrice) / exEuro +
		" евро "
);

//  4. Задание
let result; //выплаченные проценты,
let moneyCount; //первоначальная сумма вложений,
let betYear = 5; //годовая ставка
let betDays = 60; //количество дней вклада,
let year = 365; //количество дней в году
let perCent = 100;

moneyCount = prompt(`amount of money : `);
result = (moneyCount * betYear * betDays) / year / perCent;
alert(`You will receive this cash: ${result.toFixed(1)}`);

// 5. Задание
let num = 2 && 0 && 3;
let num2 = 2 || 0 || 3;
let num3 = (2 && 0) || 3;
console.log(num);
console.log(num2);
console.log(num3);
