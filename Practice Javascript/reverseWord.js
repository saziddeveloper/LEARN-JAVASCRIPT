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


var massage = "I am in a room";
function reverseWord(inputString){
    const words = massage.split(" ");
    const reserved = [];
    for (i = (words.length - 1); i >= 0; i--){
        let word = words[i];
        reserved.push(word);
    }
    const newMassage = reserved.join(" ");
    console.log(newMassage);
}
reverseWord(massage);