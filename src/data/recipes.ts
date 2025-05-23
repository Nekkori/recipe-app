export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Expert';
  cuisine: string;
  dietary: string[];
  ingredients: {
    name: string;
    quantity: string;
  }[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  author: string;
  isFavorite: boolean;
  rating?: number;
  seasonal?: boolean;
  mealType?: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish loaded with garlic and parmesan flavors, perfect for a quick weeknight dinner.',
    image: '/images/placeholders/food1.jpg',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    dietary: ['Vegetarian'],
    ingredients: [
      { name: 'Fettuccine pasta', quantity: '12 oz' },
      { name: 'Butter', quantity: '4 tbsp' },
      { name: 'Garlic cloves, minced', quantity: '4' },
      { name: 'Heavy cream', quantity: '2 cups' },
      { name: 'Parmesan cheese, grated', quantity: '1 cup' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Black pepper', quantity: 'to taste' },
      { name: 'Fresh parsley, chopped', quantity: '2 tbsp' }
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Add pasta and cook according to package directions until al dente. Reserve 1/2 cup pasta water before draining.',
      'In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.',
      'Pour in heavy cream and bring to a simmer. Cook for 3-4 minutes until it starts to thicken.',
      'Reduce heat to low and whisk in the grated parmesan cheese until melted and smooth.',
      'Add the drained pasta to the sauce and toss to coat. If the sauce is too thick, add a splash of reserved pasta water.',
      'Season with salt and black pepper to taste.',
      'Garnish with chopped parsley before serving.'
    ],
    nutrition: {
      calories: 580,
      protein: 18,
      carbs: 42,
      fat: 38
    },
    author: 'Chef Maria',
    isFavorite: false
  },
  {
    id: '2',
    name: 'Spicy Thai Basil Chicken',
    description: 'An aromatic stir-fry with chicken, Thai basil, and chilies that comes together in minutes.',
    image: '/images/placeholders/food2.jpg',
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    difficulty: 'Intermediate',
    cuisine: 'Thai',
    dietary: ['Dairy-free'],
    ingredients: [
      { name: 'Chicken breast, diced', quantity: '1 lb' },
      { name: 'Thai basil leaves', quantity: '1 cup' },
      { name: 'Thai chili peppers, sliced', quantity: '3-4' },
      { name: 'Garlic cloves, minced', quantity: '4' },
      { name: 'Shallots, thinly sliced', quantity: '3' },
      { name: 'Vegetable oil', quantity: '2 tbsp' },
      { name: 'Oyster sauce', quantity: '2 tbsp' },
      { name: 'Soy sauce', quantity: '1 tbsp' },
      { name: 'Fish sauce', quantity: '1 tbsp' },
      { name: 'Sugar', quantity: '1 tsp' },
      { name: 'Jasmine rice, cooked', quantity: 'for serving' }
    ],
    instructions: [
      'Heat oil in a wok or large skillet over high heat.',
      'Add garlic, shallots, and chilies. Stir-fry for about 30 seconds until fragrant.',
      'Add chicken and cook for 4-5 minutes until browned and almost cooked through.',
      'Mix oyster sauce, soy sauce, fish sauce, and sugar in a small bowl, then pour into the pan.',
      'Cook for another 2 minutes until chicken is fully cooked and sauce has thickened slightly.',
      'Turn off the heat and fold in the Thai basil leaves until just wilted.',
      'Serve immediately over jasmine rice.'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbs: 15,
      fat: 22
    },
    author: 'Chef Somboon',
    isFavorite: false
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate dessert with a molten center that oozes when you cut into it.',
    image: '/images/placeholders/food3.jpg',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: 'Intermediate',
    cuisine: 'French',
    dietary: ['Vegetarian'],
    ingredients: [
      { name: 'Dark chocolate, chopped', quantity: '6 oz' },
      { name: 'Unsalted butter', quantity: '1/2 cup' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Egg yolks', quantity: '2' },
      { name: 'Granulated sugar', quantity: '1/4 cup' },
      { name: 'All-purpose flour', quantity: '2 tbsp' },
      { name: 'Salt', quantity: '1/4 tsp' },
      { name: 'Vanilla extract', quantity: '1 tsp' },
      { name: 'Powdered sugar', quantity: 'for dusting' },
      { name: 'Vanilla ice cream', quantity: 'for serving (optional)' }
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Butter and lightly flour four 6-oz ramekins.',
      'Melt chocolate and butter together in a microwave or double boiler until smooth.',
      'In a separate bowl, whisk together eggs, egg yolks, sugar, and vanilla until light and fluffy.',
      'Fold the chocolate mixture into the egg mixture until combined.',
      'Gently fold in flour and salt until just combined.',
      'Divide the batter among the ramekins and place on a baking sheet.',
      'Bake for 12 minutes until the edges are set but the center is still soft.',
      'Let cool for 1 minute, then carefully invert onto serving plates.',
      'Dust with powdered sugar and serve immediately, with ice cream if desired.'
    ],
    nutrition: {
      calories: 380,
      protein: 6,
      carbs: 28,
      fat: 28
    },
    author: 'Chef Pierre',
    isFavorite: false
  },
  {
    id: '4',
    name: 'Mediterranean Quinoa Salad',
    description: 'A refreshing and nutritious salad packed with Mediterranean flavors and protein-rich quinoa.',
    image: '/images/placeholders/food4.jpg',
    prepTime: 20,
    cookTime: 15,
    servings: 6,
    difficulty: 'Easy',
    cuisine: 'Mediterranean',
    dietary: ['Vegetarian', 'Gluten-Free'],
    ingredients: [
      { name: 'Quinoa, rinsed', quantity: '1 cup' },
      { name: 'Water or vegetable broth', quantity: '2 cups' },
      { name: 'Cherry tomatoes, halved', quantity: '1 cup' },
      { name: 'Cucumber, diced', quantity: '1 medium' },
      { name: 'Red bell pepper, diced', quantity: '1' },
      { name: 'Red onion, finely diced', quantity: '1/2 cup' },
      { name: 'Kalamata olives, sliced', quantity: '1/2 cup' },
      { name: 'Feta cheese, crumbled', quantity: '3/4 cup' },
      { name: 'Fresh parsley, chopped', quantity: '1/4 cup' },
      { name: 'Fresh mint, chopped', quantity: '2 tbsp' },
      { name: 'Extra virgin olive oil', quantity: '1/4 cup' },
      { name: 'Lemon juice', quantity: '3 tbsp' },
      { name: 'Garlic clove, minced', quantity: '1' },
      { name: 'Dried oregano', quantity: '1 tsp' },
      { name: 'Salt', quantity: '1/2 tsp' },
      { name: 'Black pepper', quantity: '1/4 tsp' }
    ],
    instructions: [
      'In a medium saucepan, combine quinoa and water or broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until water is absorbed.',
      'Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and transfer to a large bowl to cool.',
      'In a small bowl, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper to make the dressing.',
      'Once quinoa has cooled to room temperature, add tomatoes, cucumber, bell pepper, red onion, olives, and herbs.',
      'Pour the dressing over the salad and toss gently to combine.',
      'Fold in the crumbled feta cheese.',
      'Chill for at least 30 minutes before serving to allow flavors to meld together.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 32,
      fat: 14
    },
    author: 'Chef Sophia',
    isFavorite: false
  },
  {
    id: '5',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish cooked with mushrooms, white wine, and Parmesan cheese.',
    image: '/images/placeholders/food5.jpg',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Expert',
    cuisine: 'Italian',
    dietary: ['Vegetarian'],
    ingredients: [
      { name: 'Arborio rice', quantity: '1 1/2 cups' },
      { name: 'Mixed mushrooms (cremini, shiitake, oyster), sliced', quantity: '1 lb' },
      { name: 'Shallots, finely diced', quantity: '2' },
      { name: 'Garlic cloves, minced', quantity: '2' },
      { name: 'Dry white wine', quantity: '1/2 cup' },
      { name: 'Vegetable or chicken broth, warmed', quantity: '4-5 cups' },
      { name: 'Unsalted butter, divided', quantity: '4 tbsp' },
      { name: 'Olive oil', quantity: '2 tbsp' },
      { name: 'Parmesan cheese, grated', quantity: '1/2 cup' },
      { name: 'Fresh thyme leaves', quantity: '1 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Black pepper', quantity: 'to taste' },
      { name: 'Fresh parsley, chopped', quantity: '2 tbsp' }
    ],
    instructions: [
      'In a large saucepan, heat broth and keep warm over low heat.',
      'In a large, wide pan, heat 1 tbsp butter and olive oil over medium-high heat. Add mushrooms and cook until they release their moisture and brown, about 5-7 minutes. Remove and set aside.',
      'In the same pan, add another 1 tbsp butter. Add shallots and cook until translucent, about 2-3 minutes. Add garlic and cook for 30 seconds more.',
      'Add the rice and stir for 1-2 minutes until translucent around the edges.',
      'Pour in the white wine and stir until absorbed.',
      'Add warm broth, one ladle at a time, stirring frequently. Wait until each addition is almost fully absorbed before adding more.',
      'Continue this process for about 18-20 minutes, until rice is creamy but still has a slight bite (al dente).',
      'Stir in the cooked mushrooms, remaining butter, Parmesan cheese, and thyme. Remove from heat.',
      'Season with salt and pepper to taste.',
      'Let stand for 2 minutes, then serve garnished with parsley and additional Parmesan if desired.'
    ],
    nutrition: {
      calories: 480,
      protein: 12,
      carbs: 58,
      fat: 22
    },
    author: 'Chef Antonio',
    isFavorite: false
  }
];

export const cuisines = [
  'Italian',
  'Thai',
  'French',
  'Mediterranean',
  'Indian',
  'Mexican',
  'Japanese',
  'American',
  'Chinese',
  'Greek',
  'Spanish',
  'Lebanese',
  'Korean',
  'Vietnamese',
  'Moroccan'
];

export const dietaryOptions = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Dairy-Free',
  'Keto',
  'Paleo',
  'Low-Carb',
  'Low-Fat',
  'Nut-Free',
  'Pescatarian'
];

export const difficultyLevels = ['Easy', 'Intermediate', 'Expert']; 