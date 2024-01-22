/*
Array Methods!
pop()       ->  dizinin son elemanını siler
shift()     ->  dizinin ilk elemanını siler
push(x)     ->  dizinin sonuna x ekler
unshift(y)  ->  dizinin başına y ekler
reverse()   ->  diziyi tersine çevirir
splice()    ->  3 parametre alır (x, y, z)  x başlangıç indexi | y kaç elemana etki edilecek  |  z eklenecek değer
sort()      ->  sıralama yapıyor (ascii değerlerine göre yapıyor)
                sort metodunda number'larda karışıklık olmaması için   |||   sort((a-b) => a-b)    |||   kullanılıyor
includes(a) ->   a'yı içeriyor mu sorgulaması yapar
indexOf(b)  ->  b'nin kaçıncı indexte olduğunu gösterir
join(' ')   ->  parantez içine konulan değeri dizideki elemanalrı o değerle birleştirerek stringe çevirir. '_' , ' ',  '*',
split()     ->  string'i array'e dönüştürür 
slice()     ->  diziden bir parçayı almamızı sağlar
concat()    ->  + yerine geçer. birleştirir
every       ->  dizideki her eleman için bir callback (geriye değer döndüren) function çalıştırır. bundaki şartı kontrol eder. tüm elemanlar şartı sağlarsa ***true*** döner

const.numbers = [23, 17, 55, 39]
numbers.every((num) =>  num>18)  // false - çünkü 17 şartı sağlamıyor
numbers.every((num) =>  num>16)  // true

some        ->  every ile aynı. ama bir eleman şartı sağlıyorsa ***true*** döndürür. False döndürmesi için hiçbirinin şartı sağlamaması lazım.

*/
/***************************************************************************************************************************

map      ->  bir dizi için bir callback-function çalıştırır ve her eleman için çıkan sonucu yeni bir diziye aktarır
forEach  ->  bir dizi için bir callback-function çalıştırır. yeni bir dizi oluşturmaz
filter   ->  bir dizi için bir callback-function çalıştırır. sadece koşulu sağlayanları döndürür
reduce   ->  dizideki elemanlara verilen işlemi yapıp tek elemanlı sonuç döndürür 
*/
//^*************************************************************************************************************************

//? Dizideki elemanların ortalamasını bulan fonksiyon

const numbers = [34, 56, 56, 87, 90]
const ortalama = numbers.reduce((toplam, eleman) => toplam + eleman, 0) / numbers.length;
console.log(ortalama);




//? Verilen cümledeki kelime sayısını fonksiyonla bulalım

sentence = "Merhaba Cohort DE-08"
const sumLetters = sentence.split(/\s+/).length;
console.log(sumLetters);




//? üstteki cümleyi tersten yazdır, büyük harfe çevir

let yeni = sentence.split(/\s+/).reverse().join(' ').toUpperCase()
console.log(yeni);




 //!Size bir cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir: 
//? "[Clarusway'i bulduğunuz kelimenin sırası] 'nda Clarusway'i buldum!"
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

function findWord (x) {
   if (x.toLowerCase().includes("clarusway")) {
    return `I found at Clarusway at ${x.indexOf(('clarusway'))}`
   } else {
    return `I can't find Clarusway :(`
   }
}
console.log(findWord('Bu bir clarusway soru örneğidir'));


//& başka bir çözüm
const findClarusway = (sentence) => {
    let index = sentence.split(" ").indexOf("Clarusway");
    return index !== -1 ? `I found Claruswat at ${index+1}!`: "I can't find Clarusway";
   }
   console.log(findClarusway("I like Clarusway"));



// //? Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//* 612453789   bu hale dönüştüren kod
const nums = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"

function convertToNumber(text) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  // toLowerCase() and remove items
  const lowerCaseText = text.toLowerCase().split(",");
  // string to number
  const result = [];
  for (let value of Object.values(lowerCaseText)) {
    let stringToNum = numberMap[value];
    result.push(stringToNum);
  }
  return result;
}
const textNumber = "six,one,two,four,five,three,seven,eight,nine";
console.log(convertToNumber(textNumber));






//? Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 

// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

//! incele

const inputArray = [1, 0, 1, 0, 1];
const inputArray2 = ["the", "small", "cat", "the", "cat"];
function removedDuplicated(arr) {
  let uniqueArray = [];
  arr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
}
console.log(removedDuplicated(inputArray)); // Output [1,0]
console.log(removedDuplicated(inputArray2)); // ouput["the","small","cat"]





//? Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 
const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

const newFruits = words.filter((a) => a.startsWith("A"))
console.log(newFruits);


//! filter metodu ile bir arrayde verilen maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300]

let under20k = salaries.filter((salary) => salary * 1.1 <20000).length
console.log(under20k);


//& bu metodsuz çözüm... üstteki ideal
function plan (odeme) {
  if (odeme>20000) {
    return `${odeme} zaten 20.000'den fazla`
  } else if (odeme+(odeme*0.1) > 20000) {
    return `%10 zamlı 20.000 üzerine geçen maaş: ${odeme+(x*0.1)}`
  } else {
    return `%10 zama rağmen 20.000'in altında: ${odeme+(odeme*0.1)}`
  } 
}
console.log(plan(18000));


//b- 20 binin altında kalanları 20000 e tamamlayacak. Fakat ne kadar bütçe gerekli? bul



let zam = salaries.map((salary) => {
  let increased = salary * 1.1  
  return increased < 20000 ? 20000-increased : 0
})
console.log(zam);

let totalPayment = zam.reduce((sum, payment) => sum + payment, 0)
console.log(totalPayment);