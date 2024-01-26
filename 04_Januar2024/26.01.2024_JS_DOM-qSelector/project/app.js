document.querySelector("h1").style.color="red"
document.querySelector("h1").style.textAlign="center"

let resim=document.querySelector(".resim")
let ses1=document.querySelector(".ses1")

//!ara butonuna tıklandığında

document.querySelector(".ara").onclick=()=>{
  resim.src = "./img/img.gif";
  // play() komutu html deki audio etiketini js de çalıştırır
  ses1.play();
  //sesin volume ünü 0 ile 1 arasında değer vererek ayarlayabilirsiniz
  ses1.volume = 0.1;
}

//! bağlat butonuna tıklandığında

document.querySelector(".baglat").onclick=()=>{
  resim.src = "./img/telbagla.gif";
  //pause() komutuyla çalan audio sesini durdurabilirsiniz
  ses1.pause();
}

//!konuş butonuna tıklandığında
document.querySelector(".konus").onclick = () => {
  resim.src = "./img/telefon.gif";
  
  ses1.pause()
};

//!mouse ile resmin üzerine gelindiğinde

// resim.onmouseover=()=>{}

resim.addEventListener("mouseover",()=>{

    resim.src="./img/aslan2.jpeg"
    document.querySelector(".ses2").play()
    ses1.pause()
} )

//!mouse resmin üzerinden ayrıldığında
resim.addEventListener("mouseout", () => {
  resim.src = "./img/aslan1.jpeg";
  document.querySelector(".ses2").pause();
});


// klavyeden inputa veri giriişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput = document.querySelector(".textbox")
const checkInput = document.querySelector(".checkbox")

console.log(textInput);

textInput.onkeyup=()=>{

  if(checkInput.checked){

    textInput.value=textInput.value.toUpperCase()
  } else {
    textInput.value=textInput.value.toLowerCase()
  }
}



//! listemin başına "Programlama Dilleri" h1 etiketi eklemek ****uzun yol*****

//? HTML DE h1 elementi oluştur

const baslik = document.createElement("h1")
{
  /* <h1></h1> */
}


// oluşan h1 elementine class ismi ata
baslik.className="baslik2"
{
  /* <h1 class="baslik2"></h1> */
}

//Programlama Dilleri text i oluştur

const yazi = document.createTextNode("Programlama Dilleri")

// h1 elementi için oluşturduğum text i h1 e child yapalım

baslik.appendChild(yazi)

{
  /* <h1 class="baslik2"> Programlama Dilleri</h1> */
}


const inputdiv = document.querySelector(".input-div")
// input-div class isimli div in son child ı yapalım
inputdiv.appendChild(baslik)

// input-div class isimli div den hemen sonraya ekle
inputdiv.after(baslik)



//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz


//! kısayol    (backtick)

inputdiv.innerHTML += `<h1 class="title text-primary">Programlama Dilleri</h1>`

//^ üstteki inbputdiv after ile yazıldığı için ekranda altta çıkıyor