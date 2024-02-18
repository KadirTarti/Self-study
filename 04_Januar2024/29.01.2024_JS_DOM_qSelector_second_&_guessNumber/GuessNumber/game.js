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
    document.querySelector(".msg").style.color = "";

  //? tahmin girilmeden basılmasın
  if (!tahmin || tahmin>20){
    message.textContent="Please enter a number between 1-20";
    } else if (tahmin==rastgeleNumberPc){
    //* tahmin doğruysa
    message.textContent="Congratulations, you WON!";
    document.querySelector(".msg").style.color="green";
    document.querySelector(".msg").style.textShadow="2px 2px 1px black";
    document.querySelector(".msg").style.fontSize="2rem";
    document.querySelector("body").style.backgroundColor="rgb(1, 106, 108)";
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
            ? (message.textContent="Increase🔼") 
            : (message.textContent="Decrease🔽")
        } else {
            message.textContent = "You LOST!";
            // skor>0 ? skor-- : skor;
            document.querySelector(".score").textContent=0;
            document.querySelector(".msg").style.color="red";
            document.querySelector(".msg").style.textShadow="2px 2px 4px pink";
            document.querySelector(".msg").style.fontSize="2rem";
            document.querySelector("body").style.backgroundColor="rgb(161, 76, 76)";

        }  
    }
})

//* Again tuşuna basınca olacaklar (başlangıç değerlerine dönülsün, arka ekran #2d3436 olsun)

document.querySelector(".again").onclick=()=>{
    document.querySelector(".msg").style.color = "";
    rastgeleNumberPc = Math.ceil(Math.random()*20);
    message.textContent="The game starts again for the new player";
    document.querySelector("body").style.backgroundColor="#2d3436";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
    skor=10;
    document.querySelector(".score").textContent=skor
    
    
}