const addToBasket = (list) => {
    sessionStorage.setItem(list[0], JSON.stringify(list));
    updateBasket();
    openNav();
}

const removeFromBasket = (id) => {
    sessionStorage.removeItem(id);
    updateBasket();
}

const updateBasket = () => {
    const cart = document.getElementById("cart-pizzas");
    cart.innerHTML = "";
    Object.keys(sessionStorage).map((key) => {
        let pizzaArray = sessionStorage.getItem(key).split(",");
        let pizzadiv = document.createElement("div");
        let nametag = document.createElement("h1");
        nametag.textContent = pizzaArray[1].replaceAll('"', '');
        let imgtag = document.createElement("img");
        imgtag.alt = pizzaArray[1];
        imgtag.src = "../static/images/" + pizzaArray[2].replaceAll('"', '');
        let priceTag = document.createElement("h3");
        priceTag.textContent = pizzaArray[3].replace(']', '') + " Kr";
        let delbtn = document.createElement("button");
        delbtn.onclick = () => removeFromBasket(key);
        delbtn.textContent = "remove item from cart";
        delbtn.id = "delbtn";
        pizzadiv.appendChild(nametag);
        pizzadiv.appendChild(imgtag);
        pizzadiv.appendChild(priceTag);
        pizzadiv.appendChild(delbtn);
        pizzadiv.id = "pizza-container"
        cart.appendChild(pizzadiv);
    })
}

function openNav() {
  document.getElementById("cartNav").style.width = "30%";
  updateBasket();
}

function closeNav() {
  document.getElementById("cartNav").style.width = "0%";
}

