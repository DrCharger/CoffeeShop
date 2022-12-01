import Cappuchino from '../img/Capuchino.png';
import mochiato from '../img/Machiato.png';
import americano from '../img/Americano.png';
import espresso from '../img/espresso.png';
import avocado from '../img/avocado.jpg';
import salad from '../img/summer.jpg';
import choko from '../img/Choko.jpg';
import caramMok from '../img/caramMok.jpg';
import frap from '../img/Frap.jpg';
import mocco from '../img/mocco.jpg';
import strawberry from '../img/strawbery.jpg';

export const recomended = [
  {
    id: '01',
    img: Cappuchino,
    text: 'Cappuchino Short',
    price: '$ 5.00',
  },
  {
    id: '02',
    img: mochiato,
    text: 'Caramel Machiato',
    price: '$ 3.00',
  },
];

export const allList = [
  {
    id: '01',
    prods: [
      {
        id: 'hot-01',
        img: Cappuchino,
        text: 'Cappuchino Short',
        price: '$ 5.00',
      },
      {
        id: 'hot-02',
        img: mochiato,
        text: 'Caramel Machiato',
        price: '$ 3.00',
      },
      {
        id: 'hot-03',
        img: espresso,
        text: 'Espresso',
        price: '$ 2.00',
      },
      {
        id: 'hot-04',
        img: americano,
        text: 'Americano',
        price: '$ 4.00',
      },
    ],
  },
  {
    id: '02',
    prods: [
      {
        id: 'cold-01',
        img: choko,
        text: 'Choko Coffe',
        price: '$ 5.00',
      },
      {
        id: 'cold-02',
        img: strawberry,
        text: 'StrawBerry Coffee',
        price: '$ 3.00',
      },
      {
        id: 'cold-03',
        img: caramMok,
        text: 'Caramel Coffee',
        price: '$ 3.00',
      },
      {
        id: 'cold-04',
        img: frap,
        text: 'Frapuchino Coffee',
        price: '$ 3.00',
      },
      {
        id: 'cold-05',
        img: mocco,
        text: 'Moccochino Coffee',
        price: '$ 3.00',
      },
    ],
  },
  {
    id: '03',
    prods: [
      {
        id: 'salad-01',
        img: avocado,
        text: 'Avocado Salad',
        price: '$ 10.00',
      },
      {
        id: 'salad-02',
        img: salad,
        text: 'Summer Salad',
        price: '$ 6.00',
      },
    ],
  },
];
