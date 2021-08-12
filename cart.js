function openCartMenu () {
    document.getElementById("mySidebar").style.width = "310px";
    document.getElementById("btncart").style.marginRight = "310px";
}

function closeCartMenu () {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("btncart").style.marginRight= "0";
}

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
}

// end - Remove Cart Items Section


// start - Cart Quantity Check (Should not be less than one)

var quantityInputs = document.getElementsByClassName("cart-quantity-input");

for (var i = 0; i < quantityInputs.length; i++) {

    var quantityInput = quantityInputs[i];
    quantityInput.addEventListener("change", quantityChanged);
}

function quantityChanged (event) {
    var input = event.target;

    // If the change event changes the value to one that's not a number or one that is less than or equal 
    // to zero, then the value is kept constant at 1
    if (isNaN (input.value) || input.value <= 0) {
        input.value = 1;
    }
}

// end - Cart Quantity Check (Should not be less than one)


// start - Update Cart Total Section



// end - Update Cart Total Section