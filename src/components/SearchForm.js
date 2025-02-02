import { useState } from 'react';

import { fetchRecords } from '../actions/fetchRecords';

export default function SearchForm(props) {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { pageInfo, items, nextPageToken, prevPageToken } = await fetchRecords(value);
    props.setAutoCompleteList({ pageInfo, items, nextPageToken, prevPageToken });
    props.setValue(value);
  };

  return (
    <form method="get" onSubmit={handleSubmit} aria-label="search-youtube">
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
          props.setAutoCompleteList({});
        }}
      />
    </form>
  );
}
