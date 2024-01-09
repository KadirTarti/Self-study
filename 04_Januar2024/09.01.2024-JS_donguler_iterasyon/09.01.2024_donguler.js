/* ---------------------------------- */
//    !        DÖNGÜLER              */
/* ---------------------------------- */


//!     FOR

//*      for (başlangıç;  koşul;    güncellemeMiktarı) {döngü içi}

//? ÖRNEK: ekrana 10 kere merhaba yazdırın!

for ( let index = 1;  index <= 10;  index++) {console.log(`${index} Merhaba`);}

//? ÖRNEK: 1'den N'e kadar olan sayıların toplamı

// const N= +prompt(`Lütfen N değerini belirten sayıyı giriniz:`)
// let toplam=0;

// for (let index=1; index <= N; index++) {
//     toplam=toplam+index     //  -->  toplam += index
// }
// console.log(toplam);




//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=+prompt(`Bir sayı gir! Asal olup olmadığına bakalım :)`);
// let asal= true;  //& bu döngülerde genelde (asal olduğu yerde) flag terimi kullanılıyor!



// for (let i = 2; i<sayi; i++) {
//     if (sayi % i ==0 ) {
//         asal = false
//     }    
// }
// console.log(asal == true ? `Sayın Asal :)` : `Sayı bölünebiliyooor! Asal Değil!`);  //! KISA YAZIMI -> (asal ? `Asal` : `Asal Değil!`);





//? Ornek: 0-100 Arasinda 7 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

// for (let i=1; i<=7; i++) {
//     let Randomnumber= Math.round(Math.random()*100)
//     console.log(Randomnumber);
// }






//!     WHILE
// * let i = 1       while (i<=10) {console.log(i + `Merhaba`);  i++; }


//? ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error mesajı verip, tekrar sayı isteyiniz.



// let number = +prompt(`1-100 arasında bir sayı giriniz`);
// while (number<1 || number>100) {
//  console.error(`Hata: Sayı 1 ile 100 arasında olmalı!`);
//  number= +prompt(`Lütfen 100'den küçük bir pozitif sayı girin:`)
// }
// console.log(`Tebrikler! Sayınız: ${number}`);




/*


 let i = 1       
 while (i<=10) {console.log(i + ` Merhaba`);  i++; }


     & do while
! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır

? ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz
*/

/*
let number1;
do {
    number1= +prompt("do-while döngüsü için 1-100 arasında bir sayı giriniz:")
    number1 < 1 || number1 > 100 && alert(number1);
} while (number1 < 1 || number1 > 100);
console.log(number1);
*/
//! şarta bakmadan ilk etapta do'nun içindeki istek yapılır, sonrasında while içi true olduğu sürece do içindeki istek yapılmaya devam edilir

/*
?for ile çözümü
let not2 = prompt("Lütfen notunuzu giriniz:");
for (; not2 < 1 || not2 > 100; ) {
  console.log("Not 1'dan kucuk veya 100'den buyuk olamaz.");
  not2 = prompt("Yeniden notunuzu giriniz:");
}
console.log("Giridiginiz Not:", not2);
*/


//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not isteyecek ve islemleri tekrar edecektir.



/*
let devam;

do {
    let vize = +prompt(`Vize notunuzu giriniz: `);
    let final = +prompt(`Final notunuzu giriniz: `);
    let ortalama= vize*0.4 + final*0.6;
    console.log(ortalama >= 60 ? `Kurtardın :) Geçtiniz` : `Maalesef Kaldınız!` );

    devam= prompt(`Devam etmek istiyorsanız e tuşuna basın`)

} while (devam.toLocaleUpperCase()=="E");
*/
// !süslü parantez dışında kullanılan variable'ları dışarıda atamak gerekiyor (devam gibi)


//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.



/*
let sayi1;
do {
    sayi1 = prompt("Lütfen bir sayı girin:")
} while (sayi1!="q");

console.log(`bitti`);
*/

