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


const phones = [
    { Name: "Samsung", Camera: 50 + ' MP', Ram: 12 + ' GB', Rom: 256 + ' GB', Price: 41500 + ' BDT', Color: "Dark", Battery: 4500 + ' MAH', Charging: 30 + ' W' },
    { Name: "Oppo", Camera: 64 + ' MP', Ram: 8 + ' GB', Rom: 128 + ' GB', Price: 31500 + ' BDT', Color: "Golden", Battery: 5000 + ' MAH', Charging: 18 + ' W' },
    { Name: "Vivo", Camera: 50 + ' MP', Ram: 6 + ' GB', Rom: 64 + ' GB', Price: 28000 + ' BDT', Color: "Dark", Battery: 5000 + ' MAH', Charging: 10 + ' W' },
    { Name: "Realme", Camera: 16 + ' MP', Ram: 8 + ' GB', Rom: 128 + ' GB', Price: 21500 + ' BDT', Color: "Dark", Battery: 5000 + ' MAH', Charging: 18 + ' W' },
    { Name: "Tecno", Camera: 12 + ' MP', Ram: 8 + ' GB', Rom: 64 + ' GB', Price: 21500 + ' BDT', Color: "White", Battery: 5000 + ' MAH', Charging: 18 + ' W' },
    { Name: "Lava", Camera: 5 + ' MP', Ram: 4 + ' GB', Rom: 64 + ' GB', Price: 15000 + ' BDT', Color: "Dark", Battery: 4000 + ' MAH', Charging: 5 + ' W' },
    { Name: "Xaoimi", Camera: 16 + ' MP', Ram: 8 + ' GB', Rom: 64 + ' GB', Price: 24500 + ' BDT', Color: "Black", Battery: 5000 + ' MAH', Charging: 27 + ' W' },
    { Name: "Infinix", Camera: 12 + ' MP', Ram: 16 + ' GB', Rom: 64 + ' GB', Price: 24500 + ' BDT', Color: "Golden", Battery: 4500 + ' MAH', Charging: 18 + ' W' },
    { Name: "Nokia", Camera: 16 + ' MP', Ram: 8 + ' GB', Rom: 128 + ' GB', Price: 21500 + ' BDT', Color: "Dark", Battery: 5000 + ' MAH', Charging: 10 + ' W' },
    { Name: "Walton", Camera: 8 + ' MP', Ram: 6 + ' GB', Rom: 128 + ' GB', Price: 18000 + ' BDT', Color: "Radient Blue", Battery: 5000 + ' MAH', Charging: 18 + ' W' }
];

function checkCheapestPhone(inputPhonesDetails){
    let cheapestPhone = phones[0];
    for (i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.Price < cheapestPhone.Price){
            cheapestPhone = phone;
        }
    }
    console.log(cheapestPhone);
}
checkCheapestPhone(phones);