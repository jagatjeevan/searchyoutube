import { getConfig } from '../utils/configs';

export async function fetchRecords(value) {
  const key = getConfig('apiKey');

  const result = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`,
  );
  const data = await result.json();
  console.log('Data fetched is ', data);
  return data;
}
