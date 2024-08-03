import { useEffect, useRef, useState } from 'react';

import logo from '../assets/logo.png';
import useScrollToBottom from '../hooks/useScrollToBottom';
import ResultList from './ResultList';
import SearchForm from './SearchForm';

import '../styles/app.scss';

function App() {
  const [autoCompleteList, setAutoCompleteList] = useState({});
  const [value, setValue] = useState('');
  const containerRef = useRef(null);
  const isAtBottom = useScrollToBottom(containerRef);

  useEffect(() => {
    if (autoCompleteList.items?.length && isAtBottom) {
      console.log('should trigger fetch');
    }
  }, [autoCompleteList, isAtBottom]);

  return (
    <article className="container">
      <section className="form-container">
        <img src={logo} alt="logo" />
        <SearchForm setAutoCompleteList={setAutoCompleteList} setValue={setValue} />
      </section>
      <section className="list-container" ref={containerRef}>
        {autoCompleteList.items && <ResultList listData={autoCompleteList} searchedFor={value} />}
      </section>
    </article>
  );
}

export default App;
