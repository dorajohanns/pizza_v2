document.addEventListener("DOMContentLoaded", function() {
    const yourOrderItems = document.getElementById("your-order-items");

    Object.keys(sessionStorage).forEach(function(key) {
        let pizzaArray = JSON.parse(sessionStorage.getItem(key));

        let itemDiv = document.createElement("div");
        itemDiv.className = "checkout-item";

        let itemImage = document.createElement("img");
        itemImage.src = "../static/images/" + pizzaArray[2];
        itemImage.alt = pizzaArray[1];
        itemDiv.appendChild(itemImage);

        let itemName = document.createElement("h3");
        itemName.textContent = pizzaArray[1];
        itemDiv.appendChild(itemName);

        let itemPrice = document.createElement("span");
        itemPrice.textContent = "Price: " + pizzaArray[3] + " Kr";
        itemDiv.appendChild(itemPrice);

        let itemQuantity = document.createElement("span");
        itemQuantity.textContent = "Quantity: " + pizzaArray[4];
        itemDiv.appendChild(itemQuantity);

        yourOrderItems.appendChild(itemDiv);
    });
});