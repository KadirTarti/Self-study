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