document.addEventListener('DOMContentLoaded', function() {
    // Ürünlerin bir dizisi
    const products = [
        { name: 'Ürün  1', price:  30, oldPrice:  25, quantity:  1 },
        { name: 'Ürün  2', price:  50, oldPrice:  40, quantity:  1 },
        { name: 'Ürün  3', price:  70, oldPrice:  55, quantity:  1 }
    ];

    // Sepetin bir dizisi
    let cart = [];

    // Ürünleri sayfaya ekler
    function displayProducts() {
        const productsContainer = document.getElementById('products');
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.price} TL</p>
                <p class="oldPrice">${product.oldPrice} TL</p>
                <div class="quantityControl">
                    <button class="decreaseBtn">-</button>
                    <span class="quantity">${product.quantity}</span>
                    <button class="increaseBtn">+</button>
                </div>
                <button class="removeBtn">Ürünü Sil</button>
                <p class="productTotal">Product Total: ${product.price * product.quantity} TL</p>
            `;
            
            // productsContainer.appendChild(productDiv);
            
            // Artırma ve Azaltma butonlarına event listener ekler
            productDiv.querySelector('.increaseBtn').addEventListener('click', function() {
                product.quantity++;
                productDiv.querySelector('.quantity').textContent = product.quantity;
                updateProductTotal(productDiv);
            });
            
            productDiv.querySelector('.decreaseBtn').addEventListener('click', function() {
                if (product.quantity >  1) {
                    product.quantity--;
                    productDiv.querySelector('.quantity').textContent = product.quantity;
                    updateProductTotal(productDiv);
                }
            });
            
            // Ürünü sepetten  çıkarma butonuna event listener ekler
            productDiv.querySelector('.removeBtn').addEventListener('click', function() {
                productDiv.remove();
                cart = cart.filter(item => item.id !== product.id);
                updateCartTotal();
            });
        });
    }

    // Ürün toplamını günceller
    function updateProductTotal(productDiv) {
        const total = productDiv.querySelector('.quantity').textContent * productDiv.querySelector('p').textContent;
        productDiv.querySelector('.productTotal').textContent = `Product Total: ${total} TL`;
    }

    // Sepet toplamını günceller
    function updateCartTotal() {
        const cartTotalElement = document.querySelector('#cart .total');
        let total =  0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        cartTotalElement.textContent = `Toplam Fiyat: ${total} TL`;
    }

    // Sayfanın yüklemesi tamamlandığında  ürünleri ve sepeti göster
    window.onload = displayProducts;
});


const r = [9,8,7,6][1,2];
console.log(r);