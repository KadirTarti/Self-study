//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
    constructor (a,b,c) {

    this.title=a
    this.author=b
    this.year=c

    this.summaryFunction = function(){   
        return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır.`
    }
  }

    //?bu alt süslüye yazdıklarımız direk kalıbın prototype alanına gider (ES6 ile biz belirtmeden)

    yilHesapla () {
        return 2024-this.year
    }
};

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (book1, dergi1 vs) (instance) eklenir.
//? anne karnı = constructor = class Book ....... çocuk = instance = book1 dergi1


const book1 = new Book('safahat', 'M.Akif Ersoy', 1911)

console.log(book1);
console.log(book1.author);
console.log(book1.yilHesapla());



//& InHERITANCE  - miras

//^mirasın nereden geleceği başta belirtiliyor. bu class Book class'ındaki verileri de içerir.

//* book object kalıbından dergi object'ine kalıp getirdik...
class Zeitschrift extends Book {

    constructor (author, title, year, d) {
        //book classtan gelenler şöyle yazılıyor:
        super (author, title, year)  //! super  - kendi syntax'ı (koyu mavi renk)


        //bu class'ın kendine ait özellikler... eklenenler
        this.month = d
    }
}


const dergi1 = new Zeitschrift('kasagi', 'omer seyfettin', 1915, 'ekim')
console.log(dergi1);
console.log(dergi1.yilHesapla());

class Gaste extends Book {
    constructor (author, title, year, d, e) {
        super(author,title,year)

        this.month=d
        this.fiyat=e
    }
}

const gaste = new Gaste('morgen', "", 1972, 'august', 5)
console.log(gaste);
// burada boş tırnak author kullanmamak için idi. onu kullanmazsak sıra kayar. en başta tanımladığımız a b c sırasına göre atama yapar. Çağırmak zorundayız. Ama içeriği boş kalacaksa hiçlik atamalıyız.