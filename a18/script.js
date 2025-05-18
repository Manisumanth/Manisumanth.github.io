const products = [
    { id: 1, name: "p1", price: 34 },
    { id: 2, name: "p2", price: 50 },
    { id: 3, name: "p3", price: 75 }
];

const cart = { 1: 4, 3: 5 }; 

const orderTotal = products.reduce((sum, product) => {
    const quantity = cart[product.id];
    if (quantity) {
        const total = product.price * quantity;
        console.log( Name: ${product.name}, Price: ${product.price}, Quantity: ${quantity}, Total: ${total});
        return sum + total;
    }
    return sum;
}, 0);

console.log(Order Value: ${orderTotal});