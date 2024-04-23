"use strict"

// let date = {
//     ism: "aziz",
//     phone: 950188087,
//     porol: 123456789,
// };


// let userInputIsm = prompt("Ismingizni kiriting:");
// let userInputPhone = prompt("Telefon raqamingizni kiriting:");


// if (userInputIsm && userInputPhone) {
    
//     if (userInputIsm === date.ism && userInputPhone == date.phone) {
//         alert(`Salom, ${userInputIsm}! Sizning parolingiz: ${date.porol}`);
//     } else if (userInputIsm === date.ism) {
        
//         alert("Telefon raqam kiritilmadi!");
//     } else if (userInputPhone == date.phone) {
       
//         alert("Ism kiritilmadi!");
//     } else {
        
//         alert("Ism va telefon raqam kiritilmadi!");
//     }
// }
//  else {
    
//     alert("Ism va telefon raqam kiritilmadi!");
// }



let products = {
    lavaw : {
      title: "lavaw",
      price: 28000
    },
    kfc : {
      title: "kfc",
      price: 30000
    },

  };
  
  function makePurchase(userMoney, selectedProduct, userName) {
    if (userMoney >= products[selectedProduct].price) {
      alert(`salom ${userName}! Siz ${products[selectedProduct].title} buyurtma berdingiz. Buyurtmangiz tez orada yetkazib beriladi.`);
    } else {
      alert(`Kechirasiz ${userName}, sizda ${products[selectedProduct].title} olish uchun pul yetali emas.`);
    }
  }
  

  let userMoney = prompt("Mablag kiriting:");
  let selectedProduct = prompt("Mahsulot nomini kirting:");
  let userName = prompt("Ismingizni kiritng:");
  
  makePurchase((userMoney), selectedProduct, userName);
  

