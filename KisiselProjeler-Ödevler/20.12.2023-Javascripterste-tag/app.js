console.log("Ses 1 2 3");

//  -> tek satırı yoruma almak için  kullanıyoruz


/*birden fazla satırı
yoruma almak içinse css ile aynı şekilde / ve *  kullanıyoruz */


//!ÇIKTI ALMA ve Kullanıcı ile etikeşim YÖNTEMLERİ

// ******** Consol Kullanımı ********

/* console YAZILIMCI içindir. sayfa canlıya çıkacağı zaman consol temizliği uyarısı yapılır. */

console.log("Konsolda yazdırmak için clg tab ile bunu yazıyoruz")
console.log("object"); //burada object tırnak içinde olmadığı için hata veriyor. şimdi tırnağa alıyoruz
console.log("hatanın altındaki satır doğru yazılsa da hatadan sonrasını okumuyor....!!!1") //!burası önemli

console.error("kullanıcıya hata mesajı için bu etiket kullanılıyor. arka plan kırmızı")

console.warn("kullanıcıya uyarı mesajı vermek için bu kullanılıyor. arka plan sarı")

console.clear()  //bunu yaparsak konsol temizlenir. üsttekiler görünmez

console.table(
    [
        {name: 'Harvey', age:35},
        {name: 'hELEN', age:45},
        {name: 'carl', age:29},
        
    ]
)


// ************ ALERT *************
// alert("bu bir  uyarıdır")

// yas=15
// if (yas<25) {
//     alert("Lütfen büyüyüp geliniz")
// }



// ************ DOCUMENT.WRITE *************

document.write("Browserda <b>sonuç</b>  gösterme <br> bu şekilde yapılıyor. Write komutu ile... içine de biçimlendirme için bildiğimiz bazıo html etiketlerini yazabiliyoruz.")

//! Live server'daki konsola window yazıp içini açınca birçok js kodu orada geliyor.

// ************ PROMPT KULLANIMI *************

//Kullanıcıdan bir değer almak için kullanılır. Ancak kullanıcı bilgileri genellikle formlarla alınır veya database'den çekilir. Pop-up şeklinde çıkan prompt ile bilgi almak hiç alışılmış değil.
//! web'de kullanıcıdan alınan bilgi her zaman yazı olarak algılanır


prompt("Lütfen isminizi girin")

ad=prompt("Adınızı girin:")
console.log(ad)
document.write(ad, " AliHoşgeldin")