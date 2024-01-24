


//^* NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)

const car = {
    title: "BMW",
    model: "1990",
    engine: 1.6
}

// bu object'i okumanın 1. (klasik yolu):
console.log(car.engine);
console.log(car["engine"]);

// 2. yol (destructuring)
const {title, model} = car
console.log(title);
console.log(model);

const arabalar = {
    car1: {
      marka: "BMW",
      model: 1990,
      renk: "red",
    },
    car2: {
      marka: "MERCEDES",
      model: 1980,
      renk: "white",
    },
    car3: {
      marka: "AUDI",
      model: 2000,
      renk: "gray",
    },
  };

  console.log(arabalar.car1.marka);
  const {car1, car2, car3} = arabalar
  console.log(car2.renk);
  console.log(car3.model);

  const {marka, renk} = car1
  console.log(marka);
  console.log(renk);

//   const {marka, model, renk} = car2    ->  diyemiyoruz. Önceden aynı atama yapıldı çünkü. Bu sorunu çözmenin bir yolu var. Başka isim verilmeli.... o da yine object içinde şöyle oluyor :

const {marka:marka2, model:model2, renk:renk2} = car2
console.log(renk2);

const {marka:marka3, model:model3, renk:renk3} = car3
console.log(model3);


//! object içinde object olunca sadece for...in çalışıyor .... forEach for...of map filter çalışmıyor. Bunlar array (dizi) lerde çalışıyor.

for (let i in arabalar) {
    console.log(i);
    console.log(arabalar[i].marka);
}





//* ornek: Array-Object gezinme-DEST
const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  //& destructuring bilmeden / uygulamadan uzun yazdırma yöntemi
  // 1.yol  (uzun yol)
  people.forEach ((kisi) => {
      console.log(kisi.name);
      console.log(kisi.surname);
      console.log(kisi.job);
     })


   //& fonksiyon içi destructuring uygulama!!
    people.forEach((kisi) =>{
    const {name, surname, job} = kisi
    console.log(name, job);
    console.log(surname);
    console.log(kisi.age);  //*burada age sonradan ekleyebiliyorsun
  })
  //^bunda const ile fonksiyon içi tanımlama yaptık



  //& fonksiyon içi destructuring uygulama!!
  people.forEach(({name, surname, job ,age}) =>{  //*burada ise başta age eklemek durumundayız
        console.log(name, job);
        console.log(surname);
  })
  //^ bunda key'leri direk parametre olarak yazdık 


//!   functio lar object parametreleri destructur yapabilir 
const kontrol =(veri) => {
    console.log(veri);
    console.log(veri.ad); // bunu yapmak yerine

    const {ad, renk, yildiz} = veri
    console.log(ad);
    console.log(renk);
}
kontrol({ad: 'PS', renk: 'siyah-beyaz', yildiz: 5})
kontrol({ad: 'TT', renk: 'yesil-beayz', yildiz: 4})




const kontrol2 = ({ad, renk, yildiz}) => {
    console.log(ad);
    console.log(yildiz);

}
kontrol2({ad: 'BJK', renk: 'sarı-kırmızı', yildiz:3})












//^* NEW GENERATION OPERATORS: SPREAD (or REST)


//?  REST =>>[...name] = diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye veya (object se) object e atıyor

//!    Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//****REST OBJECT****

const personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
    salary: 30000
};

const personel2 = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
    salary: 30000
};

const {pName, surname, ...geriKalanElemanlarREST} = personel
  console.log(pName, surname);
  console.log(geriKalanElemanlarREST);

  //^  object kopya (rest ile)

const kopyaPersonel = personel  // object'in tamamını kopyaladık
  console.log(kopyaPersonel);  // tüm personel bilgileri kopyalandı


const {...personel2kopya}= personel
  console.log(personel2kopya); // tüm personel bilgileri kopyalandı

kopyaPersonel.job="father"  // kopyalanan 1. personel bilgisi
console.log(personel);  // 1.personel blgisi değişti
console.log(personel2);  // 2.personel bilgisi değişmedi
console.log(personel2kopya); // rest li koypa değişmedi





//^  array kopya  (rest ile)

const autos = ["anadol", "renault", "tofas", "ferrari"];

const ikizAutos = autos
const [...autoRest] = autos

autoRest.push('BMW')
console.log(autos);  // bmw yok
console.log(autoRest); //! bmw var
console.log(ikizAutos); // bmw yok

ikizAutos.unshift('mercedes')
console.log(autos);  // mercedes eklendi
console.log(autoRest);  //! mercedes eklenmedi
console.log(ikizAutos);   // mercedes eklendi





const show = (name, surname, ...title) => {
    console.log(`${name} ${surname} is a ${title.join(' and ')}`);
}

show("ali", "haydar", "savasci", "guclu", "adil", "ahlakli", "sporcu")

//!   arguments özelliği ile bu rest operatörü aynı işlevi görüyor

/*
➤ Rest operatörü, belirli argümanları bir dizide birleştirmek için kullanılır.

➤ Tersine, Spread operatörü bir diziden öğeleri çekmenize veya bir nesnenin özelliklerini çekmenize olanak tanır.
 Spread operatörü, bir dizinin (veya yinelenebilir herhangi bir şeyin) değerini, bir dizideki veya öğedeki sıfır veya daha fazla argümana yaymamıza olanak tanır.
*/

//* Spread Operatörü

const insanlar = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];

const yeniInsanlar = insanlar.map((kisi) =>({
    name: kisi.name,
    surname: kisi.surname,
    job: kisi.job,
    age: kisi.age+5,
}) )
console.log(yeniInsanlar);
// verileri aldık, yaşları arttırdık ... uzun yol


const yeniInsan = insanlar.map((kisi) =>({
    ...kisi,
    age: kisi.age+5,
}))
console.log(yeniInsan);
// verileri aldık, ama ...(spread) ile saklamak istediklerimizi sınıflandırdık...  değiştirmek istediğimiz tek değer olan age'i aşağıda değiştirdik... !!!  bu kısa ve etkili olan yol  !!!


//? örnek

const zeug = ["Aircraft", "Helicopter", "Bicycle"]
const otomobiles = ["Trucks", "Bus", "Car", "SUV"]

console.log(zeug, otomobiles);
console.log(zeug.concat(otomobiles));  
// ['Aircraft', 'Helicopter', 'Bicycle', 'Trucks', 'Bus', 'Car', 'SUV']

console.log(...zeug, ...otomobiles); 
// Aircraft Helicopter Bicycle Trucks Bus Car SUV


console.log([...zeug, "otobüs", ...otomobiles, "tır"]);  
// ['Aircraft', 'Helicopter', 'Bicycle', 'otobüs', 'Trucks', 'Bus', 'Car', 'SUV', 'tır']



//? ornek :  job: kaufmann olsun, location ekle ve DE olarak belirle (spread) ile yap

const personell = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
    salary: 30000
};


perNewData = {...personell, job:"kaufmann", location:"DE"}
console.log(perNewData);
/*
Rest syntax tam olarak spread syntax'a benzer. Bir bakıma Rest, spread'in tam tersidir. Spread  bir diziyi öğelerine "genişletir", Rest ise birden fazla öğeyi toplar ve bunları tek bir öğede "yoğunlaştırır".
*/


