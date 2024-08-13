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


// create a function and fulfill these condition
// condition 1: two number are equal then print "equal"
// condition 2: If two number are positive, 
// Sort a array Number big to small using function
// condition 3: one or two are negative then print "Invalid Input"

const numbers = [12, 15];
function sortMaker(inputArray){
    let number1 = numbers[0];
    let number2 = numbers[1];
    if (number1 == number2){
        return "equal";
    }
    else if (number1 < 0 || number2 < 0){
        return "Invalid Input";
    }
    else if (number1 > -1 || number2 > -1){
        const newNumbers = [];
        newNumbers.push(number2);
        newNumbers.push(number1);
        return newNumbers;
    }
}
console.log(sortMaker(numbers));