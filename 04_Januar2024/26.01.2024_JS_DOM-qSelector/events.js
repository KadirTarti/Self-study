//^ 1. YOL          Sadece JS'te yazılan yol


//* example1  onmauseover  -  onmauseout

const js=document.querySelector("#js")
const badi=document.querySelector("#badi")



document.querySelector("title").textContent="DOM MANIPULATION"


js.onmouseover=()=>{
    badi.style.backgroundColor='pink'
}

js.onmouseout=()=>{
    badi.style.backgroundColor="lightgray"
}






//* example2  onclick  - ondoubleclick

const bir = document.querySelector(".bir")
const iki = document.querySelector(".iki")

bir.onclick=()=>{
    bir.src="./img/logo2.png"
    iki.src="./img/js_logo.png"
}

iki.onclick=()=>{
    bir.src="./img/js_logo.png"
    iki.src="./img/logo2.png"
}

iki.ondblclick=()=>{
    iki.src="./img/bir.jpeg"
}





 
//* example3    genelde çok tercih edilmez

const buton = document.querySelector("#btn")

buton.addEventListener("click", () => {
    badi.style.backgroundImage="linear-gradient(to right, lightblue, lightpink)"
    
    document.querySelector('#par').style.fontSize="30px"

    document.querySelector('.bir').style.width="200px"

    buton.textContent="TIKLANDI"
});






//* example4  mouse on -  mouse over

