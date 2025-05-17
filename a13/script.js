const products = [
  { id: 1, name: "Product 1", price: 34, status:"pending" },
  { id: 2, name: "Product 2", price: 56, status:"pending" },
  { id: 3, name: "Product 3", price: 40, status:"pending" },
];

const list = products.map(product => ({
  
  ...product,
  status: "completed",
  price: product.price + 5,
}));

const totalPrice = list.reduce((sum, product) => sum + product.price, 0);

list.forEach(product => {
  console.log(`${product.name}: ${product.price}`);
  console.log("status "+product.status);
  console.log("Total Price "+totalPrice);
});