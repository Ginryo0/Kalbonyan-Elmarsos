import { render, screen } from '@testing-library/react';
import App from './App';

// description, function that has testing code
test('renders learn react link', () => {
  render(<App />);
  // screen is simulated browser -> identify an element by text inside it ->
  // /learn react/i -> regex -> case non sensitive
  const linkElement = screen.getByText(/learn react/i);
  // expect element to be found
  expect(linkElement).toBeInTheDocument();
});

// npm test
