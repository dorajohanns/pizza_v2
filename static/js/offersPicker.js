
let selected = [];

const selectPizza = (name) => {
    if (selected.length < 2 && selected.includes(name) == false) {
        selected.push(name);
    } else if (selected.includes(name) == true) {
        selected = selected.filter(function (name1) {
            return name1 !== name;
        });
        uncolorPizzaContainer(name);
    }
    updatePizzas();
}

const updatePizzas = () => {
    selected.map((name) => {
        colorPizzaContainer(name)
    });
    buttonUpdate();
}

const buttonUpdate = () => {
    document.getElementById("offer-add").disabled = selected.length !== 2;
}

const colorPizzaContainer = (name) => {
    const selectedPizza = document.getElementById(String(name));
    selectedPizza.style.backgroundColor = "#FFA500";
}

const uncolorPizzaContainer = (name) => {
    const selectedPizza = document.getElementById(String(name));
    selectedPizza.style.backgroundColor = "white";
}

const addToBasketOffer = (list) => {
    const offerList = JSON.parse(sessionStorage.getItem("offers"));
    const offerExists = sameOfferExists();
    if (!offerExists) {
        offerList.push([list[0], list[1], selected, list[2], 1]);
        sessionStorage.setItem("offers", JSON.stringify(offerList));
        updateBasketOffers();
        updateBasket();
    }
    openNav();
    selected.map((offer) => {
        uncolorPizzaContainer(offer);
    });
    selected = [];
}

const updateBasketOffers = () => {
    const offerList = JSON.parse(sessionStorage.getItem("offers"));
    const offerContainer = document.getElementById("cart-offers");
    offerContainer.innerHTML = "";
    offerList.map((offer) => {
        let offerdiv = document.createElement("div");

        let nametag = document.createElement("h1");
        nametag.textContent = offer[0];

        let imgtag = document.createElement("img");
        imgtag.alt = offer[0];
        imgtag.src = "../static/images/" + offer[1];

        let includedPizzas = document.createElement("span")
        includedPizzas.textContent = offer[2][0] + " and " + offer[2][1]

        let priceTag = document.createElement("h3");
        priceTag.textContent = offer[3] + " Kr";

        let quantityCounter = document.createElement("div");
        quantityCounter.id = "quantity-counter";
        let minus = document.createElement("button");
        minus.textContent = "-";
        minus.onclick = () => removeOffer(offer[2], false);
        minus.className = "quantity-btn"
        let quantity = document.createElement("span");
        quantity.textContent = offer[4];
        quantity.className = "quantity"
        let plus = document.createElement("button");
        plus.textContent = "+";
        plus.onclick = () => increaseOffer(offer[2]);
        plus.className = "quantity-btn"
        quantityCounter.appendChild(minus);
        quantityCounter.appendChild(quantity);
        quantityCounter.appendChild(plus);

        let delbtn = document.createElement("button");
        delbtn.onclick = () => removeOffer(selected, true);
        delbtn.textContent = "remove item from basket";
        delbtn.id = "delbtn";

        offerdiv.appendChild(nametag);
        offerdiv.appendChild(imgtag);
        offerdiv.appendChild(includedPizzas);
        offerdiv.appendChild(priceTag);
        offerdiv.appendChild(quantityCounter);
        offerdiv.appendChild(delbtn);

        offerdiv.id = "pizza-container";
        offerContainer.appendChild(offerdiv);
    })
}

const removeOffer = (pizzas, removeAll) => {
    const offers = JSON.parse(sessionStorage.getItem("offers"));
    offers.map((offer, index) => {
        if (offer[2][0] == pizzas[0] && offer[2][1] == pizzas[1]) {
            if (offer[4] == 1 || removeAll) {
                offers.splice(index, 1);
            } else {
                offer[4] -= 1;
            }
        }
    });
    sessionStorage.setItem("offers", JSON.stringify(offers));
    updateBasket();
    updateBasketOffers();
}

const increaseOffer = (pizzas) => {
    selected = pizzas
    sameOfferExists();
    updateBasketOffers();
    updateBasket();
}

const sameOfferExists = () => {
    let exists = false
    let storage = JSON.parse(sessionStorage.getItem("offers"))
    storage.map((offer) => {
        if (offer[2][0] == selected[0] && offer[2][1] == selected[1]) {
            exists = true;
            offer[4] += 1;
            sessionStorage.setItem("offers", JSON.stringify(storage));
        }
    });
    return exists;
}