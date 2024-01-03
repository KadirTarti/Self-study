//girilen verilere göre tablodan faydalanarak kişinin kilosu hakında yorum yapan program için akış şeması çiziniz

let kilo = +prompt(`Lütfen kilonuzu girin: `)
let boy = +prompt(`Lütfen boyunuzu cm cinsinden girin: `)
let VKI;

VKI = kilo / (boy * boy) * 10000

console.log((VKI));

if (VKI < 18.5) {
    console.log(`Tebrikler! Düşük kilolu grubundasınız!`);
} else if (VKI > 18.5 && VKI < 24.99) {
    console.log(`Normal kilodasınız!`);
} else if (VKI > 25 && VKI < 29.99) {
    console.log(`Dikkat!!! Fazla kilodasınız`);
} else
    console.log(`VKI'niz 30'un üzerinde! Veriler doğru girildi ise OBEZ grubundasınız!`);
