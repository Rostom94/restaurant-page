export function Menu() {
  const content = document.querySelector("#content");

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");
  const li7 = document.createElement("li");
  const li8 = document.createElement("li");
  const li9 = document.createElement("li");
  const li10 = document.createElement("li");

  li1.innerText = "Grilled Salmon with Lemon Butter Sauce";
  li2.innerText = " Beef Boutguigon with Garlic Mashed Potatoes";
  li3.innerText = "Vegetarian Pad Thai with Tofu";
  li4.innerText = "Chicken Tikka Masala with Basmati Rice";
  li5.innerText = "Margherita Pizza with Fresh Basil";
  li6.innerText = "Shrimp Scampi Pasta";
  li7.innerText = "BBQ Pulled Pork Sandwiches with Coleslaw";
  li8.innerText = "Caprese Salad with Balsamic Glaze";
  li9.innerText = "Vegetable Stir-Fry with Teriyaki Sauce";
  li10.innerText = "Mushroom Risotto with Parmesan Cheese";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  ul.appendChild(li8);
  ul.appendChild(li9);
  ul.appendChild(li10);

  content.appendChild(ul);
}
