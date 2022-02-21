// // Основи Js  (МАКСИМУМ)

// // // 1. Задание
// // alert("What is the radius of the circle?");
// // prompt(" Your version? ");
// // alert("Correct answer:  " + "R = P : 2 * π");

// // // 2. Задание

// // let distance = prompt(
// // 	"What is the distance in kilometers between the two cities ?"
// // );
// // let time = prompt("How many hours he wants to get there ?");

// // alert(
// // 	" If you want to get there in " +
// // 		time +
// // 		" hours, we need to go an average of " +
// // 		distance / time +
// // 		" km per hour "
// // );

// // // 3. Задание

// // let exDollar = 28.4;
// // ``;
// // let exEuro = 32.1;
// // let myPrice = prompt("Введите суму в долларах");

// // alert(
// // 	" Если ты хочешь поменять " +
// // 		myPrice +
// // 		", ты получишь  " +
// // 		(exDollar * myPrice) / exEuro +
// // 		" евро "
// // );

// // Типи Данних. МАКСИМУМ

// // //  4. Задание
// // let result; //выплаченные проценты,
// // let moneyCount; //первоначальная сумма вложений,
// // let betYear = 5; //годовая ставка
// // let betDays = 60; //количество дней вклада,
// // let year = 365; //количество дней в году
// // let perCent = 100;

// // moneyCount = prompt(`amount of money : `);
// // result = (moneyCount * betYear * betDays) / year / perCent;
// // alert(`You will receive this cash: ${result.toFixed(1)}`);

// // // 5. Задание
// // let num = 2 && 0 && 3;
// // let num2 = 2 || 0 || 3;
// // let num3 = (2 && 0) || 3;
// // console.log(num);
// // console.log(num2);
// // console.log(num3);

// // Homework Functions

// // Задача 1
// /*

// Перше непарне число(в Кубі) + наступне непарне число(в кубі),
// алгоритм повторюється поки сума не перевищить ПЕРЕДАНЕ ЧИСЛО.

// */

// let checkNum = (num) => {
// 	let previousSum = 0;
// 	let currentNum = 1;
// 	let isPerfect = false;
// 	if (num === 6) {
// 		return true;
// 	}

// 	// let firstNum = previousNum * previousNum * previousNum; // =1
// 	// let currentNum = previousNum + 2;
// 	// let secondNum = currentNum * currentNum * currentNum; //=3
// 	// let finalNum = firstNum + secondNum;

// 	while (previousSum < num) {
// 		let qybresult = currentNum * currentNum * currentNum; // =1
// 		// console.log(qybresult);
// 		currentNum = currentNum + 2;
// 		// console.log(currentNum);
// 		previousSum = previousSum + qybresult; // 1
// 		// console.log(previousSum);
// 		isPerfect = num === previousSum;
// 	}
// 	// console.log(isPerfect);
// 	return isPerfect;
// };

// // console.log(checkNum(6));

// // Задача 2
// // let counter = 0;
// // setInterval(function () {
// // 	console.log(++counter);
// // });

// //Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// //  і виводить тільки ті числа з діапазону, які є досконалими.

// let cross = (min, max) => {
// 	for (let currentValue = min; currentValue < max; currentValue++) {
// 		let result = checkNum(currentValue);
// 		if (result) {
// 			console.log(currentValue);
// 		}
// 	}
// };

// // console.log(cross(0, 755));

// let spusok = [{
//   name: `milk`,
//   count: 1,
//   buy: true,
//   price: 2,
// },

//   name: `cake`,
//   count: 2,
//   buy: false,
//   price: 5,
// },
//               {
//   name: `bear`,
//   count: 5,
//   buy: true,
//   price: 1, },

//             {
//   name: `bread`,
//   count: 1,
//   buy: false,
//   price: 2, },

//     {
//   name: `ice-cream`,
//   count: 1,
//   buy: true,
//   price: 4, },]

//   let sortProducts = (list) => {

//   let sorted = list.sort(`milk`, ``)

//   }
