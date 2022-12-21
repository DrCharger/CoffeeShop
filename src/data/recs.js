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
    id: 'hot-01',
    img: Cappuchino,
    text: 'Cappuchino Short',
    price: '5.00',
    url_name: 'cappuchino',
    parentId: '01',
  },
  {
    id: 'hot-02',
    img: mochiato,
    text: 'Caramel Machiato',
    price: '3.00',
    shop: 'Starbucks',
    url_name: 'machiato',
    parentId: '01',
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
        url_name: 'cappuchino',
        price: '5.00',
        parentId: '01',
      },
      {
        id: 'hot-02',
        img: mochiato,
        text: 'Caramel Machiato',
        url_name: 'machiato',
        price: '3.00',
        parentId: '01',
      },
      {
        id: 'hot-03',
        img: espresso,
        text: 'Espresso',
        url_name: 'espresso',
        price: '2.00',
        parentId: '01',
      },
      {
        id: 'hot-04',
        img: americano,
        text: 'Americano',
        url_name: 'americano',
        price: '4.00',
        parentId: '01',
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
        url_name: 'choko',
        price: '5.00',
        parentId: '02',
      },
      {
        id: 'cold-02',
        img: strawberry,
        text: 'StrawBerry Coffee',
        url_name: 'strawberry',
        price: '3.00',
        parentId: '02',
      },
      {
        id: 'cold-03',
        img: caramMok,
        text: 'Caramel Coffee',
        url_name: 'caramel',
        price: '3.00',
        parentId: '02',
      },
      {
        id: 'cold-04',
        img: frap,
        text: 'Frapuchino Coffee',
        url_name: 'frapuchino',
        price: '3.00',
        parentId: '02',
      },
      {
        id: 'cold-05',
        img: mocco,
        text: 'Moccochino Coffee',
        url_name: 'moccochino',
        price: '3.00',
        parentId: '02',
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
        url_name: 'avocado-salad',
        price: '10.00',
        parentId: '03',
      },
      {
        id: 'salad-02',
        img: salad,
        text: 'Summer Salad',
        url_name: 'summer-sald',
        price: '6.00',
        parentId: '03',
      },
    ],
  },
  {
    id: '04',
    prods: [],
  },
  {
    id: '05',
    prods: [],
  },
];
