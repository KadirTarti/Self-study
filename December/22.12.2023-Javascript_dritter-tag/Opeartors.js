/* ---------------------------------- */
/*              OPERATORS             */
/* ---------------------------------- 

1- Arithmetic Operators 
2- Assignment Operators
3- Comparison Operators
4- Logical Operators        ----------- */

// ^   1- Arithmetic Op. 
    let a = 10
    let b = 2

    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b); // çarpma
    console.log(a ** b); //üs alma

//^ ----------->Remainder Operatörü (Modulus % işareti...KALAN VERİR)
    let c = 3

    console.log(a / c); // 3.3333333
    console.log(a % c); // 1

//    if (sayı) % 2 == 0 ise çift, else tek sayıdır

 /*   let d = +prompt('Bir sayı giriniz: ')
    
    if (d%2 == 0){
        console.log('Girilen değer bir çift sayı');
    } else {
        console.log('Girilen değer bir tek sayı');
    }

    if (isNaN(d)) {
            console.log('Sayı girmediniz!');

        } else if (d % 2 === 0) {
            console.log('Girilen değer bir çift sayı');
        
        } else {
            console.log('Girilen değer bir tek sayı');

    }   */


    let sure = 225

    let saat = parseInt(sure / 60)

    console.log(saat)

    let dakika = sure % 60
    
    console.log(`${sure} dakika ${saat} saat ${dakika} dakikadır..!`);


//^ -----------> increment/decrement Operatörü
        // !increment
    let d = 3

    console.log(d++); // increment değişkenden sonra yazılırsa POST increment olur. tekrar yazdırınca artırır
    console.log(d);


    let e = 4

    console.log(++e); // increment değişkenden önce yazılırsa PRE increment olur. direk artırır
    console.log(e);


    

        // !decrement
    let f = 5
    console.log(f--);
    console.log({f});

    let g = 3
    console.log(--g);
    console.log({g});



    console.clear()


//^   2-  Assignment Operators

    let h = 10
    let i = 2

    let j = i
    console.log(j);

    i = 3
    console.log(i);

    /*

    h+=i    h + i =
    h-=i    h - i =
    h*=i    h * i = 
    h/=i    h / i =
    h%=i    h % i =                 */


//^   3-  Comprassion Operators
        // karşılaştırma operatörleri bize boolean sonuç döndürür
let k = 2
let l = '2'

console.log(k == l);    // tipe bakmaz, değere bakar  -   true
console.log(k === l);   // hem tipe hem değere bakar  -  false


//!     ünlem eşittir != eşit değildir
console.log(k != l); //false.. çünkü eşittir

//!     ünlem ÇİFT eşittir  !==    (tipiyle birlikte)eşit değildir
console.log(k !== l); //true.. çünkü tipi eşit değil

let n = true
console.log(!n);  //  ünlem ! terse çeviriyor. true'yu false yaptı

let o;

if (o) {
    console.log(`if çalıştı`);
} else {
    console.log(`else çalıştı`); 
}   // o'nun başına ! koyarsak if çalışır.


//* büyüktür - küçüktür 

let p = 100
let q = 100
console.log(p > q);  //false
console.log(p >= q);  //true

console.log('A' < 'a'); // büyük a ASCII kodu önce geldiği için daha küçük, o yüzden doğru



//^   4-  Logical Operators
  //   && ve (and) anlamına gelir. Tüm şartlar sağlanmalı ki sonuç doğru çıksın
  

  let a1= true  // karakter sayısı 8'den fazla mı
  let b1= true  // küçük-büyük harf var mı
  let c1= false // bir harf kullanıldı mı
  let d1= true  // karakter sayısı 16'dan fazla mı

  let y= a1 && b1 && c1
  console.log(y);  //false
  console.log(saat);

  
  //*    ||  veya (or) anlamına gelir

  let z = d1 || b1 && c1
  console.log(z);




//^ ************************** ***************************
//!  OPERATORLERLE İLGİLİ ALIŞTIRMA BULUP YAP!!!