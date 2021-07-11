export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      img: 'https://imgur.com/ja4rE38.png',
      plate: 'Barbecue salad',
      description: 'Delicious dish',
      price: '22.00',
    },
    {
      id: 2,
      img: 'https://imgur.com/2Ixif8K.png',
      plate: 'Salad with fish',
      description: 'Delicious dish',
      price: '12.00',
    },
    {
      id: 3,
      img: 'https://imgur.com/DW8csWi.png',
      plate: 'Spinach salad',
      description: 'Delicious dish',
      price: '9.50',
    },
  ])
}
