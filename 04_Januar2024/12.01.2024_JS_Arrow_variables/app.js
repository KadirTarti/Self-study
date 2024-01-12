//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
  };


  console.log(`SELAM`);
  menu() //! menu ile çağırmazsak üstte yazdığımız fonksiyon ekrana çıkmıyor.! ÇAĞRI !!!










//* Örnek3:silindirin hacmini (pi*r**2 (re kare) *h) hesapla

const hacimHesapla = (r, h) => Math.PI*r**2*h

console.log(hacimHesapla(3, 7))
console.log(hacimHesapla(4, 9).toFixed(1))








//* ORNEK4:  Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
    let fiboSol = 1;
    let fiboSag = 1;
    let yeniFibo=0;
    let toplam =2;

    for (let i= 1; i < n-1; i++) {
        yeniFibo= fiboSol+fiboSag
        fiboSol = fiboSag
                fiboSag=yeniFibo

        toplam+= yeniFibo // örn 5.sıraya kadarki toplam 

}
console.log(toplam);
return yeniFibo

}

console.log(fibonacciNumber(6));





