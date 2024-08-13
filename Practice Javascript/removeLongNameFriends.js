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


let bestFriends = ["Ripon", "Ashaduzzaman Sazid", "Athikur", "Shuvo", "Sonjoy"];
function removeLongNameFriends(inputNames){
    let newBestFriends = [];
    for (i = 0; i < bestFriends.length; i++){
        let friendName = bestFriends[i];
        let checkLong = friendName.length;
        if (checkLong < 9){
            newBestFriends.push(friendName);
        }
    }
    console.log(newBestFriends);
}
removeLongNameFriends(bestFriends);