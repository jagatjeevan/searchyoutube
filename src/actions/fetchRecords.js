import axios from 'axios';

import { getConfig } from '../utils/configs';

export async function fetchRecords(value, nextPageToken = null) {
  const key = getConfig('apiKey');
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const response = await axios.get(url, {
    params: {
      part: 'snippet',
      q: value,
      maxResults: 5,
      type: 'video',
      key: key,
      pageToken: nextPageToken,
    },
  });

  console.log(response.data);

  return response.data;
}
