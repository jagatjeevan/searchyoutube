import { useState } from 'react';

import { getConfig } from '../utils/configs';

export default function SearchForm(props) {
  const key = getConfig('apiKey');

  const [value, setValue] = useState('');

  const fetchResults = async (value) => {
    const result = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`,
    );
    const data = await result.json();
    console.log('Data fetched is ', data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { pageInfo, items } = await fetchResults(value);
    props.setAutoCompleteList({ pageInfo, items });
    props.setValue(value);
  };

  return (
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
      <input type="submit" value="Search" className="primary" />
      <input
        type="reset"
        value="Clear"
        onClick={() => {
          setValue('');
          props.setAutoCompleteList([]);
        }}
      />
    </form>
  );
}
