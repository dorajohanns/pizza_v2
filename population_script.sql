Insert INTO menu_pizzatype (name) VALUES ('spicy');
Insert INTO menu_pizzatype (name) VALUES ('vegetarian');
Insert INTO menu_pizzatype (name) VALUES ('vegan');
Insert INTO menu_pizzatype (name) VALUES ('extra-spicy');
INSERT into menu_pizzatype (name) values ('extra-toppings');

select * from menu_pizzatype;

delete from menu_pizzatype where id = 4;
delete from menu_pizzatype where id = 5;

Insert INTO menu_pizza (name, toppings, price, image) Values ('Margarita', 'chese, pizzasouce', 1200, 'margarita.jpg', 'Our margarita is a basic one, but very delicious. We have the amazing pizzasouce and chese on top with a very nice crust. This is a classic.');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Pepperoni', 'chese, pizzasouce, pepperoni', 1500, 'pepperoni.jpg', 'Our pepperoni pizza is very juicy and delicious. We have the amazing pizzasouce and chese on top with a very nice crust. On top of that we have our delicious pepperoni topping. This is a very good pizza for everybody.');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Hawaii', 'chese, pizzasouce, ham, pineapple', 1500, 'ananas.jpg', 'Our Hawai pizza is very good for pineapple lovers. We have the amazing pizzasouce and chese on top with a very nice crust. On top of that we have our delicious ham and tropical pineapple topping. This is a very good pizza for everybody who loves tropical.');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Garlic bread', 'chese, garlic, oil', 1100, 'garlic.jpg', 'Our Garlic bread pizza is very good for people who love juiciness. We have the amazing garlic oil and chese on top with a very nice oily crust. On top of that we have some garlic and more oil. This is a very good pizza for everybody.');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Meat and chese', 'chese, pepperoni, ham, pizzasouce', 1100, 'meatchese.jpg', 'Our Meat and chese pizza is very delicious and meaty. We have the amazing pizzasouce and chese on top with a very nice oily crust. On top of that we have ham and pepperoni for toppings. This is a very good pizza for everybody who loves meat and chese.');
Insert INTO menu_pizza (name, toppings, price, image) Values ('Mushroom and Ham', 'chese, mushrooms, ham, pizzasouce', 1200, 'mush.jpg', 'Our Mushroom and ham pizza is very delicious and special. We have the amazing pizzasouce and chese on top with a very nice oily crust. On top of that we have ham and mushrooms for toppings. This is a very good pizza for everybody who loves mushrooms.');
INSERT INTO menu_pizza (name, toppings, price, image, description) VALUES ('Spicy pepperoni', 'chese, pepperoni, spicy pepperoni, chilli, pizzasouce', 1300, 'blaze.jpeg', 'Our spicy pepperoni pizza is very spycy and juicy. The pizza has our very good pizza souce with cheese and a good crust. On top we have pepperony both normal and spicy and also our delicious chilli pepper spice. This pizza is perfect for those who love spicy food');
INSERT INTO menu_pizza (name, toppings, price, image, description) VALUES ('Vegan', 'chese, vegan chicken, spinich, chilli, pizzasouce', 1400, 'vegan.jpg', 'Our vegan pizza is very juicy. The pizza has our very good pizza souce with cheese and a good crust. On top we have chilli and our delicious chilli pepper and spinach. This pizza is perfect for vegan people');
INSERT INTO menu_pizza (name, toppings, price, image, description) VALUES ('Extra', 'chese, olives, ham, bell pepper, pizzasouce', 1400, 'extra.jpg', 'Our Extra pizza is very juicy for our hungriest guests. The pizza has our very good pizza souce with cheese and a good crust. On top we have bell pepper and our delicious olives and ham. This pizza is perfect for hungry people');


Insert INTO menu_hastype (pizza_id, type_id) Values (1, 2);
Insert INTO menu_hastype (pizza_id, type_id) Values (2, 1);
Insert INTO menu_hastype (pizza_id, type_id) Values (4, 2);
INSERT INTO menu_hastype (pizza_id, type_id) Values (5, 1);
INSERT into menu_hastype (pizza_id, type_id) VALUES (7, 6);
insert into menu_hastype (pizza_id, type_id) values (8, 3);
insert into menu_hastype (pizza_id, type_id) values (9, 7);
insert into menu_hastype (pizza_id, type_id) values (7, 6);



select *from menu_hastype;
delete from menu_hastype where id = 12;

Insert INTO offers_offers (name, description, price) Values ('Two for one', 'Buy two pizzas for the price of one', 1100);

INSERT INTO offers_offerimage (image, offer_id) VALUES ('twoforone.png', 5);

INSERT into checkout_countries (name) VALUES ('Germany');
INSERT into checkout_countries (name) VALUES ('Italy');
INSERT into checkout_countries (name) VALUES ('Iceland');
INSERT into checkout_countries (name) VALUES ('Sweden');
INSERT into checkout_countries (name) VALUES ('Denmark');
INSERT into checkout_countries (name) VALUES ('Norway');
INSERT into checkout_countries (name) VALUES ('Spain');
INSERT into checkout_countries (name) VALUES ('Portugal');
INSERT into checkout_countries (name) VALUES ('France');
INSERT into checkout_countries (name) VALUES ('England');
INSERT into checkout_countries (name) VALUES ('Ireland');
INSERT into checkout_countries (name) VALUES ('Scotland');
INSERT into checkout_countries (name) VALUES ('Wales');
INSERT into checkout_countries (name) VALUES ('Switzerland');
INSERT into checkout_countries (name) VALUES ('Netherlands');
INSERT into checkout_countries (name) VALUES ('Poland');
INSERT into checkout_countries (name) VALUES ('Belgium');
INSERT into checkout_countries (name) VALUES ('Austria');
INSERT into checkout_countries (name) VALUES ('Faroe Islands');
INSERT into checkout_countries (name) VALUES ('Croatia');
INSERT into checkout_countries (name) VALUES ('Finland');
INSERT into checkout_countries (name) VALUES ('Cyprus');
INSERT into checkout_countries (name) values ('Ukraine');
