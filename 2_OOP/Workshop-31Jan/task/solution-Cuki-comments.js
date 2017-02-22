// SOLUTION CUKI

function solve() {
	function getProduct(productType, name, price) {		
		return {
			name: name,
			price: price,
			productType: productType
		};
	}

	function getShoppingCart() {
		let products = [];

		function add(product) {
			// TODO: validations
			// Can be used without this keyword because not in object/class and products is accessible?
			// Use getProduct to benefit from validations of getProduct method (if any)
			this.products.push(getProduct(product.productType, product.name, product.price));
			return this;
		}
		function remove(product) {
			let pIndex = this.products.findIndex(p =>
				p.name === product.name &&
				p.price === product.price &&
				p.productType === product.productType);
			if (pIndex < 0) {
				throw 'The product does not exist in this cart';
			}
			this.products.splice(pIndex, 1);
			return this;
		}
		function showCost() {
			// REDUNDANT
			// if (this.products.length < 1) {
			// 	return 0;
			// }
			// cost = this.prducts.reduce causes an error!
			let cost = products.reduce((cost, product) => cost + product.price, 0);
			return cost;
		}
		function showProductTypes() {
			let types = [];
			if (this.products.length < 1) {
				return types;
			}

			// MY SOLUTION
			// for (let product of this.products) {
			// 	let checkType = types.findIndex(p => p === product.productType);
			// 	if (checkType === -1) {
			// 		types.push(product.productType);
			// 	}
			// }
			// types.sort();			
			// return types;

			// LOOPS SOLUTION
			// products.forEach(function(p){
			// 	if(types.indexOf(p.productType) < 0){
			// 		types.push(p.productType);
			// 	}
			// });
			// return types;

			//PREDICATES SOLUTION
			// return products.map(p => p.productType)
			// 	.sort()
			// 	.filter((p, i, ps) => i === 0 || p !== ps[i-1]); // after sort all repeating are next to each other. Zero is to make sure we don't go to index -1

			//ASSOCIATIVE ARRAY SOLUTION
			const uniqTypesObj = {};
			products.forEach(p => uniqTypesObj[p.productType] = true);

			return Object.keys(uniqTypesObj).sort(); // Returns index values

			// SOLUTION WITHOUT using Object.keys
			// const uniqTypes = [];
			// for(const type in uniqTypesObj){
			// 	uniqTypes.push(type);
			// }
			// return uniqTypes.sort();

		}
		function getInfo() {
			// ANOTHER SOLUTION
			// const uniqNames = products.map(p => p.name)
			// 	.sort()
			// 	.filter((p, i, ps) => i === 0 || p !== ps[i - 1])
			// 	.map(name => {
			// 		const withThisName = products.filter(p => p.name === name);
			// 		return {
			// 			name: name,
			// 			quantity: withThisName.length,
			// 			totalPrice: withThisName.reduce((cost, product) => cost + product.price, 0) //ERROR
			// 		}
			// 	}); 

			const groupedByName = {};
			products.forEach(p => {
				if (groupedByName.hasOwnProperty(p.name)) {
					groupedByName[p.name].quantity += 1;
					groupedByName[p.name].totalPrice += p.price;
				}
				else {
					groupedByName[p.name] = {
						name: p.name,
						quantity: 1,
						totalPrice: p.price
					};
					groupedByName[p.name].quantity = 1;
					groupedByName[p.name].totalPrice = p.price;
				}
			});
			//
			const groups = Object.keys(groupedByName).sort()
				.map(n => {
					return {
						name: n,
						quantity: groupedByName[n].quantity,
						totalPrice: groupedByName[n].totalPrice
					}
				})

			return {
				// experimental not working everywhere: Object.values(groupedByName).sort(x => x.name),
				products: groups,
				totalPrice: showCost()
			};
		}

		return {
			products: products,
			add: add,
			remove: remove,
			showCost: showCost,
			showProductTypes: showProductTypes,
			getInfo: getInfo
		};
	}

	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
}

module.exports = solve();

// TESTS

// let MyShop = solve();
// let MyCart = MyShop.getShoppingCart();
// let Shokolad = MyShop.getProduct("Sweets", "Shokolad Milka", 2);
// let Torta = MyShop.getProduct("Sweets", "Tiramisu", 4);
// let Zahar = MyShop.getProduct("Sweets", "Kristal", 1);
// let Sol = MyShop.getProduct("Salty", "Pomorie", 1);
// let Banichka = MyShop.getProduct("Salty", "Sas sirene", 3);

// MyCart.add(Shokolad);
// MyCart.add(Shokolad);
// MyCart.add(Torta);
// MyCart.add(Zahar);
// MyCart.add(Sol);

//MyCart.remove(Shokolad);
// let cost = MyCart.showCost();
// console.log(cost);

// let types = MyCart.showProductTypes();
// console.log(types);

// let info = MyCart.getInfo();

// console.log('And they lived happily ever afer');


// EXAMPLE PREDICATES

// const numbers = [1,2,3,4,5,6,7,8,9];

// function isOdd(x){
// 	return x% 2 !==0;
// }
// numbers.filter(isOdd);
// console.log(numbers);