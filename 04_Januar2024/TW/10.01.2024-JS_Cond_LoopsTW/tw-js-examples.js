
/* ---------------------------------- */
//&          Fibonacci numbers         */
/* ---------------------------------- */

/*
const num1 = +prompt("Bir sayı girin:");

if (num1 === 1) {
    console.log("0");;
} else if (num1 === 2) {
    console.log("0,1");
} else {

  let a = 0;
  let b = 1;
  let output = "0, 1";
  for (let i = 3; i<= num1; i++) {
    let c = a + b;
    output += "," + c;
    a = b;
    b = c;
  }
  console.log(`İlk ${num1} fibonacci serisidir ${output}`);
}
*/

/* ---------------------------------- */
//&   greatest common divisor (obeb)   */
/* ---------------------------------- */
/*

const num1 = +prompt(`İlk sayıyı girin`)
const num2 = +prompt(`İkinci sayıyı girin`)

let gcd =1;

for (let i = num1 < num2 ? num1 : num2; i <= num1 && i <= num2; i--){
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
        break;
    }
}
console.log(gcd);
*/


/* ---------------------------------- */
//&          armstrong numbers         */
/* ---------------------------------- */
/*
const num3 = +prompt(`Bir sayı girin`)
const x = num3.length

let summ = 0;
for (let i = 0; i< x; i++) {
    summ += num3[i] ** x
} if (summ == +num3 ) {
console.log(`bu sayı bir armstrong sayısı`);
} else {
console.log(`bu sayı bir armstrong sayısı değil!`);
}

*/

//? Kullanıcıdan bir sayı girişi alın. Eğer kullanıcı negatif bir sayı girerse, kullanıcıya "Negatif sayı girdiniz!" mesajını verin. Eğer kullanıcı pozitif bir sayı girerse, bu sayının 1'den başlayarak kendisine kadar olan sayıları konsola yazdırın. 0 girerse de sıfır girdiniz yazdırın.
/*

let sayi = prompt(`Bir sayı girin: `)

if (sayi<0) {
    console.log(`Negatif sayı girdiniz!`);
} else if (sayi == 0) {
    console.log(`Sıfır girdiniz`);
} else {
    for (let i=1; i<=sayi; i++)
    console.log(i);
}
*/


/*
!while versiyonu... sıfır veya negatif girince tekrar giriş istiyor
let positive = false;
while (!positive) {
    let sayi = +prompt(`Sayi giriniz: `)
    if (sayi<0) {
        console.log(`Negatif sayı girdiniz`)
    } else if (sayi == 0) {
        console.log(`Sıfır girdiniz`);
    } else {
        for (i=1; i<=sayi; i++) {
            console.log(i)
        }
        break;
    }
}
*/

// !Artık Yıl Sorusu
// let yıl = +prompt(`Yılı giriniz: `);
// let artikYil =(yıl % 4 === 0 && yıl % 100 !== 0) || (yıl % 400 === 0);
// if (artikYil) {
//    console.log(`${yıl} artık bir yıldır`);
// } else {
//     console.log(`${yıl} artık bir yıl değildir`);
// }


//? Kullanıcıdan yıl ve ay bilgisi al, ona göre o ay kaç gün hesapla


let yil = +(prompt("Yıl Giriniz:"));
let ay = +(prompt("Ay Giriniz:"));
let gunler;


while (ay < 1 || ay > 12) {
    ay = +(prompt(`Hatalı ay girdiniz. Lütfen 1-12 arasında bir değer girin`));
  }

switch (ay) {
 case 1: case 3: case 5: case 7: case 8: case 10: case 12:
   gunler = 31;
   break;
 case 4: case 6: case 9: case 11:
   gunler = 30;
   break;
 case 2:
   let subat = (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
   gunler = subat ? 29 : 28;
   break;
 default:
   console.log(`Geçersiz giriş`);
   break;
}

console.log(`${yil} yılının ${ay}. ayında ${gunler} gün vardır `);

