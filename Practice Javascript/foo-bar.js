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


for (i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("foo-bar");
    }
    else if (i % 3 === 0){
        console.log("foo");
    }
    else if (i % 5 === 0){
        console.log("bar");
    }
    else {
        console.log(i);
    }
}