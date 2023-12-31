import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import './SearchBar.css';

function SearchBar() {

  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };


  return(
    <><div className="menu">
      <nav className="menu">
        <a href="/" className="menu">Home</a>
      </nav>
      <nav className="menu">
        <a href="/" className="menu">Contact Us</a>
      </nav>
    </div><form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required />
      {searchValue}
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form></>
  );
}

export default SearchBar;
