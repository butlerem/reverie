import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'Australia | Bottle | Red Wine',
  },
  {
    title: 'Catena Malbec',
    price: '$59',
    tags: 'Argentina | Bottle | Red Wine',
  },
  {
    title: 'La Vieille Rose',
    price: '$44',
    tags: 'France | 750 ml | Rosé Wine',
  },
  {
    title: 'Château Margaux',
    price: '$240',
    tags: 'France | Bottle | Bordeaux Wine',
  },
  {
    title: 'Sancerre Blanc',
    price: '$48',
    tags: 'France | Bottle | White Wine',
  },
  {
    title: 'Napa Valley Cabernet Sauvignon',
    price: '$65',
    tags: 'USA | Bottle | Red Wine',
  },
  {
    title: 'Champagne Brut',
    price: '$75',
    tags: 'France | Bottle | Sparkling Wine',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
  },
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
    title: 'Lavender Lemonade',
    price: '$14',
    tags: 'Vodka | Lavender Syrup | Lemon Juice | Fresh Lavender',
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
