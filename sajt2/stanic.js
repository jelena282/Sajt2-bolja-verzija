
window.onload = FetchJason;

let loadProducts = function LoadProducts(products){
  
const productsContainer = document.getElementById('products');


for(let i = 0;i<products.length;i++){
    let product = products[i]
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;

    const nameElement = document.createElement('div');
    nameElement.classList.add('product-name');
    nameElement.textContent = product.name;

    const priceElement = document.createElement('div');
    priceElement.classList.add('product-price');
    priceElement.textContent = `$${product.price}`;

    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    productsContainer.appendChild(productElement);
}
}
function FetchJason(){
  
  fetch('shop.json').then( (response)=>response.json()  )
                    .then( (products)=> loadProducts(products) );
}


    



