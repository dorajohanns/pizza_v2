
let selected = [];


const addOfferToBasket = (name) => {
    if (selected.length < 2 && selected.includes(name) == false) {
        selected.push(name);
    } else if (selected.includes(name) == true) {
        const removeArray = selected.filter(function (name1) {
            return name1 !== name;
        });
        selected = removeArray;
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
    if (selected.length === 2) {
        document.getElementById("offer-add").disabled = false;
    } else {
        document.getElementById("offer-add").disabled = true;
    }
}


const colorPizzaContainer = (name) => {
    const selectedPizza = document.getElementById(String(name));
    selectedPizza.style.backgroundColor = "#FFA500";
}

const uncolorPizzaContainer = (name) => {
    const selectedPizza = document.getElementById(String(name));
    selectedPizza.style.backgroundColor = "white";
}