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


let chairWoodNeeded = 3; // 3 cft
let tableWoodNeeded = 10; // 10 cft
let bedWoodNeeded = 46; // 46 cft
function calculateWoodRequire(chairQuantity, tableQuantity, bedQuantity){
    let chairWoodRequire = chairWoodNeeded * chairQuantity;
    let tableWoodRequire = tableWoodNeeded * tableQuantity;
    let bedWoodRequire = bedWoodNeeded * bedQuantity;
    const netWoodRequire = chairWoodRequire + tableWoodRequire + bedWoodRequire;
    console.log("Net Wood Require - " + netWoodRequire + " cft");
}
calculateWoodRequire(18, 6, 3);