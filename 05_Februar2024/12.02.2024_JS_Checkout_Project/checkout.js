//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const shipping = 11.99;
const tax = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];


//! BUBLING !!   stop propagation

let flag = false


let h1 = document.querySelector('h1')

h1.onclick=(e)=>{
  flag = !flag
  flag 
  ? (h1.textContent = 'Checkout Project')
  : (h1.textContent = 'Shopping Site')

  e.stopPropagation();
};

let header = document.querySelector('header');

header.onclick =()=> {
  flag = !flag;
  flag ? (h1.textContent = 'üstteki ezildi') : (h1.textContent = "evet...öyle");
};




//! EKRANA BASTIRMA
showScreen()

function showScreen(){
  sepettekiler.forEach(({name,price, piece,img}) =>{

    // toFixed sayıyı stringe çevirir


    //* DESTRUCTING
    // const {name,price, piece,img} = ürün


    document.querySelector('#product-rowlari').innerHTML +=` <div class="card mb-3" style="max-width: 540px;">

    <div class="row g-0">
  
      <div class="col-md-5">
        <img src=${img} class=" w-100 rounded-start" alt="...">
      </div>
  
      <div class="col-md-7 ">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
               <div class="ürün-price">
                      <p class="text-warning h2">$
                        <span class="indirim-price">${(price*0.7).toFixed(2)}</span>
                        <span class="h5 text-dark text-decoration-line-through">${price}</span>
                      </p>
                    </div>
  
                    <div
                      class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                    >
                      <div class="adet-controller">
                        <button class="btn btn-secondary btn-sm minus">
                          <i class="fas fa-minus"></i>
                        </button>
                        <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                        <button class="btn btn-secondary btn-sm plus">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
  
                    <div class="ürün-removal mt-4">
                      <button class="btn btn-danger btn-sm w-100 remove-product">
                        <i class="fa-solid fa-trash-can me-2"></i>Remove
                      </button>
                    </div>
  
                    <div class="mt-2">
                      Ürün Toplam: $<span class="product-total">${(price*0.7*piece).toFixed(2)}</span>
                    </div>
        </div>
      </div>
    </div>
  </div>
    ` 
  })
}

//! browser'daki toplam fiyatların olduğu table'ın güncelleme fonksiyonu :

calculateCardTotal()


//! silme fonsiyonu
removeButton()

pieceButton()

function removeButton(){

  document.querySelectorAll('.remove-product').forEach((buton) =>{
    buton.onclick=()=>{
      // bu uzun yol yerine alttaki geçerli :  buton.parentElement.parentElement.parentElement.parentElement.remove()
      //& kartları ekrandan silme
      buton.closest('.card').remove()

      //& ismi uyuşmayanları sepette bırakarak tıklananı silme (console'da)
      sepettekiler = sepettekiler.filter((ürün) =>ürün.name != buton.closest('.card').querySelector('h5').textContent);
      
      calculateCardTotal()
    };
  });
}

//! adet değiştirme +  /  -   ve ürün toplam güncelleme
function pieceButton (){

  document.querySelectorAll('.adet-controller').forEach((kutu) =>{
    const plus = kutu.lastElementChild
    const minus = kutu.firstElementChild
    const adet = plus.previousElementSibling        
    // const adet = kutu.children[1]  bununla üstteki atama aynı

    //! plus butonuna basılınca:
    plus.onclick=()=>{
      //ekranda güncelleme:
      adet.textContent = Number(adet.textContent)+1

      //ürün sayısına göre yeni ürün toplam'ın ekranda görünmesi
      plus.closest('.card-body').querySelector('.product-total').textContent = 
      plus.closest('.card-body').querySelector('.indirim-price').textContent* adet.textContent

      calculateCardTotal()
    };

    minus.onclick=()=>{
      //ekranda güncelleme:
      adet.textContent = Number(adet.textContent)-1

      //ürün sayısına göre yeni ürün toplam'ın ekranda görünmesi
      minus.closest('.card-body').querySelector('.product-total').textContent = 
      minus.closest('.card-body').querySelector('.indirim-price').textContent* adet.textContent

      calculateCardTotal();


      //! adet 1 iken minus'a basılırsa ürün ekrandan da array'den de silinsin:
      if (adet.textContent < 1) {
        alert('You delete the card. If you want to see it again, refresh the page.')
        minus.closest('.card').remove()
      }
    };

  });
} 






//! card toplam değerlerini hesaplama:

function calculateCardTotal(){

  //! her bir card daki ürün toplam kısımları
  //!   querySelectorAll(), statik bir NodeList döndürür.
  //! ayrıntı için bkz:  https://softauthor.com/javascript-htmlcollection-vs-nodelist/
  // Dizi Değil!
  // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
  // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

  //? productsToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
  //?Reduce tam olarak Array istiyor, nodelist yeterli değil



  const a = document.querySelectorAll('.product-total');

  // console.log(Array.from(a));

 const productsTotal = Array.from(a).reduce((acc, item) =>acc+ Number(item.textContent), 0);
 document.querySelector('.productstoplam').textContent = productsTotal

 document.querySelector('.vergi').textContent = (productsTotal*tax).toFixed(2)
 // tax yukarıda tanımlandığı için direk tax yazdık. yoksa * dan sonra 0.18 de yazılabilir

 document.querySelector('.kargo').textContent = productsTotal ? shipping : 0;

 document.querySelector('.toplam').textContent = productsTotal>0 && (productsTotal+ productsTotal*tax +shipping).toFixed(2)

}
