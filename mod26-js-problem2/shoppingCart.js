 const products = [
    {name: 'laptop', price: 60000, quantity: 2},
    {name: 'mobile', price: 80000, quantity: 3},
    {name: 'tablet', price: 40000, quantity: 5},
 ]

 function getShoppingTotal(products){
    let total = 0;
    for(let product of products){
        // console.log(product);
        total += product.price * product.quantity;
    }
    return total;
 }

 console.log(getShoppingTotal(products));