import { useMemo, useState } from 'react';

import { getConfig } from './utils/configs';
import ResultList from './ResultList';

function App() {
  const key = getConfig('apiKey');

  const [value, setValue] = useState('');
  const [autoCompleteList, setAutoCompleteList] = useState({});

  const fetchResults = async (value) => {
    const result = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`,
    );
    const data = await result.json();
    console.log('Data fetched is ', data);
    return data;
  };

  const handleSubmit = useMemo(() => {
    return async (e) => {
      e.preventDefault();
      const { pageInfo, items } = await fetchResults(value);
      setAutoCompleteList({ pageInfo, items });
    };
  }, [value]);

  return (
    <>
      <form method="get" onSubmit={handleSubmit}>
        <input
          name="search_query"
          type="text"
          placeholder="Search YouTube"
          maxLength="128"
          required
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <input type="submit" value="Search" />
      </form>

      {autoCompleteList.items && value.length > 0 && (
        <ResultList listData={autoCompleteList} searchedFor={value} />
      )}
    </>
  );
}

export default App;
