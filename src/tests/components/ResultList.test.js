import { render, screen } from '@testing-library/react';

import ResultList from '../../components/ResultList';

test('shows the list of records', () => {
  const props = {
    listData: {
      pageInfo: { totalResults: 10 },
      items: [
        {
          snippet: {
            channelTitle: 'test channel',
            publishTime: '12th May 2024',
            title: 'some title are short',
            thumbnails: {
              default: { url: '' },
              width: 120,
              height: 120,
            },
          },
          id: {
            videoId: 123,
          },
        },
      ],
    },
    searchedFor: 'some value',
  };
  render(<ResultList {...props} />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Result List for : some value/)).toBeInTheDocument();
  expect(screen.getByText(/Showing/)).toBeInTheDocument();

  const currentRecordList = screen.getByTestId('showing-records-length');
  const totalRecordList = screen.getByTestId('total-records-length');
  expect(currentRecordList.textContent).toBe('1');
  expect(totalRecordList.textContent).toBe('10');
  expect(screen.getByAltText('some title are short')).toBeInTheDocument();
  expect(screen.getByText('some title are short')).toBeInTheDocument();
  expect(screen.getByText(/Channel : test channel/i)).toBeInTheDocument();
  expect(screen.getByText(/Published on : 12th May 2024/i)).toBeInTheDocument();
});
