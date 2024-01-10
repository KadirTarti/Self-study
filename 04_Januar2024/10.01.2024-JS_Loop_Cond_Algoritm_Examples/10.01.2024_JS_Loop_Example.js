
/*
//& Thurty with &&
console.log(2 && 5);  //5

//& Falsy with &&
console.log(0 && 7);  // 0    çünkü 0 falsy bir değer
console.log(`0` && 9); // 9

//& Object - array with &&
console.log({} && "hello");  // hello  {}object yapısı true
console.log([] && "hello");  // hello  []array yapısı true

console.log(Boolean({})); //true
console.log(Boolean([])); //true

//& Falsy string with &&
console.log("" && "wor" );  //hiç
console.log('' && "wor" ); //hiç
console.log(`` && "wor" ); //hiç

//& Falsy null with &&
console.log(null && "hello"); //!null    !GÖRDÜĞÜ İLK FALSY DEĞERİ DÖNDÜRÜR
console.log(NaN && "hello");  //NaN
console.log(null && NaN);     //null




//^ OR OPERATÖRÜ

//&  Truthy value with ||
console.log(2 || 5);    // 2  ->  ilk gördüğü true değeri döndürür

//&  Falsy value with ||
console.log(0 || 7);    // 7  sıfır falsy olduğu için true döndürdü
console.log("" || 0);   //? 0 döndürür... son bulduğu falsy değeri verir!


//& Object - array with ||
console.log({} || "hello");  // hiçlik  {}object yapısı true - ||ilk true döndürür
console.log([] || "hello");  // hiçlik  []array yapısı true - ||ilk true döndürür


//& Falsy null with ||
console.log(null || 1);     //1
console.log(null || NaN);   //Nan   Eğer hepsi falsy ise son falsy değeri döndürür
*/



// 18 yaşından büyüklerin alkol kullanabileceği 18 yaşından küçüklerin alkol kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.
//ternary


// let age = +prompt("Yas girin:");
// let response = (age >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);



// let yas= +prompt(`Yaşınızı girin: `);
// if (yas>=18) {
//     console.log(`Alkol kullanabilir`);
// } else if (yas<18) {
//     console.log(`18 Yaşından küçük. Alkol kullanamaz`);
// } else console.log(`Bir şeyler yanlış gitti! Yaş sayı olarak girilmelidir.`);


// ! HATALI GİRİŞİ üstteki gibi uyarıyla sonlandırmadan aşağıdaki gibi while ile yeni giriş  talebiyle daha kullanışlı hale getirebiliriz

// & ALTTAKI ÖRNEK BASİT AMA AGÜZEL BİR DÖNGÜ  --- isNaN'dan sonraki || önemli !!
// let age = +prompt(`Yaşınızı girin: `)
// while (isNaN(age) || age == "") {
//     age = +prompt(`Yaşınızı sayısal olarak girin: `) 
// }
// let response = (age >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);


// let age2;
// do {
//     age2 = +prompt(`Yaşınızı giriniz: `) 
// } while (isNaN(age2) || age2 == "");
// let response2 = (age2 >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response2);




// let x = +prompt(`Bir sayı girin: `);
// console.log(`x= `, x );
// console.log('typeof x', typeof x);

// console.log(isNaN(x));



// Kullanıcı adı ve parola kontrolü yap. Doğru ise kullanıcıyı ismiyle karşıla. Değilse tekrar girmesi için yönlendir. 3 kez yanlış girince de iptal et ("15 dk sonra tekrar dene")

// let user = 'Mark';
// let pswrd = '1234';

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉:tada:`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// }


//? Aşağıdaki çıktıyı konsola yazdırın

    //   * * * * * 
    //   * * * * * 
    //   * * * * * 
    //   * * * * * 
    //   * * * * * 

    // for (let i = 0; i<5; i++)
    // console.log(`*****`);

    
    
    // for (let i = 0; i<5; i++) {
    //     let satir = "";
    //       for (let j = 0; j < 5; j++) {
    //         satir += "* "
    //       }
    //       console.log(`${satir}`);
    // }






/*
    for (let i = 0; i < 5; i++) {
        let satir = "";
          for (let j = 0; j <= i; j++) {
            satir += "* "
          }
          console.log(`${satir}`);
    }



let size = 5;
let output = "";
for (let i = 0; i < size; i++) {
  let row = "";
  for (let s = 0; s < size - i - 1; s++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i + 1; j++) {
    output += "#";
  }
  console.log(row + output);
  output = "";
}

*/

//kullanıcıdan 5 sayı alıp ortalamasını yazdırın!

// let deger= +prompt(`Lütfen bir sayı girin: `)
// for (deger = 0; deger < 5; i++) {
    
// }




//Kullanıcıdan 5 sayı al ve bu sayıların ortalamasını hesapla!


/*
let toplam = 0;
for (var i = 1; i <= 5; i++) {
    let sayi = +prompt(i + ". sayiyi girin:");
    toplam += sayi;
}
console.log( toplam / 5);

// her toplanışta sayıların ortalamasını alan kod
let sum = 0;
for (i = 0; i < 5; i++) {
  let num = +prompt("Enter a number");
  sum += num;
  console.log("Average: ", sum / (i + 1));
}


*/


for(let num = 1000; num <= 2000; num++) {
    if(num % 3 == 0 && num % 5 == 0) {
        console.log(num);
    }
 } 


 //& while ile çözümü:

 let sayi = 1000;
 while (sayi <=2000) {
    if (num % 15 == 0) {
        console.log(sayi);
    }
    sayi++
 }
 console.log(sayi);