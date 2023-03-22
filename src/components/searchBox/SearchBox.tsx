import { useState, useEffect } from 'react';
import { useDebounce } from 'usehooks-ts';
import { AddIcon } from '../addIcon/AddIcon';
import './searchBox.scss';

const FILTER_DEBOUNCE = 500;

export const SearchBox = () => {
  const [value, setValue] = useState('');

  const valueDebounced = useDebounce<string>(value, FILTER_DEBOUNCE);

  useEffect(() => {
    console.log('valueDebounced', valueDebounced);
  }, [valueDebounced]);

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  return (
    <div className="search-box">
      <div className="search-box__icon">
        <AddIcon onClick={() => {}} />
      </div>
      <input
        className="search-box__input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
