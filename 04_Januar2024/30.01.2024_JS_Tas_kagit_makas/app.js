

//^her birine ulaşmak için bu yol uzun yol... tercih etme !!!
/*
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

const yourChoiceDiv= document.getElementById('your-choice')

rock.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
})
paper.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/paper.png"/>`
})
scissor.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png"/>`
})
*/

//& seçiciler

const yourChoiceDiv= document.getElementById('your-choice')
const selectionArticle = document.querySelector('.selection')
const pcChoiceDiv = document.getElementById('pc-choice')



//& değişkenler

let userSelection;
let pcRandom;
let pcArr= [];
const userSelectImg = document.createElement('img')
const pcSelectImg = document.createElement('img')


//console.log(selectionArticle);


//& event listeners

selectionArticle.addEventListener('click', (e)=>{
   // console.log(e.target.id);
   userSelection = e.target.id
   //console.log(userSelection);

   if (userSelection) {
      userSelectImg.src=`./assets/${userSelection}.png`;
      userSelectImg.id= `you`;
      yourChoiceDiv.appendChild(userSelectImg)
   }
   creatPcSelection()

})

//! eventListener ile birşeyi dinlerken target verildiğinde o grup içinden bir tanesini seçiyor. üstteki örnekte 3 eventli selection'ı seçtik ve dinledik. yorum kısmında tek tek yaptığımız işi bir üst satırdaki işlem ile çok daha kısa olarak çözdük.



//& fonksiyonlar

const creatPcSelection = () => {
    pcArr = ['rock', 'paper', 'scissor','rock', 'paper', 'scissor'];
    pcRandom = pcArr[Math.trunc(Math.random()*6)]
    console.log(pcRandom);
    pcSelectImg.src=`./assets/${pcRandom}.png`;
    pcSelectImg.id= `pcs`;
    pcChoiceDiv.appendChild(pcSelectImg)
}

