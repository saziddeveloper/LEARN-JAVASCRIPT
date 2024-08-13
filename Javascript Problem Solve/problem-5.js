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


// create a function that tell me have I money for buying chips
// function parameter 1 is an array: i have a array that have
//three number that is my 3 different currency note
// function parameter 2 is a number: that is the price of chips
// condition 1: if 3 note is sufficient for buying chips then, print true
// condition 2: if 3 note isn't sufficient for buying chips then, print false
// condition 3: if array is empty then print a massage

const money3Note = [10, 5, 5];
const chipsPrice = 20;

function canPay(inputArray, inputPrice){
    let sum = 0;
    for (i = 0; i < money3Note.length; i++){
        sum = sum + money3Note[i];
    }
    if (sum == 0){
        return "Array is empty!";
    }
    else if (sum >= chipsPrice){
        return "true";
    }
    else {
        return "false";
    }
}
console.log(canPay(money3Note, chipsPrice));