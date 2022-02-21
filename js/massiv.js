const products = [
	{
		name: `milk`,
		buy: false,
		price: 2,
		count: 1,
	},
	{
		name: `bread`,
		buy: false,
		price: 1,
		count: 1,
	},
	{
		name: `cheese`,
		buy: true,
		price: 4,
		count: 2,
	},
	{
		name: `water`,
		buy: false,
		price: 1,
		count: 4,
	},
	{
		name: `pineapples`,
		buy: true,
		price: 3,
		count: 1,
	},
];

const sortProducts = (list) => {
	const sorted = list.sort(
		(productOne, productTwo) => productTwo.buy - productOne.buy
	);
	return sorted;
};
console.log(sortProducts(products));

function addScores(totalCount, product) {
	return totalCount + product.count;
}

function addPrices(totalPrice, product) {
	if (product.buy) {
		return totalPrice;
	}
	return totalPrice + product.price;
}
console.log(addPrices);

const scoresTotal = products.reduce(addScores, 0);
console.log(scoresTotal);

const priceTotal = products.reduce(addPrices, 0);
console.log(priceTotal);

function sortByType(list, down) {
	const sorted = list.sort((productOne, productTwo) => {
		if (!down) {
			return productTwo.price - productOne.price;
		} else {
			return productOne.price - productTwo.price;
		}
	});
	return sorted;
}
console.log(sortByType(products));
console.log(sortByType(products, true));
