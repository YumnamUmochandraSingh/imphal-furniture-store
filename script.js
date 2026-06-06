let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price, image){

    cart.push({
    product: product,
    price: price,
    image: image,
    quantity: 1
});

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

alert(product + " added to cart!");
}

function displayCart(){

    let cartItems =
        document.getElementById("cartItems");

    if(!cartItems){
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(function(item,index){

    let li =
    document.createElement("div");

li.classList.add("cart-item");

   li.innerHTML =
`
<div class="cart-product">

    <img src="${item.image}" class="cart-image">

    <div>
        <h4>${item.product}</h4>

        <p>₹${item.price}</p>

        <button onclick="decreaseQuantity(${index})">-</button>

        ${item.quantity}

        <button onclick="increaseQuantity(${index})">+</button>
    </div>

    <button onclick="removeItem(${index})">
        Remove
    </button>

</div>
`;
    cartItems.appendChild(li);

   total += item.price * item.quantity;
});

    document.getElementById("totalPrice").innerHTML =
        "Total: ₹" + total;
}
function updateCartCount(){

    let count = 0;

    cart.forEach(function(item){

        count += item.quantity;

    });

    let cartCount =
        document.getElementById("cartCount");

    if(cartCount){

        cartCount.innerText = count;

    }
}

function checkout(){

    alert("Proceeding to Checkout");

    window.location.href = "order.html";
}

displayCart();
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}
function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}
function clearCart(){

    localStorage.removeItem("cart");

    cart = [];

    location.reload();
}
updateCartCount();