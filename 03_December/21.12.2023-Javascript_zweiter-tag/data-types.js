/* ---------------------------------- */
/*             DATA TYPES             */
/* ---------------------------------- */

// ! intiger, string vb veri türü yazmamıza gerek yok. JS otomatik algılar. *** let ve const yazmak yeterlidir.

console.log("Bir değişkenin türünü görüntülemek için typeof komutundan faydalanılır. Örneğin aşağıdaki gibi yazarız:");

sayi=38
console.log(typeof sayi);

//ancak sayıyyı tırnak içinde yazarsak bunu string olarak algılar!

sayi="38"
console.log(typeof sayi);

/* ---------------------------------------------- */
/*         PRIMITIVE  ---  DATA TYPES             */
/* ---------------------------------------------- */

/*      Bunlar TEK BİR DEĞER TUTMAKTADIR:  NUll, Number, Boolean, String, Undefined, BigInt...

!       1 - Big-Int: (-/+ 2 üzeri 53 - 1) den büyük sayılar için kıllanılır. 2 üzeri 53 -1'e kadar number ile tanımlanır. 
        2 - Number : Ondalıklı/-/+ tüm sayı değerlerini kapsar.  */


        let x=65
        let y=3.102392034839275423
        console.log(typeof x, typeof y);

        //  Math objesi ile matematiksel işlemler yapılıyor.
        const pi=Math.PI
        console.log(pi);

        // bir dairenin çevresini bulan kod yazalım
        let r=6
        let cevre= 2*pi*r
        console.log("Çevre: " ,cevre);

        // aynı dairenin alanı
        let alan= pi*r*r
        console.log("Alan: " ,alan);


// ************* sayı yuvarlama işlemleri **************
// **round: yuvarlama      ** ceil: bir üst tam sayıya yuvarlar     ** floor: kendi sayısına yuvarlar

// yuvarlama (round)
    let alan1=Math.round(alan)
    console.log("Yuvarlanmış alan: ",alan1);

// üst sayıya yuvarlama (ceil)
    let alan2=Math.ceil(alan)
    console.log("Yuvarlanmış alan: ",alan2);

    let sayi1=45.51
    console.log(Math.ceil(sayi1));
    console.log(Math.round(sayi1));

// alt sayıya (kendi sayısına) yuvarlama (floor)
    let sayi2=45.8888888888888
    console.log(Math.floor(sayi2));
    

// trunc: sadece tamsayıyı alır. floor ile neredeyse aynı
    console.log(Math.trunc(sayi2));
    console.clear()
    
// ***********************************************************
// !toFixed
    // bu özellik virgülden sonraki ondalıklı kısmın kaç basamağını göstermek istediğimizi belirtir. Kullanılışı diğerlerinden farklı. Math ile değil. sayıyı yazıyoruz...toFixed yazıyoruz. Parantez içine virgül sonrası kaç hane görmek istiyorsak rakam olarak yazıyoruz.

    let urunFiyati=325
    let indirimliFiyat= 325 - ((325/100)*13)
    console.log(indirimliFiyat);
    console.log(indirimliFiyat.toFixed(1) + " TL");
    console.log("Sayı 2'nin toFixed yapılmış hali " + sayi2.toFixed(2));

// *************************************************************
// ! Math.max    -    Math.min:
    // verilen birçok değer içinden en büyüğünü / en küçüğünü bulmayı sağlar
    console.log(Math.max(341, 2, 42, 14,67,89,67,34,5,90));
    console.log(Math.min(341, 2, 42, 14,67,89,67,34,5,90));

// ! Math.random
    //  1 ile 0 arasında rastgele sayı üretir.
    console.log(Math.random());

        // ! chaining  -   methodları birleştirme... genelde toFixed ile yapılıyor
        let rastgeleSayi=Math.random()
        console.log(rastgeleSayi)
        let rsFixed=rastgeleSayi.toFixed(2)
        console.log(rsFixed); 
        // bu iki kodu tek satırda şöyle yazabiliriz:
        console.log(Math.random().toFixed(2));

        // Math.random ile (1-0 arasında) istenilen değerler arasında sayı üretmek istersek: 
//    !      0-100 arası rastgele tam sayı üretme KODU  - sık kullanılır
        let randomNumber=Math.random()*100
        console.log(Math.round(randomNumber));

// *************************************************
//  Math.pow (power) metodu ile bir sayının kuvvetini alıyoruz
    console.log(Math.pow(5,3)); //!şu da aynı sonucu verir
    console.log(5**3);

// Math.sqrt metodu da karekökünü almamıza yarar
    console.log(Math.sqrt(64));
    console.log(Math.cbrt(64));  //bu küpü alır
    console.log(Math.sqrt(1336));



/* ---------------------------------- */
//!           STRING DATA TYPE        */
/* ---------------------------------- */

    let programAdi="Javascript"
    console.log(programAdi);
    // verilen bir string değerin sıra sayısını şöyle bulabiliriz

    console.log(programAdi[0],programAdi[1]);
    console.log(programAdi[2]);
    console.log(programAdi[8]);

    programAdi[8]="z" //!desek de
    console.log(programAdi); // burası değişmiyor. Buna da immutable (değiştirilemez) deniyor.

// ! escape (kaçış) characters
    // tırnak içinde alt satıra birşey yazmak istiyoruz. ama nşa'da kabul etmiyor.. Burada kaçış karakteri ters slash oluyor \\\\\ ... bunu kullanarak alt satıra inebiliriz.
    let cumle='Tek tırnak içinde yazarsak tek tırnaklı bir ay\'rımda hata algılanır. Bu nedenle hem alt satıra geçmek için hem bu gibi sorunların ignore edilmesi için \ kullanıyoruz. Alt satıra geçmek için sadece ters slash yeterli. Enter\'a gerek kalmıyor'
    console.log(cumle);

    let developer="Frontend\tDeveloper"
    console.log(developer);

    console.clear()
//!   String birleştirme
    // 1. concat metodu
    let isim="Cengiz"
    let soyisim= "Karl"
    console.log(isim.concat(soyisim))

    // 2. + işareti ile
    console.log(isim+" "+soyisim);

    //! Template literal yöntemi: ES6 ile birlikte geldi
    let job= "Fullstack developer"
    console.log("Personelimiz "+isim+" "+soyisim+" kurumumuzda "+job+" olarak çalışmaktadır");
    // yerine template literal ile şöyle yazabiliriz
console.log(`Personelimiz ${isim} ${soyisim} 
kurumumuzda 
    
${job} olarak çalışmaktadır`);  //ayrıca bunda alt satır içinters slash gerekmiyor
    //!   BU ÖNEMLİ BİR YAPI İMİŞ ....



/* ----------------------------------  */
//!           BOOLEAN DATA TYPE        */
/* ----------------------------------  */
    //   true veya false değeri tutar

    let isOpen=true
    console.log(typeof isOpen);

    let isSmall=4<15
    console.log(isSmall);

    sifre="3de4"
    let kontrol=(sifre==="3de4")
    console.log(kontrol);
    console.log(typeof kontrol);



    
/* ----------------------------------  */
//!         UNDEFINED DATA TYPE        */
/* ----------------------------------  */
// bir değişkene bir değer atamadığınız zaman ve
// bir fonksiyon geri değer döndürmüyorsa undefined olur

let val; //! undefined
console.log(val);

val=2817
console.log(val);

function example(){
    let toplam=43+13
    // return toplam  //!normalde bu satır açık olmalı. ama return unutulursa undefined gelir
}

console.log(example());


/* ----------------------------------  */
//!          NULL   DATA   TYPE        */
/* ----------------------------------  */

let empty=null
console.log(empty);  // konsolda null yazar. özellikle REACT'da veriler gelmediği zaman doldurulması gereken yerlerde kullanılır.
// ! undefined ile null farklı. null daha çok veri gelecek yerleri yazılımı yazarken boş bırakıp geçmek için...




// *********** NON-PRIMITIVE DATA TYPE **********************
// array
let karaman=['kalem', 'silgi', "defter"]
console.log(karaman);

//object
let nesne={name:'Johan', nachname:'Zimmermann', alter:'42'}
console.log(nesne);


let a=27
a %= 50
console.log(a);