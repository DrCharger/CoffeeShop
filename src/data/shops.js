import star from '../img/shops/star.png';
import bigstar from '../img/shops/BigStar.png';
import bigkfc from '../img/shops/Bigkfc.jpg';
import bigmoonsoon from '../img/shops/Bigmoonsoon.jpg';
import bigsemasa from '../img/shops/BigSemasa.jpg';
import KFC from '../img/shops/KFC.png';
import moonsoon from '../img/shops/moonsoon.png';
import semasa from '../img/shops/semasa.png';

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
    deliv: 5,
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
    deliv: 6,
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
    deliv: 3,
    delStart: '12',
    delFinish: '20',
    url: 'moonsoon',
  },
  {
    id: '04',
    img: semasa,
    bigImg: bigsemasa,
    name: 'Semasa Coffee',
    loc: '',
    rait: 4.7,
    likes: 456,
    way: 3.5,
    deliv: 7,
    delStart: '09',
    delFinish: '23',
    url: 'semasa',
  },
];
