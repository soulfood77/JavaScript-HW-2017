function solve() {
	function getProduct(productType, name, price) {
		var Product = {
			name: name,
			price: price,
			productType: productType
		}
		return Product;
	}

	function getShoppingCart() {
		var ShoppingCart = {
			products: [],
			add: function (product) {
				this.products.push(product);
				return this;
			},
			remove: function (product) {
				let pIndex = this.products.findIndex(p =>
					p.name === product.name &&
					p.price === product.price &&
					p.productType === product.productType);
				if (pIndex < 0) {
					throw 'The product does not exist in this cart';
				}
				this.products.splice(pIndex, 1);
				return this;
			},
			showCost: function () {
				if (this.products.length < 1) {
					return 0;
				}
				let cost = this.products.reduce((a, b) => a + b.price, 0);
				return cost;
			},

			showProductTypes: function () {
				let types = [];
				if (this.products.length < 1) {
					return types;
				}
				for (let product of this.products) {
					let checkType = types.findIndex(p => p === product.productType);
					if (checkType === -1) {
						types.push(product.productType);
					}
				}
				types.sort();
				return types;
			},
			getInfo: function () {
				let CartInfo = {
					products: [],
					totalPrice: 0
				}
				if (this.products.length < 1) {
					return CartInfo;
				}
				for (let product of this.products) {
					let prIndex = CartInfo.products.findIndex(p => p.name === product.name)
					if (prIndex === -1) {
						let newPrCat = {
							name: product.name,
							quantity: 1,
							totalPrice: product.price
						}
						CartInfo.products.push(newPrCat);
						continue;
					}
					else if (prIndex !== -1) {
						CartInfo.products[prIndex].quantity += 1;
						CartInfo.products[prIndex].totalPrice += product.price;
					}
				}

				CartInfo.totalPrice = CartInfo.products.reduce((a, b) => a + b.totalPrice, 0);
				CartInfo.products.sort((a, b) => a.name > b.name);
				return CartInfo;
			}
		};
		return ShoppingCart;
	}

	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
}

module.exports = solve();

// TESTS

let MyShop = solve();
let MyCart = MyShop.getShoppingCart();
let Shokolad = MyShop.getProduct("Sweets", "Shokolad Milka", 2);
let Torta = MyShop.getProduct("Sweets", "Tiramisu", 4);
let Zahar = MyShop.getProduct("Sweets", "Kristal", 1);
let Sol = MyShop.getProduct("Salty", "Pomorie", 1);
let Banichka = MyShop.getProduct("Salty", "Sas sirene", 3);

MyCart.add(Shokolad);
MyCart.add(Shokolad);
MyCart.add(Torta);
MyCart.add(Zahar);
MyCart.add(Sol);

//MyCart.remove(Shokolad);
// let cost = MyCart.showCost();
// console.log(cost);

// let types = MyCart.showProductTypes();
// console.log(types);

let info = MyCart.getInfo();

console.log('And they lived happily ever afer');