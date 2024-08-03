import { render, screen } from '@testing-library/react';

import App from '../../components/App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Search YouTube')).toBeInTheDocument();
  expect(screen.getByTestId('resultList')).toBeInTheDocument();
});
