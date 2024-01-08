
// let sayi=prompt(`Lütfen bir sayı giriniz: `)

// let f;
// for (sayi; sayi==1; -1)
// f=sayi*f
// console.log(f);


//!   10 un faktöriyeli

let girilenSayi = prompt("Lütfen bir sayı girin:");
girilenSayi = Number(girilenSayi);

if (girilenSayi > 10) {
   alert("Hata! Sayı 10'dan büyük olamaz.");
} else {
   let sonuc = 1;
   for(let i = 2; i <= girilenSayi; i++) {
       sonuc *= i;
   }
   console.log(`${girilenSayi} faktöriyeli ${sonuc}`);
}



//!   girilen herhangi bir sayının faktöriyeli

let sayi = prompt("Lütfen bir sayı girin:");

let toplam = 1;
   for(let i = 2; i <= sayi; i++) {
       toplam *= i;
   }
   console.log(`${sayi} faktöriyeli ${toplam}`);





let num1 = Number(prompt("Lütfen birinci sayıyı girin:"));
let num2 = Number(prompt("Lütfen ikinci sayıyı girin:"));

for(let i = num1; i <= num2; i++) {
 console.log(i);
}



//& Sinan hocanın derste çözdüğü örnek ! bu şekliyle de çalışmıyor!

// let a = Number(prompt("Lütfen birinci sayıyı girin:"));
// let b = Number(prompt("Lütfen ikinci sayıyı girin:"));

// if (a>b) {
//     max=a, min=b
// } else {
//     max=b, min=a
// }
// for(min; min<=max; 1) {
//  console.log(min);
// }


