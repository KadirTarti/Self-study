// ? ============================
// &        FONKSİYONLAR
// ?=============================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//^ÖNCE FONKSİYON OLUŞTURMAK ŞART !!!!

const isEvenOdd = function (sayi) {
  return sayi % 2 == 0 ? "çift sayı" : "tek sayi";
};
console.log(isEvenOdd(6));
console.log(isEvenOdd(333));
console.log(isEvenOdd(23231));

//*en büyük sayı

const buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) enBuyuk = a;
  else if (b > a && b > c) enBuyuk = b;
  else enBuyuk = c;

  return enBuyuk;
};

// alert(   buyukBul(3,5,9))

//*örnek 3 arguments ile

const enBul = function () {
  let biggest = arguments[0];

  let smallest = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) biggest = arguments[i];

    if (arguments[i] < smallest) smallest = arguments[i];
  }

  return `${biggest} ${smallest} `;
};

console.log(enBul(90, 345, 123, 23, 545, 112, 5454, 76767, 22));

//*örnek4 : fonksiyonun içinden fonksiyon çağırma

const usAl = function (a, b) {
  return a ** b;
};



const cevreBul = function (s1, s2) {
  return (s1 + s2) * 2;
};



const alanBul = function (s3, s4) {
  return s3 * s4;
};

const hesapla = function (secim, w1, w2) {
    let sonuc;
    if (secim=="area")
    sonuc = alanBul(w1, w2)

    else if (secim=="perimeter")
    sonuc = cevreBul(w1, w2)

    else if (secim=="root")
    sonuc = usAl(w1, w2)

    return (sonuc)    
};


console.log(hesapla("area", 3, 5));
console.log(hesapla("perimeter", 3, 5));
console.log(hesapla("root", 3, 5));



//*örnek 5
// -------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."
/* -----------------------------------------------------------*/

const calculate = function(dogunYili){
    
    const ortOmur = 95
    const yas = new Date().getFullYear() -dogunYili
    const kalanOmur = ortOmur-yas

    if (kalanOmur>0  && kalanOmur <= 10)
      return "Sen bu değerleri önemseme hayatın tadını çıkar"
    else if (kalanOmur > 10  && kalanOmur <= 20)
    return  " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."
    else 
    return  `${kalanOmur} yılın var, Senin daha çalışman lazım kardeş`

}

console.log(calculate (+prompt(`Doğum yılınızı giriniz: `)));