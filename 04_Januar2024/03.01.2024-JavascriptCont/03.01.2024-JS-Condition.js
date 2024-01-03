//! Ternary yazımı
/*
 const age = 12
 const gender = "erkek"
 const health = true

 if(age>=20 && gender == "erkek" && health==true){
    console.log(`askerlik yapabilir`);
 } else{
    console.log(`askerlik yapamaz`);
 }

 //! ternary ile yazılmış hali
 age>=20 && gender == "erkek" && health == true ? console.log(`askerlik yapabilir`) : console.log(`askerlik yapamaz`);

 //& example

//  const grade1 = prompt(`please enter your grade`)

//  grade1>=50 ? console.log(`Success!`) : console.log(`Fail`);

//  const score1=grade1>= 50 ? "SUCCESS" : "" 
//  console.log(score1);
 //  ? kullanınca : mutlaka kullanmalı ve en azından hiçlik ataması yapılmalı




 //* ancak şu işlemle tek taraflı işlem yapabiliyoruz.
 //! ----------------------------------------------------------------
//  const score2= grade1>= 50 && "Başarılı"
//  console.log(score2);
 
 // JS'te veya React'ta sık kullanılan bir yapı... örneğin butona tıklanınca sayfanın açılması için BUTON && yazıp div ve nested elemanları yanına yazıyoruz!
 //! ----------------------------------------------------------------




const speed = 30

speed > 120 ? console.log("Speedy!") : [speed>=90 ? console.log("Normal") : console.log("Low Speed!")];


const number1 = +prompt(`1.sayıyı giriniz`)
const operation = prompt(`+,-,*,/ işlemlerinden birini giriniz` )
const number2 = +prompt(`2.sayıyı giriniz`)

let sonuc;

switch (operation) {
    case "+":
        sonuc= number1+number2
        break;

        case "-":
            sonuc= number1-number2
        
        break;

        case "*":
            sonuc= number1*number2
        
        break;

        case "/":
            if (number2!=0)
            sonuc= number1/number2
        else alert(`payda sıfır olamaz`)
        
        break;

    default:
        alert(`yanlış işlem girdiniz`)
        break;
}

console.log(`${number1} ${operation} ${number2} = ${sonuc}`);


//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

let maas= +prompt(`Lütfen Maaşınızı girin`)
let borc= +prompt(`Lütfen borcunuzu girin`)

let kredi;

kredi = (maas*10) - borc > 5000 ? console.log(`kredi alabilirsiniz 🥳 `) :  console.log(`kredi alamazsınız😥`) 

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

//* 3 numara alın ve en büyüğünü tespit edin...

let n1 = nummer1
let n2 = nummer2
let n3 = nummer3

let biggest = n1

if (n2>biggest) {
    biggest = n2
}
if (n3>biggest){
    biggest = n3
}
console.log(biggest);


*/


let not = prompt(`Notunuzu girin: `)

let hARfnotu;

switch (true) {
    case not >= 91 && not <=100:
        hARfnotu = "AA";
        break;
    case not >= 76 && not <= 90:
        hARfnotu = "BA";
        break;
    case not >= 66 && not <= 75:
        hARfnotu = "BB"
        break;
    case not >= 46 && not <= 65:
        hARfnotu = "CC"
        break;
    case not >= 26 && not <=45:
        hARfnotu = "DD"
        break;
    case not >= 0 && not <= 25:
        hARfnotu= "FF"
        break;
        default: alert(`Lütfen sadece 0-100 arasında bir değer girin`);
}
console.log(`Notunuzun hARf notu olarak karşılığı: ${hARfnotu}`);