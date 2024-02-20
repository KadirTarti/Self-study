console.log('myModule\'den selamlar');

//* başka bir dosyada kullanılabilmesi için export yazıyoruz başına
export const CALISMA_SAATI = 40

export function topla (s1, s2) {
    return s1+s2
}

let counter = 5;

const inc =(miktar)=>
counter+=miktar


const dec =(parametre)=> {
    counter-=miktar
    return counter
}

const myName = 'K.R.A.L'


export {inc, dec, myName}

//* export ile exp-def yollama araasında fark yok. ama çağırırken fark var!
//!  bir sayfada sadece 1 tane exp-default olabilir
export default function ugurla (){
    console.log('see u javascript');
}