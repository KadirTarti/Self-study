//& selectors

const textarea = document.getElementById('textarea');
const convert = document.getElementById('btn');



//& event listener

convert.addEventListener('click', () =>{
    console.log(typeof textarea); // object
    console.log(typeof textarea.value);  //string

    document.getElementById('result').textContent = textarea.value.split(' ').map((word) =>{
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      //return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');


});