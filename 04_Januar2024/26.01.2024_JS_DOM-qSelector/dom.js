/* ----------------------- */
//^*     getElementById       */
/* ----------------------- */
//* örneğin butonu çağırıp şekillendirmek isteresek bunu burada tanımlayıp onun üzerinden hareket etmek daha mantıkklı. aksi halde her seferinde button.style.background.... button.style.color vs çağırmak gerekiyor

const buton = document.getElementById("btn")
buton.style.width="300px"
buton.style.height="120px"
buton.style.fontSize="90px"
buton.style.backgroundColor="lightBlue"
buton.style.margin="20px"

const paragraf = document.getElementById('par').style
paragraf.width="300px"
paragraf.height="200px"
paragraf.fontSize="40px"
paragraf.color="darkBlue"
paragraf.margin="40px"
paragraf.border="5px solid darkCyan"
paragraf.textAlign="center"






/* ----------------------- */
//^*  getElementByTagName    */
/* ----------------------- */
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (*****HTMLCollection*****   -> Array özellikleri gösterir)

const resim = document.getElementsByTagName('img')
console.log(resim); // [iki içerikten oluşan 0 ve 1 indexli 2 adet img buraya geldi]
resim[0].style.width="150px"
resim[1].style.border="5px solid red"






/* ----------------------- */
//^*  getElementByClassName   */
/* ----------------------- */

const baslik = document.getElementsByClassName("H1")
baslik[0].style.fontSize="90px"
baslik[0].style.color= "Purple"

//^ birden fazla class'a aynı anda getElementByClassName ile erişmek istiyorsak for döngüsü kullanmalıyız:

for (let i = 0; i < baslik.length; i++) {
    baslik[i].style.color= "darkGreen"
    baslik[i].style.textAlign= "center"
}

//! HTMLCollection'larda Array'i değiştirmeyen metodlar kullanılabilir


baslik[0].innerHTML="<a href='https://google.com/'> DOM ÇOK KOLAY</a>"

baslik[1].textContent="İYİ MİSİN?"

//& ========================================================================================
//^          BURAYA KADAR  24 OCAK DERSİ.. BURADAN İTİBAREN 26 OCAK
//& ========================================================================================


//^  querySELECTOR

document.querySelector("title").textContent="DOM MANIPULATION"
document.querySelector('#badi').style.backgroundImage="linear-gradient(lightblue,lightgray)"
document.querySelector(".H2").style.color="darkred"

const parag = document.querySelectorAll('p')
console.log(parag);

parag[1].style.fontSize="4rem" //naber?



// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.