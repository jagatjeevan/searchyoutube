import { useEffect, useRef, useState } from 'react';

import { fetchRecords } from '../actions/fetchRecords';
import logo from '../assets/logo.png';
import useScrollToBottom from '../hooks/useScrollToBottom';
import ResultList from './ResultList';
import SearchForm from './SearchForm';

import '../styles/app.scss';

function App() {
  const [autoCompleteList, setAutoCompleteList] = useState({});
  const [value, setValue] = useState('');
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const containerRef = useRef(null);
  const isAtBottom = useScrollToBottom(containerRef);

  useEffect(() => {
    const fetchMoreRecords = async () => {
      if (autoCompleteList.items?.length && isAtBottom && shouldFetchData) {
        setShouldFetchData(false);
        const { pageInfo, items, nextPageToken, prevPageToken } = await fetchRecords(
          value,
          autoCompleteList.nextPageToken,
        );
        setAutoCompleteList({
          ...autoCompleteList,
          pageInfo,
          items: [...autoCompleteList.items, ...items],
          nextPageToken,
          prevPageToken,
        });
        setTimeout(() => {
          setShouldFetchData(true);
        }, 10);
      }
    };

    fetchMoreRecords();
  }, [autoCompleteList, isAtBottom, shouldFetchData, value]);

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
