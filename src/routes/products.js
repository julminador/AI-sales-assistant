const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [
    {
      id: 1,
      category: 'Smartwatches',
      product: 'Smartwatch 2.0 LTE Wifi',
      price: 459,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/watch-2.png',
      details: [
        'Accept SIM card and call',
        'Make calling instead of mobile phone',
        'Sync music play and sync control music',
        'Sync Facebook,Twiter,emailand calendar'
      ],
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 2,
      category: 'Headphone',
      product: 'Purple Solo 2 Wireless',
      price: 249,
      availability: false,
      score: 4.2,
      img: '/materialize/images/cards/headphone.png',
      details: [
        'Fine-tuned acoustics for clarity',
        'Streamlined design for a custom-fit',
        'Durable and foldable so you can take them on-the-go',
        'Take calls and control music with RemoteTalk cable'
      ],
    },
    {
      id: 3,
      category: 'Smartphone',
      product: 'iPhone x',
      price: 899,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/iphone-x.png',
      details: [
        'Accept SIM card and call',
        'Take photos',
        'Make calling instead of mobile phon',
        'Sync music play and sync control music',
      ],
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
    {
      id: 1,
      category: 'Headphone',
      product: 'Powerbank',
      price: 1300,
      availability: true,
      score: 4.2,
      img: '/materialize/images/cards/powerbank.png',
      detail: 'Dual',
      detail2: 'Compatible',
      detail3: 'Portable',
      detail4: 'Battery',
      onOffer: true,
      priceOnOffer: 399
    },
  ];

  // Renderizar la vista de products y pasar los objetos de venta como parámetros
  res.render('products/list', { products });
});

module.exports = router;