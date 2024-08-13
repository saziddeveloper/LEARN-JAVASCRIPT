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


let numbers = [52, 45, 12, -98, 45, 15, -75, 16, 41, 25];
function removeNegativeNumbers(inputNumbers){
    let newNumbers = [];
    for (i = 0; i < numbers.length; i++){
        let checkNumber = numbers[i];
        if (checkNumber >= 0){
            newNumbers.push(checkNumber);
        }
    }
    console.log(newNumbers);
}
removeNegativeNumbers(numbers);