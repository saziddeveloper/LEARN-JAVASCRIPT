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


function multiLayerDiscount(buyTicketQuantity){
    const frist10TicketPrice = 100;
    const second10TicketPrice = 85;
    const restTicketPrice = 60;
    if (buyTicketQuantity <= 10){
        const sumOfTicketPrice = frist10TicketPrice * buyTicketQuantity;
        console.log("Your bill - " + sumOfTicketPrice + " BDT");
    }
    else if (buyTicketQuantity <= 20){
        const sumOfFrist10TicketPrice = frist10TicketPrice * 10;
        const sumOfRestTicketPrice = second10TicketPrice * (buyTicketQuantity - 10);
        const sumOfTicketPrice = sumOfFrist10TicketPrice + sumOfRestTicketPrice;
        console.log("Your bill - " + sumOfTicketPrice + " BDT");
    }
    else {
        const sumOfFrist10TicketPrice = frist10TicketPrice * 10;
        const sumOfSecond10TicketPrice = second10TicketPrice * 10;
        const sumOfRestTicketPrice = restTicketPrice * (buyTicketQuantity - 20);
        const sumOfTicketPrice = sumOfFrist10TicketPrice + sumOfSecond10TicketPrice + sumOfRestTicketPrice;
        console.log("Your bill - " + sumOfTicketPrice + " BDT");
    }
}
multiLayerDiscount(21);