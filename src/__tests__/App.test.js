import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Restoran Con Fusion/i);
  expect(linkElement).toBeInTheDocument();
  jest.useFakeTimers();
});
