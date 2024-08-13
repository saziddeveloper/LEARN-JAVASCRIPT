/*
 * - License
 * - 
 * - This code is developed by Ashaduzzaman Sazid.
 * - 
 * - GitHub: https://github.com/saziddeveloper
 * - Portfolio: [saziddeveloper.github.io]
 * - 
 * - Warning:
 * - Unauthorized use, copy, modify, merge, publish, distribute, 
 * - sublicense, and/or sell copies of the of this code/project 
 * - is strictly prohibited.
 * - 
 * - Any infringement of these terms may result in legal action for damages,
 * - including but not limited to, claims for compensation, legal fees, and
 * - other expenses incurred by the author or copyright holder.
 * - 
 * - © 2024 Ashaduzzaman Sazid. All rights reserved.
*/


const shoppingCart = [
    { name: "Shoe", price: 900, quantity: 2 },
    { name: "Shirt", price: 650, quantity: 5 },
    { name: "Pant", price: 800, quantity: 4 },
    { name: "Belt", price: 420, quantity: 3 },
    { name: "Watch", price: 440, quantity: 4 }
];

function totalCost(inputCart){
    let sum = 0;
    for (i = 0; i < shoppingCart.length; i++){
        const product = shoppingCart[i];
        const productTotalPrice = product.price * product.quantity;
        sum = sum + productTotalPrice;
    }
    console.log("Total Bill - " + sum + " BDT");
}
totalCost(shoppingCart);