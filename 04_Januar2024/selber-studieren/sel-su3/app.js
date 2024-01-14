function sayHello () {
    let msg = 'hello world'
    return msg
}
sayHello()

let selam = sayHello()
console.log(selam);  //undefined
//! fonksiyonu çağırmazsan içine yazdıkların görünmyüor!


function square () {
    let num = 2
    let sq = num * num
    console.log(sq);
}
square()
//! clg burada çalışmıyor. sonucu (square) bir let'e atayıp o let i yazdırıyoruz 


function multiply (num1, num2) {
    return num1 * num2
}

let total = multiply (5, 2)
console.log(total);







// function sumArrayValues(array) {
//     console.log(array);
// }
// let dizi = [2, 4, 6, 8, 10]
// sumArrayValues(dizi)

//^    |  
//^    v

total = 0;
function sumArrayValues(array) {
    for (let i = 0; i< array.length; i++) {
    total += array[i] 
    }
    return total 
}
let dizi1 = [2, 4, 6, 8, 10]
console.log('toplam', sumArrayValues(dizi1));



function topla () {
    let total= 0
    for ( let i = 0; i< arguments.length; i++)
    total += arguments[i]
    console.log(total);
}
topla (2, 5, 7, 8, 9, 10)  //! normalde burada yazdıklarımı üstteki parantezde n1 n2 n3 gibi tanımlıyorduk. Fakat ****arguments**** parametresi ile bunu yapmak yerine arguments.length kullanarak üstteki tanımlamayı yapmadan işlemi yapabiliyoruz.


function asalSayiler(){
    let asal= 0;
    for (let i = 0; i < arguments.length; i++)
    asal += arguments[i]
    console.log(asal);
}
asalSayiler(2,3,5,7,11,13,17,23,29,31)

function onluk (){
    let top= 0
    for (let i = 0; i< arguments.length; i++)
    top += arguments[i]
    console.log(top);
}
onluk (10,20,30,40,50)


//&  --------    ANONYM FUNC !!!   -------------

const sagHallo = function (name) {
    return `Hallo ${name}`
}
console.log(sagHallo('Abdulkadir'));


//& ----------- kendi kendini çağıran fonksiyon  --------

(function() {
    console.log(`bu bir kendini çağıran fonksiyondur`);
})()


//! örnek ****************************************
let sayBro = (function(name) {
    console.log(`Bro ${name}`);
})(`Cenk`)


function NORMAL(isim){
    return `Merhaba ${isim}`
}

//!   arrow
const ARROW = isim => `Merhaba ${isim}`  //! kısa kullanım !!!
console.log(ARROW('Mehmet'));


const bilgi = (ad, soyad) => `Merhaba ${ad} ${soyad}` 
console.log(bilgi('Selim', 'Başar'));





//!    arrow rest operator ***numbers***

const toplama = (num1, num2, ...numbers) => {  //*num1 ve 2den kalanları rest operatörüğ olan numbers ile yazdırdık
    console.log(numbers);
    console.log(num1, num2);
}
toplama(2, 5, 6, 7, 8, 9)