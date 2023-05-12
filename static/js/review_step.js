document.addEventListener("DOMContentLoaded", function() {
  const yourOrderItems = document.getElementById("your-order-items");
  const totalPriceElement = document.getElementById("total-price");

  let totalPrice = 0;

  // Loop through sessionStorage
  Object.keys(sessionStorage).forEach(function(key) {
    if (key === "offers") {
      let offersArray = JSON.parse(sessionStorage.getItem(key));

      offersArray.forEach(function(offer) {
        let itemDiv = document.createElement("div");
        itemDiv.className = "checkout-item";

        let itemImage = document.createElement("img");
        itemImage.src = "../static/images/" + offer[1];
        itemImage.alt = offer[0];
        itemDiv.appendChild(itemImage);

        let itemName = document.createElement("h3");
        itemName.textContent = offer[0];
        itemDiv.appendChild(itemName);

        let itemPizzas = document.createElement("span");
        itemPizzas.textContent = offer[2];
        itemDiv.appendChild(itemPizzas)

        let itemPrice = document.createElement("span");
        itemPrice.textContent = "Price: " + offer[3] + " kr.";
        itemPrice.style.display = "block";
        itemDiv.appendChild(itemPrice);

        let itemQuantity = document.createElement("span");
        itemQuantity.textContent = "Quantity: " + offer[4];
        itemQuantity.style.display = "block";
        itemDiv.appendChild(itemQuantity);

        yourOrderItems.appendChild(itemDiv);

        totalPrice += offer[3] * offer[4];
      });
    } else if (key !== "offers") {
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
      itemPrice.textContent = "Price: " + pizzaArray[3] + " kr.";
      itemDiv.appendChild(itemPrice);

      let itemQuantity = document.createElement("span");
      itemQuantity.textContent = "Quantity: " + pizzaArray[4];
      itemQuantity.style.display = "block";
      itemDiv.appendChild(itemQuantity);

      yourOrderItems.appendChild(itemDiv);

      totalPrice += pizzaArray[3] * pizzaArray[4];
    }
  });
  totalPriceElement.textContent = "Total: " + totalPrice + " kr.";
});