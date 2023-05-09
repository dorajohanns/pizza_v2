const addToBasket = (list) => {
    if (sessionStorage.getItem(list[0]) == null) {
        list.push(1)
        sessionStorage.setItem(list[0], JSON.stringify(list));
    } else {
        let newList = JSON.parse(sessionStorage.getItem(list[0]));
        newList[4] += 1
        sessionStorage.setItem(list[0], JSON.stringify(newList));
    }
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
    let priceSum = 0;

    Object.keys(sessionStorage).map((key) => {
        let pizzaArray = JSON.parse(sessionStorage.getItem(key))
        console.log(pizzaArray);

        let pizzadiv = document.createElement("div");

        let nametag = document.createElement("h1");
        nametag.textContent = pizzaArray[1]

        let imgtag = document.createElement("img");
        imgtag.alt = pizzaArray[1];
        imgtag.src = "../static/images/" + pizzaArray[2]

        let priceTag = document.createElement("h3");
        priceTag.textContent = pizzaArray[3] + " Kr";

        let quantityCounter = document.createElement("div");
        quantityCounter.id = "quantity-counter";
        let minus = document.createElement("button");
        minus.textContent = "-";
        minus.onclick = () => decreaseQuantity(pizzaArray[0]);
        minus.className = "quantity-btn"
        let quantity = document.createElement("span");
        quantity.textContent = pizzaArray[4];
        quantity.className = "quantity"
        let plus = document.createElement("button");
        plus.textContent = "+";
        plus.onclick = () => increaseQuantity(pizzaArray[0]);
        plus.className = "quantity-btn"
        quantityCounter.appendChild(minus);
        quantityCounter.appendChild(quantity);
        quantityCounter.appendChild(plus);


        let delbtn = document.createElement("button");
        delbtn.onclick = () => removeFromBasket(key);
        delbtn.textContent = "remove item from cart";
        delbtn.id = "delbtn";

        pizzadiv.appendChild(nametag);
        pizzadiv.appendChild(imgtag);
        pizzadiv.appendChild(priceTag);
        pizzadiv.appendChild(quantityCounter);
        pizzadiv.appendChild(delbtn);

        pizzadiv.id = "pizza-container"
        cart.appendChild(pizzadiv);
        priceSum += (pizzaArray[3] * pizzaArray[4]);
    });

    const priceTag = document.getElementById("priceSum");
    priceTag.textContent = "Total: " + priceSum + " Kr";
    basketStatus();
}

const clearCart = () => {
    sessionStorage.clear();
    updateBasket();
}

const decreaseQuantity = (id) => {
    const pizzaArray = JSON.parse(sessionStorage.getItem(id));
    if (pizzaArray[4] == 1) {
        removeFromBasket(id)
    } else {
        pizzaArray[4] -= 1
        sessionStorage.setItem(id, JSON.stringify(pizzaArray));
    }
    updateBasket()
}

const increaseQuantity = (id) => {
    const pizzaArray = JSON.parse(sessionStorage.getItem(id));
    pizzaArray[4] += 1
    sessionStorage.setItem(id, JSON.stringify(pizzaArray));
    updateBasket()
}

const basketStatus = () => {
    if (Object.keys(sessionStorage).length === 0) {
        document.getElementById("empty-cart").style.display = "block";
        document.getElementById("clear-cart").style.display = "none";
        document.getElementById("non-empty-cart").style.display = "none";
        document.getElementById("basket-item-nr").style.display = "none";

    } else {
        document.getElementById("empty-cart").style.display = "none";
        document.getElementById("clear-cart").style.display = "block";
        document.getElementById("non-empty-cart").style.display = "inline-block";
        const basketQuantity = document.getElementById("basket-item-nr")
        basketQuantity.textContent = Object.keys(sessionStorage).length;
        basketQuantity.style.display = "block";
    }
}

function openNav() {
  document.getElementById("cartNav").style.width = "30%";
  updateBasket();
}

function closeNav() {
  document.getElementById("cartNav").style.width = "0%";
}

basketStatus()