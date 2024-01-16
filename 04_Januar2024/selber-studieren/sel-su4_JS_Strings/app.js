let s1 = "Hello ";
let s2 = "World!";
let s3 = s1.concat('js '+ s2);
console.log(s3);

/*

charAt() yöntemi, bir dizede belirtilen dizindeki char değerini döndürür.

➤İlk karakterin indeksi 0, son karakterin indeksi string.length-1'dir.

Ayrıca dize öğelerine erişmek için köşeli ayraç gösterimini [] kullanabiliriz. ES5 ile parantez gösterimi tanıtıldı. Internet Explorer 7 gibi eski tarayıcılarda köşeli parantez gösterimini kullanamazsınız.

*/
let str = "Blarusnay";

console.log(str.charAt(0)); // B
console.log(str.charAt(3)); // r
console.log(str.charAt(str.length-1)); //y

// Also we can use bracket notation `[]` to access the string elements

console.log(str[0]); // B
console.log(str[3]); // r
console.log(str[str.length-1]); //y

let isim = "Süleyman";
console.log(isim[0]);


//   What is the ouput of the following code?
let x = "Alex";
console.log (x.charAt(2)); //2


/*
➤ The includes() method specifies whether a string includes the characters of a specified string.

➤ This method returns true if the characters are in the string, and if not false.
The includes() method is case sensitive.




include() yöntemi, bir dizenin belirtilen dizenin karakterlerini içerip içermediğini belirtir.

➤ Bu yöntem, eğer karakterler dizgedeyse true, değilse false değerini döndürür.
*/

let strng = "Hello John, welcome to Clarusway.";
let t = strng.includes("welcome");
let f = strng.includes("Welcome");

console.log (`t = ${t}`);
console.log (`f = ${f}`);


ad = 'Tayfun'


function message (username) {
    console.log(`Hello ${username}`);
}

let sayHello = message

sayHello("Fs Cohort DE08")


// const msg1 = greet();
// const msg2 = greet2();

// function greet () {
//     return "Hello!"
// }

// const greet2 = function(){
//     return "Hello!"
// };



const m = (n1,n2) =>{
    n1 * n2
}

const r = m(3,5)
console.log(r);


let myName = "Anthony Harold"

myName = myName.slice(8)

myName.toLowerCase()

console.log(myName)