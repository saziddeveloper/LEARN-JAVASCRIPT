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


var arrayOfNumbers = [2, 5, 66, 13, 88, 121, 122, 7, 4, 24, 64, 33, 102];
function sumOfArrayOddNumbers(inputArray){
    let sumOfOddNumbers = 0;
    for (i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] % 2 === 1){
            sumOfOddNumbers += arrayOfNumbers[i];
        }
    }
    return "Sum of all Odd numbers from array = " + sumOfOddNumbers;
}
console.log(sumOfArrayOddNumbers(arrayOfNumbers));