import axios from 'axios';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SearchForm from '../../components/SearchForm';

jest.mock('axios');
const MockAxios = axios;

const mockSetValue = jest.fn();
const mockAutoCompleteListUpdate = jest.fn();
const props = {
  setAutoCompleteList: mockAutoCompleteListUpdate,
  setValue: mockSetValue,
};

test('renders the form', () => {
  render(<SearchForm {...props} />);
  expect(screen.getByRole('form', { name: 'search-youtube' })).toBeInTheDocument();

  const searchField = screen.getByPlaceholderText(/Search Youtube/i);
  expect(searchField).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: 'Search' });
  expect(submitButton).toBeInTheDocument();

  const resetButton = screen.getByRole('button', { name: 'Clear' });
  expect(resetButton).toBeInTheDocument();
});

test('reset the form on click of reset', () => {
  render(<SearchForm {...props} />);

  const searchField = screen.getByPlaceholderText(/Search Youtube/i);
  expect(searchField).toBeInTheDocument();
  expect(searchField.value).toBe('');

  const resetButton = screen.getByRole('button', { name: 'Clear' });
  expect(resetButton).toBeInTheDocument();

  fireEvent.change(searchField, { target: { value: 'chuck' } });
  expect(searchField.value).toBe('chuck');
  fireEvent.click(resetButton);
  expect(searchField.value).toBe('');
  expect(mockAutoCompleteListUpdate).toHaveBeenCalledWith({});
});

test('submits the form', async () => {
  render(<SearchForm {...props} />);
  const mockedResponse = {
    data: {
      pageInfo: 'Some random value',
      items: [1, 2, 3],
      nextPageToken: 'hello token',
      prevPageToken: 'i do exist',
    },
  };

  MockAxios.get.mockResolvedValueOnce(mockedResponse);

  const searchField = screen.getByPlaceholderText(/Search Youtube/i);
  expect(searchField).toBeInTheDocument();
  expect(searchField.value).toBe('');

  const submitButton = screen.getByRole('button', { name: 'Search' });
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(searchField, { target: { value: 'react tutorials' } });
  expect(searchField.value).toBe('react tutorials');
  fireEvent.click(submitButton);

  expect(axios.get).toHaveBeenCalled();
  await waitFor(async () => {
    expect(mockAutoCompleteListUpdate).toHaveBeenCalledWith(mockedResponse.data);
    expect(mockSetValue).toHaveBeenCalledWith('react tutorials');
  });
});
