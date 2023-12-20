// ******************  GLOBAL & LOCAL scope *****
//!normal-direk yazış "GLOBAL ALAN" olarak adlandrılıyor

ad=("Abdulkadir")
degiskenAdi=(ad)
console.log(degiskenAdi)

{
    //!burası LOCAL alan... süslü parantez içi
    console.log("bu alan local alan")
}








//  ******************  VAR kullanımı ****
// !var kullanımı ES&'dan sonra baya azaldı. onun yerine let ve const kullanılıyor.'
// var (variable) ->  değişken tanımlama türü: her alandan ulaşılabilir ve değiştirilebilir
var x=5
x=15
console.log(x)

{
    console.log("local alandayım");
    x=45
    console.log(x);
}

console.log(x*5);
//!üstteki durumda uzun bir kodda iki ayrı x değerinden dolayı 1 tanesini alabiliyoruz.











//  ******************  CONST kullanımı ****
// ingilizce constant (sabit) kelimesinden geliyor. 

const pi=3.14
console.log("Global alanda pi değeri: " +pi); // log yazarken cümleleri bağlamak açısından + ile , aynı şeyi ifade ediyor.

//2'nin üstleri
const sayi1=2
const sayi2=4
const sayi3=8
const sayi4=16
const sayi5=32
const sayi6=64
//kodlar aşağıya indikçe bu sayi1,2,3...'lere farklı bir değer atarsak hata alırız.
   {
       const pi=3
       console.log("Local alanda pi'yi tekrar tanımlamak istersek pi'yi üste yazmamız gerekli: " +pi);
       // !    eğer pi'yi localde üste değil de bu satıra yazsaydık hata verecekti!
   }

console.log(pi); //burada local alan kapandığı için global'deki değeri yazdırıyor! fakat pi'yi var ile yazsaydık localdekini alacaktı.




//  ******************  LET kullanımı ****
//  const'ta tanım değişmiyordu. let'te tanımlanan değer değişiyor.. (var variable'ı gibi)...

// const sayi=15
// sayi=33  //burada const değişmez hatası veriyor.


let toplam=22
toplam=19+21
console.log(toplam);  //! let'le tanımlı değeri hemen değiştirip devam edebiliyorsun. hata vermiyor. const hata veriyor. Bir kere tanımlayabilirsin diyor. Local'de yazarsak onu alıyor  son değer olarak.

// önemli
// !sadece YERELDE tanımlanana let GLOBAL'den erişilemiyor!