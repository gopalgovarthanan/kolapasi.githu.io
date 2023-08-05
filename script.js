// Function to search for products
function search() {
    var input, filter, boxes, text, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName('box');

    for (i = 0; i < boxes.length; i++) {
        text = boxes[i].getElementsByTagName('p')[0];
        if (text) {
            if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
                boxes[i].style.display = '';
            } else {
                boxes[i].style.display = 'none';
            }
        }
    }
}

// Function to view the cart
function viewCart() {
    var cartBox = document.getElementById('cart_box');
    cartBox.style.display = 'block';
}

// Function to hide the cart
function hideCart() {
    var cartBox = document.getElementById('cart_box');
    cartBox.style.display = 'none';
}

// Function to hide the cart from individual product box
function hideCart1() {
    var cartBox = document.getElementById('cart_box1');
    cartBox.style.display = 'none';
}

// Function to add item to cart
function addToCart(name, price, quantityId) {
    var cartItems = document.getElementById('cartItems');
    var quantitySelect = document.getElementById(quantityId);
    var quantityValue = parseInt(quantitySelect.value);

    var itemPrice = price * quantityValue;

    var li = document.createElement('li');
    li.innerHTML = 'Item: ' + name + ', Price: Rs.' + itemPrice;
    cartItems.appendChild(li);

    updateTotalPrice(itemPrice);
}

// Function to update the total price
function updateTotalPrice(itemPrice) {
    var totalPriceSpan = document.getElementById('totalPrice');
    var totalPrice = parseInt(totalPriceSpan.innerHTML);
    totalPrice += itemPrice;
    totalPriceSpan.innerHTML = totalPrice;
}
