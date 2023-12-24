//* Console'dan girilen bir sayının pozitif,negatif ya da 0 olduğunu tespit ederek yazdırınız.

/*

let sayi = +prompt("Lütfen bir sayı giriniz: ") 

if (sayi==0) {
    console.log("Bu sayı sıfırdır");
} else if (sayi > 0) {
    console.log("Bu sayı pozitiftir");
} else 
    console.log("Bu sayı negatiftir")

    console.clear()

*/

// !----------------------------------------------

    //*    Console'dan3 tamsayı alarak bunların en büyüğünü yazdırınız.

/* 
 
    let sayi1 = +prompt('İlk sayıyı girin: ')
    let sayi2 = +prompt('İkinci sayıyı girin: ')
    let sayi3 = +prompt('Üçüncü sayıyı girin: ')

    if (sayi1>sayi2 && sayi1>sayi3) {
        console.log("En büyük sayı: " + sayi1);
    } else if  (sayi2>sayi1 && sayi2>sayi3) {
        console.log("En büyük sayı: " + sayi2);
    } else if  (sayi3>sayi1 && sayi3>sayi2) {
        console.log("En büyük sayı: " + sayi3);
    }


*/


// !--------------------------------------


//* 4 İşlem hesap makinesini yazınız (2 adet sayiiçin)


/*

// ilk sayıyı alın
let num1 = parseFloat(prompt("İlk sayıyı giriniz :"));

// İşlemi seçin
let operation = prompt("İşlem türünü giriniz (+, -, *, /):");

// ikinci sayıyı alın
let num2 = parseFloat(prompt("İkinci sayıyı giriniz :"));

// İşlem
let result;

switch (operation) {
   case "+":
       result = num1 + num2;
       break;

   case "-":
       result = num1 - num2;
       break;

   case "*":
       result = num1 * num2;
       break;

   case "/":
       if (num2 !== 0) {
           result = num1 / num2;
       } else {
           alert("Lütfen sıfır dışında bir rakam girin!");
       }
       break;
   default:
       alert("Geçersiz İşlem!");

}
// Print the result
console.log(`The result of ${num1} ${operation} ${num2} is ${result}.`);




*/

// !----------------------------------------

/*
Clarusway’dekihaftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-caseyapısı ile yazınız.
Program
Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
Cuma -> Teamwork
Cumartesi -> InClass+ Workshop
•
Pazar -> Self-Study
•
Aksi takdirde -> Yanlisgungirildi.*/


// ! prompt önüne artı gelirse her zaman numara olarak algılıyor. Bunu clg içinde birşey yazdırıken önüne + getirerek de yapabilioyoruz

/*
let gun = prompt("Lütfen gün giriniz").toLowerCase();
switch (gun) {
    case "pazartesi":
    case "sali":
    case "carsamba":
    case "persembe":
       console.log("InClass");
       break;

    case "cuma":
       console.log("Teamwork");
       break;

    case "cumartesi":
      console.log("InClass + Workshop");
      break;

    case "pazar":
       console.log("Self-Study");
       break;

    default:
        console.log("Yanlis gun girildi.");
}

console.log(typeof(+"100"));
console.log(typeof(+"12.34"));
console.log(typeof(+true));
console.log(typeof(+false));
*/


 //* Girilen nota göre Geçtiveya Kaldıyazdıran programı yazınız. Geçme notunu 50olarak kabul edebilirsiniz.

 /*
 let not = parseFloat(+prompt("Notunuzu girin: "));

 let sonuc = not < 50 ? "Kaldı" : "Geçti";

console.log(sonuc);
*/



/* //* Girilen nota göre Kaldı, Şartlı Geçti veya Geçtiyazdıran programı yazınız.

Not < 40 ise Kaldı

Not 40-50 arası Şartlı Geçti

Not > 50 ise Geçti
*/

/*

let not = parseFloat(+prompt(`Notunuzu Girin :`))

    if (not < 40) {
        console.log(`kaldı`);

    } else if (not >= 40 && not <= 50) {
        console.log(`Şartlı Geçti`); 
    
    } else if (not <= 100) {
        console.log(`Geçti`); 
    } else {
        console.log(`Geçersiz bir not girdiniz`);
    }
*/

// !------------------------------

/*
Console’dan kişinin maaşını alan 
    -Eğer girilen maaş asgari ücretten az ise maaşa %50 zam
    -Aksi takdirde %10 zam
yapan kodu Ternary deyimi kullanarak yazınız.
*/

/*

let maas = +prompt(`Maaşınızı girin :`);
let asgari = 1500;
let zamMiktari = maas <  asgari ? (maas*0.5) : (maas*0.1);
console.log(`Zam miktarı ${zamMiktari} Euro'dur`);

*/
// !--------------------------------------

/* Console’dan kişinin gelir ve gider miktarını alan
 -eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir
-değilse Kredi Verilemez🥺
şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
*/


/*
let gelir = +prompt(`Lütfen gelirinizi girin: `)
let gider = +prompt(`Lütfen giderinizi girin: `)
let asgariUcret = 1500
let kredi = (gelir - gider) > asgariUcret ? `Kredi Verilebilir` : `Kredi verilemez`
console.log(kredi);
*/

// !-----------------------------------

/*
•Soru-1:Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
•0-25 arası not karşılığı FFolmalı
 26-45 arası DD,
 46-65 arası CC,
 66-75 arası BB,
 76-90 arası BA,
 91-100 arası AA olarak çevrilmelidir.
•100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.
*/


/*
let not = prompt(`Notunuzu girin: `)

let harfNotu;

switch (true) {
    case not >= 91 && not <=100:
        harfNotu = "AA";
        break;
    case not >= 76 && not <= 90:
        harfNotu = "BA";
        break;
    case not >= 66 && not <= 75:
        harfNotu = "BB"
        break;
    case not >= 46 && not <= 65:
        harfNotu = "CC"
        break;
    case not >= 26 && not <=45:
        harfNotu = "DD"
        break;
    case not >= 0 && not <= 25:
        harfNotu= "FF"
        break;
        default: alert(`Lütfen sadece 0-100 arasında bir değer girin`);
}
console.log(`Notunuzun harf notu olarak karşılığı: ${harfNotu}`);
    

*/

//*Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.

let ay = prompt(`Lütfen bir ay ismi girin: `)
let girilenAy;

switch (ay.toLocaleLowerCase) {
    case "ocak":
    girilenAy = 1
    break;
    case "subat":
    girilenAy = 2
    break;

    case "mart":
    girilenAy = 3
    break;

    case "nisan":
    girilenAy = 4
    break;

    case "mayis":
    girilenAy = 5
    break;

    case "haziran":
    girilenAy = "Sıra6"
    break;

    case "temmuz":
    girilenAy = "Sıra7"
    break;

    case "agustos":
    girilenAy = "Sıra8"
    break;

    case "eylul":
    girilenAy = "Sıra9"
    break;

    case "ekim":
    girilenAy = "Sıra10"
    break;

    case "kasim":
    girilenAy = "Sıra11"
    break;

    case "aralik":
    girilenAy = "Sıra12"
    break;

    default: alert(`Lütfen ay ismini doğru ve Türkçe karakter kullanmadan yazdığınızdan emin olun`)
}

console.log(`Girdiğiniz ayın sıra karşılığı ${girilenAy}'dır`);


