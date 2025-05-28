import peaCarrotPasta from './assets/peaCarrotPasta.png';
import fennelSalad from './assets/fennelSalad.png';
import tunaPizza from './assets/tunaPizza.png';
import amPasta from './assets/3amPasta.png';
import couscous from './assets/couscous.png';
import cottagepie from './assets/cottagepie.png';
import risotto from './assets/risotto.png';
import pumpkinRisotto from './assets/pumpkinRisotto.png';
import mushroomPasta from './assets/mushroomPasta.png';
import pancake from './assets/pancake.png';
import hernari from './assets/hernari.png';





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
  id: 'pumpkin-risotto',
  title: "Pumpkin Risotto",
  servings: "For 4",
  image: pumpkinRisotto,
  tag: "bianca",
  ingredients: [
    "1 pumpkin",
    "1/2 onion",
    "Olive oil",
    "Vegetable broth",
    "Salt",
    "Pepper"
  ],
  instructions: `Sauté the onion in olive oil. Add the pumpkin and cook until it becomes soft and mushy. Add the rice and pour in enough broth to cover it. Continue adding broth as it absorbs, until the rice is fully cooked. Season with salt and pepper to taste.`
},

{
  id: 'mushroom-pasta',
  title: "Mushroom Pasta",
  servings: "For 4",
  image: mushroomPasta,
  tag: "bianca",
  ingredients: [
    "Mushrooms",
    "Heavy cream",
    "Pasta",
    "Garlic",
    "Olive oil",
    "Parsley"
  ],
  instructions: `Sauté the garlic and mushrooms in olive oil. Add the heavy cream and let it simmer. Boil the pasta according to the package instructions, then mix it with the mushroom sauce. Season with salt, pepper, and garnish with chopped parsley.`
}

,
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
},
  {
    id: 'mushroom-risotto',
    title: "Mushroom risotto",
    servings: "For 4 ",
    image: risotto,
    tag: "bianca",
    ingredients: [
      "1 can of mushrooms",
      "risotto rice",
      "3 tbsp Olive oil",
      "2 tbsp Honey",
      "Salt",
      "Pepper"
    ],
  instructions: `Sauté the onion in olive oil. Add the mushrooms and cook until it becomes soft and mushy. Add the rice and pour in enough broth to cover it. Continue adding broth as it absorbs, until the rice is fully cooked. Season with salt and pepper to taste.`
  }, {
  id: 'pancakes',
  title: "Finnish Pancakes",
  servings: "For 8",
  image: pancake, 
  tag: "laura",
  ingredients: [
    "1 liter milk",
    "5 dl wheat flour",
    "4 eggs",
    "1/2 dl sugar",
    "1 tsp salt",
    "50 g butter",
    "1/2 tsp vanilla sugar"
  ],
  instructions: `Mix the milk, flour, eggs, sugar, vanilla sugar, and salt together. Melt the butter and add it to the mixture. Let it rest for 30min. Grease a baking paper and pour the batter onto it in a baking dish. Bake at 200°C for 30–45 minutes / until the pancake is golden brown.`
},

 {
  id: 'peasoup',
  title: "Finnish Pea Soup",
  servings: "Serves 7",
  image: hernari,
  tag: "onni",
  ingredients: [
    "500 g dried peas",
    "2.5 liters water",
    "2 onions",
    "2 vegetable stock cubes",
    "Salt & pepper (to taste)"
  ],
  instructions: `Rinse the peas and soak them in water overnight. Boil them in the soaking water. Add chopped onions and stock cubes. Simmer gently for 3 hours, stirring occasionally. Season with salt and pepper. Add water if the soup is too thick. Simmer briefly and check seasoning before serving.`
}



];

export default recipes;
