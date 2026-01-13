class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getInfo() {
    return `${this.name} (${this.category}) - ${this.price} грн`;
  }
}
class User {
  constructor(name) {
    this.name = name;
  }

  getUserInfo() {
    return `Користувач: ${this.name}`;
  }
}

class Customer extends User {
  constructor(name) {
    super(name);
    this.orders = [];
  }
  addOrder(order) {
    this.orders.push(order);
  }
  viewOrders() {
    if (this.orders.length === 0) {
      console.log("Замовлень немає");
      return;
    }

    this.orders.forEach((order, index) => {
      console.log(`Замовлення №${index + 1}:`);
      order.showOrder();
    });
  }
}
class Order {
  constructor() {
    this.products = [];
    this.totalSum = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.totalSum += product.price;
  }

  showOrder() {
    this.products.forEach(product => {
      console.log(product.getInfo());
    });
    console.log(`Загальна сума: ${this.totalSum} грн`);
    console.log("--------------------");
  }
}

const product1 = new Product("Ноутбук", 25000, "Електроніка");
const product2 = new Product("Мишка", 500, "Аксесуари");
const product3 = new Product("Клавіатура", 1200, "Аксесуари");
const customer = new Customer("Іван");
const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
const order2 = new Order();
order2.addProduct(product3);
customer.addOrder(order1);
customer.addOrder(order2);
console.log(customer.getUserInfo());
customer.viewOrders();
