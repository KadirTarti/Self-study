console.log('Hello World');

/*
String
Number
Boolean
Null
Undefined
BigInt
Symbol
*/

// !  String

const mesaj= 'Dünya'

let str1= 'Merhaba Dünya "22 Aralık"'
let str2= "Merhaba Dünya"
let str3= `Merhaba ${mesaj} `
let str4= new String('Merhaba Dünya')

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);



// !  Number
let num1 = 1
let num2 = 1.2
let num3 = 0.123456789

// the types all of them are NUMBER !


// ! Boolean
//* true ve false değeri verir


console.log(3<2);
console.log(3<2);
console.log(typeof true);
console.log(typeof false);

// ************ falsy değerler ************
/*
  bunlar :  0 , ''  , "", null, undefined
  */

  const arr=[]
  console.log(typeof arr);

    let abc;
    console.log(typeof abc);
    abc = 0
console.log(abc);

  console.log(abc);
  console.log(Boolean(arr)); //true
  console.log(Boolean(0));   //false
  console.log(Boolean(null));
  console.log(Boolean(''));

//   const del = 1
//   del=3 //! hata verir ... const değişmiyor

// ! null
    // pirimitive tipte olmasına rağmen OBJECT'dir. ama sayıyla toplarsan number gibi davranır

console.log(typeof null); // null bir falsy değer
console.log(typeof undefined);

let n = null
console.log(Boolean(n)); //false
console.log(null + 5);

let u;

console.log(Boolean(u));
console.log(u + 5); // NaN - Not a Number
console.log(typeof (u+5)); // tipi ise number

console.log(null == undefined); // true

// null ve undefined biraz karışık. null sayı gibi davranıyor uD davranmıyor. ama eşit mi dediğinde true alıyorsun

let y= u - 5

console.log(typeof y);

console.log(Number('asasf'));
console.log(Number('1293'));

let z = Number('1293')

console.log(isNaN(y));  //true  isNaN NaN tespiti yapar. NaN  ise true, değilse false verir!!
console.log(isNaN(z));  //false
 
console.log(null==null); //false
console.log(undefined==undefined); // false
console.log(NaN==NaN); // false

// !Symbol
    // objelerin property isimleri olrk kullanılabilir

const sym1 = Symbol('Hello')
const sym2 = Symbol('Hello')

console.log(sym1, sym2);
console.log(sym1 == sym2); //false



//***** TYPE CONVERSION && COERCION ****** 

let a = 12      // number
let b = "12"    // string
console.log(a +b); // 1212  string

console.log(a - b); // 0 number
console.log(a / b); // 1 number
console.log(a * b); // 144 number

// !ÇEVİRİ İŞLEMLERİ conversion
console.log(a + Number(b));     // 24  (parse: ayrıştırmak) 
console.log(a + parseInt(b));   // 24
console.log(a + parseFloat(b)); // 24

let c= Number(b)

let d = b

console.log(typeof c);
console.log(typeof d);
console.log(b,c,d);



let e = '123.45'

console.log(parseInt(e));   // 123  - tam sayıyı alır
console.log(parseFloat(e)); // 123.45 - kesirli halde alır
console.log(Math.trunc(e)); // 123  - tam sayı alır

console.clear()

// sayıyı stringe çevirmek için !!
let f = 123.456
let g = '123.456'

let h = f.toString()
console.log(typeof h);

console.log(f); // number - mor renk
console.log(f.toString()); // string - beyaz renk

let i = +g  // bu operatör toplama değil. stringi number'a çevirme yöntemi
console.log(typeof i);

const age1 = prompt('Lütfen Yaşınızı Girin:')
console.log(typeof age1);

const age2 = +prompt('Lütfen Yaşınızı Girin:')
console.log(typeof age2);