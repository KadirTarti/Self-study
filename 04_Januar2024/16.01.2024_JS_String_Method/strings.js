
// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//&   1-   klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1 = "mercedes" 
const str2 = "hallo" 
const str3 = "an alle" 

console.log(str1+str2, typeof(str1+str2));  //^type : string


//&   2-   String constructur ile tanımlanan String, non-primitive'dir (ilkel olmayan)
const str4 = new String ("yeni bir string")
console.log(typeof str4);  //^ type : object



//* ---------------------------------- */
//*              INDEXLEME             */
//* ---------------------------------- */

let course = "kanaruskey"
console.log(course[0]);  // ilk harf
console.log(course[9]);  // son harf
console.log(course.length);

//! ************STRING METHODS ************
// String metodları () kullanılır. 
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.


//^     1-  concat metodu  (immutable = orjinal değeri değiştirmez)

const w1 = "bu method"
const w2 = " value'leri birleştiriyor"
console.log(w1.concat(w2));
// üstteki satırdan sonra w1 veya w2 değişmedi. değişmesi için o içeriği yeni bir değişkene atama yapmak lazım
//* assigning !!


//^     2-   toLowerCase() toUpperCase() immutable=değiştirmez
// toLocaleUpperCase("tr")= Türkçe olarak kelimeyi büyüt demek



//^     3-  isEqual Metodu
//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.
const isEqual=(str1,str2)=> str1==str2.toLocaleUpperCase("tr")?"eşittir":"eşit değildir"

console.log(isEqual("İSMET","ismet"));
console.log(isEqual("ISMET","ismet"));


//^     4- charAt()
// harflerin indexini döndürüyor
const a1 = "primitive \n\t\t\t veri tiplerinin \n\t property \n ya da metodu olmaz!"
console.log(a1);

console.log(a1.charAt(5)); //t
console.log(a1.charAt(a1.length-1)); //!


//^    5- includes metodu 
//!(BU ÖNEMLİ. SIK KULLANILACAK  !!)
const kelime = "to be or not to be, that is The question."

//includes ile bu harfler-kelime-içerik... değişkjende var mı diye aratıyoruz 

console.log(kelime.includes("TO BE")); //false
console.log(kelime.toUpperCase().includes("TO BE")); // true
console.log(kelime.includes("to be")); //true
console.log(kelime.includes("quest")); //true
console.log(kelime.includes("to be", 14)); //2.to be den sonra to be var mı diye sorguladı /false


//^    6- indexOf - case sensitive - harf ya da kelimenin indexini gösterir
const kelime1 = "to be or not to be, that is the question"
console.log(kelime1.indexOf('be'));  // ilk 'be'   -> 3
console.log(kelime1.lastIndexOf('be'));// son 'be' -> 16
console.log(kelime1.indexOf('qwerty')); // olmayan karakterlerde hep -1 döndürür

console.log(kelime1.indexOf('be', 4)); // 4.indexten itibaren be var mı, hangi indexte diyoruz... 16 döndürüyor
console.log(kelime1.indexOf('be', kelime1.indexOf('e') )); // bu üstteki ile aynı


//^     6- search  (regex - regular expression)
const kelime2 = "to be or not to be, That is 8 the Question"

console.log(kelime2.search(/[A-Z]/));  // ilk büyük harfin indexini döndürür
console.log(kelime2.search(/[a-z]/));  // ilk küçük harfin indexini döndürür
console.log(kelime2.search(/[0-9]/));  // ilk rakamın indexini döndürür ***28***
console.log(kelime2.search(/[1-7]/));  // ilk rakamın indexini döndürür ***-1***

console.log(kelime2.search(/[^a-z]/)); // harfler dışı karakterleri arar.. burada space'i buldu
console.log(kelime2.search(/[^0-9a-zA-Z]/)); // rakamlar, küçük-büyük harfler dışı karakterleri arar.. burada space'i buldu
console.log(kelime2.toLocaleUpperCase().search(/[aeıioöuü]/i)); //? i = incasesensitive... büyük küçük takılmadan döndür.


//^     7- startsWith(), endsWith()  -- case sensitive    [baslıyor mu?, bitiyor mu?]
const kelime3 = "JavaScript ist eine Programmiersprache, die Entwickler verwenden, um interaktive Webseiten zu erstellen."
console.log(kelime3.startsWith('java')); //false
console.log(kelime3.startsWith('script')); //false
console.log(kelime3.startsWith('Jav')); // true
console.log(kelime3.endsWith('erstellen')); // false .. çünkü nokta yok
console.log(kelime3.endsWith('erstellen.')); // true
console.log(kelime3.endsWith('sprac', 36)); // 36. index sprach ile bitiyor --->  true
console.log(kelime3.startsWith('wick', 47 )); // 47.index wick ile başlıyor --->  true


//^     8-  replace (searchFor, replaceWith)  -- [immutable - değiştirmez]
let oku = "Doğru söyleyeni otuz köyden otuz kere kovarlar"

oku = oku.replace("otuz", "dokuz")
console.log(oku);

console.log(oku.replace(/OTUZ/i, "on bir"));
console.log(oku.replace(/otuz/gi, "elli"));


//^     9-  slice metodu (beginIndex, endIndex)
const veysel = "UZUN İNCE BİR YOLDAYIM GİDİYORUM GÜNDÜZ GECE"
console.log(veysel.slice(10)); // 10.indexten itibaren yazdırmaya başlıyor
console.log(veysel.slice(17,21)); // 17-21 arasındaki karakterleri yazdırır
console.log(veysel.slice(-11)); // gündüz gece
console.log(veysel.slice(-4)); // gece

console.log(veysel.substring(veysel.length-3)); //aynı yazım
console.log(veysel.substring(17,21)); // DAYI.... üstteki ile aynı çıktıyı veriyor
console.log(veysel.substring(-10)); // bu farklı çalışıyor. hepsini yazdı



//^     10-  split metodu  (string'i array'e-diziye çevirir)


const tarkan = "Gel gündüzle gece olalım";

console.log(tarkan.split());   // hepsini tek bir dizi elemanı yaptı
console.log(tarkan.split(" "));  // boşluklardan ayırdı. 4 ayrı dizi elemanı var
console.log(tarkan.split("")); // hiçlikten ayır dediğimizde hepsini birbirinden ayırdı 24 eleman ortaya çıkardı
console.log(tarkan.split("e")); // e'harflerinden ayırdı.. 5 elemanlı bir dizi yaptı
console.log(tarkan.split("e", 2)); // e'harflerinden ayırdı..İLK İKİ ELEMANI ALIP bir dizi yaptı