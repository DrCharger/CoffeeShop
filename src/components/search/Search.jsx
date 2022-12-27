import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SearchedItem from './SearchedItem';
import { setItem, getItem } from '../../data/local';
import { menu } from '../../data/menu';
import './search.scss';

const Search = ({ discount }) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let list = getItem('searched') || [];
  let newList = list;
  const handleClick = () => {
    if (value === '') {
      return null;
    }
    const params = {};
    !list.includes(value) ? setItem('searched', list.concat(value)) : null;
    setValue('');
    params.search = value;
    setSearchParams(params);
    setOpen(true);
  };
  if (list.length > 5) {
    newList = list.slice(list.length - 5);
    newList = newList.splice(length - 5);
  }

  const handleDelete = elem => {
    setItem(
      'searched',
      list.filter(item => item !== elem),
    );
    setToggle(!toggle);
  };
  const handleDeleteAll = () => {
    setItem('searched', []);
    setToggle(!toggle);
  };

  return (
    <div className="search">
      <label htmlFor="search" className="search-label">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={'Search'}
        />
        <input type="button" value="Find" onClick={handleClick} />
        <SearchOutlinedIcon
          sx={{ position: 'absolute', left: '5px', top: '2px', color: '#321d0b' }}
        />
      </label>
      <div className="search-hotbar">
        {menu.map(el => (
          <button
            key={el.id}
            className="search-hotbar__btn"
            onClick={() => {
              setSearchParams({ search: el.text });
              setOpen(true);
            }}
          >
            {el.text}
          </button>
        ))}
      </div>
      <div className="search-container">
        <span>Recents</span>
        <button onClick={handleDeleteAll}>Clear All</button>
      </div>
      {newList.reverse().map(el => (
        <div className="search-history" key={el}>
          <div
            className="search-history-container"
            onClick={() => {
              setSearchParams({ search: el });
              setOpen(true);
            }}
          >
            <HistoryIcon sx={{ color: '#848484' }} />
            <span>{el}</span>
          </div>
          <button onClick={() => handleDelete(el)}>X</button>
        </div>
      ))}
      {open && <SearchedItem param={searchParams.get('search')} discount={discount} />}
    </div>
  );
};

export default Search;
