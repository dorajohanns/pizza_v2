const addToBasket = (list) => {
    sessionStorage.setItem(list[0], JSON.stringify(list));
    updateBasket();
    openNav();
}

const updateBasket = () => {
    const cart = document.getElementById("cart-pizzas");
    cart.innerHTML = "";
    Object.keys(sessionStorage).map((key) => {
        let pizzaArray = sessionStorage.getItem(key).split(",");
        let pizzadiv = document.createElement("div");
        let nametag = document.createElement("h2");
        nametag.textContent = pizzaArray[1].replaceAll('"', '');
        let imgtag = document.createElement("img");
        imgtag.alt = pizzaArray[1];
        imgtag.src = "../static/images/" + pizzaArray[2].replaceAll('"', '');
        let priceTag = document.createElement("p");
        priceTag.textContent = pizzaArray[3].replace(']', '');
        let delbtn = document.createElement("button");
        delbtn.textContent = "remove item from cart";
        pizzadiv.appendChild(nametag);
        pizzadiv.appendChild(imgtag);
        pizzadiv.appendChild(priceTag);
        pizzadiv.appendChild(delbtn);
        cart.appendChild(pizzadiv);
    })
}

function openNav() {
  document.getElementById("cartNav").style.width = "30%";
}