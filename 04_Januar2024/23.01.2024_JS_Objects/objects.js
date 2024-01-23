//! -------------------------------------- */
//!             OBJECTS          */
//! ------------------------------------ */
// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi=[1,2,3,4,5,6]

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.
//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* ---------------------------- */
/*    Object Oluşturma Yöntemleri   */
/* ---------------------------- */


//^  1-Object class'ından türetme

const car = new Object() // boş bir object ürettik
car.brand='BMW' //car'a brand ekledik
car.model= 1990
car.price= 3000

console.log(car); // {brand: 'BMW', model: 1990, price: 3000}
console.log(car.model) // 1990





//^  2- Constructor metodu ile object oluşturma

function personalList (a,b,c){

    this.id=a;
    this.isim=b;
    this.maas=c;
}

const personel1 = new personalList( 1001, 'ali', 18000)   // tek tek yazmak mantıksız
const personel2 = new personalList( 1002, 'osman', 22000)

console.log(personel1);  //  personalList {id: 1001, isim: 'ali', maas: 18000}

//* her nesne için ayrı bir kopya oluşturan metodlar bellek kullanımını arttırabilir. o nedenle tercih edilmez



//& ilk ikisine göre ESAS tercih edilecek yok  |  EN ÇOK BUNU KULLANACAĞIZ
//^  3-   **** OBJECT LITERAL **** yöntemi

let personelYapısı = {}  // boş object oluşturup database den içini dolduruyoruz

let personel = {
    name : "Selim",
    surname: "Yılmaz",
    dogum: 1980,
    isMarried: true,
    experiences: ["tester", "devops", "salesforce"],
    adress: {city: "köln",
             street: "west",
             no:23},

    calculateAge: function(){

        return new Date().getFullYear - this.dogum
    },

    selam: ()=> {
        return "Merhaba"
    },

    arrowFunction: () => {
        return this.isMarried
    }

}

console.log(personel.name, personel.dogum); //Selim 1980
console.log(personel.surname); // Yılmaz
console.log(personel["dogum"]); // 1980

console.log(personel.calculateAge());
console.log(personel.selam());
console.log(personel.arrowFunction());  // arrow function objectlerle iyi çalışmıyor. diğer klasik function kullanılmalı

console.log(personel.experiences[0]); // tester
console.log(personel.adress.city); // köln

personel.experiences.forEach((work) => console.log(work));

//& yeni özellik ekleme

personel.phone= "444-22-11"
console.log(personel); // burada phone görünüyor


/* ---------------------------------- */
/*           OBJECT METHODS           */
/* ---------------------------------- */
//^* 1- Nested Object kullanımı

let employeeList = {
    person1:{
        name1: "Theodor",
        lastname: "Cane",
        dateOfBirth: "1984",
        salary: "20000",
        job: "developer",
    },
    person2:{
        name2:"Elif",
        lastname:"Akalın",
        dateOfBirth:"1990",
        salary:"24500",
        job:"devops",
    },
    person3:{
        name3:"Michael",
        lastname:"Carpen",
        dateOfBirth:"1987",
        salary:"18700",
        job:"tester",
    },
};

console.log(employeeList.person1.name);


//* ---------------------------------------------- */
//*           FOR - OF YAPISI                             */
// for of
let numbersAndLetters=["a",4,6,7,"C"]
for (const i of numbersAndLetters){
    console.log(i);    //  a  4  6  7  C
}

// for-of array'lerde kullanılır .... ! ama objectlerde daha komplex bir yapı olduğu için for-of kullanılmaz.. aşağıda deneyelim


/* 
for (const i of employeeList) {
    console.log(i);        --------------> employeeList is not iterable  OBJECT ile kullanılmaz
}
*/


//&* OBJECT içinde var olan özellikler!
console.log(Object.keys(employeeList));   // person1 person2 person3 olarak yazdırıyor
// Object.keys sabit bir kullanım. Hepsini çekip, diziye atarak yazdırdı.

console.log(Object.values(employeeList));  // person1 lerin içindeki tüm değerleri yazdırıyor
//! bu özellikle dizilere aktarıldığı için forEach, map vs. array metodu ile devam edebiliriz

for (const i of Object.keys(employeeList)){
    console.log(i);
}
for (const i of Object.values(employeeList)){
    console.log(i);
}

for (const i of Object.values(employeeList)){
    console.log(Object.values(i)[0]); // isimleri yazdırdık
}

for (const i of Object.values(employeeList)) {
    console.log(i);
    console.log(i.lastname);
    console.log(i.name);   // undefined çünkü name'lere 1-2-3 ekledik
 console.log(Object.values(i)[0]);
}


/* ---------------------------------- */
/*         FOR  - IN   yapısı         */

let numbersAndLetters2=["a",4,6,7,"C"]
for (const i in numbersAndLetters2){
    console.log(i);
}

for (const i in employeeList) {
    console.log(`for in yoluyla ${i}`);
    console.log(employeeList[i].job);
}

//!!  employeeList.forEach((m)=> console.log(m.name)) // Objelerde map,forEach,filter,reduce kullanılmaz. JSon (javascript object notation) bir dizi içinde obje olduğu için dizi metodları map,filter,reduce,forEach kullanılabiliyor.

//* ------------------------- */
//* JSON -Javascript Script Object Notation  */

const employeeList2 = [
    {
        name1: "Theodor",
        lastname: "Cane",
        dateOfBirth: "1984",
        salary: "20000",
        job: "developer",
    },
    {
        name2:"Elif",
        lastname:"Akalın",
        dateOfBirth:"1990",
        salary:"24500",
        job:"devops",
    },
    {
        name3:"Michael",
        lastname:"Carpen",
        dateOfBirth:"1987",
        salary:"18700",
        job:"tester",
    },
];

// JSON ile farklı veri türleri barındırılabilir
// Dillerden bağımsızdır.
//nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

employeeList2.push({
    name4: "Cenk",
    lastname: "Biter",
    dateOfBirth: "1995",
    salary: 21000,
    job: "aws"
});

console.log(employeeList2);

employeeList2.forEach((t) => console.log(t.lastname))

// listedeki tüm isimlere ulaşıp HARFLERİNİ BÜYÜT
employeeList2.map((a) => Object.values(a)[0].toUpperCase()).forEach((b) => console.log(b))





// * =====================
// *   OBJECT ITERATION
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.


  //& örnekler


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


//? people dizisinde her elemanın job'ını yazdır
people.forEach((x) => console.log(x.job))

//? yaşları birer arttır ve sonucu yeni diziye aktar
const yeniYas = people.map((kisi) => kisi.age+1)  //! sadece maple dolaşıp gördük, değiştirmedik
console.log(yeniYas);
console.log(people);  // map people'ı kalıcı olarak değiştirmiyor 

//? yaşları birer arttırıp sonucu kalıcı olarak değiştir
people.map((kisiler, index, arrays) => kisiler.age = arrays[index].age+1)  //! map ile indexe ulaşıp = atama operatörüyle atama yaptık
console.log(people);

//? people (object li ) dizisinden yaşları 5 fazlasıyla değişmiş ve salary eklenmiş olarak (diğer elemanları duran) farklı keyler içeren; objectlerden oluşan yeni bir dizi oluşturalım

const newPeople = people.map((kisi) => ({
    adi: kisi.name,
    soyadi: kisi.surname,
    yas: kisi.age+5,
    is: kisi.job,
    maas: 23500}))
console.log(newPeople);
//! yazılmış dizinin KEYLERİ'Nİ DEĞİŞTİRME



//? PEOPLE'daki her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım

const secondPeople = people.map((kisi) => ({
    name: kisi.name.toUpperCase(),
    age: kisi.age*2,
    job: "senior "+kisi.job,
    }))
console.log(secondPeople);


//? Ornek6: ortalama yasi hesaplayiniz
console.log(people.reduce((toplam, kisi)=> toplam + kisi.age, 0)/people.length)

// developer olanların adlarını ve yaşlarını yeni bir obj olarak yazın

const developers = people
  .filter(kişi => kişi.job === "developer")
  .map(({ name, age }) => ({ name, age }));
console.log(developers);


//?  yası 33 ün üstünde olan kişilerin name lerini listele
