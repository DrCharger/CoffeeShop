import Cappuchino from '../img/Capuchino.png';
import mochiato from '../img/Machiato.png';
import americano from '../img/Americano.png';
import espresso from '../img/espresso.png';

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
    ],
  },
  {
    id: '02',
    prods: [
      {
        id: 'cold-01',
        img: espresso,
        text: 'Espresso',
        price: '$ 2.00',
      },
      {
        id: 'cold-02',
        img: americano,
        text: 'Americano',
        price: '$ 4.00',
      },
      {
        id: 'cold-03',
        img: Cappuchino,
        text: 'Cappuchino Short',
        price: '$ 5.00',
      },
      {
        id: 'cold-04',
        img: mochiato,
        text: 'Caramel Machiato',
        price: '$ 3.00',
      },
    ],
  },
];
