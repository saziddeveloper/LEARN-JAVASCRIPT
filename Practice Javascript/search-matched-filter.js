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


const products = [
    { id: 1, name: "xaomi phone", price: 14000 },
    { id: 2, name: "samsung phone", price: 84000 },
    { id: 3, name: "mac book air laptop", price: 180000 },
    { id: 4, name: "I PHONE", price: 130000 },
    { id: 5, name: "lenovo yoga laptop 2024", price: 86000 },
    { id: 6, name: "nokia phone x27", price: 57000 },
    { id: 7, name: "lenovo tab", price: 26000 },
    { id: 8, name: "oneplus airpods", price: 12000 },
    { id: 9, name: "dell LapTOP", price: 52000 }
];

function matchedProducts(inputArray, searchKey){
    const matched = [];
    for (const product of products){
        if (product.name.toLowerCase().includes(searchKey.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchedProducts(products, "laptop"));