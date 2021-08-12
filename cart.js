function openCartMenu () {
    document.getElementById("mySidebar").style.width = "310px";
    document.getElementById("btncart").style.marginRight = "310px";
}

function closeCartMenu () {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("btncart").style.marginRight= "0";
}

/* 

- Price (Get total price) - price * quantity
- Update cart total
- Add items to cart - Add Cart Rows - Item, Price, Quantity, Remove
- Remove items from cart 
- Go to checkout button (OnClick button to Checkout page)

*/