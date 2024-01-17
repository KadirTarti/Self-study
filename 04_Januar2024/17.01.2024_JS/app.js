let str = "Hallo alle"

let uzunluk = (str) => {
    return str.length
}

console.log(uzunluk(str));


// for (let i = 0; i<=uzunluk(str)-1; i++) {
//     console.log(str[i]);
// }


//& String.prototype.charAt()        Returns the character (exactly one UTF-16 code unit) at the specified index.

let lorem = `JavaScript ist eine Programmiersprache, die Entwickler verwenden, um interaktive Webseiten zu erstellen. Von der Aktualisierung von Social Media Feeds bis hin zur Anzeige von Animationen und interaktiven Karten können JavaScript-Funktionen die Benutzerfreundlichkeit einer Website verbessern. Als clientseitige Skriptsprache ist sie eine der Kerntechnologien des World Wide Web. Wenn Sie zum Beispiel im Internet surfen und ein Bildkarussell, ein Dropdown-Menü zum Anklicken oder dynamisch wechselnde Elementfarben auf einer Webseite sehen, sehen Sie die Auswirkungen von JavaScript.`

console.log(lorem.length);
console.log(lorem[200]);
console.log(lorem.charAt(20));

if (lorem.charAt(20) == 'P') {
    console.log('yes');
    } else {
        console.log('no');
    }



//& String.prototype.charCodeAt()   Returns a number that is the UTF-16 code unit value at the given index.

let lorem2 = `Früher waren Webseiten statisch, vergleichbar mit den Seiten eines Buches. Eine statische Seite zeigte hauptsächlich Informationen in einem festen Layout an und erfüllte nicht alles, was wir heute von einer modernen Website erwarten.`

//* karakterlere unicode ile erişir.
console.log(lorem2.charCodeAt(0));    // F
console.log(lorem2.charCodeAt(232));  // nokta

// sezar şifrelemesi. String alacak ve ikinci parametre sayı olacak. O sayı kadar kaydırma yapacak


let kod = (kelime, kaymaSayisi) => {
    let result = ``
    for (let i = 0; i< kelime.length; i++){
        chippedText = kelime.charCodeAt(i)+kaymaSayisi
        result += String.fromCharCode(chippedText)
    }
    console.log(result);
}
console.log(kod('Hello World', 1));


// şifreli bir metin ve sayı alarak text şifresini çözeceğiz
let sezar = (kelime, rakam) => {
    let result = ``
    for (let i = 0; i<kelime.length; i++){
        chippedText = kelime.charCodeAt(i)-rakam
        result += String.fromCharCode(chippedText)
    }
    console.log(result);
}
console.log(sezar('Ifmmp!Xpsme', 1));


//& String.prototype.concat()       Combines the text of two (or more) strings and returns a new string.
// birleştirme metodu.. + ile aynı işlev


//& String.prototype.endsWith()       Determines whether a string ends with the characters of the string searchString.
// boolean dönüyor.     startsWith - endsWith  ->  ture veya false dönüyor


//& String.prototype.indexOf()          Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

let yazi = "Mit der Weiterentwicklung der Sprache etablierten JavaScript-Entwickler Bibliotheken"
console.log(yazi.indexOf('als')); // 247. index
console.log(yazi.indexOf('XYS')); // -1   ... metinde yok


function harfler(yazi, rakam) {
    let index = yazi.indexOf("e", rakam);
    
    if (index === -1) {
        return;
    } else { 
        return [index].concat(harfler(yazi, index +1));
    }
 }
 let harfIndex = harfler(yazi, 1);
 console.log(harfIndex);



//& String.prototype.includes()    - içinde bu ifade var mı diye bakıyor


let yazi2 = "Mit der Weiterentwicklung der Sprache etablierten JavaScript-Entwickler Bibliotheken"
console.log(yazi2.includes('deR'));  //false
console.log(yazi2.includes('der'));  //true


let email = "abc@xyz.com"

if (email.includes('@')){
    console.log('Please enter your password!');
} else {
    console.log('Invalid email!');
}




//& String.prototype.lastIndexOf()       Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

console.log(yazi.lastIndexOf('e'));  // sondan ilk e nin indexini gösterir




//& String.prototype.slice()              "Yazıdan bir bölümü yeni bir string olarak çıkartmaya yarar"         Extracts a section of a string and returns a new string.

let yazi3 = "Mit der Weiterentwicklung der Sprache etablierten JavaScript-Entwickler Bibliotheken"

let lrm = yazi3.slice()    // slice ile parantez boş bırakılırsa aynı metin kopyalanmış olur!
console.log(lrm);

let lrm3 = lrm.slice(lrm.indexOf('der'), lrm.indexOf('der')+21)  // lrm.slice(4,25)
console.log(lrm3);
console.log(lrm.slice(25, -12));



//& String.prototype.substring()        Returns a new string containing characters of the calling string from (or between) the specified index (or indices).
// slice ile aynı... fakat - değer kabul etmiyor ve ilk değer büyükse de küçüğü ilk baz alıyor


//& String.prototype.localeCompare()  Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.
// girilen karakterlerden hangisinin önce geldiğini gösteren/karşılaştırma yapan metod
console.log('can'.localeCompare('ban')); 




//& String.prototype.trim()    .trimStart()    .trimEnd()    Trims whitespace from the beginning and end of the string.


//? kredi kartı maskeleme örneği 
// const creditCardNumber = '1234-5678-9012-3456';

const creditCardNumber = (numbers) => {
    return numbers.replace(numbers.slice(7, 14), "******").replaceAll("-", "");
     };
console.log(creditCardNumber("1234-5678-9012-3456"));


//^split()

let a = '1234-5678-9012-3456';
let b = a.split('-')
console.log(b);



//& destructuring assignment (birbirine atama)
let x = 3;
let y = 5;

[x,y] = [y,x]

console.log('x', {x});
console.log('y', y);


// String.prototype.match()
// Used to match regular expression regexp against a string.

// String.prototype.repeat()
// Returns a string consisting of the elements of the object repeated count times.

// String.prototype.replace()
// Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

// String.prototype.search()
// Search for a match between a regular expression regexp and the calling string.




let arr1 = ['b', 'd','c','a']
 console.log(arr1.sort())

 //Output ['a', 'b', 'c', 'd']

let arr2 = ['a', 'b','c','d']
console.log(arr2.join(''))





// String.prototype.split()
// Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

// String.prototype.startsWith()
// Determines whether the calling string begins with the characters of string searchString.

// String.prototype.substr() Deprecated
// Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.


// String.prototype.toLocaleLowerCase()
// The characters within a string are converted to lowercase while respecting the current locale.

// For most languages, this will return the same as toLowerCase().

// String.prototype.toLocaleUpperCase()
// The characters within a string are converted to uppercase while respecting the current locale.

// For most languages, this will return the same as toUpperCase().

// String.prototype.toLowerCase()
// Returns the calling string value converted to lowercase.

// String.prototype.toString()
// Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.

// String.prototype.toWellFormed()
// Returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.



// String.prototype.valueOf()
// Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

// String.prototype[@@iterator]()
// Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.