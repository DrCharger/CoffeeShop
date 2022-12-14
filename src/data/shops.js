import star from '../img/shops/star.png';
import bigstar from '../img/shops/BigStar.png';
import bigkfc from '../img/shops/Bigkfc.jpg';
import bigmoonsoon from '../img/shops/Bigmoonsoon.jpg';
import bigsemasa from '../img/shops/Bigsemasa.jpg';
import KFC from '../img/shops/KFC.png';
import moonsoon from '../img/shops/moonsoon.png';
import semasa from '../img/shops/semasa.png';
import jiva from '../img/logo/jiva.png';
import hati from '../img/logo/hati.png';
import bigJiva from '../img/shops/jiva.jpg';
import bigHati from '../img/shops/hati.jpg';

export const shops = [
  {
    id: '01',
    img: star,
    bigImg: bigstar,
    name: 'Starbucks',
    loc: 'CSB Mail',
    rait: 4.5,
    likes: 342,
    way: 1.2,
    deliv: 1.9,
    delStart: '10',
    delFinish: '22',
    url: 'starbucks',
  },
  {
    id: '02',
    img: KFC,
    bigImg: bigkfc,
    name: 'KFC Coffee',
    loc: 'Kartini Street',
    rait: 4.3,
    likes: 154,
    way: 2.4,
    deliv: 1,
    delStart: '10',
    delFinish: '24',
    url: 'kfc',
  },
  {
    id: '03',
    img: moonsoon,
    bigImg: bigmoonsoon,
    name: 'MoonSoon Coffee',
    loc: '',
    rait: 4.0,
    likes: 234,
    way: 1,
    deliv: 1.5,
    delStart: '12',
    delFinish: '20',
    url: 'moonsoon',
  },
  {
    id: '04',
    img: jiva,
    bigImg: bigJiva,
    name: 'Jiva Coffee',
    loc: 'Kyiv Ukraine',
    rait: 3.5,
    likes: 408,
    way: 0.1,
    deliv: 1.9,
    delStart: '12',
    delFinish: '20',
    url: 'jiva',
  },
  {
    id: '05',
    img: hati,
    bigImg: bigHati,
    name: 'Hati Coffee',
    loc: '',
    rait: 4.9,
    likes: 134,
    way: 3.2,
    deliv: 1.4,
    delStart: '12',
    delFinish: '20',
    url: 'hati',
  },
  {
    id: '06',
    img: semasa,
    bigImg: bigsemasa,
    name: 'Semasa Coffee',
    loc: '',
    rait: 4.7,
    likes: 456,
    way: 3.5,
    deliv: 1.8,
    delStart: '09',
    delFinish: '23',
    url: 'semasa',
  },
];
