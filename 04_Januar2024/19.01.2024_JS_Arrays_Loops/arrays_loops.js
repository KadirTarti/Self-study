//& reverse   - elemanların sırasını sondan başa doğru değiştirir

//& join     - array in tüm elemanlarını verilen seperatöre göre stringe çevirir (''), ('*'), ('_')

//&    sort   - array'in elemanlarını ascii ye göre tekrar sıralıyor.
//^ orjinal array'i değiştirir

/*
const arr = [1, 2, 30, 21, 42, 67, 91, 4, 22, 51, 3, 32]

arr.sort()
console.log(arr); // 1 ile başlayanlar, 2 ile başlayanlar, 3 ile ... sıralıyor
//  [1, 2, 21, 22, 3, 30, 32, 4, 42, 51, 67, 91]

arr.sort((a,b) => a-b)  // artan sıralama
console.log(arr);       //  [1, 2, 3, 4, 21, 22, 30, 32, 42, 51, 67, 91]

arr.sort((a,b) => b-a)  // azalan sıralama
console.log(arr);       //  [91, 67, 51, 42, 32, 30, 22, 21, 4, 3, 2, 1]
*/

//&   includes()    -       true / false döndürür  {indexOf number döndürüyordu}
//*case sensitivedir

const colors = ["Red", "Green", "Blue", "Green", "Brown"];

let checkElement = (element) => {
  if (!colors.includes(element)) {
    colors.push(element);
    console.log(`${element} diziye eklendi!`);
    console.log(colors);
  } else {
    console.log("Bu eleman mevcut!");
    console.log(colors);
  }
};
checkElement("Green"); // Bu eleman mevcut!
checkElement("green"); // green diziye eklendi!

/*

//! örnek : rastgele renk getiren bir fonksiyon yazın
const color = ['Red', 'Green', 'Blue','Green', 'Brown']

function randomColor(color) 
   let index = Math.floor(Math.random() * color.length);
   return color[index];
}
console.log(randomColor(color));


//! farklı çözüm
const getRandomColor = () => {
    let colorsA = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
    return colorsA[Math.floor(Math.random() * colorsA.length)];
  };
  console.log(getRandomColor());


//! farklı çözüm
const color2 = ["Red", "Green", "Blue", "Green", "Brown"];
  function randomColour(list) {
    return list[Math.floor(Math.random() * (list.length))];
  }
console.log(randomColour(color2));


*/

//&* ---------------------------------- */
/*         //^   ARRAY - LOOP         */
//&* ---------------------------------- */

//&  Array'ler üzerinde loop işlemleri

//? for loop

const color3 = ["Red", "Green", "Blue", "Green", "Brown"];

// for (let i = 0; i < color3.length; i++) {
//     console.log(color3[i].toUpperCase());
//     }

for (let i = 0; i < color3.length; i++) {
  if (color3[i] == "Red") continue;
  if (color3[i] == "Green") break;
  console.log(color3[i].toUpperCase());
}

//? while loop

let i = 0;

while (i < color3.length) {
  console.log(color3[i].toLowerCase());
  i++;
}

//? for ...in     -> empty elemanları atlar

//? for .... of    ->   ES 6 ile geldi
const nymbr = ["1", 2, , 3, "4", 5];

for (let num of nymbr) {
  console.log(num);
}

for (let num of nymbr) {
  if (num == undefined) continue; // empty elemanları bu şekilde atlayabiliriz
  console.log(num);
}

//^ for ile örnek
const nums = [100, 20, -5, -9, -3, -87, 30];
const negative = [];
const positive = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    negative.push(nums[i]);
  } else {
    positive.push(nums[i]);
  }
}
console.log(negative);
console.log(positive);

//^ for...in ile örnek
const nums1 = [100, 20, -5, -9, -3, -87, 30];
const negative1 = [];
const positive1 = [];

for (let i in nums1) {
  if (nums1[i] < 0) {
    negative1.push(nums1[i]);
  } else {
    positive1.push(nums1[i]);
  }
}
console.log(negative1);
console.log(positive1);

//^for...of ile örnek
const nums2 = [100, 20, -5, -9, -3, -87, 30];
const negative2 = [];
const positive2 = [];

for (let num of nums2) {
  if (num < 0) {
    negative2.push(nums2[i]);
  } else {
    positive2.push(nums2[i]);
  }
}
console.log(negative2);
console.log(positive2);

//^aufgabe... dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes", "audi", "volvo"];
let result = "";
for (araba of arabalar) {
  result += araba;
}
console.log(result);

//&   foreach  metodu       ######  ÇOK FAZLA KULLANILIYOR !!!!  #####
//^break ve continue kullanılamaz.
//^return yoktur. void metoddur.
//^

const prices = [100, 200, 300, 400, 50, 70];
prices.forEach((a) => console.log(a)); // her bir elemanı satır satır yazdırdı

let toplam = 0;
prices.forEach((a) => (toplam += a));
console.log(toplam); // sayıların toplamı
console.log(toplam / prices.length); // sayıların ortalaması

const prices2 = [100, 200, 300, 400, 50, 70];
prices2.forEach((price, i, arr) => {
  arr[i] = price * 2; // iki ile çarpma fonksiyonu
});
console.log(prices2);

//&   map   metodu     ->   istenen işlemleri yapıp yeni bir array döndürür

const cars = ["bmw", "ferrari", "skoda", "mercedes", "audi", "volvo"];

const newCars = cars.map((car) => car.toUpperCase());
console.log(newCars);
console.log(cars);

const prices4 = [100, 200, 300, 400, 50, 70];
console.log(prices4); // [100, 200, 300, 400, 50, 70]

prices4.map((pri, i, arr) => {
  if (pri >= 300) {
    arr[i] = arr[i] * 1.2;
  } else {
    arr[i] = arr[i] * 1.5;
  }
});
console.log(prices4); // [150, 300, 360, 480, 75, 105]

//? dizi içindeki elemanların euro ve dolar karşılıkları
const prices5 = [100, 200, 300, 400, 50, 70];

const dolar = 30.2;
const euro = 33.6;

const dolarArr = prices5.map((price) => (price / dolar).toFixed(2));
console.log(dolarArr);

const euroArr = prices5.map((price) => (price / euro).toFixed(2));
console.log(euroArr);

//&    filter  meth
//^ belirtilen koşulu dizi içinde sağlayan elemanlarla yeni bir array(dizi) oluşturur - orj'i bozmaz

const prices6 = [100, 200, 300, 400, 50, 70];
const newArr = prices6.filter((price) => price < 250);
console.log(newArr); //[100, 200, 50, 70]

// const names = ['John', 'Jane', 'Robert', 'Susan', 'Steven', 'Katherine', 'Martin', 'Melissa', 'Brian', 'Karen'];
// const newNames = names.filter((n) => n.endsWith('n'))
// console.log(newNames);

const pris = [100, 200, 300, 400, 50, 70];
const pris1 = pris.filter((pr) => pr >= 300).map((inc) => inc * 1.2);
console.log(pris1);

//* n harfi ile bitenleri ayır, her birini ters yazdır. ayrı bir array'e aktar.
const names = [
  "John",
  "Jane",
  "Robert",
  "Susan",
  "Steven",
  "Katherine",
  "Martin",
  "Melissa",
  "Brian",
  "Karen",
];
const newNames = names
  .filter((n) => n.endsWith("n"))
  .map((name) => name.split("").reverse().join(""));
console.log(newNames);

//!   ------------ FORMAR DOCUMENT ÜSTTEKİ GİBİ OLUYOR. GENELDE BU TEMİZ YAZIM ÖNEMLİ --------



//&   reduce  metodu    ->    tek bir eleman döndürüyor. stringte de kullanılabilir / orj'i değiştirmez,  array döndürmez *** değer döndürür.

const maaslar = [42000, 30000, 20000, 17000, 7500];
console.log(maaslar.reduce((toplam, mevcut) => toplam + mevcut, 0));
const yeniToplam = maaslar.reduce((toplam, mevcut) => toplam + mevcut, 20000);
console.log(yeniToplam);

const words = ["Merhaba", " ", "Evren"];

const newString = words.reduce(
  (yeniSonuc, simdiki) => yeniSonuc + simdiki,
  "-!!-   "
);
console.log(newString);

//^bir dizi içindeki çift sayıları bul, *2 yap, bu çarpılanları topla

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sonuc = sayilar
  .filter((num) => num % 2 === 0) // çiftler filtrelendi
  .map((num) => num * 2) // her çift eleman ikiyle çarpıldı
  .reduce((topla, yeniSonuc) => topla + yeniSonuc, 0);
console.log(sonuc);
