const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const products = productsList
		.filter((product) => ids.includes(product.id))
		.map(productFiltered => {
			return { name: productFiltered.name, category: productFiltered.category };
		});
		
	const promotion = promotions[new Set(products.map(product => product.category)).size - 1];

	const totalWithoutDiscount = productsList
		.filter(product => ids.includes(product.id))
		.reduce((accumalator, productFiltered) => accumalator += productFiltered.regularPrice, 0)
		.toFixed(2);
	
	const totalPrice = productsList
		.filter(product => ids.includes(product.id))
		.reduce((accumalator, productFiltered) => {
			const promotionPrice = productFiltered.promotions.find(product => product.looks.includes(promotion))

			if (!promotionPrice)
				return accumalator += productFiltered.regularPrice;

			return accumalator += promotionPrice.price;
		}, 0)
		.toFixed(2);
	
		const discountValue = (totalWithoutDiscount - totalPrice).toFixed(2);

		const discount = `${(discountValue / totalWithoutDiscount * 100).toFixed(2)}%`;

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	};
}

module.exports = { getShoppingCart };
