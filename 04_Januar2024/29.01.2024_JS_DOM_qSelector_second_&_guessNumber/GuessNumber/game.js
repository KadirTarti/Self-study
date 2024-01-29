let rastgeleNumberPc = Math.ceil(Math.random()*20);
console.log(rastgeleNumberPc);

let message = document.querySelector(".msg")

/*
//! uzun yoldan score - topscore ayarı

let score = document.querySelector(".score")
let topscore = document.querySelector(".top-score")

score.textContent = score.textContent-1 // bilinmezse skoru 1 düşür
score.textContent > topscore.textContent //? eğer score top score'dan büyükse
topscore.textContent = score.textContent // ikisini eşitle... çünkü topscore daha küçük olamaz
*/


//! kısa yol

let skor = 10
let enYuksekSkor = 0

//! her check butonuna basınca olacaklar

document.querySelector(".check").addEventListener("click",()=>{
    const tahmin = document.querySelector(".guess").value;

  //? tahmin girilmeden basılmasın
  if (!tahmin || tahmin>20){
    message.textContent="Lütfen 1-20 arasında bir sayı giriniz";
    } else if (tahmin==rastgeleNumberPc){
    //* tahmin doğruysa
    message.textContent="Tebrikler Bildiniz!";
    document.querySelector("body").style.backgroundColor="darkGreen";
    document.querySelector(".number").textContent=rastgeleNumberPc;

    //*en yüksek skoru kontrol
        if (skor > enYuksekSkor) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent=enYuksekSkor
        }

    } else {
        //* tahmin yanlışsa skor 1 den aşağı düşmemeli
        if (skor>1) {
            skor--;
            document.querySelector(".score").textContent=skor;
            
            tahmin<rastgeleNumberPc 
            ? (message.textContent="Arttır🔼") 
            : (message.textContent="Azalt🔽")
        } else {
            message.textContent = "Oyunu Kaybettiniz";
            // skor>0 ? skor-- : skor;
            document.querySelector(".score").textContent=0;
        document.querySelector("body").style.backgroundColor="red";

        }  
    }
})

//* Again tuşuna basınca olacaklar (başlangıç değerlerine dönülsün, arka ekran #2d3436 olsun)

document.querySelector(".again").onclick=()=>{
    rastgeleNumberPc = Math.ceil(Math.random()*20);

    message.textContent="Oyun yeni oyuncu için başlıyor"

    document.querySelector("body").style.backgroundColor="#2d3436";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
    skor=10;
    document.querySelector(".score").textContent=skor
    
    
}