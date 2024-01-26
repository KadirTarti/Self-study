document.querySelector("h1").style.color="red"
document.querySelector("h1").style.textAlign="center"

let resim = document.querySelector(".resim")
let ses1 = document.querySelector(".ses1")


//& ara butonuna tıklandığında


document.querySelector(".ara").onclick=()=>{
    resim.src = "./img/img.gif";
    // play() komutu html deki audio etiketini js de çalıştırır
    ses1.play();
    //sesin volume ünü 0 ile 1 arasında değer vererek ayarlayabilirsiniz
    ses1.volume = 0.1;
}