import Cappuchino from '../img/hot/Capuchino.png';
import mochiato from '../img/hot/Machiato.png';
import americano from '../img/hot/Americano.png';
import espresso from '../img/hot/espresso.png';
import choko from '../img/cold/Choko.jpg';
import caramMok from '../img/cold/caramMok.jpg';
import frap from '../img/cold/Frap.jpg';
import mocco from '../img/cold/mocco.jpg';
import strawberry from '../img/cold/strawbery.jpg';
import avocado from '../img/salads/avocado.jpg';
import summer from '../img/salads/summer.jpg';
import fried from '../img/salads/fried.jpg';
import mozarella from '../img/salads/mozarella.jpg';
import blueLagoon from '../img/coctails/blueLagoon.jpg';
import Mojito from '../img/coctails/Mojito.jpg';
import Rainbow from '../img/coctails/Rainbow.jpg';
import cheesburger from '../img/burgers/cheesburger.jpg';
import Chiken from '../img/burgers/Chiken.jpg';
import BigBurger from '../img/burgers/BigBurger.jpg';
import Giant from '../img/burgers/Giant.jpg';

export const recomended = [
  {
    id: 'hot-01',
    img: Cappuchino,
    text: 'Cappuchino Short',
    price: '1.20',
    url_name: 'cappuchino',
    parentId: '01',
    dop: 'Sugar Level',
    dopPlus: '0.00',
  },
  {
    id: 'hot-02',
    img: mochiato,
    text: 'Caramel Machiato',
    price: '1.10',
    shop: 'Starbucks',
    url_name: 'machiato',
    parentId: '01',
    dop: 'Sugar Level',
    dopPlus: '0.00',
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
        price: '1.20',
        parentId: '01',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'hot-02',
        img: mochiato,
        text: 'Caramel Machiato',
        url_name: 'machiato',
        price: '1.10',
        parentId: '01',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'hot-03',
        img: espresso,
        text: 'Espresso',
        url_name: 'espresso',
        price: '0.50',
        parentId: '01',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'hot-04',
        img: americano,
        text: 'Americano',
        url_name: 'americano',
        price: '0.80',
        parentId: '01',
        dop: 'Sugar Level',
        dopPlus: '0.00',
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
        price: '1.00',
        parentId: '02',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'cold-02',
        img: strawberry,
        text: 'StrawBerry Coffee',
        url_name: 'strawberry',
        price: '2.00',
        parentId: '02',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'cold-03',
        img: caramMok,
        text: 'Caramel Coffee',
        url_name: 'caramel',
        price: '2.00',
        parentId: '02',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'cold-04',
        img: frap,
        text: 'Frapuchino Coffee',
        url_name: 'frapuchino',
        price: '1.20',
        parentId: '02',
        dop: 'Sugar Level',
        dopPlus: '0.00',
      },
      {
        id: 'cold-05',
        img: mocco,
        text: 'Moccochino Coffee',
        url_name: 'moccochino',
        price: '1.20',
        parentId: '02',
        dop: 'Sugar Level',
        dopPlus: '0.00',
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
        price: '2.50',
        parentId: '03',
        dop: 'Salad sauce',
        dopPlus: '0.40',
      },
      {
        id: 'salad-02',
        img: summer,
        text: 'Summer Salad',
        url_name: 'summer-sald',
        price: '2.00',
        parentId: '03',
        dop: 'Salad sauce',
        dopPlus: '0.40',
      },
      {
        id: 'salad-03',
        img: fried,
        text: 'Fried Potato Salad',
        url_name: 'fried-sald',
        price: '3.00',
        parentId: '03',
        dop: 'Salad sauce',
        dopPlus: '0.40',
      },
      {
        id: 'salad-04',
        img: mozarella,
        text: 'Christmas Salad',
        url_name: 'mozarella-sald',
        price: '3.20',
        parentId: '03',
        dop: 'Salad sauce',
        dopPlus: '0.40',
      },
    ],
  },
  {
    id: '04',
    prods: [
      {
        id: 'coctail-01',
        img: blueLagoon,
        text: 'Blue Lagoon',
        url_name: 'blue_lagoon',
        price: '2.50',
        parentId: '04',
        dop: 'More Alcohol',
        dopPlus: '0.70',
      },
      {
        id: 'coctail-02',
        img: Mojito,
        text: 'Mojito classic',
        url_name: 'mojito',
        price: '3.00',
        parentId: '04',
        dop: 'More Alcohol',
        dopPlus: '0.70',
      },
      {
        id: 'coctail-03',
        img: Rainbow,
        text: 'Rainbow Coctail',
        url_name: 'rainbow',
        price: '3.5',
        parentId: '04',
        dop: 'More Alcohol',
        dopPlus: '0.70',
      },
    ],
  },
  {
    id: '05',
    prods: [
      {
        id: 'burger-01',
        img: cheesburger,
        text: 'Cheese Burger',
        url_name: 'cheese',
        price: '1.20',
        parentId: '05',
        dop: 'Sous',
        dopPlus: '0.35',
      },
      {
        id: 'burger-02',
        img: Chiken,
        text: 'Chicken Burger',
        url_name: 'chicken',
        price: '1.30',
        parentId: '05',
        dop: 'Sous',
        dopPlus: '0.35',
      },
      {
        id: 'burger-03',
        img: BigBurger,
        text: 'Big Burger',
        url_name: 'big',
        price: '1.50',
        parentId: '05',
        dop: 'Sous',
        dopPlus: '0.35',
      },
      {
        id: 'burger-04',
        img: Giant,
        text: 'Giant Piramid',
        url_name: 'giant',
        price: '3.50',
        parentId: '05',
        dop: 'Sous',
        dopPlus: '0.35',
      },
    ],
  },
];
