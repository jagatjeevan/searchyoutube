import { useState } from 'react';

import logo from '../assets/logo.png';
import ResultList from './ResultList';
import SearchForm from './SearchForm';

import '../styles/app.scss';

function App() {
  const [autoCompleteList, setAutoCompleteList] = useState({});
  const [value, setValue] = useState('');

  return (
    <article className="container">
      <section className="form-container">
        <img src={logo} />
        <SearchForm setAutoCompleteList={setAutoCompleteList} setValue={setValue} />
      </section>
      <section className="list-container">
        {autoCompleteList.items && <ResultList listData={autoCompleteList} searchedFor={value} />}
      </section>
    </article>
  );
}

export default App;
