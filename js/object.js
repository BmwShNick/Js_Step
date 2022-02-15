// const Exmpl = {
// 	chuselnuk: 3,
// 	znamennuk: 7,
// };

const methods = {
	adding: (drib, dribTwo) => {
		let addOperation_1 = drib.chuselnuk * dribTwo.znamennuk; // 7*5
		let addOperation_2 = dribTwo.chuselnuk * drib.znamennuk; // 5*7
		let generalChs = addOperation_1 + addOperation_2;
		let generalZn = drib.znamennuk * dribTwo.znamennuk; // 7*9

		const resultObj = {
			znamennuk: generalZn,
			chuselnuk: generalChs,
		};
		return resultObj;
	},

	subtraction: (drib, dribTwo) => {
		let addOperation_1 = drib.chuselnuk * dribTwo.znamennuk; // 7*5
		let addOperation_2 = dribTwo.chuselnuk * drib.znamennuk; // 5*7
		let generalChs = addOperation_1 - addOperation_2;
		let generalZn = drib.znamennuk * dribTwo.znamennuk; // 7*9

		const resultObj = {
			znamennuk: generalZn,
			chuselnuk: generalChs,
		};
		return resultObj;
	},

	division: (drib, dribTwo) => {
		let generalChs = drib.chuselnuk * dribTwo.znamennuk;
		let generalZn = drib.znamennuk * dribTwo.chuselnuk;

		const resultObj = {
			znamennuk: generalZn,
			chuselnuk: generalChs,
		};
		return resultObj;
	},
};
console.log(
	methods.division(
		{
			chuselnuk: 3,
			znamennuk: 7,
		},
		{
			chuselnuk: 5,
			znamennuk: 9,
		}
	)
);
