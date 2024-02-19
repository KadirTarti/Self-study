/!* ---------------------------------- */
//!            POLIMORPHISM            */
//!---------------------------------- */

//*Bir tek metot adıyla, birden çok farklı metotları koşturma özeliğine, java'da polymorphism denir. Şu önemli özeliği biliyoruz. Bir üst sınıfın referansı (işaretçi, pointer) bir alt sınıfa ait nesneyi işaret edebilir. Java, bu özelliği kullanarak, run-time aşamasında hangi overridden metodu seçmesi gerektiğini bulur.

// ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//         (kalıtım,miras)ve(çok biçimlilik)=============================================

//& Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
    constructor (a,b,c) {
    this.title=a
    this.author=b
    this.year=c
    this.summaryFunction = function(){   
        return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır.`
    };
  }
    yilHesapla () {
        return 2024-this.year
    }
};

//! OVERRIDING  - geçersiz kılma!

class Dergi extends Book {
    constructor (title,author,year,month) {
        super (title, author, year)

        this.month = month
        //! overriding yaptığımız fonksiyon:
        this.summaryFunction = function(){
            return `${this.author} wrote the book ${this.title} in ${this.year}`
        }
    }

    //& overriding yapılan fonksiyon
    yilHesapla(){
        return `${this.title} kitabının yılı bilinmemektedir`
    }
}

const yeniKitap = new Dergi('stienific essays', 'Einstein', 1900, 'july')
console.log(yeniKitap.summaryFunction());

console.log(yeniKitap.yilHesapla())






//!OVERLOADING  -  aşırı yükleme
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 

function arg (arg1){
    console.log(arg1);
}

function arg (arg1, arg2, arg3){
    console.log(arg1,arg2,arg3);
}


arg('naber?')  // naber? undefined undefined  - çünkü ilki ezildi. 2 argüman daha bekliyor. JS overloading'İ DESTEKLEMİYOR. 
arg('naber', 'nasılsın', 'ne yapıyorsun') // şeklinde yazılması lazım
//& overloading'i destekleyen dillerde parantez içine tek arg yazıldığında teki, 3lü yazıldığında 3lü'yü çağırır.