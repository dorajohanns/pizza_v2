document.addEventListener("DOMContentLoaded", function() {
  const yourOrderItems = document.getElementById("your-order-items");
  const totalPriceElement = document.getElementById("total-price");

  let totalPrice = 0;

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
    } else if (!isNaN(key)) { //pizzas
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

  displayInfo();
});

const displayInfo = () => {

  const infodiv = document.getElementById("info-div")

  const name = sessionStorage.getItem("name");
  const nametag = document.createElement("span")
  nametag.textContent = "Full name: " + name;
  infodiv.appendChild(nametag);

  const streetName = sessionStorage.getItem("streetName");
  const streetNameTag = document.createElement("span")
  streetNameTag.textContent = "Street name: " + streetName ;
  infodiv.appendChild(streetNameTag);

  const houseNumber = sessionStorage.getItem("houseNumber");
  const houseNumberTag = document.createElement("span")
  houseNumberTag.textContent = "House number: " + houseNumber ;
  infodiv.appendChild(houseNumberTag);

  const city = sessionStorage.getItem("city");
  const cityTag = document.createElement("span")
  cityTag.textContent = "City: " + city ;
  infodiv.appendChild(cityTag);

  const country = sessionStorage.getItem("country");
  const countryTag = document.createElement("span")
  countryTag.textContent = "Country: " + country ;
  infodiv.appendChild(countryTag);

  const postalCode = sessionStorage.getItem("postalCode");
  const postalCodeTag = document.createElement("span")
  postalCodeTag.textContent = "Street name: " + postalCode ;
  infodiv.appendChild(postalCodeTag);

  const cardholderName = sessionStorage.getItem("cardholderName");
  const cardholderNameTag = document.createElement("span")
  cardholderNameTag.textContent = "Cardholder name: " + cardholderName ;
  infodiv.appendChild(cardholderNameTag);

  const cardNumber = sessionStorage.getItem("cardNumber");
  const cardNumberTag = document.createElement("span")
  cardNumberTag.textContent = "Card number: " + cardNumber ;
  infodiv.appendChild(cardNumberTag);





}

const saveContactInformation = () => {
  const name = document.getElementById("id_fullName").value;
  sessionStorage.setItem("name", name);

  const streetName = document.getElementById("id_streetName").value;
  sessionStorage.setItem("streetName", streetName);

  const houseNumber = document.getElementById("id_houseNumber").value
  sessionStorage.setItem("houseNumber", houseNumber);

  const city = document.getElementById("id_city").value
  sessionStorage.setItem("city", city);

  const country = document.getElementById("id_country").value
  sessionStorage.setItem("country", country);

  const postalCode = document.getElementById("id_postalCode").value
  sessionStorage.setItem("postalCode", postalCode);


}

const savePaymentInformation = () => {
  const cardholderName = document.getElementById("id_cardholderName").value;
  sessionStorage.setItem("cardholderName", cardholderName);

  const cardNumber = document.getElementById("id_cardNumber").value;
  sessionStorage.setItem("cardNumber", cardNumber);

  const expirationDate = document.getElementById("id_expirationDate").value
  sessionStorage.setItem("expirationDate", expirationDate);

  const cvc = document.getElementById("id_cvc").value
  sessionStorage.setItem("cvc", cvc);

}

const clearData = () => {
  sessionStorage.clear();
}