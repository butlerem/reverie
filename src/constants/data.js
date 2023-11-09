import images from './images';

const wines = [
  {
    title: 'French Toast Soufflé',
    price: '$24',
    tags: 'A delightful soufflé-style French toast with whipped cream, fresh berries, and a dusting of powdered sugar. Served with Vermont maple syrup.',
  },
  {
    title: 'Avocado Toast Breakfast Board',
    price: '$26',
    tags: '6 Miniature brioche avocado toasts topped with cilantro, chipotle aioli, and seasonal toppings.',
  },
  {
    title: 'Sunrise Citrus Bowl',
    price: '$21',
    tags: 'Clementine and berry puree blended with banana and topped with granola, coconut flakes, fresh berries, and a drizzle of honey.',
  },
];

const cocktails = [
  {
    title: 'Hibiscus Mimosa',
    price: '$13',
    tags: 'A classic mimosa made with Champagne, freshly squeezed orange juice, and fresh hibiscus syrup.',
  },
  {
    title: 'French Martini',
    price: '$19',
    tags: 'Vodka infused with Chambord liqueur, pineapple juice, and a raspberry garnish for a touch of French elegance.',
  },
  {
    title: 'Elderflower Martini',
    price: '$17',
    tags: 'Vodka combined with elderflower liqueur and lychee juice, garnished with a luscious lychee.',
  },
  {
    title: 'Sparkling Strawberry Fizz',
    price: '$14',
    tags: 'A refreshing concoction of gin, fresh strawberries, elderflower liqueur, and soda, creating a sparkling strawberry sensation.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Culinary Distinction Award',
    subtitle: 'Recognized for our dedication to culinary excellence and outstanding value.',
  },
  {
    imgUrl: images.award01,
    title: 'Emerging Talent Accolade',
    subtitle: 'Acknowledged for our innovative approach to dining and the promise of a bright culinary future.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitality Excellence Trophy',
    subtitle: 'Honored for our commitment to exceptional service and guest satisfaction.',
  },
  {
    imgUrl: images.award03,
    title: 'Master Chef Accolade',
    subtitle: 'Celebrated for our culinary expertise and the artistry of our head chef.',
  },
];

export default { wines, cocktails, awards };
