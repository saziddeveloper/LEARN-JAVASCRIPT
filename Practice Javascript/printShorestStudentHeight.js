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


var heightOfStudents = [165, 172, 146, 187, 191, 154, 156, 188];
function shorestStudent(inputArray){
    let shorestStudentHeight = heightOfStudents[0];
    for (let i = 0; i < heightOfStudents.length; i++){
        let element = heightOfStudents[i];
        if (element < shorestStudentHeight){
            shorestStudentHeight = element;
        }
    }
    return "The shortest student height is - " + shorestStudentHeight + "cm";
}
console.log(shorestStudent(heightOfStudents));