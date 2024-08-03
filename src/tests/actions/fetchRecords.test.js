import axios from 'axios';

import { fetchRecords } from '../../actions/fetchRecords';

jest.mock('axios');
const MockAxios = axios;

test('fetch records from youtube api', async () => {
  const mockedResponse = {
    data: {
      pageInfo: 'Some random value',
      items: [1, 2, 3],
      nextPageToken: 'hello token',
      prevPageToken: 'i do exist',
    },
  };
  MockAxios.get.mockResolvedValueOnce(mockedResponse);

  const response = await fetchRecords('some value');
  expect(axios.get).toHaveBeenCalledWith('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: 'some value',
      maxResults: 5,
      type: 'video',
      key: null,
      pageToken: null,
    },
  });

  expect(response).toBe(mockedResponse.data);
});
