import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$55',
    tags: 'Australia | Bottle | Red Wine',
  },
  {
    title: 'Catena Malbec',
    price: '$60',
    tags: 'Argentina | Bottle | Red Wine',
  },
  {
    title: 'La Vieille Rose',
    price: '$70',
    tags: 'France | 750 ml | Rosé Wine',
  },
  {
    title: 'Sancerre Blanc',
    price: '$76',
    tags: 'France | Bottle | White Wine',
  },
  {
    title: 'Napa Valley Cabernet Sauvignon',
    price: '$85',
    tags: 'USA | Bottle | Red Wine',
  },
  {
    title: 'Champagne Brut',
    price: '$98',
    tags: 'France | Bottle | Sparkling Wine',
  },
  {
    title: 'Château Margaux',
    price: '$240',
    tags: 'France | Bottle | Bordeaux Wine',
  },
];

const cocktails = [
  {
    title: 'Mimosa Royale',
    price: '$18',
    tags: 'Champagne | Fresh Orange Juice | Orange Twist',
  },
  {
    title: 'Cosmopolitan',
    price: '$16',
    tags: 'Vodka | Triple Sec | Cranberry Juice | Lime Juice',
  },
  {
    title: 'French Martini',
    price: '$22',
    tags: 'Vodka | Chambord | Pineapple Juice | Raspberry Garnish',
  },
  {
    title: 'Lychee Martini',
    price: '$19',
    tags: 'Vodka | Lychee Liqueur | Lychee Juice | Lychee Garnish',
  },
  {
    title: 'Strawberry Fizz',
    price: '$17',
    tags: 'Gin | Fresh Strawberries | Elderflower Liqueur | Soda',
  },
  {
    title: 'Pink Lady',
    price: '$20',
    tags: 'Gin | Applejack | Grenadine | Egg White | Cherry Garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
