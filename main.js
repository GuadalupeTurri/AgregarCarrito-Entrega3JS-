
      //Vinculo html con dom
  document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
    const cartItemsContainer = document.getElementById("cart-items");

    const productos = [
        { id: 1, nombre: 'Collar', precio: 8000,},
        { id: 2, nombre: 'Cama', precio: 30000 },
        { id: 3, nombre: 'Juguete', precio: 10000 },
        { id: 4, nombre: 'Correa', precio: 5000 },
        { id: 5, nombre: 'Comedero', precio: 3500 },
        { id: 6, nombre: 'Rascador', precio: 14000 },
    ];
 //Va por cada producto y crea un elemento div con el nombre, precio y el boton para agregar
    productos.forEach(producto => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="add-to-cart" data-id="${producto.id}">Agregar al carrito</button>
        `;
//agrega la linea de codigo a html
        productsContainer.appendChild(productElement);
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const productId = event.target.dataset.id;
        const product = productos.find(p => p.id == productId);

        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(product);
        localStorage.setItem("cart", JSON.stringify(cartItems));

        console.log("Producto agregado al carrito:", product);

        const cartItemElement = document.createElement("li");
        cartItemElement.textContent = `${product.nombre} - $${product.precio}`;

        cartItemsContainer.appendChild(cartItemElement);
    }
});