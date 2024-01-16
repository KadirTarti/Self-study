const printMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
      result = console.log(`${num} * ${i} = ${num * i}`);
    }
  };
//   printMultiplicationTable(7);

//!   return yazmadan tek expression olduğu için çıktı alabildik

// for (let i =0; i<100; i++) {
//     console.log(Math.random()*100);
// }



//tavla zarı fonksiyonu oluştur. iki zar olsun. her çağrıldığında zarlar 1-6 arası rastgele bir  tamsayı üretsin. Eğer iki sayı aynı gelirse konsola "tebrikler" yazdırsın. 

function zar() {
    let zar1 = Math.floor(Math.random() * 6 + 1);
    let zar2 = Math.floor(Math.random() * 6 + 1);
    
    if (zar1<zar2) {
        console.log(`Oyna: ${zar1} - ${zar2}`);
    } else if (zar2<zar1) {
        console.log(`Oyna: ${zar2} - ${zar1}`);
    } else if (zar1 == zar2) {
        console.log(`${zar1} - ${zar2} Tebrikler çift attınız!`);
    } else console.log(`Bir şeyler ters gitti`);
    return [zar1, zar2]
}

// zar()


//her çağrıldığında verilen min max parametreleri arasında sayı üreten bir fonksiyon
function sayiUret(min, max) {
    return Math.floor(Math.random() * (max - min)+1) + min;
}
let sonuc = sayiUret(8,10)
// console.log(sonuc);





// her çağrıldığında arka plan rengini değiştiren bir fonksiyon yaz in javascript
const randomColor = () => {
    const rgbGen = () => {
        return Math.floor(Math.random() * 256);
    }
    let r = rgbGen();
    let g = rgbGen();
    let b = rgbGen();
        return `rgb(${r}, ${g}, ${b})`;
}
// document.body.style.backgroundColor = randomColor();




// çiftlikteki hayvanların sayısını ve toplam ayak sayılarını bul.
// hayvanlar tavuk, inek, ördek, keçi
function ayakSayisi(tavuk, inek, ordek, keci) {
    const toplamAyak = tavuk*2 + inek*4 + ordek*2 + keci*4
    console.log(toplamAyak);
 }
//  ayakSayisi(5, 3, 2, 10)


 //*****************-**********************/
 const numberOfLegs = (chiken, cow, duck, goat) => {
    const legs = (chiken + duck) * 2 + (cow + goat) * 4;
    return legs
  };
//   console.log(numberOfLegs(4,5,6,7))





  //  alışveriş yapıyoruz. indirim yapılacak. ürün fiyatı ve indirim oranı parametre olarak gelecek.
  // 1-orjinal fiyat    2- indirim oranı     3- indirimli tutar

  const fullPriceVsDiscountedPrice= (full, sale) => {
    return `Full Price: ${full} Discount: %${sale} SalePrice: ${(full-sale)}`;
  }
//   console.log(fullPriceVsDiscountedPrice(100,20));


  const discount = (price, rate) => {
    return `Original Price: ${price} / Discounted Price: ${
      price - (price * rate) / 100
    } `;
  };
//   console.log(discount(1000, 20));



  
//!  Celcius Fahrenheit derece çevrim fonksiyonu
//!   Fahrenheit Celcius derece çevrim fonksiyonu

// 20 Santigrat = 68 Fahrenhayt
// 100 Santigrat = 212 Fahrenhayt

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 1.8) + 32;
//    }
// //    console.log(celsiusToFahrenheit(100));


// function fahrenheitToCelsius(fahrenheit) { 
//     return (fahrenheit - 32) / 1.8;
//    }
//    console.log(fahrenheitToCelsius(86));


//*---------------------------------------------------------**

// const fToC = (fahrenheit) => {
//     return ((fahrenheit - 32) * 5/9).toFixed(2);
// };

// const cToF = (celsius) => {
//     return (celsius * 9/5 + 32).toFixed(2);
// };

let input = 40; 
// console.log(`${input} Fahrenheit, ${fToC(input)} Celsius'`);
// console.log(`${input} Celsius, ${cToF(input)} Fahrenheit`);







//  Kullanıcıya sor: prompot ile .... değer al... değeri çevir  fhToC mi? cToFh mi?

// const info = prompt(`Lütfen bir değer girin ve yanına F ceya C yazın `)

const celToFh = cel => {
    return (cel * 1.8 + 32).toFixed(2);

};
const fhToCel = fh => {
    return ((fh - 32)/1.8).toFixed(2);
}
let info;
console.log(`${info} Fahrenheit, ${fhToCel(info)} Celsius'`);
console.log(`${info} Celsius, ${celToFh(info)} Fahrenheit`);

/*

while (true) {
    let secim = prompt(`Lütfen bir değer girin:
    1- C to F
    2- F to C
    q - çıkış`)
    console.log(secim);

    if (secim == 1) {
        console.log(celToFh(+prompt(`Çevirmek istediğiniz değeri girin:`)));
    } else if (secim == 2) {
        console.log(fhToCel(+prompt(`Çevirmek istediğiniz değeri girin:`)));
    } else if (secim == 'q') {
        break
    } else {
        console.log(`Hatalı giriş yaptınız!`);
    }
}
console.log(`Çıkış yapıldı`);

*/

/*

while (true) {
    // let value = prompt("F (fahrenheit) | C (celsius) | Q (exit)").toUpperCase(); 
    if (value == "Q") break;
    else{
    let input = parseInt(prompt("Deger girin:"));
    if (value === "F") {
        console.log(`${input} Fahrenheit, ${fToC(input)} Celsius`);
    } else if (value === "C") {
        console.log(`${input} Celsius, ${cToF(input)} Fahrenheit`);
    } else {
        console.log("invalid value");
      }
    }
}
*/

function artıkYil(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) ||(year % 400 === 0)) {
      console.log(`${year} bir artık yıldır`);
    } else {
      console.log(`${year} bir artık yıl değildir`);
    }
   }
artıkYil(2018)
// artıkYil(2017)
// artıkYil(2016)
// artıkYil(2015)
// artıkYil(2014)
// artıkYil(2013)
// artıkYil(2012)


let str1 = `lorem`
let str2 = 'Hallo'
let str3 = "hello"
let str4 = new String('Hello')

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i].toUpperCase());
}
console.log(str1[str1.length -1 ]);

function tersCevir (str) {
    let ters = '';
    for (let i = str.length -1; i>=0; i--) {
        ters += str[i]
    }
    if (str.toUpperCase() === ters.toUpperCase()) {
        console.log(`${str} bir palindrome'dur.`);
    } else {
        console.log(`${str} palindrome değildir.`);

    }
}

tersCevir('Merhaba dünya, nasılsın bugün')
tersCevir('kayak')
tersCevir('kaynak')
tersCevir('cannac') 