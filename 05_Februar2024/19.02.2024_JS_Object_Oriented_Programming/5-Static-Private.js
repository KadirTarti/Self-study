//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
    //^private değişken tanımalama:
    #id;

    //^static deişken tanımlama:
    static counter=0;

    constructor (title,author,year){
     this.title=title
     this.author=author
     this.year=year
     this.#id=44
     this.getTitle=function(){
       return this.title
     }
    }
      //* Class icerisinde public metotlar yardimiyla private degiskenler okunabilir. Bu tip metotlara GETTER metot denilir.
      //! getter metotlari class icerisinde tanimlanmalidir.
    
      getId(){
        return this.#id;
      }
      
      
      
      
      //^ Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.Bu tip metotlara SETTER metot denilir.
        //! setter metotlar class icerisinde tanimlanmalidir.
      
        setId(id){
          this.#id=id
        }
}



const book1= new Book('simyaci', 'Paulo Coelho', 1988)
console.log(book1);  // Book {title: 'simyaci', author: 'Paulo Coelho', year: 1988, #id: 44, getTitle: ƒ}
console.log(book1.id);   // undefined
console.log(book1.title); // simyaci

book1.title='suç ve ceza'
console.log(book1.title); // suç ve ceza   -> değiştirdi

book1.id=101 //! getId yapmadan önce hiç etkisi olmadı. değişiklik için parent izin vermeli!!! gittik. izin verdik. şimdi 101 e döndü
console.log(book1); // burada id hala 44


console.log(book1.id);   // 101

book1.setId('111')
console.log(book1.getId());   //  111


//! static değişkenlere instance üzerinden erişilemez
//! Static degiskenler classname.property seklinde erisilir.

console.log(Book.counter);  // 0
console.log(++Book.counter);   // 1


//^ ===============================================================
//& ===============================================================
//* ========     BACKEND'DE getId - setId ÇOK GÖRECEĞİZ  ==========
//& ===============================================================
//^ ===============================================================








//! Abstraction - Örnek - çok görmeyeceğiz


function Kitap (a,b) {
    
    let name = a
    let yazar = b
    let getNoDetails= function(){
        return `${name} kitabı ${yazar}'a aittir`
    }

    this.giveDetails = function(){
        return `Book '${name}' belongs to author ${yazar}`
    }

}

let person = new Kitap ('şeker portakalı', 'José Mauro de Vasconcelos')

console.log(person.name); //undefined
console.log(person.getNoDetails);
console.log(person.giveDetails());