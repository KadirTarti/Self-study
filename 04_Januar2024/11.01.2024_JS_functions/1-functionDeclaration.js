// ? ====================================
// ?           FONKSİYONLAR
// ? ====================================

// !---------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !---------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):


//! * -------Function-Declaration--------*/ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//?Fonksiyonun tanımlanması



//**** örnek1 */
function yazdir (){
    console.log(`Bu fonksiyonun işi burada bitti`);
}
yazdir()






//**** örnek2 */
function adYazdir (ad, ikinci, z){
    console.log(ad, ikinci, z);  // parametre - karşılama - ekrana yazdırma
}
adYazdir("burak", "elif", "ali")
adYazdir("saban", "esra", "omer")
adYazdir("selim")
adYazdir("ali", "veli")
adYazdir("on", "yirmi", "otuz")




//**** örnek3 parametreli , dönüş değerli (return)*/
function yasHesapla (isim, tarih){
    console.log(`Benim adım ${isim} ve ben ${2023-tarih} yaşındayım.`);

    return 2023-tarih // yas hesapla atadıktan sonra ortalama almak için return ekledik
}
yasHesapla (`fatma`, 1990)  //33
yasHesapla (`emre`, 1980)   //43
yasHesapla (`kağan`, 1995)  //28

//& return yazdıktan sonra ortalama almak için değer ataması yaptık
const fatma = yasHesapla (`fatma`, 1990)  //33
const emre = yasHesapla (`emre`, 1980)   //43
const kağan = yasHesapla (`kağan`, 1995)  //28

console.log((fatma+emre+kağan)/3);







//**** örnek4 parametreli , dönüş değerli (return)*/
//tek - çift sorgulaması

 console.log(isEvenOdd(5)); //call invoke
 console.log(isEvenOdd(23974)); //call invoke
 console.log(isEvenOdd(22222229)); //call invoke

function isEvenOdd (sayi){
   return  sayi%2==0 ? "çifttir" : "tektir"
}







//**** örnek4 argument keywordu ile parametre karşılama*/







function sumAll(){

    let toplam=0

  for (let i=0; i < arguments.length; i++){
    toplam = toplam+arguments[i]
  }
    return toplam
}

   console.log( sumAll (25, 34 , 56, 78, 12, 45, 87, 23))


