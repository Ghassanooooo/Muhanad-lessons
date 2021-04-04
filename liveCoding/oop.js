function greeting(strName) {
  return "Hallo " + strName;
}
console.log(greeting("Alex"));

//OOP
//let strName = "test";
class User {
  constructor(strName) {
    console.log("the class called!", strName); // the class called! Tommy
    this.name = strName;
  }

  greeting() {
    return "Hallo " + this.name;
  }
}
const userInfo = new User("Tommy");
console.log(userInfo.greeting());

/**
 [
  {
   name:'Product 1',
   brand: 'nike'
  },

  {
    name:' Product 2',
    brand: ' product brand'  
  }

 ]
 */

const initShop = [
  {
    name: "Product 1",
    brand: "nike",
  },

  {
    name: " Product 2",
    brand: " product brand",
  },
];

class OnlineShop {
  constructor(products) {
    this.products = products;
  }

  getShop() {
    return this.products;
  }

  addProduct(prod) {
    this.products.push(prod);
  }
  // remove product by index number
  removeTest(index) {
    this.products.splice(index, 1);
    // console.log("the product with index " + index + " has been removed");
  }

  /**
  shop.editProduct(0, {
  name: " Product 2 updated",
  brand: " product 5 brand updated",
     });
   */

  editProduct(index, updatedProduct) {
    console.log("this.products[1] ==>", this.products[index]);
    console.log("updatedProduct ==>", updatedProduct);
    this.products.splice(index, 1, updatedProduct);
  }
}

const shop = new OnlineShop(initShop);

//console.log(shop.getShop());

shop.addProduct({
  name: " Product 3",
  brand: " product 3 brand",
});
//console.log(shop.getShop());

shop.addProduct({
  name: " Product 4",
  brand: " product 4 brand",
});
shop.removeTest(2);
shop.addProduct({
  name: " Product 5",
  brand: " product 5 brand",
});
shop.removeTest(0);
shop.editProduct(0, {
  name: " Product 2 updated",
  brand: " product 5 brand updated",
});

console.log(shop.getShop());
