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


// check two different string same or not using function

function matchFinder(string1, string2){
    let check1 = typeof(string1);
    let check2 = typeof(string2);
    if (check1 == "string" || check2 == "string"){
        let searchResult = string1.includes(string2);
        if (searchResult == true){
            return "True";
        }
        else {
            return "False";
        }
    }
    else {
        return "Please! Input String.";
    }
}
console.log(matchFinder("MD Sazid Khan", "MD"));