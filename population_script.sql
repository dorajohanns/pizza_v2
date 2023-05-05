Insert INTO menu_pizzatype (name) VALUES ('spicy');
Insert INTO menu_pizzatype (name) VALUES ('vegetarian');
Insert INTO menu_pizzatype (name) VALUES ('vegan');
Insert INTO menu_pizzatype (name) VALUES ('extra spicy');

Insert INTO menu_pizza (name, toppings, price, image) Values ('Margarita', 'chese, pizzasouce', 1200, 'margarita.jpg');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Pepperoni', 'chese, pizzasouce, pepperoni', 1500, 'pepperoni.jpg');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Hawaii', 'chese, pizzasouce, ham, pineapple', 1500, 'ananas.jpg');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Garlic bread', 'chese, garlic, oil', 1100, 'margarita.jpg');

Insert INTO menu_hastype (pizza_id, type_id) Values (0, 1);
Insert INTO menu_hastype (pizza_id, type_id) Values (1, 0);
Insert INTO menu_hastype (pizza_id, type_id) Values (3, 1);

Insert INTO offers_offers (name, description, price) Values ('Two for one', 'Buy two pizzas for the price of one', 0);
Insert INTO offers_offers (name, description, price) Values ('Tuesday offer', 'Get a pizza with two toppings for 1000kr', 1000);
