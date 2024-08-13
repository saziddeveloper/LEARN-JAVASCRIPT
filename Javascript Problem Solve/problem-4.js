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


// print address from an object using function
// special condition: if any of those propatise are missing then,
// replace that propatise by double underscore (__)

const address = {
    street: 10,
    house: "15A",
    society: "Earth-Perfect"
}
function findAddress(inputAddressObject){
    const street = address.street;
    const house = address.house;
    const society = address.society;
    if (street == undefined){
        return "__" + ", " + house + ", " + society;
    }
    else if (house == undefined){
        return street + ", " +"__" + ", " + society;
    }
    else if (society == undefined){
        return street + ", " + house + ", " + "__";
    }
    else {
        return street + ", " + house + ", " + society;
    }
}
console.log(findAddress(address));