
const array = [100, "Selim", true]
const arr = new Array (100, "Salim", true)

console.log(arr);


let arr1 = new Array(10) // array beklerken 10x empty olarak çıktı veriyor
console.log(arr1);


let bosArray = []
console.log(bosArray);


const car = ['Ford', 'Fiat', 'BWM'] // buna bir eleman eklemek için;

car[3] = 'Mercedes'
console.log(car); // ['Ford', 'Fiat', 'BWM', 'Mercedes']

car[2] = 'Audi'
console.log(car);  // const değiştirilemez ama array ile içindeki elemanları değiştirebiliyoruz

car[10] = 'Skoda'  // 10. index'e atıyor. 3 ile 10 arası boş kalıyor.
console.log(car[9]); //undefined


console.log(typeof car);  // yanlış veriyor. array sorgulaması alttaki gibi olacak
console.log(Array.isArray(car));  //true

const x= 0
console.log(Array.isArray(x));  // false

console.log(car instanceof Array); //true
console.log(x instanceof Array);  //false



const meyve = ['Elma', 'kivi', 'portakal']
const meyve2 = ['Elma', 'kivi', 'portakal']

console.log(meyve == meyve2);  //false
console.log(meyve === meyve2);  //false
console.log([] == []);    //false

const meyve3 = meyve
console.log(meyve3 == meyve);
console.log(meyve3);
console.log(meyve);

meyve[3] = 'Armut'
console.log(meyve);   //['Elma', 'kivi', 'portakal', 'Armut']
console.log(meyve3);  //['Elma', 'kivi', 'portakal', 'Armut']


let dob = 2000

let color = 'red'
color='yellow'

const arr2 = [color,2024 - dob, 'Yas']
console.log(arr2);

const arr3 = [color, 'bir', [1,2,3, ['a','b','c','d','e'], true], {}, false]
console.log(arr3);

console.log(arr3[2][3][1]); // array içi elemanlara arka arkaya [] ekleyerek ulaşabiliriz

arr3 [2][4] = arr3
console.log(arr3);


//! ------- ARRAY METODLARI -----------


//&     slice()  metodu  (kesme-arrayden belirli dizindeki elemanı/ları çıkarmaya yarar)

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown']

const colors2 = colors.slice() // parametre vermezsek tümünü kopyalar

// colors[5] = 'Black'  //colors2'yi etkilemez, değiştirmez

console.log(colors);
console.log(colors2);

const colors3 = colors.slice(2) // ['Blue', 'White', 'Brown', 'Black']
console.log(colors3);

const colors4 = colors.slice(2,4)
console.log(colors4);


console.log(colors[-2]);  // undefined verir. negatif indexle direk çağırılmaz

const colors5 = colors.slice(-2)
console.log(colors5); // ['Yellow', 'Brown']


console.log(colors.slice(-4, -1)); //['Green', 'Blue', 'Yellow']
console.log(colors.slice(-1, -4)); // limit dışı ->  boş array döner
console.log(colors.slice(2, -2)); // Blue


//&    push()   metodu  - array'in sonuna eleman ekler ve clg'de yazılırsa eleman sayısını return eder

const farbe = ['Rot', 'Grün']

farbe.push('Blau')
console.log(farbe);  //['Rot', 'Grün', 'Blau']

console.log(farbe.push('Gelb')); // 4


console.log(farbe.push()); // 4 ->  length gibi dizinin uzunluğunu veriyor


const farben = ['Blau', 'Gelb']
farbe.push(farben)
console.log(farbe);  //['Rot', 'Grün', 'Blau', 'Gelb', Array(2)]


let a = ['ali', 'veli']

let b = ['cenk', 'selim']

a.push(...b)   // ççç gelince []'ler olmadan direk eleman olarak ekliyor 
console.log(a); //['ali', 'veli', 'cenk', 'selim']




//&   pop() metodu     -  dizinin son elemanını siler

let c = ['a', 'b', 'c','d']
let d = c.pop() // d
console.log(c); // a, b, c



//& unshift()   metodu    - dizinin başına eleman ekler. yeni dizinin uzunluğunu return eder

let e = ['1', '2']
let newE = e.unshift('3', '4')

console.log(e); // ['3', '4', '1', '2']
console.log(newE); // 4

console.log(e.unshift()); // boş verirsek push gibi dizi uzunluğunu veriyor (length)


//&    shift()   metodu  - dizinin başındaki elemanı siler.

const bastanSilme = ['a', 'b', 'c', 'd']
const silindi = bastanSilme.shift()

console.log(bastanSilme); // ['b', 'c', 'd']
console.log(silindi); //a




let f = ['red', 'blue', 'purple', 'white', 'orange']
let g = f.shift()
let h = f.pop()
f.unshift(h)
f.push(g)
console.log(f);



//&   splice()  metodu  -- eleman SİLMEYE / EKLEMEYE / DEĞİŞTİRMEYE yarar
//^diğer tüm işlemleri bununla yapabiliyoruz
//! splice(x, y, z)   x index numarası, y silinecek eleman, z eklenecek eleman

let j = ['ilk', 'İkinci', 'Üçüncü', 'Dördüncü', 'Beşinci']

j.splice (1,1) // 1.indexe git 1 tane sil

console.log(j);  //['ilk', 'Üçüncü', 'Dördüncü', 'Beşinci]

j.splice(1,1, 'Sonuncu')  // 2.indexe git, 1 eleman sil, 'onuncu' ekle...
console.log(j);   //['ilk', 'Sonuncu', 'Dördüncü', 'Beşinci]




//&    concat()   - stringdeki gibi ekleme metodu  (orj arrayi bozmaz)
//* push ve unshiftten farklı olarak köşeli parantez kullanmadan direk eleman olarak ekliyor

let k = ['1']
let l = ['2']
let m = [k + l]  //    + operatörü stringleştiriyor. array'den çıkarıyor
console.log(m); 

const renk1 = ['Red', 'green']
const renk2 = ['blue', 'yellow']
const renk3 = [ 10, true ]

console.log(renk1.concat(93822, renk2, 223, 'black', renk3)); 
// ['Red', 'green', 93822, 'blue', 'yellow', 223, 'black', 10, true]




//&    indexOf()  and  lastIndexOf()    ->  soldan sağa arar. ilk eşleşen verinin indexini döndürür. ikinci parametre opsiyoneldir. verilirse (ilk parametreyi) aramaya o indexten başlar. bulamazsa (aranan terim array'de yoksa) -1 döner.

const renk4 =['Red', 'Green', 'Blue', 'Green', 'Yellow']
console.log(renk4.indexOf('Green'));  // 1
console.log(renk4.indexOf('Green', 2)); // 3
console.log(renk4.indexOf('green')); // -1   case sensitive


if (renk4.indexOf('green') == -1) {
    renk4.push('green')
    console.log(renk4); // ['Red', 'Green', 'Blue', 'Green', 'Yellow', 'green']   ***sona eklendi***

} else {
    alert(`Bu eleman zaten var!`);
    console.log(renk4);
}




//&        lastIndexOf    ->          sağdan sola arar. İlk bulunanın indexini döndürür. ikinci parametre opsiyoneldir. verilirse (ilk parametreyi) aramaya o indexten başlar. bulamazsa (aranan terim array'de yoksa) -1 döner.


// const renk4 =['Red', 'Green', 'Blue', 'Green', 'Yellow']
console.log(renk4.lastIndexOf('Green'));  // 3
console.log(renk4.lastIndexOf('Green', 2)); // 1
console.log(renk4.lastIndexOf('green')); // 5
console.log(renk4.lastIndexOf('red')); // -1




//& reverse   - elemanların sırasını sondan başa doğru değiştirir




//& join     - array in tüm elemanlarını verilen seperatöre göre stringe çevirir (''), ('*'), ('_')



//&    sort   - array'in elemanlarını ascii ye göre tekrar sıralıyor.