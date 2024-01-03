let ogrenciler = ["çınar" , "yiğit", "ada"]

sonuc = ogrenciler.length

// array to string
sonuc = ogrenciler.toString();  //stringe çevirir


sonuc = ogrenciler.join("-") 
// her eleman arasına "" içindeki karakteri ekleme yapar

// sonuc = ogrenciler.pop();
//* son elemanı siler

// sonuc = ogrenciler.shift();
//* ilk eleman silinir

// sonuc = ogrenciler.push("sena");
//* sona eleman ekler 

// sonuc = ogrenciler.unshift("sena")
//* başa eleman ekler

let markalar1 = ["mazda", "toyota"]
let markalar2 = ["opel", "reanult"]
let markalar3 = ["mercedes"]

// sonuc = markalar1.concat(markalar2, markalar3);
//& iki diziyi birbirine ekler

sonuc = markalar1.splice(0, 1, "bmw", "audi")
//& silme, üzerine yazma, ekleme !!!!! rakamlardan sonra birşey girmezsen sadece silebilirsin


console.log(sonuc);
console.log(markalar1);



// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturun
let meyveler = ["Elma", "Armut", "Muz", "Çilek"]

// 2- Bu dizi kaç elemanlıdır?
console.log(meyveler.length);

// 3- Dİzinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);

// 4- Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma")); // kontrol ... .elemanı mı?   -> true

// 5- Kiraz meyvesini listenin sonuna, karpuzu başına ekleyin.
meyveler.push("Kiraz")
meyveler.unshift("Kavun");
console.log(meyveler);  //['Kavun', 'Elma', 'Armut', 'Muz', 'Çilek', 'Kiraz']

// 6- Dizinin son 2 elemanını silin.
meyveler.pop();
meyveler.pop();
console.log(meyveler);  // 2 tane sildi

//* alternatif olarak;
meyveler.splice(meyveler.length- 2,2)
console.log(meyveler); // 2 tane sildi

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayın.
/*    öğrenci1: yiğit bilgi 2010 (870, 60 80)
/*    öğrenci1: aDA bilgi 2012 (870, 60 80)
/*    öğrenci1: yiğit bilgi 2010 (870, 60 80)
*/


