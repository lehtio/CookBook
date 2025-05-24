import peaCarrotPasta from './assets/peaCarrotPasta.png';
import fennelSalad from './assets/fennelSalad.png';
import tunaPizza from './assets/tunaPizza.png';
import amPasta from './assets/3amPasta.png';
import couscous from './assets/couscous.png';
import cottagepie from './assets/cottagepie.png';



const recipes = [
  {
    id: 'carrot-pea-pasta',
    title: "Carrot Pea Pasta",
    servings: "For 3",
    image: peaCarrotPasta,
    tag: "bianca",
    ingredients: [
      "5 carrots",
      "1 can of peas",
      "Olive oil",
      "300g pasta",
      "1 onion"
    ],
    instructions: `Chop the onion and sauté it in olive oil until translucent. Add finely chopped carrots and peas to the pan and cook until tender. Transfer to a blender and blend into a creamy sauce. Add water if needed. Cook the pasta. Mix the sauce with the pasta, and add salt & pepper.`
  },
  {
    id: 'fennel-salad',
    title: "Fennel Salad",
    servings: "For 4 ",
    image: fennelSalad,
    tag: "bianca",
    ingredients: [
      "3 Fennels",
      "1 Lemon",
      "3 tbsp Olive oil",
      "2 tbsp Honey",
      "Salt",
      "Pepper"
    ],
    instructions: `Slice the fennels into thin strips and place them in a serving bowl. Add the juice of one lemon and the honey. Generously add olive oil, pepper, and salt to taste. Mix well and serve.`
  },
  {
    id: 'frozen-pizza',
    title: "Frozen Pizza",
    servings: "For 1 ",
    image: tunaPizza,
    tag: "miraah",
    ingredients: [
      "1 frozen pizza"
    ],
    instructions: `Heat oven according to the package instructions. Place the pizza on a tray and bake until golden and bubbling. Enjoy.`
  },
  {
    id: '3am-Pasta',
    title: "3am Pasta",
    servings: "For 1 (drunk)",
    image: amPasta,
    tag: "lily",
    ingredients: [
      "pasta",
      "Optional toppings",
      "1 can of tomato sauce"
    ],
    instructions: `If you've made it back home, boil the pasta and add a can of tomato sauce. Top with some Parmesan ( if you're still standing after the night out.)`
  },
  {
    id: 'CouscousSalad',
    title: "Couscous Salad",
    servings: "For 4 ",
    image: couscous,
    tag: "laura",
    ingredients: [
      "2dl couscous",
      "500g tomatoes",
      "1 feta block",
      "something green",
      "1 paprika",
      "1 red onion"

    ],
    instructions: `Prepare the couscous according to the package instructions. Chop the onion, feta, and other vegetables, and mix them in a bowl. Once the couscous is ready, add it to the bowl and combine everything well. Drizzle with a little olive oil and lemon juice.`
  },
  {
  id: 'cottage-pie',
  title: "Cottage Pie",
  servings: "For 6",
  image: cottagepie, 
  tag: "Izzy",
  ingredients: [
    "800g Ground beef",
    "1 Onion",
    "2 Carrots",
    "2 cloves Garlic",
    "2tbsp Tomato paste",
    "200ml Beef stock",
    "800g Potatoes",
    "50g Butter",
    "100ml Milk"
  ],
instructions: `Boil and mash the potatoes with butter and milk. Cook onion, carrots, and garlic in a pan. Add ground beef, tomato paste, thyme, and beef stock. Let simmer. Layer meat in a baking dish, top with potatoes. Bake at 200°C  for 20min.`
}

];

export default recipes;
