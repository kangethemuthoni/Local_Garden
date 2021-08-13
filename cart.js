function openCartMenu () {
    document.getElementById("mySidebar").style.width = "310px";
}

function closeCartMenu () {
    document.getElementById("mySidebar").style.width = "0";
}

var count = 0;

// start - Remove Cart Items Section

// Get all buttons
var removeCartItemButtons = document.getElementsByClassName("btn-danger");

// Iterate all buttons and add an event listener
for (var i = 0; i < removeCartItemButtons.length; i++) {

    var removeCartItemButton = removeCartItemButtons[i];
    removeCartItemButton.addEventListener("click", removeCartItem);
}

// The function to remove cart item
function removeCartItem (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    updateCartTotal ();

    // Update Cart Icon
    count--;
    document.getElementById("cartspan").innerText = count;
}

// end - Remove Cart Items Section


// start - Quantity Changed Function

var quantityInputs = document.getElementsByClassName("cart-quantity-input");

for (var i = 0; i < quantityInputs.length; i++) {

    var quantityInput = quantityInputs[i];
    quantityInput.addEventListener("change", quantityChanged);
}

function quantityChanged (event) {
    var input = event.target;

    // Cart Quantity Check (Should not be less than one)
    // If the change event changes the value to one that's not a number or one that is less than or equal 
    // to zero, then the value is kept constant at 1
    if (isNaN (input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateCartTotal ();

    // Update Cart Icon 
    count++;
    document.getElementById("cartspan").innerText = count;

}

// end - Quantity Changed Function


// start - Update Cart Total Section

function updateCartTotal () {

    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var price = parseFloat(priceElement.innerText.replace("Kes ", ""));
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var quantity = quantityElement.value;
        total = total + (price * quantity);

    }

    total = Math.round(total * 100) / 100; // Two decimal points
    document.getElementsByClassName("cart-total-price")[0].innerText = "Kes " + total;

}

// end - Update Cart Total Section


// start - Add to Cart Section

var addItemToCartButtons = document.getElementsByClassName("shop-item-button");

for (var i = 0; i < addItemToCartButtons.length; i++) {

    var addItemToCartButton = addItemToCartButtons[i];
    addItemToCartButton.addEventListener("click", addItemToCartClicked);

}

// Getting the title and price to be used in the addItemToCart function
// Use the button that triggers the event, and get the parent elements in order to get title and price
function addItemToCartClicked (event) {
    var button = event.target;
    var shopItem = button.parentElement;

    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;

    console.log(title, price);

    addItemToCart(title, price);
    updateCartTotal();

}

function addItemToCart (title, price) {

    // Create a div named cartRow
    var cartRow = document.createElement("div");
    // Add the cart-row class to the div created
    cartRow.classList.add("cart-row");

    // Get item titles 
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");

    // Check by title whether Cart Items have already been added to cart 
    for (var i = 0; i < cartItemNames.length; i++) {

        cartItemName = cartItemNames[i];

        if (cartItemName.innerText == title) {

            alert("This Item is already added to the Cart!");
            return;

        }
    }

    // Adding created div cart-row to cart
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>

        <span class="cart-price cart-column">${price}</span>

        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">x</button>
        </div>
    `

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);

    // Add event listeners to the new created div cart-row
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);

    // Update Cart Icon 
    count++;
    document.getElementById("cartspan").innerText = count;

}

// end - Add to Cart Section