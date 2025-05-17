const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 56 },
  { id: 3, name: "Product 3", price: 40 },
];

const list = products.map(product => ({
  
  id: product.id,
  name: product.name,
  price: product.price + 5

}));

list.forEach(product => {
  console.log(`${product.name}: ${product.price}`);
});