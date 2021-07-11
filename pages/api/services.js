export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      img: '/images/dish.svg',
      title: 'Excellent food',
      description:
        'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
    {
      id: 2,
      img: '/images/pizza.svg',
      title: 'Fast food',
      description:
        'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
    {
      id: 3,
      img: '/images/truck.svg',
      title: 'Delivery',
      description:
        'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
  ])
}
