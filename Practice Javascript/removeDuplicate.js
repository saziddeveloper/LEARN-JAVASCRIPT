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


const marketList = ["Potato", "Meat", "Fesh", "Cooking Oil", "Hair Oil", "Shampoo", "Soap", "Chips", "Umbrella", "Headphone", "Napa-Extra", "Vitamin-Sirup", "Towel", "Ru-faze", "Potato", "Soap", "Cooking Oil", "Napa-Extra", "Soap", "Fesh"];
function removeDuplicate(inputarray){
    const newMarketList = [];
    for (i = 0; i < marketList.length; i++){
        let name = marketList[i];
        if (newMarketList.includes(name) === false){
            newMarketList.push(name);
        }
    }
    console.log(newMarketList);
}
removeDuplicate(marketList);