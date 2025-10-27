import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home component', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home/i); // Adjust the text based on what Home component renders
  expect(homeElement).toBeInTheDocument();
});