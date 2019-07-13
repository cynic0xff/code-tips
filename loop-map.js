/*const total = 0;
const withTax = [];
const highValue = [];
let orders = [];

 old way
for(i=0; i< orders.length; i++) {
    
    //reducde
    total += orders[i];

    //map
    withTax.push(orders[i] * 1.1);

    //filter
    if(orders[i] > 100)
        highValue.push(orders[i]);
}
*/

let orders = [
    {product: 'life', price: 150},
    {product: 'car', price: 10},
    {product: 'boat', price: 215}
];

console.log(orders);

//reduce
const total = orders.reduce((acc, cur) => acc + cur);
console.log(total);

//map
const withTax = orders.map(v = v => v * 1.1);

//filter
const highValue = orders.filter(v => v * 100);

console.log(highValue);